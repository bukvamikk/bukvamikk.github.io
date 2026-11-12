(() => {
    "use strict";
    document.documentElement.classList.add("js");

    const EMAIL = "drumrenthungary@gmail.com";
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
    };

    /* ---------------- i18n ---------------- */
    const EN = {
        skip: "Skip to content",
        "nav.gear": "Gear", "nav.how": "How it works", "nav.faq": "FAQ", "nav.contact": "Contact", "nav.cta": "Get a quote",
        "hero.eyebrow": "Backline rental · Hungary",
        "hero.t1": "Vintage sound.", "hero.t2": "Pro backline.",
        "hero.lead": "Carefully maintained vintage drum kits and amps for concerts, festivals and studio sessions — set up and ready to play.",
        "hero.cta1": "Get a quote",
        "hero.trust1": "Checked before every rental", "hero.trust2": "Personal service", "hero.trust3": "Fast reply",
        "hero.chip": "Available",
        "mq.1": "Concert", "mq.2": "Festival", "mq.3": "Studio", "mq.4": "Rehearsal", "mq.5": "Tour",
        "gear.eyebrow": "The gear", "gear.title": "Vintage kits & backline",
        "gear.lead": "Hand-picked instruments with real character. Add what you need to your quote request in one click.",
        "gear.drums": "Drum kit", "gear.amp": "Amplifier",
        "gear.pearl": "Classic white pearl finish with a warm, round tone — true vintage character for stage and studio.",
        "gear.ludwig": "An American classic with a punchy rock sound.",
        "gear.ampeg": "The legendary bass head with a 4×10 cabinet — full-bodied and dependable.",
        "gear.add": "+ Add to quote", "gear.added": "✓ Added",
        "gear.moreT": "Need more backline?",
        "gear.more": "Cymbals, hardware, more amps — just ask and we'll put together what you need.",
        "gear.moreBtn": "Ask us",
        "why.eyebrow": "Why us", "why.title": "By musicians, for musicians",
        "why.1t": "Checked condition", "why.1": "Every kit is inspected, cleaned and tuned before it goes out.",
        "why.2t": "Real vintage character", "why.2": "Original period instruments — the sound you hear on the records.",
        "why.3t": "Flexible rental period", "why.3": "One night, a weekend, or a longer studio block.",
        "why.4t": "Personal contact", "why.4": "No call center — you talk directly to the owner of the gear.",
        "how.eyebrow": "Process", "how.title": "Three steps to the stage",
        "how.1t": "Request", "how.1": "Pick your gear and dates, or just give us a call.",
        "how.2t": "Confirm", "how.2": "We get back to you with availability, price and pickup details.",
        "how.3t": "Play", "how.3": "Pick up the set-up kit, play the show, bring it back.",
        "req.eyebrow": "Quote request", "req.title": "Book the sound",
        "req.lead": "Fill in the form or reach us directly — whatever works best for you.",
        "req.call": "Call now", "req.hours": "Mon–Fri 8:00–17:00", "req.mail": "Send an email", "req.mailNote": "Our team is happy to help",
        "form.gear": "Gear", "form.other": "Other backline",
        "form.from": "Start date", "form.to": "Return date", "form.type": "Event type",
        "form.t1": "Concert", "form.t2": "Festival", "form.t3": "Studio", "form.t4": "Rehearsal", "form.t5": "Other",
        "form.place": "Location (city)", "form.name": "Name", "form.phone": "Phone", "form.msg": "Message",
        "form.msgPh": "E.g. band, style, special requirements…",
        "form.submit": "Send quote request",
        "form.note": "Sending opens your email app with the message filled in.",
        "faq.eyebrow": "FAQ", "faq.title": "Common questions",
        "faq.q1": "How much does it cost?", "faq.a1": "Price depends on the gear and rental period. Send a request or call us and we'll give you an exact quote.",
        "faq.q2": "How far ahead should I book?", "faq.a2": "The sooner the better — especially in festival season. Short-notice requests are worth asking about too.",
        "faq.q3": "How does pickup work?", "faq.a3": "Pickup and return are arranged when you book.",
        "faq.q4": "Can international bands rent?", "faq.a4": "Yes, we're happy to arrange everything in English.",
        "cta.t1": "Ready for", "cta.t2": "the next gig?", "cta.call": "Call now",
        "footer.tag": "Vintage drum & backline rental · Hungary",
        // runtime strings
        "js.added": "Added to your quote", "js.removed": "Removed from your quote",
        "js.errGear": "Please choose at least one item.",
        "js.errFields": "Please fill in your name, a valid email and the dates.",
        "js.errDates": "The return date can't be before the start date.",
        "js.opened": "Your email app is opening…",
        "mail.subject": "Quote request", "mail.gear": "Gear", "mail.dates": "Dates", "mail.type": "Event", "mail.place": "Location",
        "mail.name": "Name", "mail.phone": "Phone", "mail.email": "Email", "mail.msg": "Message",
    };
    const HU_RUNTIME = {
        "js.added": "Hozzáadva az ajánlatkéréshez", "js.removed": "Eltávolítva az ajánlatkérésből",
        "js.errGear": "Kérjük, válasszon legalább egy tételt.",
        "js.errFields": "Kérjük, adja meg nevét, érvényes e-mail címét és a dátumokat.",
        "js.errDates": "A visszahozás dátuma nem lehet korábbi a kezdésnél.",
        "js.opened": "Megnyílik a levelezőprogram…",
        "mail.subject": "Ajánlatkérés", "mail.gear": "Felszerelés", "mail.dates": "Dátum", "mail.type": "Esemény", "mail.place": "Helyszín",
        "mail.name": "Név", "mail.phone": "Telefon", "mail.email": "E-mail", "mail.msg": "Üzenet",
    };
    // Hungarian copy is the source in the HTML; capture it once.
    const HU = { ...HU_RUNTIME };
    $$("[data-i18n]").forEach(el => { HU[el.dataset.i18n] ??= el.textContent.trim(); });
    $$("[data-i18n-ph]").forEach(el => { HU[el.dataset.i18nPh] ??= el.placeholder; });
    const DICT = { hu: HU, en: EN };
    const META = {
        hu: { title: document.title, desc: $('meta[name="description"]').content },
        en: {
            title: "drumrent.hu – Vintage drum & backline rental in Hungary",
            desc: "Vintage drum kits and backline for concerts, festivals and studio sessions in Hungary. Get a quote by phone, email or online."
        },
    };
    let lang = "hu";
    const t = k => DICT[lang][k] ?? HU[k] ?? k;

    function setLang(next) {
        lang = next === "en" ? "en" : "hu";
        document.documentElement.lang = lang;
        $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
        $$("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
        $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
        document.title = META[lang].title;
        $('meta[name="description"]').content = META[lang].desc;
        store.set("dr-lang", lang);
    }
    $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    const saved = store.get("dr-lang");
    const browserEn = !saved && !(navigator.language || "").toLowerCase().startsWith("hu");
    if (saved === "en" || browserEn) setLang("en");

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