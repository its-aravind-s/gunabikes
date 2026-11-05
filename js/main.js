(function () {
  "use strict";

  /* ---------- Tamil translations (English lives in index.html) ---------- */
  var TA = {
    "nav.bikes": "வாகனங்கள்",
    "nav.finance": "நிதி உதவி",
    "nav.gallery": "படங்கள்",
    "nav.branches": "கிளைகள்",
    "nav.contact": "தொடர்புக்கு",

    "cta.call": "அழைக்க",
    "cta.whatsapp": "வாட்ஸ்அப்",
    "cta.callnow": "இப்போதே அழைக்கவும்",

    "hero.eyebrow": "பல பிராண்ட் ஷோரூம் · மதுராந்தகம்",
    "hero.l1": "அனைத்து இருசக்கர வாகனங்கள்.",
    "hero.l2": "அனைத்து பிராண்டுகள்.",
    "hero.l3": "எளிய தவணை வசதி.",
    "hero.sub": "முன்னணி பிராண்டுகளின் புதிய மற்றும் பழைய பைக், ஸ்கூட்டர்கள் ஒரே இடத்தில் — குறைந்த முன்பணத்தில் விரைவான நிதி உதவியுடன்.",
    "hero.p1": "புதிய & பழைய வாகனங்கள்",
    "hero.p2": "எளிய நிதி உதவி",
    "hero.p3": "எக்ஸ்சேஞ்ச் சலுகை",

    "brands.label": "எங்களிடம் கிடைக்கும் பிராண்டுகள்",

    "bikes.kicker": "எங்கள் விற்பனை",
    "bikes.title": "புதிய & பழைய இருசக்கர வாகனங்கள்",
    "bikes.new.tag": "புதியது",
    "bikes.new.title": "புதிய பைக் & ஸ்கூட்டர்கள்",
    "bikes.new.desc": "அனைத்து முன்னணி பிராண்டுகளின் கம்யூட்டர், ஸ்போர்ட்ஸ் பைக் மற்றும் ஸ்கூட்டர்கள் — ஒரே ஷோரூமில் ஒப்பிட்டுப் பார்த்து வாங்கலாம்.",
    "bikes.new.li1": "அனைத்து பிராண்டுகளும் ஒரே இடத்தில்",
    "bikes.new.li2": "புதிய மாடல்கள் & வண்ணங்கள்",
    "bikes.new.li3": "இன்சூரன்ஸ் & பதிவு உதவி",
    "bikes.used.tag": "பயன்படுத்தியது",
    "bikes.used.title": "பழைய வாகனங்கள்",
    "bikes.used.desc": "நல்ல நிலையில் உள்ள பழைய இருசக்கர வாகனங்கள் நியாயமான விலையில். உங்கள் பழைய வண்டியைக் கொடுத்து புதிய வண்டி வாங்கலாம்.",
    "bikes.used.li1": "சரிபார்க்கப்பட்ட, ஓட்டத் தயாரான வாகனங்கள்",
    "bikes.used.li2": "பழைய வண்டிக்கு எக்ஸ்சேஞ்ச்",
    "bikes.used.li3": "பழைய வாகனங்களுக்கும் நிதி உதவி",

    "fin.kicker": "எளிதான வாகனக் கடன்",
    "fin.title": "எளிய தவணை வசதி உண்டு",
    "fin.lead": "இன்றே வண்டியை எடுத்துச் சென்று, எளிய மாதத் தவணையில் செலுத்துங்கள். ஆவணங்கள் மற்றும் ஒப்புதலுக்கு நாங்கள் உதவுகிறோம்.",
    "fin.b1.t": "குறைந்த முன்பணம்",
    "fin.b1.d": "சிறிய தொகையில் தொடங்கலாம்",
    "fin.b2.t": "விரைவான ஒப்புதல்",
    "fin.b2.d": "குறைந்த ஆவணங்கள், வேகமான நடைமுறை",
    "fin.b3.t": "வசதியான EMI",
    "fin.b3.d": "உங்களுக்கு ஏற்ற காலவரையறை",
    "fin.b4.t": "புதிய & பழைய வாகனங்கள்",
    "fin.b4.d": "இரண்டுக்கும் நிதி உதவி",
    "fin.docs.title": "தேவையான ஆவணங்கள்",
    "fin.docs.d1": "ஆதார் அட்டை",
    "fin.docs.d2": "பான் அட்டை",
    "fin.docs.d3": "முகவரிச் சான்று",
    "fin.docs.d4": "வங்கி அறிக்கை / சம்பளச் சீட்டு",
    "fin.docs.d5": "பாஸ்போர்ட் அளவு புகைப்படங்கள்",
    "fin.docs.note": "நிதி நிறுவனத்தைப் பொறுத்து ஆவணங்கள் மாறலாம். உங்கள் தகுதியை அறிய எங்களை அழைக்கவும்.",
    "fin.cta": "நிதி உதவிக்கு அழைக்கவும்",
    "fin.cta.wa": "வாட்ஸ்அப்பில் கேட்கவும்",

    "why.kicker": "ஏன் குணா பைக்ஸ்",
    "why.title": "ஒரே ஷோரூம். அனைத்து தேவைகளும்.",
    "why.f1.t": "பல பிராண்ட் தேர்வு",
    "why.f1.d": "ஒரே வருகையில் பல பிராண்டுகளைப் பார்த்து ஒப்பிடலாம்.",
    "why.f2.t": "எக்ஸ்சேஞ்ச் சலுகை",
    "why.f2.d": "பழைய வண்டியைக் கொண்டு வந்து புதிய வண்டிக்கு மதிப்பு பெறுங்கள்.",
    "why.f3.t": "இன்சூரன்ஸ் & RTO உதவி",
    "why.f3.d": "இன்சூரன்ஸ் மற்றும் பதிவுக்கு நாங்கள் உதவுகிறோம்.",
    "why.f4.t": "அருகில் 5 இடங்கள்",
    "why.f4.d": "மதுராந்தகத்தில் தலைமை ஷோரூம், சுற்றுவட்டாரத்தில் கிளைகள்.",

    "gal.kicker": "எங்கள் ஷோரூமுக்கு வாருங்கள்",
    "gal.title": "ஷோரூம் படங்கள்",

    "br.kicker": "உங்கள் அருகில்",
    "br.title": "எங்கள் கிளைகள்",
    "br.main": "தலைமை ஷோரூம்",
    "br.branch": "கிளை",
    "br.madurantakam": "மதுராந்தகம்",
    "br.kalpakkam": "கல்பாக்கம்",
    "br.kadapakkam": "கடப்பாக்கம்",
    "br.pavunjur": "பவுஞ்சூர்",
    "br.keezhkodungalur": "கீழ்க்கொடுங்கலூர்",

    "ct.kicker": "தொடர்பு கொள்ள",
    "ct.title": "நேரில் வாருங்கள் அல்லது அழையுங்கள்",
    "ct.name": "குணா பைக்ஸ்",
    "ct.addr": "மதுராந்தகம், செங்கல்பட்டு மாவட்டம், தமிழ்நாடு",
    "ct.phone": "தொலைபேசி",
    "ct.directions": "வழி காட்டு",

    "ft.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.innerHTML; });

  var toggle = document.getElementById("langToggle");

  function setLang(lang) {
    var dict = lang === "ta" ? TA : EN;
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    toggle.textContent = lang === "ta" ? "English" : "தமிழ்";
    try { localStorage.setItem("gb-lang", lang); } catch (e) {}
  }

  toggle.addEventListener("click", function () {
    setLang(document.documentElement.lang === "ta" ? "en" : "ta");
  });

  var saved = null;
  try { saved = localStorage.getItem("gb-lang"); } catch (e) {}
  if (saved === "ta") setLang("ta");

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  function closeMenu() { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });

  /* ---------- Gallery lightbox ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".g-item img"));
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector("img");
  var current = 0;

  function show(i) {
    current = (i + items.length) % items.length;
    lbImg.src = items[current].src;
    lbImg.alt = items[current].alt;
  }
  function openLb(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus(); }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }

  items.forEach(function (img, i) {
    img.parentElement.addEventListener("click", function () { openLb(i); });
  });
  lb.querySelector(".lb-close").addEventListener("click", closeLb);
  lb.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
