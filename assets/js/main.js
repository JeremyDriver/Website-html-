// Energy Choice Program — site scripts
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Contact form: posts to the form service in the form's action attribute.
  // Until a real endpoint is configured, falls back to opening the visitor's email app.
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");

  function setStatus(msg, ok) {
    status.textContent = msg;
    status.className = "form-status " + (ok ? "ok" : "err");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.querySelector('[name="_gotcha"]').value) return; // spam bot

    var data = new FormData(form);
    var endpoint = form.getAttribute("action") || "";

    if (endpoint.indexOf("YOUR_FORM_ID") !== -1) {
      var body = [];
      data.forEach(function (v, k) { if (k !== "_gotcha" && v) body.push(k + ": " + v); });
      window.location.href = "mailto:" + form.dataset.fallbackEmail +
        "?subject=" + encodeURIComponent("Energy review request — " + (data.get("company") || data.get("name"))) +
        "&body=" + encodeURIComponent(body.join("\n"));
      setStatus("Opening your email app to send this request…", true);
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
      .then(function (r) {
        if (!r.ok) throw new Error();
        form.reset();
        setStatus("Thanks — your request was received. We'll be in touch within one business day.", true);
      })
      .catch(function () {
        setStatus("Something went wrong. Please email us directly at " + form.dataset.fallbackEmail + ".", false);
      })
      .then(function () { btn.disabled = false; });
  });
})();
