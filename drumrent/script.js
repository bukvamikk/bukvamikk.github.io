/* drumrent.hu — interactions: nav, gear picker, request form, reveals */
(() => {
    "use strict";
    document.documentElement.classList.add("js");

    const EMAIL = "drumrenthungary@gmail.com";
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];
    /* ---------------- i18n (runtime messages only) ----------------
       Page text lives in the HTML: / is Hungarian, /en/ is English. */
    const STR = {
        hu: {
            "js.added": "Hozzáadva az ajánlatkéréshez", "js.removed": "Eltávolítva az ajánlatkérésből",
            "js.errGear": "Kérjük, válasszon legalább egy tételt.",
            "js.errFields": "Kérjük, adja meg nevét, érvényes e-mail címét és a dátumokat.",
            "js.errDates": "A visszahozás dátuma nem lehet korábbi a kezdésnél.",
            "js.opened": "Megnyílik a levelezőprogram…",
            "mail.subject": "Ajánlatkérés", "mail.gear": "Felszerelés", "mail.dates": "Dátum", "mail.type": "Esemény", "mail.place": "Helyszín",
            "mail.name": "Név", "mail.phone": "Telefon", "mail.email": "E-mail", "mail.msg": "Üzenet",
        },
        en: {
            "js.added": "Added to your quote", "js.removed": "Removed from your quote",
            "js.errGear": "Please choose at least one item.",
            "js.errFields": "Please fill in your name, a valid email and the dates.",
            "js.errDates": "The return date can't be before the start date.",
            "js.opened": "Your email app is opening…",
            "mail.subject": "Quote request", "mail.gear": "Gear", "mail.dates": "Dates", "mail.type": "Event", "mail.place": "Location",
            "mail.name": "Name", "mail.phone": "Phone", "mail.email": "Email", "mail.msg": "Message",
        },
    };
    const lang = document.documentElement.lang === "en" ? "en" : "hu";
    const t = k => STR[lang][k] ?? k;

    /* ---------------- Nav ---------------- */
    const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks"), mbar = $(".mbar");
    const onScroll = () => {
        const y = window.scrollY;
        nav.classList.toggle("is-scrolled", y > 20);
        mbar.classList.toggle("show", y > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const closeMenu = () => { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
    burger.addEventListener("click", () => {
        const open = !links.classList.contains("open");
        links.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

    // active section highlight
    const sectionLinks = $$('.nav__links a[href^="#"]');
    const spy = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (!en.isIntersecting) return;
            sectionLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sectionLinks.forEach(a => { const s = $(a.getAttribute("href")); if (s) spy.observe(s); });

    /* ---------------- Gear picker <-> form ---------------- */
    const form = $("#requestForm");
    const boxes = $$('input[name="gear"]', form);
    const toastEl = $("#toast");
    let toastTimer;
    const toast = msg => {
        toastEl.textContent = msg;
        toastEl.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
    };
    const box = id => boxes.find(b => b.value === id);

    function sync() {
        const picked = boxes.filter(b => b.checked).map(b => b.value);
        $$("[data-add]").forEach(btn => btn.setAttribute("aria-pressed", String(picked.includes(btn.dataset.add))));
    }
    $$("[data-add]").forEach(btn => btn.addEventListener("click", () => {
        const b = box(btn.dataset.add);
        b.checked = !b.checked;
        sync();
        toast(t(b.checked ? "js.added" : "js.removed"));
    }));
    $$("[data-add-other]").forEach(a => a.addEventListener("click", () => { box("other").checked = true; sync(); }));
    boxes.forEach(b => b.addEventListener("change", sync));

    /* ---------------- Dates ---------------- */
    const from = form.elements.from, to = form.elements.to;
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    from.min = today; to.min = today;
    from.addEventListener("change", () => {
        to.min = from.value || today;
        if (to.value && to.value < from.value) to.value = from.value;
    });

    /* ---------------- Submit -> mailto ---------------- */
    const errEl = $("#formError");
    const showErr = msg => { errEl.textContent = msg; errEl.hidden = false; };
    form.addEventListener("submit", e => {
        e.preventDefault();
        errEl.hidden = true;
        $$(".invalid", form).forEach(el => el.classList.remove("invalid"));
        const f = form.elements;
        const picked = boxes.filter(b => b.checked);
        if (!picked.length) return showErr(t("js.errGear"));
        const required = [f.name, f.email, f.from, f.to].filter(el => !el.value.trim() || !el.checkValidity());
        if (required.length) {
            required.forEach(el => el.classList.add("invalid"));
            required[0].focus();
            return showErr(t("js.errFields"));
        }
        if (f.to.value < f.from.value) { f.to.classList.add("invalid"); return showErr(t("js.errDates")); }

        const gearNames = picked.map(b => b.closest("label").querySelector("span").firstChild.textContent.trim());
        const typeLabel = f.type.options[f.type.selectedIndex].textContent;
        const lines = [
            `${t("mail.gear")}: ${gearNames.join(", ")}`,
            `${t("mail.dates")}: ${f.from.value} → ${f.to.value}`,
            `${t("mail.type")}: ${typeLabel}`,
            f.place.value && `${t("mail.place")}: ${f.place.value}`,
            " ",
            `${t("mail.name")}: ${f.name.value}`,
            `${t("mail.email")}: ${f.email.value}`,
            f.phone.value && `${t("mail.phone")}: ${f.phone.value}`,
            f.msg.value && `\n${t("mail.msg")}:\n${f.msg.value}`,
        ].filter(Boolean);
        const subject = `${t("mail.subject")} – ${gearNames.join(", ")} (${f.from.value})`;
        const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
        toast(t("js.opened"));
        window.location.href = href;
    });

    /* ---------------- Reveal on scroll ---------------- */
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal, .step").forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 70}ms`;
        io.observe(el);
    });

    $("#year").textContent = new Date().getFullYear();
    sync();
})();