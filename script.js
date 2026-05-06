/* ══════════════════════════════════════════════════════════════
   GEEZ HOSPITAL — script.js
   Sections:
     1.  Constants & configuration
     2.  Language / Translation system
     3.  Sticky header shadow on scroll
     4.  Scroll progress bar
     5.  Mobile navigation (hamburger toggle)
     6.  Scroll reveal (IntersectionObserver)
     7.  Back to top button
     8.  Floating Telegram button toggle
     9.  Appointment form — validation & async submit
    10.  Services grid — dynamic card rendering
    11.  Set minimum date on appointment date input
    12.  Smooth scroll for anchor links
    13.  Footer copyright year
    14.  Init
   ══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   1. CONSTANTS & CONFIGURATION
───────────────────────────────────────── */
const SITE_LANG_KEY = 'geez_lang'; /* localStorage key for persisting language */

/* ─────────────────────────────────────────
   2. LANGUAGE / TRANSLATION SYSTEM
   Supports: English (eng), Tigrinya (tig), Amharic (amh)
   Usage: add  data-translate="key"  to any HTML element
───────────────────────────────────────── */
const translations = {
  eng: {
    'home': 'Home', 'services': 'Services', 'doctors': 'Doctors',
    'gallery': 'Gallery', 'news': 'News', 'contact': 'Contact',
    'announcement': 'Emergency line open 24/7 — Call +251 920 008 338',
    'contact-us-btn': 'Book Appointment',
    'hero-badge': "Axum's Premier Medical Centre",
    'hero-title': 'Chosen for Our Care.\nTrusted for Our Expertise.',
    'hero-sub': 'World-class specialist healthcare in the heart of Axum — modern technology, compassionate doctors, 24/7 emergency services.',
    'hero-btn-appointment': 'Book an Appointment',
    'hero-btn-services': 'Explore Services',
    'stat-services': 'Departments', 'stat-doctors': 'Specialist Doctors', 'stat-emergency': 'Emergency Care',
    'qa-appt': 'Book Appointment', 'qa-appt-sub': 'Online & Walk-in',
    'qa-doctors': 'Find a Doctor', 'qa-doctors-sub': 'Specialists & Sub-specialists',
    'qa-services': 'Our Services', 'qa-services-sub': '18+ departments',
    'qa-emergency': 'Emergency', 'qa-emergency-sub': '+251 920 008 338',
    'about-eyebrow': 'Who We Are',
    'about-h2': 'A Legacy of Trust in Tigray Healthcare',
    'about-p1': "Founded in 2011 E.C., Geez Hospital stands among Tigray's most trusted medical institutions — built on compassionate care, expert professional competence, and state-of-the-art equipment. Our mission is to make world-class healthcare accessible to every citizen.",
    'about-badge': 'Est. 2011',
    'vision-h3': 'Our Vision', 'vision-p': 'To become a globally respected medical institution in Africa through patient-centered, world-class care.',
    'mission-h3': 'Our Mission', 'mission-p': 'To provide excellent, affordable, and accessible healthcare by combining professional excellence with compassionate, ethical medical practice.',
    'services-eyebrow': 'What We Offer', 'our-services-h2': 'Our Medical Services',
    'services-intro': 'Specialist and sub-specialist care across 18+ departments, powered by modern technology and expert physicians.',
    'all-services-btn': 'View All Services',
    'doctors-eyebrow': 'Meet the Team', 'doctors-h2': 'Our Expert Physicians', 'view-all-doctors': 'Meet All Doctors',
    'dr-tesfay-name': 'Dr. Tesfay Atsbeha', 'dr-tesfay-specialty': 'Interventional Cardiology',
    'dr-higus-name': 'Dr. Higus Teklu', 'dr-higus-specialty': 'Internal Medicine',
    'appointment-btn': 'Book',
    'testimonial-p': "Geez Hospital's doctors and staff are truly exceptional — compassionate, highly skilled, and attentive. The care I received changed my life. I am deeply grateful.",
    'testimonial-span': '— Ato Gebremedhin Kahsay, Axum',
    'view-on-map': 'Open in Google Maps for Directions',
    'cta-title': 'Ready to Take the Next Step?', 'cta-sub': 'Book an appointment or contact us — we are here 24/7.',
    'footer-brand-desc': 'World-class healthcare in Axum, Tigray. Compassionate care for every patient.',
    'footer-quick-links': 'Quick Links', 'footer-services-title': 'Top Services', 'footer-contact-title': 'Contact Us',
    'footer-address': 'Kindeya Kebele, In front of Ethio-Telecom, Behind Central Café, Axum, Tigray, Ethiopia',
  },

  tig: {
    'home': 'መእተዊ', 'services': 'ግልጋሎታት', 'doctors': 'ሓኻይም',
    'gallery': 'ምስሊታት', 'news': 'ዜናን ፍጻሜታትን', 'contact': 'ይርከቡና',
    'announcement': 'ህጹጽ መስመር 24/7 ክፉት እዩ — ደውሉ +251 920 008 338',
    'contact-us-btn': 'ቆፀሮ ሓዙ',
    'hero-badge': 'ብሉጽን መሪሕ ደረጃ ዘለዎ ማእኸል ሕክምና!',
    'hero-title': 'ብሓልዮትና ንምረጽ።\nብሞያዊ ብቕዓትና ንእመን!።',
    'hero-sub': 'ግዕዝ ሆስፒታል፡ ኣብ ከተማ ኣኽሱም ዓለም-ለኻዊ ደረጃ ዘለዎ ሕክምና   —  ዘመናዊ ቴክኖሎጂን ህጹጽ ግልጋግሎትን 24/7።',
    'hero-btn-appointment': 'ቆፀሮ ሓዙ', 'hero-btn-services': 'ግልጋሎታት ርአ',
    'stat-services': 'ግልጋሎታትና ተወከሱ', 'stat-doctors': 'ስፔሻሊስት ሓካይም', 'stat-emergency': 'ህጹጽ ሕክምና',
    'qa-appt': 'ቆፀሮ ሓዙ', 'qa-appt-sub': 'ኦንላይን ወይ ምምጻእ',
    'qa-doctors': 'ሓኪም ረኽቡ', 'qa-doctors-sub': 'ስፔሻሊስትን ሳብ-ስፔሻሊስትን',
    'qa-services': 'ግልጋሎታትና', 'qa-services-sub': '18+ ክፍሊታት',
    'qa-emergency': 'ህጹጽ', 'qa-emergency-sub': '+251 920 008 338',
    'about-eyebrow': 'ብዛዕባና',
    'about-h2': 'ኣብ ታሪኽ ሕክምና ትግራይ',
    'about-p1': 'ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ  ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።።',
    'about-badge': 'ዝተምስረተ 2011',
    'vision-h3': 'ራእይና', 'vision-p': 'ብምኽንያት እቲ ዘርእዮ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',
    'mission-h3': 'ልኡኽቶና', 'mission-p': 'ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።',
    'services-eyebrow': 'ግልጋሎታት', 'our-services-h2': 'ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን፣ናይ ስኒ መርመራን ሕክምናን ከምኡውን  ናይ ህፁፅ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።',
    'services-intro': 'ኣብ 18+ ክፍሊታት ስፔሻሊስት ክንክን፣ ብዘመናዊ ቴክኖሎጂን ሓካይምን።',
    'all-services-btn': 'ኩሎም ኣገልግሎታት ርአ',
    'doctors-eyebrow': 'ሓካይምና', 'doctors-h2': 'ክኢላ ሓካይምና', 'view-all-doctors': 'ኩሎም ሓካይም ርአ',
    'dr-tesfay-name': 'ዶ/ር ተስፋይ ኣጽበሃ', 'dr-tesfay-specialty': 'ኢንተርቨንሽናል ካርዲዮሎጂ',
    'dr-higus-name': 'ዶ/ር ሒጉስ ተኽሉ', 'dr-higus-specialty': 'ውሽጣዊ ሕክምና',
    'appointment-btn': 'ቆፀሮ',
    'testimonial-p': 'ሓካይምን ሰራሕተኛታትን ናይ ግዕዝ ሆስፒታል ብሓቂ ዘደንቁ እዮም — ሓዘናዊ፣ ክኢሎ፣ ሓጋዚ። ዝተዋሃበኒ ክንክን ህይወተይ ቀይሩዋ።',
    'testimonial-span': '— ኣቶ ገብረሜድህን ካሕሳይ፣ ኣኽሱም',
    'view-on-map': 'ኣብ ጉግል ካርታ ክፈቱ',
    'cta-title': 'ዝቕጽል ስጉምቲ ንምውሳድ ድሉዋት ዲኹም?', 'cta-sub': 'ቆፀሮ ሓዙ ወይ ርኸቡና — ኩሉ ግዜ ኣለና።',
    'footer-brand-desc': 'ኣብ ኣኽሱም ዓለምለኻዊ ሕክምና። ንኹሉ ሕሙም ሓዘናዊ ክንክን።',
    'footer-quick-links': 'ቅልጡፍ ሊንካት', 'footer-services-title': 'ዋና ኣገልግሎታት', 'footer-contact-title': 'ርኸቡና',
    'footer-address': 'ኪንደያ ከበሌ፣ ቅድሚ ኢትዮ-ቴሌኮም፣ ድሕሪ ሴንትራል ካፌ፣ ኣኽሱም፣ ትግራይ፣ ኢትዮጵያ',
  },

  amh: {
    'home': 'ዋና ገጽ', 'services': 'አገልግሎቶች', 'doctors': 'ሐኪሞች',
    'gallery': 'ፎቶ ጋለሪ', 'news': 'ዜናዎች', 'contact': 'ያግኙን',
    'announcement': 'የድንገተኛ ጊዜ መስመር 24/7 ክፍት ነው — ይደውሉ +251 920 008 338',
    'contact-us-btn': 'ቀጠሮ ያዙ',
    'hero-badge': 'የአክሱም ዋና የህክምና ማዕከል',
    'hero-title': 'ለእንክብካቤያችን የተመረጥን።\nለሙያችን የተታመን።',
    'hero-sub': 'በአክሱም ልብ ውስጥ ዓለም ደረጃ ልዩ ህክምና — ዘመናዊ ቴክኖሎጂ፣ ርህሩህ ሀኪሞች፣ 24/7 የድንገተኛ ጊዜ አገልግሎት።',
    'hero-btn-appointment': 'ቀጠሮ ያዙ', 'hero-btn-services': 'አገልግሎቶችን ይመልከቱ',
    'stat-services': 'ክፍሎች', 'stat-doctors': 'ልዩ ሐኪሞች', 'stat-emergency': 'የድንገተኛ ጊዜ እንክብካቤ',
    'qa-appt': 'ቀጠሮ ያዙ', 'qa-appt-sub': 'ኦንላይን ወይም በመምጣት',
    'qa-doctors': 'ሐኪም ያግኙ', 'qa-doctors-sub': 'ስፔሻሊስቶች',
    'qa-services': 'አገልግሎቶቻችን', 'qa-services-sub': '18+ ክፍሎች',
    'qa-emergency': 'ድንገተኛ', 'qa-emergency-sub': '+251 920 008 338',
    'about-eyebrow': 'እኛ ማን ነን',
    'about-h2': 'ሁሉ ሰው ሊደርስበት በሚችል ዋጋ ዓለም ደረጃ ህክምና',
    'about-p1': 'ጌዝ ሆስፒታል በ2011 ዓ.ም. ተመስርቶ ከትግራይ ውስጥ ተወዳጅ ህክምና ተቋም ሆኗል። ርህሩህ እንክብካቤ፣ ከፍተኛ ሙያዊ ብቃት፣ ዘመናዊ ቁሳቁስ ላይ ተመስርቷል።',
    'about-badge': 'የተቋቋመ 2011',
    'vision-h3': 'ራዕያችን', 'vision-p': 'በሕሙም ማዕከል ዓለም ደረጃ ሕክምና በማቅረብ በአፍሪካ የሚከበር ዓለም ዓቀፍ ተቋም ለመሆን።',
    'mission-h3': 'ተልዕኮአችን', 'mission-p': 'ለሁሉም ዜጎች ምርጥ፣ ተደራሽ፣ ተከታታይ ህክምና ማቅረብ።',
    'services-eyebrow': 'የምናቀርበው', 'our-services-h2': 'የህክምና አገልግሎቶቻችን',
    'services-intro': 'ዘመናዊ ቴክኖሎጂ ባላቸው ስፔሻሊስቶች 18+ ክፍሎች ውስጥ ሙሉ እንክብካቤ።',
    'all-services-btn': 'ሁሉንም አገልግሎቶች ይመልከቱ',
    'doctors-eyebrow': 'ቡድናችን', 'doctors-h2': 'ባለሙያ ሐኪሞቻችን', 'view-all-doctors': 'ሁሉንም ሐኪሞች ይመልከቱ',
    'dr-tesfay-name': 'ዶ/ር ተስፋይ ኣጽበሃ', 'dr-tesfay-specialty': 'ኢንተርቨንሽናል ካርዲዮሎጂ',
    'dr-higus-name': 'ዶ/ር ሒጉስ ተኽሉ', 'dr-higus-specialty': 'የውስጥ ሕክምና',
    'appointment-btn': 'ቀጠሮ',
    'testimonial-p': 'የጌዝ ሆስፒታል ሐኪሞችና ሠራተኞች በእውነት አስደናቂ ናቸው — ርህሩሆች፣ ብቃት ያላቸው፣ ሁሌም ጥንቁቆች። ያገኘሁት እንክብካቤ ሕይወቴን ቀይሮታል።',
    'testimonial-span': '— አቶ ገብረሜድህን ካህሳይ፣ አክሱም',
    'view-on-map': 'በGoogle Maps ይክፈቱ',
    'cta-title': 'ቀጣዩን እርምጃ ለመውሰድ ዝግጁ ናቸሁ?', 'cta-sub': 'ቀጠሮ ያዙ ወይም ያግኙን — ሁሌ አለን።',
    'footer-brand-desc': 'በአክሱም፣ ትግራይ ዓለም ደረጃ ህክምና። ለሁሉም ሕሙም ርህሩህ እንክብካቤ።',
    'footer-quick-links': 'ፈጣን አገናኞች', 'footer-services-title': 'ዋና አገልግሎቶች', 'footer-contact-title': 'ያግኙን',
    'footer-address': 'ኪንደያ ቀበሌ፣ ከኢትዮ-ቴሌኮም ፊት ለፊት፣ ከሴንትራል ካፌ ኋላ፣ አክሱም፣ ትግራይ፣ ኢትዮጵያ',
  }
};

/**
 * Apply the selected language to all [data-translate] elements.
 * Persists choice to localStorage.
 */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = ({ eng: 'en', tig: 'ti', amh: 'am' })[lang] || 'en';
  localStorage.setItem(SITE_LANG_KEY, lang);
}


/* ─────────────────────────────────────────
   3. STICKY HEADER SHADOW ON SCROLL
───────────────────────────────────────── */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}


/* ─────────────────────────────────────────
   4. SCROLL PROGRESS BAR
   Updates bar width (0–100%) on every scroll event.
───────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct       = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = pct.toFixed(1) + '%';
  }, { passive: true });
}


/* ─────────────────────────────────────────
   5. MOBILE NAVIGATION
   Hamburger toggles the nav drawer.
   Closes when a link is tapped or user clicks outside.
───────────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('mainNav');
  if (!hamburger || !nav) return;

  function toggleNav(open) {
    nav.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  }

  hamburger.addEventListener('click', () => toggleNav(!nav.classList.contains('open')));

  /* Close when a nav link is clicked (e.g., on mobile) */
  nav.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => toggleNav(false))
  );

  /* Close when clicking anywhere outside the header */
  document.addEventListener('click', e => {
    const header = document.getElementById('siteHeader');
    if (header && !header.contains(e.target)) toggleNav(false);
  });
}


/* ─────────────────────────────────────────
   6. SCROLL REVEAL
   IntersectionObserver fires once per element as it
   enters the viewport, adding the .visible class which
   CSS transitions to full opacity + position.
───────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target); /* trigger only once */
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    /* Graceful fallback for older browsers */
    els.forEach(el => el.classList.add('visible'));
  }
}


/* ─────────────────────────────────────────
   7. BACK TO TOP BUTTON
───────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ─────────────────────────────────────────
   8. FLOATING TELEGRAM BUTTON TOGGLE
───────────────────────────────────────── */
function initFabToggle() {
  const toggleBtn = document.getElementById('fabToggle');
  const fabItems  = document.getElementById('fabItems');
  const fabIcon   = document.getElementById('fabIcon');
  if (!toggleBtn || !fabItems) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = fabItems.style.display === 'flex';
    fabItems.style.display = isOpen ? 'none' : 'flex';
    toggleBtn.classList.toggle('active', !isOpen);
    toggleBtn.setAttribute('aria-expanded', String(!isOpen));
    if (fabIcon) fabIcon.className = isOpen ? 'fas fa-comment-medical' : 'fas fa-times';
  });
}


/* ─────────────────────────────────────────
   9. APPOINTMENT FORM
   • HTML5 constraint validation first
   • Async POST to Formspree (no page reload)
   • Inline success / error feedback messages
   • Button disabled during submit to prevent duplicates
───────────────────────────────────────── */
function initAppointmentForm() {
  const form      = document.getElementById('apptForm');
  const submitBtn = document.getElementById('apptSubmit');
  const successEl = document.getElementById('apptSuccess');
  const errorEl   = document.getElementById('apptError');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    /* Reset previous messages */
    if (successEl) successEl.hidden = true;
    if (errorEl)   errorEl.hidden   = true;

    /* Let the browser validate required fields */
    if (!form.checkValidity()) { form.reportValidity(); return; }

    /* Disable button while request is in-flight */
    if (submitBtn) {
      submitBtn.disabled = true;
      const span = submitBtn.querySelector('span');
      if (span) span.textContent = 'Sending…';
    }

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.reset();
        if (successEl) {
          successEl.hidden = false;
          successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        throw new Error('Response ' + res.status);
      }
    } catch (err) {
      console.error('[Appointment form]', err);
      if (errorEl) errorEl.hidden = false;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        const span = submitBtn.querySelector('span');
        if (span) span.textContent = 'Submit Appointment Request';
      }
    }
  });
}


/* ─────────────────────────────────────────
   10. SERVICES GRID — dynamic card rendering
   Cards are injected into #serviceGrid so content
   can be updated in one place (this array) without
   editing the HTML.
───────────────────────────────────────── */
const SERVICES = [
  { icon: 'fa-heartbeat',       name: 'Cardiology' },
  { icon: 'fa-user-md',         name: 'Internal Medicine' },
  { icon: 'fa-cut',             name: 'General Surgery' },
  { icon: 'fa-baby',            name: 'Pediatrics' },
  { icon: 'fa-venus',           name: 'Obstetrics & Gynecology' },
  { icon: 'fa-ear',             name: 'ENT' },
  { icon: 'fa-x-ray',          name: 'Radiology' },
  { icon: 'fa-tooth',           name: 'Dental' },
  { icon: 'fa-brain',           name: 'Neurosurgery' },
  { icon: 'fa-bone',            name: 'Orthopedics' },
  { icon: 'fa-spa',             name: 'Dermatology & Cosmetology' },
  { icon: 'fa-procedures',      name: 'Anesthesia & Pain' },
  { icon: 'fa-flask',           name: 'Laboratory' },
  { icon: 'fa-walking',         name: 'Physiotherapy' },
  { icon: 'fa-head-side-virus', name: 'Psychiatry' },
  { icon: 'fa-child',           name: 'Maternity Services' },
  { icon: 'fa-pills',           name: 'Pharmacy & Ambulance' },
  { icon: 'fa-plus-circle',     name: 'Other Services' },
];

function renderServices() {
  const grid = document.getElementById('serviceGrid');
  if (!grid) return;

  /* Build the entire grid HTML in one string (single DOM write = fast) */
  grid.innerHTML = SERVICES.map(s =>
    `<a href="services.html?service=${encodeURIComponent(s.name.toLowerCase().replace(/\s+/g,'-'))}"
        class="service-card reveal"
        aria-label="${s.name}">
       <div class="service-card-icon" aria-hidden="true">
         <i class="fas ${s.icon}"></i>
       </div>
       <h3>${s.name}</h3>
     </a>`
  ).join('');

  /* Observe the freshly created cards for scroll reveal */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}


/* ─────────────────────────────────────────
   11. APPOINTMENT DATE — set minimum to today
   Prevents the date picker from allowing past dates.
───────────────────────────────────────── */
function initDateMin() {
  const dateInput = document.getElementById('appt-date');
  if (!dateInput) return;
  dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
}


/* ─────────────────────────────────────────
   12. SMOOTH SCROLL FOR ANCHOR LINKS
   Accounts for the sticky header height so the
   target section is not hidden beneath it.
───────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById('siteHeader')?.offsetHeight || 70;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - headerH - 8,
        behavior: 'smooth'
      });
    });
  });
}


/* ─────────────────────────────────────────
   13. FOOTER COPYRIGHT YEAR — auto-updates
───────────────────────────────────────── */
function initFooterYear() {
  const el = document.getElementById('footer-text');
  if (el) el.textContent = `© ${new Date().getFullYear()} Geez Hospital. All rights reserved.`;
}


/* ─────────────────────────────────────────
   14. INIT — runs once the DOM is fully parsed
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Language */
  const savedLang = localStorage.getItem(SITE_LANG_KEY) || 'eng';
  const switcher  = document.getElementById('language-switcher');
  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener('change', () => applyTranslations(switcher.value));
  }
  applyTranslations(savedLang);

  /* UI */
  initStickyHeader();
  initScrollProgress();
  initMobileNav();
  initScrollReveal();
  initBackToTop();
  initFabToggle();

  /* Forms & inputs */
  initAppointmentForm();
  initDateMin();

  /* Dynamic content */
  renderServices();

  /* Navigation & misc */
  initSmoothScroll();
  initFooterYear();
});
