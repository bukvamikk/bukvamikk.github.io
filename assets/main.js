/* bukva.design — main.js (no dependencies, progressive enhancement) */
(function () {
  "use strict";
  var root = document.documentElement;
  var lang = (root.getAttribute("lang") || document.body.getAttribute("data-lang") || "hu").slice(0, 2);
  var T = {
    hu: {
      menuOpen: "Menü megnyitása", menuClose: "Menü bezárása",
      dark: "Sötét mód", light: "Világos mód",
      copied: "Másolva", copy: "Másolás",
      sending: "Küldés…",
      ok: "Köszönöm, megkaptam az üzeneted! 1 munkanapon belül válaszolok.",
      demo: "Köszönöm! Ez egy előnézet, az űrlap még nincs bekötve. Írj közvetlenül e-mailben.",
      fail: "Az üzenetet nem sikerült elküldeni. Próbáld újra, vagy írj közvetlenül e-mailben.",
      summary: "Az űrlapon {n} javítandó mező van:"
    },
    en: {
      menuOpen: "Open menu", menuClose: "Close menu",
      dark: "Dark mode", light: "Light mode",
      copied: "Copied", copy: "Copy",
      sending: "Sending…",
      ok: "Thank you, your message has arrived. I'll reply within one working day.",
      demo: "Thank you! This is a preview and the form isn't connected yet. Please write to me by email.",
      fail: "The message couldn't be sent. Please try again or write to me by email.",
      summary: "There {n} to fix in the form:"
    }
  }[lang === "en" ? "en" : "hu"];

  root.classList.add("js");

  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------- Theme toggle ---------- */
  var themeBtn = document.querySelector("[data-theme-toggle]");
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t === "dark"; // light is the default
  }
  function syncThemeBtn() {
    if (!themeBtn) return;
    var dark = isDark();
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
    // SVG elements have no .hidden property: toggle the attribute instead
    themeBtn.querySelector(".sun").toggleAttribute("hidden", !dark);
    themeBtn.querySelector(".moon").toggleAttribute("hidden", dark);
  }
  if (themeBtn) {
    themeBtn.setAttribute("aria-label", T.dark);
    themeBtn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store("bukva-theme", next);
      syncThemeBtn();
    });
    syncThemeBtn();
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open, returnFocus) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? T.menuClose : T.menuOpen);
      toggle.querySelector(".i-open").toggleAttribute("hidden", open);
      toggle.querySelector(".i-close").toggleAttribute("hidden", !open);
      if (open) { var first = nav.querySelector("a"); if (first) first.focus(); }
      else if (returnFocus) toggle.focus();
    };
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true", false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setOpen(false, true);
    });
    nav.addEventListener("focusout", function (e) {
      if (toggle.offsetParent === null) return; // desktop layout
      if (toggle.getAttribute("aria-expanded") === "true" && e.relatedTarget && !nav.contains(e.relatedTarget) && e.relatedTarget !== toggle) setOpen(false, false);
    });
    window.addEventListener("resize", function () { if (toggle.offsetParent === null) setOpen(false, false); });
  }

  /* ---------- Copy buttons ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var label = btn.querySelector(".label");
      var done = function () {
        if (label) label.textContent = T.copied;
        var live = document.getElementById("copy-live"); if (live) live.textContent = T.copied + ": " + text;
        setTimeout(function () { if (label) label.textContent = T.copy; }, 2500);
      };
      var fallback = function () {
        var el = document.querySelector(btn.getAttribute("data-copy-target"));
        if (el) { var r = document.createRange(); r.selectNodeContents(el); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else { fallback(); }
    });
  });

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var summary = document.getElementById("error-summary");
    var status = document.getElementById("form-status");
    var submitBtn = form.querySelector("[type=submit]");

    var fields = Array.prototype.slice.call(form.querySelectorAll("[data-validate]"));

    var check = function (el) {
      var msg = "";
      var v = el.type === "checkbox" ? el.checked : el.value.trim();
      if (el.hasAttribute("required") && !v) msg = el.getAttribute("data-msg-required");
      else if (el.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = el.getAttribute("data-msg-format");
      else if (el.getAttribute("minlength") && v && v.length < +el.getAttribute("minlength")) msg = el.getAttribute("data-msg-format");
      var err = document.getElementById(el.id + "-error");
      if (msg) {
        el.setAttribute("aria-invalid", "true");
        if (err) { err.hidden = false; err.querySelector(".t").textContent = msg; }
      } else {
        el.removeAttribute("aria-invalid");
        if (err) err.hidden = true;
      }
      return msg;
    };

    // Validate on blur only after the first submit attempt (less noisy for screen-reader users)
    var attempted = false;
    fields.forEach(function (el) {
      el.addEventListener(el.type === "checkbox" ? "change" : "blur", function () { if (attempted) check(el); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      attempted = true;
      status.hidden = true;
      var errors = [];
      fields.forEach(function (el) { var m = check(el); if (m) errors.push({ el: el, msg: m }); });

      if (errors.length) {
        var list = summary.querySelector("ul");
        list.innerHTML = "";
        errors.forEach(function (x) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = "#" + x.el.id;
          a.textContent = x.msg;
          a.addEventListener("click", function (ev) { ev.preventDefault(); x.el.focus(); });
          li.appendChild(a); list.appendChild(li);
        });
        var count = lang === "en" ? (errors.length === 1 ? "is 1 field" : "are " + errors.length + " fields") : errors.length;
        summary.querySelector("h2").textContent = T.summary.replace("{n}", count);
        summary.hidden = false;
        summary.focus();
        return;
      }
      summary.hidden = true;

      // Honeypot: silently stop bots
      if (form.querySelector("[name=website]").value) return;

      var endpoint = form.getAttribute("data-endpoint");
      var show = function (cls, text) {
        status.className = "form-status " + cls;
        status.textContent = text;
        status.hidden = false;
        status.focus();
      };

      if (!endpoint) { show("ok", T.demo); return; }

      var label = submitBtn.textContent;
      submitBtn.disabled = true; submitBtn.textContent = T.sending;
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          form.reset(); attempted = false; show("ok", T.ok);
        })
        .catch(function () { show("err", T.fail); })
        .finally(function () { submitBtn.disabled = false; submitBtn.textContent = label; });
    });
  }

  /* ---------- Before / after slider ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".compare").forEach(function (fig) {
    var range = fig.querySelector(".compare-range");
    var stage = fig.querySelector(".compare-stage");
    var suffix = fig.getAttribute("data-vt") || "%";
    var set = function (v) {
      if (v !== undefined) range.value = Math.max(0, Math.min(100, Math.round(v)));
      fig.style.setProperty("--pos", range.value + "%");
      range.setAttribute("aria-valuetext", range.value + suffix);
    };
    range.addEventListener("input", function () { set(); });
    set();

    // Pointer: mouse can drag from anywhere; touch only from near the handle, so page scrolling still works
    var dragging = false;
    var fromX = function (e) { var r = stage.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * 100; };
    stage.addEventListener("pointerdown", function (e) {
      var r = stage.getBoundingClientRect();
      var handleX = r.left + (range.value / 100) * r.width;
      if (e.pointerType !== "mouse" && Math.abs(e.clientX - handleX) > 36) return;
      dragging = true; fig.classList.add("is-dragging");
      stage.setPointerCapture(e.pointerId);
      set(fromX(e));
      e.preventDefault();
    });
    stage.addEventListener("pointermove", function (e) { if (dragging) set(fromX(e)); });
    var end = function () { dragging = false; fig.classList.remove("is-dragging"); };
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);

    // One gentle nudge when the slider first scrolls into view, so people notice it moves
    if (!reduceMotion && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        var start = +range.value;
        fig.classList.add("is-nudging");
        setTimeout(function () { if (!dragging) set(start - 15); }, 400);
        setTimeout(function () { if (!dragging) set(start); }, 1000);
        setTimeout(function () { fig.classList.remove("is-nudging"); }, 1600);
      }, { threshold: 0.6 });
      io.observe(stage);
    }
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
