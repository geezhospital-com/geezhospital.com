/* ══════════════════════════════════════════════════════════════
   GEEZ HOSPITAL — script.js  (Merged & Final)
   ──────────────────────────────────────────────────────────────
   Merge notes:
   • Translation dictionary expanded with ALL keys from
     Subscript_2.js (service1-h3 … service18-h3, menu-*,
     dept-*, facilities, media, search-placeholder, footer-text,
     hero-main-title, articles, patient-info, departments, etc.)
   • Professional Tigrinya & Amharic text for About / Mission /
     Vision taken verbatim from Subscript_2.js.
   • Placeholder handling for <input> elements added to
     applyTranslations() per Subscript_2.js behaviour.
   • <title data-translate> support added.
   • All professional features from the original script.js are
     fully preserved: sticky header, scroll progress bar, mobile
     nav, scroll reveal, back-to-top, floating Telegram button,
     appointment form async submit, dynamic service card rendering,
     smooth scroll, and footer year.
   ──────────────────────────────────────────────────────────────
   Sections:
     1.  Constants & configuration
     2.  Language / Translation system  ← EXPANDED
     3.  Sticky header shadow on scroll
     4.  Scroll progress bar
     5.  Mobile navigation
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
const SITE_LANG_KEY = 'geez_lang'; /* localStorage key */

/* ─────────────────────────────────────────
   2. LANGUAGE / TRANSLATION SYSTEM
   ─────────────────────────────────────────
   Keys are the union of both script.js and Subscript_2.js.
   Organised into logical groups with comments so future
   editors can easily locate and add new keys.

   Groups:
     A. Navigation & UI chrome
     B. Hero section
     C. Quick-access cards
     D. About / Mission / Vision
     E. Services (individual service names: service1-h3 … 18)
     F. Services section headings
     G. Doctor cards & specialist menus
     H. Department menu items
     I. Facilities / Media / Articles / Patient Info pages
     J. Appointment form & testimonial
     K. Map & CTA
     L. Footer
───────────────────────────────────────── */
const translations = {

  /* ════════════════════════════════════
     ENGLISH
  ════════════════════════════════════ */
  eng: {

    /* A — Navigation & UI chrome */
    'hero-main-title':         'Geez Hospital | ግዕዝ ሆስፒታል',
    'home':                    'Home',
    'about-us':                'About Us',
    'menu-about-us':           'About Us',
    'menu-mission':            'Mission',
    'menu-vision':             'Vision',
    'menu-services-about':     'Services Overview',
    'services':                'Services',
    'doctors':                 'Doctors',
    'departments':             'Departments',
    'facilities':              'Facilities',
    'media':                   'Media',
    'media-patient-info':      'Patient Information',
    'media-articles':          'Articles',
    'news':                    'News and Events',
    'gallery':                 'Gallery',
    'patient-satisfaction-survey': 'Patient Satisfaction Survey',
    'contact':                 'Contact Us',
    'contact-us-btn':          'Book Appointment',
    'search-placeholder':      'Search...',
    'announcement':            'Emergency line open 24/7 — Call +251 920 008 338',

    /* B — Hero */
    'hero-badge':              "Axum's Premier Medical Centre",
    'hero-title':              'Chosen for Our Care.\nTrusted for Our Expertise.',
    'hero-sub':                'World-class specialist healthcare in the heart of Axum — modern technology, compassionate doctors, 24/7 emergency services.',
    'hero-btn-appointment':    'Book an Appointment',
    'hero-btn-services':       'Explore Services',
    'stat-services':           'Departments',
    'stat-doctors':            'Specialist Doctors',
    'stat-emergency':          'Emergency Care',

    /* C — Quick-access cards */
    'qa-appt':                 'Book Appointment',
    'qa-appt-sub':             'Online & Walk-in',
    'qa-doctors':              'Find a Doctor',
    'qa-doctors-sub':          'Specialists & Sub-specialists',
    'qa-services':             'Our Services',
    'qa-services-sub':         '18+ departments',
    'qa-emergency':            'Emergency',
    'qa-emergency-sub':        '+251 920 008 338',

    /* D — About / Mission / Vision */
    'about-eyebrow':           'Who We Are',
    'about-h2':                'About Us',
    'about-badge':             'Est. 2011',
    'about-p1':                'Established in 2011 E.C., Geez Hospital is one of the leading institutions in the central zone and Tigray, providing modern and efficient medical services with international standards. We aim to make world-class healthcare accessible to every citizen, becoming one of the largest and most trusted medical institutions in the entire zone and its surroundings. We are founded on providing compassionate care, high professional competence, and modern equipment. We place great emphasis on patient safety and excellent service.',
    'mission-h3':              'Our Mission',
    'mission-p':               'To provide excellent, affordable, accessible, and accountable medical care to all citizens; to offer comprehensive, high-quality, and affordable healthcare that combines professional excellence with compassionate care; to create a world-class medical practice and uphold the highest medical ethics.',
    'vision-h3':               'Our Vision',
    'vision-p':                'To become a globally respected medical institution in Africa by providing world-class medical services, driven by our excellent professional competence and patient-centered care.',

    /* E — Individual service names (used by nav submenus + renderServices) */
    'service1-h3':             'Internal Medicine',
    'service2-h3':             'Cardiology',
    'service3-h3':             'General Surgery',
    'service4-h3':             'Pediatrics & Adolescents',
    'service5-h3':             'Obstetrics & Gynecology',
    'service6-h3':             'ENT',
    'service7-h3':             'Radiology',
    'service8-h3':             'Dental',
    'service9-h3':             'Neurosurgery',
    'service10-h3':            'Orthopedics',
    'service11-h3':            'Dermatology & Cosmetology',
    'service12-h3':            'Anesthesia & Pain Management',
    'service13-h3':            'Laboratory',
    'service14-h3':            'Physiotherapy',
    'service15-h3':            'Psychiatry',
    'service16-h3':            'Maternity Services',
    'service17-h3':            'Pharmacy & Ambulance',
    'service18-h3':            'Other Services',

    /* F — Services section headings */
    'services-eyebrow':        'What We Offer',
    'our-services-h2':         'Our Medical Services',
    'services-h3':             'Services Overview',
    'services-intro':          'Specialist and sub-specialist care across 18+ departments, powered by modern technology and expert physicians.',
    'services-p-about':        "We offer a wide range of specialist and sub-specialist fields (e.g., Cardiology, Oncology, Neurosurgery, Orthopedics, ENT, Ophthalmology, Dermatology, Obstetrics and Gynecology, Pediatric care, various diagnostic services, and emergency care) with modern technology and professional competence. For a detailed list of our services, please refer to the 'Our Services' section.",
    'all-services-btn':        'View All Our Services',

    /* G — Doctor cards & specialist menus */
    'doctors-eyebrow':         'Meet the Team',
    'doctors-h2':              'Our Expert Physicians',
    'view-all-doctors':        'Meet All Doctors',
    'dr-tesfay-name':          'Dr. Tesfay Atsbeha',
    'dr-tesfay-specialty':     'Interventional Cardiology',
    'dr-higus-name':           'Dr. Higus Teklu',
    'dr-higus-specialty':      'Internal Medicine',
    'appointment-btn':         'Book',
    'menu-surgeons':           'Surgeons',
    'menu-gynecologists':      'Gynecologists',
    'menu-pediatricians':      'Pediatricians',
    'menu-internists':         'Internists',
    'menu-orthopedicians':     'Orthopedicians',
    'menu-radiologists':       'Radiologists',
    'menu-oncologists':        'Oncologists',
    'menu-maxillofacial':      'Maxillofacial Surgeons',
    'menu-ent-plastic':        'ENT, Head & Neck and Plastic Surgeons',
    'menu-dermatologists':     'Dermatologists',
    'menu-psychiatrists':      'Psychiatrists',
    'menu-ophthalmologists':   'Ophthalmologists',
      'menu-dentists':           'Dentists',

    /* H — Department menu items */
    'dept-surgery':            'Surgery',
    'dept-pediatrics':         'Pediatrics',
    'dept-obsgyn':             'Obstetrics and Gynecology',
    'dept-internal-medicine':  'Internal Medicine',
    'dept-orthopedics':        'Orthopedics',
    'dept-radiology':          'Radiology',
    'dept-oncology':           'Oncology',
    'dept-dermatology':        'Dermatology',
    'dept-psychiatry':         'Psychiatry',
    'dept-ophthalmology':      'Ophthalmology',
    'departments-h2':          'Our Departments',
    'departments-p':           'Explore the specialized departments at Geez Hospital, where expert care meets advanced technology.',

    /* I — Facilities / Media / Articles / Patient Info pages */
    'facilities-h2':           'Our Facilities',
    'facilities-p':            'Geez Hospital is equipped with state-of-the-art medical technology and modern facilities to provide you with the best possible care.',
    'patient-info-h2':         'Patient Information',
    'patient-info-p':          'Find essential information for your visit, including admission, discharge, rights, and responsibilities.',
    'articles-h2':             'Health Articles',
    'articles-p':              'Stay informed with our latest health articles, tips, and medical insights from our expert team.',

    /* J — Appointment form & testimonial */
    'testimonial-p':           "Geez Hospital's doctors and staff are truly exceptional — compassionate, highly skilled, and attentive. The care I received changed my life. I am deeply grateful.",
    'testimonial-span':        '— Ato Gebremedhin Kahsay, Axum',

    /* K — Map & CTA */
    'view-on-map':             'Open in Google Maps for Directions',
    'cta-title':               'Ready to Take the Next Step?',
    'cta-sub':                 'Book an appointment or contact us — we are here 24/7.',

    /* L — Footer */
    'footer-brand-desc':       'World-class healthcare in Axum, Tigray. Compassionate care for every patient.',
    'footer-quick-links':      'Quick Links',
    'footer-services-title':   'Top Services',
    'footer-contact-title':    'Contact Us',
    'footer-address':          'Kindeya Kebele, In front of Ethio-Telecom, Behind Central Café, Axum, Tigray, Ethiopia',
    'footer-text':             'Copyright © 2026 Geez Hospital | Developed By Legesse Teklu Gebrekidan — 0911179955',
  },

  /* ════════════════════════════════════
     TIGRINYA
     — Professional terminology from Subscript_2.js
       used for About / Mission / Vision.
     — All 18 service names, menus, departments,
       and page-specific content included.
  ════════════════════════════════════ */
  tig: {

    /* A — Navigation & UI chrome */
    'hero-main-title':         'ሆስፒታል ግዕዝ',
    'home':                    'መእተዊ',
    'about-us':                'ብዛዕባና',
    'menu-about-us':           'ብዛዕባና',
    'menu-mission':            'ተልእኾና',
    'menu-vision':             'ራእይና',
    'menu-services-about':     'ሓፈሻዊ ግልጋሎታት',
    'services':                'ግልጋሎታት',
    'doctors':                 'ሓኻይም',
    'departments':             'ክፍለታት',
    'facilities':              'ማሽናት',
    'media':                   'ሚድያ',
    'media-patient-info':      'ሓበሬታ ሕሙማት',
    'media-articles':          'ጽሑፋት',
    'news':                    'ዜናን ፍጻሜታትን',
    'gallery':                 'ጋለሪ',
    'patient-satisfaction-survey': 'ናይ ሕሙማት ሳትስፋክሽን መርመራ',
    'contact':                 'ተወከሱና',
    'contact-us-btn':          'ቆፀሮ ሓዙ',
    'search-placeholder':      'ድለ...',
    'announcement':            'ህጹጽ መስመር 24/7 ክፉት እዩ — ደውሉ +251 920 008 338',

    /* B — Hero */
    'hero-badge':              'ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን',
    'hero-title':              'ብሉጽን መሪሕ ደረጃ ዘለዎ ማእኸል ሕክምና!!።',
    'hero-sub':                'ግዕዝ ሆስፒታል፡ ኣብ ከተማ ኣኽሱም ዓለም-ለኻዊ ደረጃ ዘለዎ ሕክምና   —  ዘመናዊ ቴክኖሎጂን  ምስ ህጹጽ ግልጋግሎት 24/7።',
    'hero-btn-appointment':    'ቆፀሮ ሓዙ',
    'hero-btn-services':       'ግልጋሎታት ርአ',
    'stat-services':           'ክፍሊታት ሕክምና',
    'stat-doctors':            'ስፔሻሊስት ሓካይም ',
    'stat-emergency':          'ህጹጽ ረድኤት',

    /* C — Quick-access cards */
    'qa-appt':                 'ቆፀሮ ሓዙ',
    'qa-appt-sub':             'ኦንላይን ወይ ምምጻእ',
    'qa-doctors':              'ሓኪም ረኽቡ',
    'qa-doctors-sub':          'ስፔሻሊስትን ሰብ-ስፔሻሊስትን',
    'qa-services':             'ግልጋሎታትና',
    'qa-services-sub':         '18+ ክፍሊታት ሕክምና',
    'qa-emergency':            'ሃንደበታ ሕክምና',
    'qa-emergency-sub':        '+251 920 008 338',

    /* D — About / Mission / Vision
       Professional Tigrinya from Subscript_2.js */
    'about-eyebrow':           'ብዛዕባና',
    'about-h2':                'ብዛዕባና',
    'about-badge':             'ዝተምስረተ 2011',
    'about-p1':                'ሆስፒታል ግዕዝ ብ2011 ኣ.ግ ዝተመስረተ፣ ኣብ ማእኸላይ ዞባ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ። ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።',
    'mission-h3':              'ተልእኾና',
    'mission-p':               'ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።',
    'vision-h3':               'ራእይና',
    'vision-p':                'ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',

    /* E — Individual service names */
    'service1-h3':             'ውሽጣዊ ሕማማት ሕክምና',
    'service2-h3':             'ሕክምና ልቢ',
    'service3-h3':             'ሓፈሻዊ ሕክምና',
    'service4-h3':             'ሕክምና ህጻናት',
    'service5-h3':             'ሕክምና ነፍሰጾራትን ደቂኣንስትዮን',
    'service6-h3':             'ሕክምና ኣፍንጫ፣ እዝኒ፣ ጎሮሮ',
    'service7-h3':             'ራድዮሎጂ',
    'service8-h3':             'ሕክምና ስኒ',
    'service9-h3':             'ኒውሮሰርጀሪ',
    'service10-h3':            'ኦርቶፔዲክስ',
    'service11-h3':            'ደርማቶሎጂን ኮስመቶሎጂን',
    'service12-h3':            'ኣነስቴዥያን ሕክምና ሕማምን',
    'service13-h3':            'ላብራቶሪ',
    'service14-h3':            'ፊዝዮቴራፒ',
    'service15-h3':            'ሳይካትሪ',
    'service16-h3':            'ኣገልግሎታት ማትርኒቲ',
    'service17-h3':            'ፋርማሲን ኣምቡላንስን',
    'service18-h3':            'ካልኦት ኣገልግሎታት',

    /* F — Services section headings */
    'services-eyebrow':        'እንህቦ',
    'our-services-h2':         'ሕክምናዊ ኣገልግሎታትና',
    'services-h3':             'ዝርዝር ግልጋሎታት',
    'services-intro':          'ኣብ 18+ ክፍሊታት ስፔሻሊስት ክንክን፣ ብዘመናዊ ቴክኖሎጂን ሓካይምን።',
    'services-p-about':        'ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ ካብ ክሳድ ንላዕሊ፣ ዓይኒ፣ ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን፣ መርመራታትን ከምኡውን ናይ ህፁፅ ሓደጋን ግልጋሎት) ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።',
    'all-services-btn':        'ኹሎም ግልጋሎትና ኣብዚ ተወከስ',

    /* G — Doctor cards & specialist menus */
    'doctors-eyebrow':         'ሓካይምና',
    'doctors-h2':              'ክኢላ ሓካይምና',
    'view-all-doctors':        'ኩሎም ሓካይም ርአ',
    'dr-tesfay-name':          'ዶ/ር ተስፋይ ኣጽበሃ',
    'dr-tesfay-specialty':     'ኢንተርቨንሽናል ካርዲዮሎጂ',
    'dr-higus-name':           'ዶ/ር ሕጉስ ተኽሉ',
    'dr-higus-specialty':      'ውሽጣዊ ሕማማት ሕክምና',
    'appointment-btn':         'ቆፀሮ',
    'menu-surgeons':           'ሰርጀንስ',
    'menu-gynecologists':      'ጋይናኮሎጂስትስ',
    'menu-pediatricians':      'ፔዲያትሪሽያን',
    'menu-internists':         'ኢንተርኒስትስ',
    'menu-orthopedicians':     'ኦርቶፔዲሽያን',
    'menu-radiologists':       'ራድዮሎጂስትስ',
    'menu-oncologists':        'ኦንኮሎጂስትስ',
    'menu-maxillofacial':      'ማክሲሎፋሻል ሰርጀንስ',
    'menu-ent-plastic':        'ENT, ርእሲን ክሳድን ከምኡ እውን ፕላስቲክ ሰርጀንስ',
    'menu-dermatologists':     'ደርማቶሎጂስትስ',
    'menu-psychiatrists':      'ሳይካትሪስትስ',
    'menu-ophthalmologists':   'ኦፍታልሞሎጂስትስ',
    'menu-dentists':            'ክፍሊ ሕክምና ስኒ',

    /* H — Department menu items */
    'dept-surgery':            'ክፍሊ ሕክምና',
    'dept-pediatrics':         'ክፍሊ ሕክምና ህጻናት',
    'dept-obsgyn':             'ክፍሊ ሕክምና ነፍሰጾራትን ደቂኣንስትዮን',
    'dept-internal-medicine':  'ክፍሊ ውሽጣዊ ሕክምና',
    'dept-orthopedics':        'ክፍሊ ኦርቶፔዲክስ',
    'dept-radiology':          'ክፍሊ ራድዮሎጂ',
    'dept-oncology':           'ክፍሊ ኦንኮሎጂ',
    'dept-dermatology':        'ክፍሊ ደርማቶሎጂ',
    'dept-psychiatry':         'ክፍሊ ሳይካትሪ',
    'dept-ophthalmology':      'ክፍሊ ሕክምና ዓይኒ',
    'departments-h2':          'ክፍሊታት ሕክምና',
    'departments-p':           'ኣብ ሆስፒታል ግዕዝ ዝርከቡ ፍሉያት ክፍሊታት ሕክምና ዝድህስሱሉ፣ ብቑዕ ክንክን ምስ ዘመናዊ ቴክኖሎጂ ዝርከቡሉ ቦታ እዩ።',

    /* I — Facilities / Media / Articles / Patient Info */
    'facilities-h2':           'ማሽናትና',
    'facilities-p':            'ግዕዝ ሆስፒታል ንተገልገልቲ ዝበለጸ ሕክምና ንምሃብ ብብሉጽ ቴክኖሎጂን ዘመናዊ ሳርሕታትን ዝተዓጠቐ እዩ።',
    'patient-info-h2':         'ሓበሬታ ሕሙማት',
    'patient-info-p':          'ንጉብኝትኩም ኣገዳሲ ዝኾነ ሓበሬታ ንምርካብ፣ ምእታው፣ ምውጻእ፣ መሰላትን ሓላፍነታትን ተመልከቱ።',
    'articles-h2':             'ጽሑፋት ጥዕና',
    'articles-p':              'ካብቶም ብቑዓት ሰራሕተኛታትና ንዝመጹ ሓደሽቲ ጽሑፋት ጥዕና፣ ፍልጠትን ሕክምናዊ ሓበሬታን ተኸታተሉ።',

    /* J — Appointment form & testimonial */
    'testimonial-p':           'ሓካይምን ሰራሕተኛታትን ሆስፒታል ግዕዝ ብሓቂ ብሉጻት እዮም — ርህሩሃት፣ ክኢላታትን ሓለይትን። ዝተገብረለይ ክንክን ንህይወተይ ቀይሩዎ እዩ። ናይ ብሓቂ ክብሪን ምስጋናን ይግብኦም እዩ።',
    'testimonial-span':        '— ኣቶ ገብረሜድህን ካሕሳይ፣ ኣኽሱም',

    /* K — Map & CTA */
    'view-on-map':             'ኣብ ጉግል ካርታ ክፈቱ',
    'cta-title':               'ዝቕጽል ስጉምቲ ንምውሳድ ድሉዋት ዲኹም?',
    'cta-sub':                 'ቆፀሮ ሓዙ ወይ ርኸቡና — ኩሉ ግዜ ኣለና።',

    /* L — Footer */
    'footer-brand-desc':       'ዓለምለኻዊ ደረጃኡ ዝሓለወ ሕክምና። ንኹሉ ተገልጋሊ ብሓልዮትን ክንክን ግልጋሎት ንህብ።',
    'footer-quick-links':      'ቅልጡፍ ሊንካት',
    'footer-services-title':   'ዋና ግልጋሎታትና',
    'footer-contact-title':    'ርኸቡና',
    'footer-address':          'ጣብያ ክንደያ፣ ፊትንፊት ኢትዮ-ቴሌኮም፣ ድሕሪ ሴንትራል ካፌ፣ ኣኽሱም፣ ትግራይ፣ ኢትዮጵያ',
    'footer-text':             'Copy right © 2026 ሆስፒታል ግዕዝ | Developed By Legesse Teklu Gebrekidan — 0911179955',
  },

  /* ════════════════════════════════════
     AMHARIC
     — Professional terminology from Subscript_2.js
       used for About / Mission / Vision.
     — All 18 service names, menus, departments,
       and page-specific content included.
  ════════════════════════════════════ */
  amh: {

    /* A — Navigation & UI chrome */
    'hero-main-title':         'ግዕዝ ሆስፒታል',
    'home':                    'ዋና ገጽ',
    'about-us':                'ስለ እኛ',
    'menu-about-us':           'ስለ እኛ',
    'menu-mission':            'ተልዕኮ',
    'menu-vision':             'ራዕይ',
    'menu-services-about':     'የአገልግሎቶች አጠቃላይ እይታ',
    'services':                'አገልግሎቶች',
    'doctors':                 'ሐኪሞች',
    'departments':             'መምሪያዎች',
    'facilities':              'የህክምና መገልገያዎች',
    'media':                   'ሚዲያ',
    'media-patient-info':      'የታካሚ መረጃ',
    'media-articles':          'ጽሑፎች',
    'news':                    'ዜናዎች እና ዝግጅቶች',
    'gallery':                 'ጋለሪ',
    'patient-satisfaction-survey': 'የታካሚ እርካታ ጥናት',
    'contact':                 'ያግኙን',
    'contact-us-btn':          'ቀጠሮ ያዙ',
    'search-placeholder':      'ፈልግ...',
    'announcement':            'የድንገተኛ ጊዜ መስመር 24/7 ክፍት ነው — ይደውሉ +251 920 008 338',

    /* B — Hero */
    'hero-badge':              'ዓለም አቀፋዊ ደረጃውን የጠበቀ ህክምና። ለሁሉም ተገልጋዮች በርህራሄና በጥንቃቄ አገልግሎት እንሰጣለን።"',
    'hero-title':              'እንክብካቤያችን ተመራጭ፤ በሙያ ብቃታችን ተመራጭ!',
    'hero-sub':                'በአክሱም ከተማ ዓለም ኣቀፋዊ ደረጃ የጠበቀ የህክምና ግልጋሎት — ዘመናዊ ቴክኖሎጂ፣ ብቁ ሀኪሞች፣ 24/7 የድንገተኛ ጊዜ አገልግሎት።',
    'hero-btn-appointment':    'ቀጠሮ ያዙ',
    'hero-btn-services':       'አገልግሎቶችን ይመልከቱ',
    'stat-services':           'ክፍሎች',
    'stat-doctors':            'ልዩ ሐኪሞች',
    'stat-emergency':          'የድንገተኛ ጊዜ እንክብካቤ',

    /* C — Quick-access cards */
    'qa-appt':                 'ቀጠሮ ያዙ',
    'qa-appt-sub':             'ኦንላይን ወይም በመምጣት',
    'qa-doctors':              'ሐኪም ያግኙ',
    'qa-doctors-sub':          'ስፔሻሊስቶች',
    'qa-services':             'አገልግሎቶቻችን',
    'qa-services-sub':         '18+ ክፍሎች',
    'qa-emergency':            'ድንገተኛ',
    'qa-emergency-sub':        '+251 920 008 338',

    /* D — About / Mission / Vision
       Professional Amharic from Subscript_2.js */
    'about-eyebrow':           'እኛ ማን ነን',
    'about-h2':                'ስለ እኛ',
    'about-badge':             'የተቋቋመ 2011',
    'about-p1':                'ግዕዝ ሆስፒታል በ2011 ዓ.ም. የተቋቋመ ሲሆን በማዕከላዊ ዞን እና ትግራይ ውስጥ ዓለም አቀፍ ደረጃውን የጠበቀ ዘመናዊና ቀልጣፋ የህክምና አገልግሎት ከሚሰጡ ተቋማት አንዱ ነው። የዓለም ደረጃ የህክምና አገልግሎትን ለእያንዳንዱ ዜጋ ተደራሽ ለማድረግ፣ በመላው ዞኑ እና አካባቢው ትልቁ እና ታማኝ የህክምና ተቋማት አንዱ ለመሆን ያለመ ነው። በአዛኝ እንክብካቤ፣ ከፍተኛ የሙያ ብቃት እና ዘመናዊ መሳሪያዎች ላይ የተመሰረተ ነው። የታካሚ ደህንነት እና እጅግ በጣም ጥሩ አገልግሎት ላይ ከፍተኛ ትኩረት እንሰጣለን።',
    'mission-h3':              'ተልዕኮአችን',
    'mission-p':               'ለሁሉም ዜጎች እጅግ በጣም ጥሩ፣ ተመጣጣኝ፣ ተደራሽ እና ተጠያቂ የህክምና እንክብካቤ መስጠት፤ የሙያ ብቃትን ከአዛኝ እንክብካቤ ጋር የሚያጣምር ሁሉን አቀፍ፣ ከፍተኛ ጥራት ያለው እና ተመጣጣኝ የጤና እንክብካቤ መስጠት፤ ዓለም አቀፍ ደረጃ ያለው የህክምና አሰራር መፍጠር እና ከፍተኛ የህክምና ስነ-ምግባርን መጠበቅ።',
    'vision-h3':               'ራዕያችን',
    'vision-p':                'በእኛ እጅግ በጣም ጥሩ ሙያዊ ብቃት እና የታካሚ ተኮር እንክብካቤ በመነዳት፣ ዓለም አቀፍ ደረጃ ያለው የህክምና ተቋም ለመሆን — ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',

    /* E — Individual service names */
    'service1-h3':             'የውስጥ ደዌ ህክምና',
    'service2-h3':             'የልብ ህክምና',
    'service3-h3':             'አጠቃላይ ቀዶ ጥገና',
    'service4-h3':             'የህፃናት እና ወጣቶች ህክምና',
    'service5-h3':             'የማህፀንና ፅንስ ህክምና',
    'service6-h3':             'የአፍንጫ፣ ጆሮ፣ ጉሮሮ ህክምና',
    'service7-h3':             'ራዲዮሎጂ',
    'service8-h3':             'የጥርስ ህክምና',
    'service9-h3':             'የነርቭ ቀዶ ጥገና',
    'service10-h3':            'የአጥንት ህክምና',
    'service11-h3':            'የቆዳ ህክምና እና ውበት',
    'service12-h3':            'ማደንዘዣ እና ህመም ማስታገሻ',
    'service13-h3':            'ላብራቶሪ',
    'service14-h3':            'ፊዚዮቴራፒ',
    'service15-h3':            'የአእምሮ ህክምና',
    'service16-h3':            'የወሊድ አገልግሎቶች',
    'service17-h3':            'ፋርማሲ እና አምቡላንስ',
    'service18-h3':            'ሌሎች አገልግሎቶች',

    /* F — Services section headings */
    'services-eyebrow':        'የምናቀርበው',
    'our-services-h2':         'የህክምና አገልግሎቶቻችን',
    'services-h3':             'የአገልግሎቶች አጠቃላይ እይታ',
    'services-intro':          'ዘመናዊ ቴክኖሎጂ ባላቸው ስፔሻሊስቶች 18+ ክፍሎች ውስጥ ሙሉ እንክብካቤ።',
    'services-p-about':        'ብዙ አይነት ልዩ ልዩ እና ንዑስ ልዩ ልዩ መስኮች (ለምሳሌ የልብ ህክምና፣ ኦንኮሎጂ፣ የነርቭ ቀዶ ጥገና፣ የአጥንት ህክምና፣ የአፍንጫ፣ ጆሮ፣ ጉሮሮ ህክምና፣ የአይን ህክምና፣ የቆዳ ህክምና፣ የማህፀንና ፅንስ ህክምና፣ የህፃናት ህክምና፣ የተለያዩ የምርመራ አገልግሎቶች እና የድንገተኛ ህክምና) በዘመናዊ ቴክኖሎጂ እና በሙያ ብቃት እናቀርባለን።',
    'all-services-btn':        'ሁሉንም አገልግሎቶቻችንን ይመልከቱ',

    /* G — Doctor cards & specialist menus */
    'doctors-eyebrow':         'ቡድናችን',
    'doctors-h2':              'ባለሙያ ሐኪሞቻችን',
    'view-all-doctors':        'ሁሉንም ሐኪሞች ይመልከቱ',
    'dr-tesfay-name':          'ዶ/ር ተስፋይ ኣጽበሃ',
    'dr-tesfay-specialty':     'ኢንተርቨንሽናል ካርዲዮሎጂ',
    'dr-higus-name':           'ዶ/ር ሒጉስ ተኽሉ',
    'dr-higus-specialty':      'የውስጥ ሕክምና',
    'appointment-btn':         'ቀጠሮ',
    'menu-surgeons':           'የቀዶ ጥገና ሐኪሞች',
    'menu-gynecologists':      'የማህፀን ሐኪሞች',
    'menu-pediatricians':      'የህፃናት ሐኪሞች',
    'menu-internists':         'የውስጥ ደዌ ሐኪሞች',
    'menu-orthopedicians':     'የአጥንት ህክምና ሐኪሞች',
    'menu-radiologists':       'ራዲዮሎጂስቶች',
    'menu-oncologists':        'የካንሰር ህክምና ሐኪሞች',
    'menu-maxillofacial':      'ማክሲሎፌሻል የቀዶ ጥገና ሐኪሞች',
    'menu-ent-plastic':        'የአፍንጫ፣ ጆሮ፣ ጉሮሮ፣ አንገት እና የፕላስቲክ ቀዶ ጥገና ሐኪሞች',
    'menu-dermatologists':     'የቆዳ ህክምና ሐኪሞች',
    'menu-psychiatrists':      'የአእምሮ ህክምና ባለሙያዎች',
    'menu-ophthalmologists':   'የአይን ህክምና ባለሙያዎች',

    /* H — Department menu items */
    'dept-surgery':            'የቀዶ ጥገና ክፍል',
    'dept-pediatrics':         'የህፃናት ህክምና ክፍል',
    'dept-obsgyn':             'የማህፀንና ፅንስ ህክምና ክፍል',
    'dept-internal-medicine':  'የውስጥ ደዌ ህክምና ክፍል',
    'dept-orthopedics':        'የአጥንት ህክምና ክፍል',
    'dept-radiology':          'ራዲዮሎጂ ክፍል',
    'dept-oncology':           'የካንሰር ህክምና ክፍል',
    'dept-dermatology':        'የቆዳ ህክምና ክፍል',
    'dept-psychiatry':         'የአእምሮ ህክምና ክፍል',
    'dept-ophthalmology':      'የአይን ህክምና ክፍል',
    'departments-h2':          'የእኛ መምሪያዎች',
    'departments-p':           'በግዕዝ ሆስፒታል ያሉትን ልዩ ልዩ ክፍሎች ያስሱ፣ የባለሙያ እንክብካቤ ከዘመናዊ ቴክኖሎጂ ጋር የሚገናኝበት ቦታ ነው።',

    /* I — Facilities / Media / Articles / Patient Info */
    'facilities-h2':           'የእኛ መገልገያዎች',
    'facilities-p':            'ግዕዝ ሆስፒታል ዘመናዊ የህክምና ቴክኖሎጂ እና ዘመናዊ መገልገያዎች የተገጠመለት ሲሆን የተሻለውን እንክብካቤ ለእርስዎ ለማቅረብ ነው።',
    'patient-info-h2':         'የታካሚ መረጃ',
    'patient-info-p':          'ጉብኝትዎን በተመለከተ አስፈላጊ መረጃዎችን፣ የመግቢያ፣ የመውጫ፣ መብቶችን እና ኃላፊነቶችን ጨምሮ ያግኙ።',
    'articles-h2':             'የጤና ጽሑፎች',
    'articles-p':              'ከባለሙያ ቡድናችን የቅርብ ጊዜ የጤና ጽሑፎችን፣ ምክሮችን እና የህክምና ግንዛቤዎችን ያግኙ።',

    /* J — Appointment form & testimonial */
    'testimonial-p':           'የጌዝ ሆስፒታል ሐኪሞችና ሠራተኞች በእውነት አስደናቂ ናቸው — ርህሩሆች፣ ብቃት ያላቸው፣ ሁሌም ጥንቁቆች። ያገኘሁት እንክብካቤ ሕይወቴን ቀይሮታል። በጣም አመሰግናለሁ።',
    'testimonial-span':        '— አቶ ገብረሜድህን ካህሳይ፣ አክሱም',

    /* K — Map & CTA */
    'view-on-map':             'በGoogle Maps ይክፈቱ',
    'cta-title':               'ቀጣዩን እርምጃ ለመውሰድ ዝግጁ ናቸሁ?',
    'cta-sub':                 'ቀጠሮ ያዙ ወይም ያግኙን — ሁሌ አለን።',

    /* L — Footer */
    'footer-brand-desc':       'በአክሱም፣ ትግራይ ዓለም ደረጃ ህክምና። ለሁሉም ሕሙም ርህሩህ እንክብካቤ።',
    'footer-quick-links':      'ፈጣን አገናኞች',
    'footer-services-title':   'ዋና አገልግሎቶች',
    'footer-contact-title':    'ያግኙን',
    'footer-address':          'ኪንደያ ቀበሌ፣ ከኢትዮ-ቴሌኮም ፊት ለፊት፣ ከሴንትራል ካፌ ኋላ፣ አክሱም፣ ትግራይ፣ ኢትዮጵያ',
    'footer-text':             'የቅጂ መብት © 2026 ግዕዝ ሆስፒታል | በአሰር ተክሉ ገብረኪዳን የተሰራ — 0911179955',
  }
}; /* end translations */


/* ─────────────────────────────────────────
   applyTranslations(lang)
   ─────────────────────────────────────────
   Applies the selected language dictionary to every
   [data-translate] element in the current document.

   Special handling (merged from Subscript_2.js):
   • <input placeholder> → setAttribute('placeholder', …)
   • <title data-translate> → textContent update
   • Page-specific hero paragraphs for inner pages
     (departments, facilities, patient-info, articles)
   • <select> option values are left untouched (structural)

   lang persistence: saved to localStorage under SITE_LANG_KEY.
───────────────────────────────────────── */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  /* — Translate all data-translate elements — */
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key] === undefined) return; /* key not found — leave element as-is */

    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      /* Input placeholders need setAttribute, not innerHTML */
      el.setAttribute('placeholder', dict[key]);
    } else {
      /* Use innerHTML to support the <br> in footer-text */
      el.innerHTML = dict[key];
    }
  });

  /* — Update <title data-translate="…"> — */
  const titleEl = document.querySelector('title[data-translate]');
  if (titleEl) {
    const titleKey = titleEl.getAttribute('data-translate');
    if (dict[titleKey]) titleEl.textContent = dict[titleKey];
  }

  /* — Page-specific hero paragraph updates (from Subscript_2.js) — */
  const path = window.location.pathname;
  const pageHeroMap = {
    'departments.html':  ['#departments-hero p',  'departments-p'],
    'facilities.html':   ['#facilities-hero p',   'facilities-p'],
    'patient-info.html': ['#patient-info-hero p',  'patient-info-p'],
    'articles.html':     ['#articles-hero p',      'articles-p'],
  };
  Object.entries(pageHeroMap).forEach(([page, [selector, key]]) => {
    if (path.includes(page)) {
      const heroP = document.querySelector(selector);
      if (heroP && dict[key]) heroP.textContent = dict[key];
    }
  });

  /* — Update html[lang] attribute & persist choice — */
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
   Updates bar width (0 – 100%) on every scroll event.
───────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0).toFixed(1) + '%';
  }, { passive: true });
}


/* ─────────────────────────────────────────
   5. MOBILE NAVIGATION
   Hamburger toggles the nav drawer open/closed.
   Closes on link tap or outside click.
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
  nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => toggleNav(false)));
  document.addEventListener('click', e => {
    const header = document.getElementById('siteHeader');
    if (header && !header.contains(e.target)) toggleNav(false);
  });
}


/* ─────────────────────────────────────────
   6. SCROLL REVEAL — IntersectionObserver
   Elements with class="reveal" animate in when
   they enter the viewport (fires once per element).
───────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('visible')); /* fallback */
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
   WhatsApp excluded per project requirements.
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
   • HTML5 constraint validation
   • Async fetch POST to Formspree (no page reload)
   • Inline success / error messages
   • Button disabled during in-flight request
───────────────────────────────────────── */
function initAppointmentForm() {
  const form      = document.getElementById('apptForm');
  const submitBtn = document.getElementById('apptSubmit');
  const successEl = document.getElementById('apptSuccess');
  const errorEl   = document.getElementById('apptError');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (successEl) successEl.hidden = true;
    if (errorEl)   errorEl.hidden   = true;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    if (submitBtn) {
      submitBtn.disabled = true;
      const span = submitBtn.querySelector('span');
      if (span) span.textContent = 'Sending…';
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (successEl) { successEl.hidden = false; successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
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
   Injects service cards into #serviceGrid.
   Names deliberately kept in English here;
   data-translate keys (service1-h3 … service18-h3)
   handle the localised display at runtime.
───────────────────────────────────────── */
const SERVICES = [
  { icon: 'fa-user-md',         name: 'Internal Medicine',          key: 'service1-h3'  },
  { icon: 'fa-heartbeat',       name: 'Cardiology',                 key: 'service2-h3'  },
  { icon: 'fa-cut',             name: 'General Surgery',            key: 'service3-h3'  },
  { icon: 'fa-baby',            name: 'Pediatrics & Adolescents',   key: 'service4-h3'  },
  { icon: 'fa-venus',           name: 'Obstetrics & Gynecology',    key: 'service5-h3'  },
  { icon: 'fa-ear',             name: 'ENT',                        key: 'service6-h3'  },
  { icon: 'fa-x-ray',          name: 'Radiology',                  key: 'service7-h3'  },
  { icon: 'fa-tooth',           name: 'Dental',                     key: 'service8-h3'  },
  { icon: 'fa-brain',           name: 'Neurosurgery',               key: 'service9-h3'  },
  { icon: 'fa-bone',            name: 'Orthopedics',                key: 'service10-h3' },
  { icon: 'fa-spa',             name: 'Dermatology & Cosmetology',  key: 'service11-h3' },
  { icon: 'fa-procedures',      name: 'Anesthesia & Pain Mgmt',     key: 'service12-h3' },
  { icon: 'fa-flask',           name: 'Laboratory',                 key: 'service13-h3' },
  { icon: 'fa-walking',         name: 'Physiotherapy',              key: 'service14-h3' },
  { icon: 'fa-head-side-virus', name: 'Psychiatry',                 key: 'service15-h3' },
  { icon: 'fa-child',           name: 'Maternity Services',         key: 'service16-h3' },
  { icon: 'fa-pills',           name: 'Pharmacy & Ambulance',       key: 'service17-h3' },
  { icon: 'fa-plus-circle',     name: 'Other Services',             key: 'service18-h3' },
];

function renderServices() {
  const grid = document.getElementById('serviceGrid');
  if (!grid) return;

  /* Build entire grid in one string (single DOM write for performance).
     Each <h3> carries a data-translate key so applyTranslations()
     will localise it automatically when the language changes. */
  grid.innerHTML = SERVICES.map(s =>
    `<a href="services.html?service=${encodeURIComponent(s.name.toLowerCase().replace(/\s+/g, '-'))}"
        class="service-card reveal"
        aria-label="${s.name}">
       <div class="service-card-icon" aria-hidden="true">
         <i class="fas ${s.icon}"></i>
       </div>
       <h3 data-translate="${s.key}">${s.name}</h3>
     </a>`
  ).join('');

  /* Observe the freshly injected cards so scroll-reveal works */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}


/* ─────────────────────────────────────────
   11. APPOINTMENT DATE — set minimum to today
───────────────────────────────────────── */
function initDateMin() {
  const dateInput = document.getElementById('appt-date');
  if (!dateInput) return;
  dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
}


/* ─────────────────────────────────────────
   12. SMOOTH SCROLL FOR ANCHOR LINKS
   Offsets for sticky header height so targets
   are not hidden beneath the nav bar.
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
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerH - 8, behavior: 'smooth' });
    });
  });
}


/* ─────────────────────────────────────────
   13. FOOTER COPYRIGHT YEAR — auto-updates
───────────────────────────────────────── */
function initFooterYear() {
  const el = document.getElementById('footer-text');
  /* Only update if the element exists AND does not carry a
     data-translate attribute (translated versions are handled
     by applyTranslations via the 'footer-text' key). */
  if (el && !el.hasAttribute('data-translate')) {
    el.textContent = `© ${new Date().getFullYear()} Geez Hospital. All rights reserved.`;
  }
}


/* ─────────────────────────────────────────
   14. INIT — runs once DOM is fully parsed
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* — Language system — */
  const savedLang = localStorage.getItem(SITE_LANG_KEY) || 'eng';
  const switcher  = document.getElementById('language-switcher');
  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener('change', () => {
      applyTranslations(switcher.value);
      /* Re-translate dynamically injected service cards */
      applyTranslations(switcher.value);
    });
  }

  /* Render dynamic content BEFORE applyTranslations so the
     data-translate keys on service cards are present in the DOM */
  renderServices();

  /* Apply language (will now also translate service card <h3>s) */
  applyTranslations(savedLang);

  /* — UI behaviours — */
  initStickyHeader();
  initScrollProgress();
  initMobileNav();
  initScrollReveal();
  initBackToTop();
  initFabToggle();

  /* — Forms & inputs — */
  initAppointmentForm();
  initDateMin();

  /* — Misc — */
  initSmoothScroll();
  initFooterYear();
});