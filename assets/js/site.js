/* Small progressive enhancements. Every feature works without JavaScript. */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });

    window.matchMedia("(min-width: 56em)").addEventListener("change", function () {
      setOpen(false);
    });
  }

  /* YouTube: load the player only when the visitor chooses to play */
  document.querySelectorAll("[data-video-id]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(link.dataset.videoId) + "?autoplay=1&rel=0";
      iframe.title = link.dataset.videoTitle || "YouTube video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      var frame = document.createElement("div");
      frame.className = "video__frame";
      frame.appendChild(iframe);
      link.replaceWith(frame);
      iframe.focus();
    });
  });

  /* Contact form: send in the background and show the result in place.
     Without JavaScript the form posts to Formspree as normal. */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var status = form.querySelector(".form__status");
    var button = form.querySelector('button[type="submit"]');

    var show = function (type, title, detail) {
      status.className = "form__status form__status--" + type;
      status.innerHTML = "";
      [title, detail].forEach(function (text) {
        if (!text) return;
        var p = document.createElement("p");
        p.textContent = text;
        status.appendChild(p);
      });
      status.hidden = false;
      status.focus();
    };

    form.addEventListener("submit", function (event) {
      if (!window.fetch) return;
      event.preventDefault();

      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.textContent = "Sending…";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error(response.status);
          form.reset();
          show("success", "Thank you, your message has been sent.", "We'll reply by email as soon as we can.");
        })
        .catch(function () {
          show("error", "Sorry, your message couldn't be sent.", "Please check your connection and try again in a moment.");
        })
        .then(function () {
          button.disabled = false;
          button.removeAttribute("aria-busy");
          button.textContent = "Send message";
        });
    });
  });
})();
