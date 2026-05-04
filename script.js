/* ══════════════════════════════════════════════════════════════
   GEEZ HOSPITAL — script.js
   Handles: i18n, nav, services render, scroll effects, footer
   ══════════════════════════════════════════════════════════════ */

'use strict';

// ── SERVICE DATA ──────────────────────────────────────────────
const SERVICES = [
  { key: 'service1-h3',  icon: 'fas fa-stethoscope'        },
  { key: 'service2-h3',  icon: 'fas fa-heartbeat'           },
  { key: 'service3-h3',  icon: 'fas fa-scalpel'             },
  { key: 'service4-h3',  icon: 'fas fa-child'               },
  { key: 'service5-h3',  icon: 'fas fa-female'              },
  { key: 'service6-h3',  icon: 'fas fa-ear-listen'          },
  { key: 'service7-h3',  icon: 'fas fa-x-ray'               },
  { key: 'service8-h3',  icon: 'fas fa-tooth'               },
  { key: 'service9-h3',  icon: 'fas fa-brain'               },
  { key: 'service10-h3', icon: 'fas fa-bone'                },
  { key: 'service11-h3', icon: 'fas fa-spa'                 },
  { key: 'service12-h3', icon: 'fas fa-syringe'             },
  { key: 'service13-h3', icon: 'fas fa-flask'               },
  { key: 'service14-h3', icon: 'fas fa-running'             },
  { key: 'service15-h3', icon: 'fas fa-brain'               },
  { key: 'service16-h3', icon: 'fas fa-baby'                },
  { key: 'service17-h3', icon: 'fas fa-ambulance'           },
  { key: 'service18-h3', icon: 'fas fa-plus-circle'         },
];

// ── TRANSLATIONS ──────────────────────────────────────────────
const TRANSLATIONS = {
  eng: {
    /* nav */
    'announcement': 'Emergency line open 24/7 — Call <a href="tel:+251920008338">+251 920 008 338</a>',
    'home': 'Home', 'services': 'Services', 'doctors': 'Doctors',
    'gallery': 'Gallery', 'news': 'News', 'contact': 'Contact', 'contact-us-btn': 'Book Appointment',
    /* hero */
    'hero-badge': "Axum's Premier Medical Centre",
    'hero-title': 'Chosen for Our Care.<br><em>Trusted for Our Expertise.</em>',
    'hero-sub': 'World-class specialist healthcare in the heart of Axum — modern technology, compassionate doctors, 24/7 emergency services.',
    'hero-btn-appointment': 'Book an Appointment',
    'hero-btn-services': 'Explore Services',
    'stat-services': 'Departments', 'stat-doctors': 'Specialist Doctors', 'stat-emergency': 'Emergency Care',
    /* quick */
    'qa-appt': 'Book Appointment', 'qa-appt-sub': 'Online & Walk-in',
    'qa-doctors': 'Find a Doctor', 'qa-doctors-sub': 'Specialists & Sub-specialists',
    'qa-services': 'Our Services', 'qa-services-sub': '18+ departments',
    'qa-emergency': 'Emergency', 'qa-emergency-sub': '+251 920 008 338',
    /* about */
    'about-eyebrow': 'Who We Are',
    'about-h2': 'A Legacy of Trust in Tigray Healthcare',
    'about-badge': 'Est. 2011',
    'about-p1': 'Founded in 2011 E.C., Geez Hospital stands among Tigray\'s most trusted medical institutions — built on compassionate care, expert professional competence, and state-of-the-art equipment. Our mission is to make world-class healthcare accessible to every citizen.',
    'vision-h3': 'Our Vision', 'vision-p': 'To become a globally respected medical institution in Africa through patient-centered, world-class care.',
    'mission-h3': 'Our Mission', 'mission-p': 'To provide excellent, affordable, and accessible healthcare by combining professional excellence with compassionate, ethical medical practice.',
    /* services */
    'services-eyebrow': 'What We Offer',
    'our-services-h2': 'Our Medical Services',
    'services-intro': 'Specialist and sub-specialist care across 18+ departments, powered by modern technology and expert physicians.',
    'all-services-btn': 'View All Services',
    'service1-h3': 'Internal Medicine', 'service2-h3': 'Cardiology',
    'service3-h3': 'General Surgery', 'service4-h3': 'Pediatrics & Adolescents',
    'service5-h3': 'Obstetrics & Gynecology', 'service6-h3': 'ENT',
    'service7-h3': 'Radiology', 'service8-h3': 'Dental',
    'service9-h3': 'Neurosurgery', 'service10-h3': 'Orthopedics',
    'service11-h3': 'Dermatology & Cosmetology', 'service12-h3': 'Anaesthesia & Pain',
    'service13-h3': 'Laboratory', 'service14-h3': 'Physiotherapy',
    'service15-h3': 'Psychiatry', 'service16-h3': 'Maternity Services',
    'service17-h3': 'Pharmacy & Ambulance', 'service18-h3': 'Other Services',
    /* doctors */
    'doctors-eyebrow': 'Meet the Team', 'doctors-h2': 'Our Expert Physicians',
    'dr-tesfay-name': 'Dr. Tesfay Atsbeha', 'dr-tesfay-specialty': 'Interventional Cardiology',
    'dr-higus-name': 'Dr. Higus Teklu', 'dr-higus-specialty': 'Internal Medicine',
    'appointment-btn': 'Book', 'view-all-doctors': 'Meet All Doctors',
    /* testimonial */
    'testimonial-p': 'Geez Hospital\'s doctors and staff are truly exceptional — compassionate, highly skilled, and attentive. The care I received changed my life. I am deeply grateful.',
    'testimonial-span': '— Ato Gebremedhin Kahsay, Axum',
    /* cta */
    'cta-title': 'Ready to Take the Next Step?', 'cta-sub': 'Book an appointment or contact us — we are here 24/7.',
    /* contact page */
    'contact-h2': 'Get In Touch', 'contact-p': 'Book an appointment or reach us with any question.',
    'contact-form-title': 'Send Us a Message',
    'form-full-name': 'Full Name', 'form-email': 'Email Address', 'form-subject': 'Subject / Medical Query',
    'form-phone': 'Phone Number', 'form-address': 'Address', 'form-age': 'Age',
    'form-gender': 'Gender', 'form-select-gender': 'Select Gender',
    'form-gender-male': 'Male', 'form-gender-female': 'Female', 'form-gender-other': 'Other',
    'form-message': 'Message', 'form-submit-btn': 'Send Message',
    'our-location-map': 'Find Us on the Map', 'view-on-map': 'Open in Google Maps',
    /* footer */
    'footer-brand-desc': 'World-class healthcare in Axum, Tigray. Compassionate care for every patient.',
    'footer-quick-links': 'Quick Links', 'footer-services-title': 'Top Services', 'footer-contact-title': 'Contact',
    'footer-address': 'Kindeya Kebele, In front of Ethio-Telecom, Behind Central Café, Axum, Tigray',
    'footer-text': '© 2026 Geez Hospital. All rights reserved.',
  },

  tig: {
    'announcement': 'ናይ ህፁፅ ሓደጋ ሰዓታት 24/7 ክፉት — ስልኪ ደዉሉ <a href="tel:+251920008338">+251 920 008 338</a>',
    'home': 'መእተዊ', 'services': 'ግልጋሎታትና', 'doctors': 'ሓኻይምና',
    'gallery': 'ጋለሪ', 'news': 'ሓድሽ ሓበሬታ', 'contact': 'ምትእስሳር', 'contact-us-btn': 'ቆፀሮ ንምሓዝ',
    'hero-badge': 'ቀዳማይ ሕክምናዊ ትካል ኣኽሱም',
    'hero-title': 'ብሓልዮትና ንምረጽ።<br><em>ብሞያዊ ብቕዓትና ንእመን።</em>',
    'hero-sub': 'ዓለምለኻዊ ደረጃ ዘለዎ ስፔሻሊስት ሕክምና ኣብ ማእኸል ኣኽሱም — ዘመናዊ ቴክኖሎጂ፣ ሓዛናዊ ሓኻይም፣ ናይ ህፁፅ ሓደጋ ሕክምና 24/7።',
    'hero-btn-appointment': 'ቆፀሮ ንምሓዝ', 'hero-btn-services': 'ግልጋሎታትና ርኣዩ',
    'stat-services': 'ክፍለ-ሕክምናታት', 'stat-doctors': 'ሓኻይም ስፔሻሊስት', 'stat-emergency': 'ህፁፅ ሓደጋ',
    'qa-appt': 'ቆፀሮ ንምሓዝ', 'qa-appt-sub': 'ኦንላይን & ብቐጥታ',
    'qa-doctors': 'ሓኪም ምርካብ', 'qa-doctors-sub': 'ስፔሻሊስት & ሳብ-ስፔሻሊስት',
    'qa-services': 'ግልጋሎታትና', 'qa-services-sub': '18+ ክፍለ-ሕክምናታት',
    'qa-emergency': 'ህፁፅ ሓደጋ', 'qa-emergency-sub': '+251 920 008 338',
    'about-eyebrow': 'ብዛዕባና',
    'about-h2': 'ናይ ምትእምማን ውርሻ ኣብ ሕክምና ትግራይ',
    'about-badge': 'ዝተመስረተ 2011',
    'about-p1': 'ሆስፒታል ግዕዝ ብ2011 ዓ.ም ዝተመስረተ ሆስፒታል፣ ኣብ ማእኸላይ ዞባን ትግራይን ካብ ዝበለጹ ዘመናዊ ሕክምናዊ ትካላት ሓደ እዩ። ብሓልዮት ዝተሃንጸ፣ ብሉጽ ሞያዊ ብቕዓት ዘለዎ፣ ዘመናዊ መሳርሒታት ዘካለለ ትካል እዩ።',
    'vision-h3': 'ራእይ', 'vision-p': 'ኣብ ኣፍሪካ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ትካል ምዃን ብምቕዳም ንሕሙም ዘማእክል ሓልዮት ምቕራብ።',
    'mission-h3': 'ልእኽቶ', 'mission-p': 'ንኹሎም ዜጋ ብሉጽ፣ ተመጣጣኒ፣ ተበፃሒ ሕክምና ብምቕራብ ሞያዊ ብቕዓትን ሓዛናዊ ሓልዮትን ምቕዳም።',
    'services-eyebrow': 'እንህቦ ግልጋሎት',
    'our-services-h2': 'ናይ ሕክምናዊ ግልጋሎታትና',
    'services-intro': 'ስፔሻሊስትን ሳብ-ስፔሻሊስትን ሕክምና ኣብ 18+ ክፍሊ-ሕክምናታት፣ ብዘመናዊ ቴክኖሎጂን ብሉጻት ሓኻይምን ይቐርብ።',
    'all-services-btn': 'ኩሎም ግልጋሎታትና ርኣዩ',
    'service1-h3': 'ውሽጣዊ ሕማማት ሕክምና', 'service2-h3': 'ሕክምና ልቢ',
    'service3-h3': 'ሓፈሻዊ ሕክምና', 'service4-h3': 'ሕክምና ህጻናት',
    'service5-h3': 'ሕክምና ነፍሰጾርን ደቂኣንስትዮን', 'service6-h3': 'ኣፍንጫ፣ እዝኒ፣ ጎሮሮ',
    'service7-h3': 'ራዲዮሎጂ', 'service8-h3': 'ሕክምና ስኒ',
    'service9-h3': 'ሓንጎልን መትኒታትን', 'service10-h3': 'ዓፅሚ ሕክምና',
    'service11-h3': 'ቆርበትን ስነጽባቐን', 'service12-h3': 'ኣነስቴዥያ',
    'service13-h3': 'ላቦራቶሪ', 'service14-h3': 'ፊዝዮቴራፒ',
    'service15-h3': 'ሳይካትሪ', 'service16-h3': 'ሕክምና ወሊድ',
    'service17-h3': 'ፋርማሲን ኣምቡላንስን', 'service18-h3': 'ካልኦት ግልጋሎታት',
    'doctors-eyebrow': 'ሓኻይምና', 'doctors-h2': 'ብሉጻት ሓኻይምና',
    'dr-tesfay-name': 'ዶ/ር ተስፋይ ኣጽብሃ', 'dr-tesfay-specialty': 'ፍሉይ ስፔሻሊስት ሕማማት ልቢ',
    'dr-higus-name': 'ዶ/ር ሕጉስ ተኽሉ', 'dr-higus-specialty': 'ስፔሻሊስት ውሽጣዊ ሕማማት',
    'appointment-btn': 'ቆፀሮ', 'view-all-doctors': 'ኩሎም ሓኻይምና ርኣዩ',
    'testimonial-p': 'ሓኻይምን ሰራሕተኛታትን ናይ ሆስፒታል ግዕዝ ብሓቂ ፍሉያት እዮም — ሓዛናዊ፣ ብሉጽ ሞያ ዘለዎም። እቲ ዝረኸብኩዎ ሕክምና ህይወተይ ቀዪሩ። ኣዝየ የመስግን።',
    'testimonial-span': '— ኣቶ ገብረመድህን ካሕሳይ፣ ኣኽሱም',
    'cta-title': 'ሕዚ ጀምሩ?', 'cta-sub': 'ቆፀሮ ሓዙ ወይ ርኸቡና — ሃለዋ 24/7 ኣሎና።',
    'contact-h2': 'ርኸቡና', 'contact-p': 'ቆፀሮ ምሓዝ ወይ ዝኾነ ሕቶ ይሃቡና።',
    'contact-form-title': 'መልእኽቲ ስደዱልና',
    'form-full-name': 'ምሉእ ሽም', 'form-email': 'ኢሜይል', 'form-subject': 'ሕቶ/ሕክምና',
    'form-phone': 'ቁጽሪ ስልኪ', 'form-address': 'ኣድራሻ', 'form-age': 'ዕድመ',
    'form-gender': 'ጾታ', 'form-select-gender': 'ጾታ ምረጽ',
    'form-gender-male': 'ተባዕታይ', 'form-gender-female': 'ኣንስተይቲ', 'form-gender-other': 'ካልእ',
    'form-message': 'መልእኽቲ', 'form-submit-btn': 'ልኣኽ',
    'our-location-map': 'ኣብ ካርታ ርኣዩና', 'view-on-map': 'ካርታ ክፈቱ',
    'footer-brand-desc': 'ዓለምለኻዊ ሕክምና ኣብ ኣኽሱም፣ ትግራይ። ሓዛናዊ ሓልዮት ንነፍሲ ወከፍ ሕሙም።',
    'footer-quick-links': 'ዋና ሊንክታት', 'footer-services-title': 'ዋና ግልጋሎታት', 'footer-contact-title': 'ምትእስሳር',
    'footer-address': 'ጣብያ ክንደያ፣ ፊትንፊት ኢትዮቴለኮም፣ ድሕሪ ሴንትራል ካፌ፣ ኣኽሱም፣ ትግራይ',
    'footer-text': '© 2026 ሆስፒታል ግዕዝ። ኩሎም መሰላት ተሓዙ።',
  },

  amh: {
    'announcement': 'የድንገኛ ህክምና ቁጥር 24/7 ክፍት ነው — ይደውሉ <a href="tel:+251920008338">+251 920 008 338</a>',
    'home': 'ዋና ገጽ', 'services': 'አገልግሎቶች', 'doctors': 'ሐኪሞች',
    'gallery': 'ጋለሪ', 'news': 'ዜናዎች', 'contact': 'ያግኙን', 'contact-us-btn': 'ቀጠሮ ያዙ',
    'hero-badge': 'የአክሱም ዋና የህክምና ማዕከል',
    'hero-title': 'ለእንክብካቤያችን ተመርጠናል።<br><em>ለብቃታችን ይታመናሉ።</em>',
    'hero-sub': 'በአክሱም ልብ ውስጥ ዓለም አቀፍ ደረጃ ያለው ስፔሻሊስት ህክምና — ዘመናዊ ቴክኖሎጂ፣ አሳቢ ሐኪሞች፣ 24/7 ድንገኛ አገልግሎቶች።',
    'hero-btn-appointment': 'ቀጠሮ ያዙ', 'hero-btn-services': 'አገልግሎቶቻችንን ይዩ',
    'stat-services': 'ክፍሎች', 'stat-doctors': 'ስፔሻሊስት ሐኪሞች', 'stat-emergency': 'ድንገኛ ህክምና',
    'qa-appt': 'ቀጠሮ ያዙ', 'qa-appt-sub': 'ኦንላይን & ቀጥታ',
    'qa-doctors': 'ሐኪም ያግኙ', 'qa-doctors-sub': 'ስፔሻሊስቶች & ንዑስ ስፔሻሊስቶች',
    'qa-services': 'አገልግሎቶቻችን', 'qa-services-sub': '18+ ክፍሎች',
    'qa-emergency': 'ድንገኛ ሁኔታ', 'qa-emergency-sub': '+251 920 008 338',
    'about-eyebrow': 'ስለ እኛ',
    'about-h2': 'በትግራይ ህክምና ውስጥ የታመነ ቅርስ',
    'about-badge': 'የተቋቋመ 2011',
    'about-p1': 'ግዕዝ ሆስፒታል በ2011 ዓ.ም. የተቋቋመ ሲሆን በትግራይ ውስጥ ካሉ ዋና ዋና ዘመናዊ የህክምና ተቋማት አንዱ ነው። ርህሩህ እንክብካቤ፣ ከፍተኛ ሙያዊ ብቃት እና ዘመናዊ መሳሪያዎች ላይ ተመስርቷል።',
    'vision-h3': 'ራዕያችን', 'vision-p': 'ለታካሚ ተኮር፣ ዓለም አቀፍ ህክምና ካለው ተቋም ጋር በአፍሪካ ዓለም አቀፍ ደረጃ ያለው የህክምና ተቋም ለመሆን።',
    'mission-h3': 'ተልዕኮአችን', 'mission-p': 'ለሁሉም ዜጎች እጅግ ጥሩ፣ ተመጣጣኝ እና ተደራሽ ህክምና ሙያዊ ብቃትን ከአሳቢ፣ ሥነ ምግባራዊ ህክምና ጋር አጣምሮ ማቅረብ።',
    'services-eyebrow': 'የምናቀርበው',
    'our-services-h2': 'የህክምና አገልግሎቶቻችን',
    'services-intro': 'በ18+ ክፍሎች ስፔሻሊስት እና ንዑስ ስፔሻሊስት እንክብካቤ፣ ዘመናዊ ቴክኖሎጂ እና ባለሙያ ሐኪሞች።',
    'all-services-btn': 'ሁሉንም አገልግሎቶቻችንን ይዩ',
    'service1-h3': 'የውስጥ ደዌ ህክምና', 'service2-h3': 'የልብ ህክምና',
    'service3-h3': 'አጠቃላይ ቀዶ ጥገና', 'service4-h3': 'የህፃናት ህክምና',
    'service5-h3': 'የማህፀንና ፅንስ ህክምና', 'service6-h3': 'የአፍንጫ፣ ጆሮ፣ ጉሮሮ',
    'service7-h3': 'ራዲዮሎጂ', 'service8-h3': 'የጥርስ ህክምና',
    'service9-h3': 'የነርቭ ቀዶ ጥገና', 'service10-h3': 'የአጥንት ህክምና',
    'service11-h3': 'የቆዳ ህክምና እና ውበት', 'service12-h3': 'ማደንዘዣ',
    'service13-h3': 'ላብራቶሪ', 'service14-h3': 'ፊዚዮቴራፒ',
    'service15-h3': 'የአዕምሮ ህክምና', 'service16-h3': 'የወሊድ አገልግሎቶች',
    'service17-h3': 'ፋርማሲ እና አምቡላንስ', 'service18-h3': 'ሌሎች አገልግሎቶች',
    'doctors-eyebrow': 'ቡድናችንን ያግኙ', 'doctors-h2': 'ባለሙያ ሐኪሞቻችን',
    'dr-tesfay-name': 'ዶ/ር ተስፋይ አጽብሃ', 'dr-tesfay-specialty': 'ስፔሻሊስት የልብ ህክምና',
    'dr-higus-name': 'ዶ/ር ሕጉስ ተኽሉ', 'dr-higus-specialty': 'ስፔሻሊስት የውስጥ ደዌ',
    'appointment-btn': 'ቀጠሮ', 'view-all-doctors': 'ሁሉንም ሐኪሞቻችን ያግኙ',
    'testimonial-p': 'የግዕዝ ሆስፒታል ሐኪሞችና ሰራተኞች በሙሉ ልዩ ናቸው — ርህሩሃን፣ ከፍተኛ ብቃት ያላቸው። የተቀበልኩት እንክብካቤ ህይወቴን ለወጠ። በጣም አመሰግናለሁ።',
    'testimonial-span': '— አቶ ገብረመድህን ካህሳይ፣ አክሱም',
    'cta-title': 'ለመቀጠል ዝግጁ ናቸሁ?', 'cta-sub': 'ቀጠሮ ያዙ ወይም ያግኙን — 24/7 እዚ አለን።',
    'contact-h2': 'ያግኙን', 'contact-p': 'ቀጠሮ ያዙ ወይም ማንኛውንም ጥያቄ ይጠይቁ።',
    'contact-form-title': 'መልዕክት ይላኩልን',
    'form-full-name': 'ሙሉ ስም', 'form-email': 'ኢሜይል', 'form-subject': 'ጥያቄ/ህክምና',
    'form-phone': 'ስልክ ቁጥር', 'form-address': 'አድራሻ', 'form-age': 'ዕድሜ',
    'form-gender': 'ፆታ', 'form-select-gender': 'ፆታ ይምረጡ',
    'form-gender-male': 'ወንድ', 'form-gender-female': 'ሴት', 'form-gender-other': 'ሌላ',
    'form-message': 'መልዕክት', 'form-submit-btn': 'ላክ',
    'our-location-map': 'በካርታ ያግኙን', 'view-on-map': 'ካርታ ይክፈቱ',
    'footer-brand-desc': 'ዓለም አቀፍ ህክምና በአክሱም፣ ትግራይ። ለእያንዳንዱ ታካሚ አሳቢ እንክብካቤ።',
    'footer-quick-links': 'ፈጣን ሊንኮች', 'footer-services-title': 'ዋና አገልግሎቶች', 'footer-contact-title': 'ያግኙን',
    'footer-address': 'ቅንድያ ቀበሌ፣ ከኢትዮ-ቴሌኮም ፊት ለፊት፣ ከሴንትራል ካፌ ኋላ፣ አክሱም፣ ትግራይ',
    'footer-text': '© 2026 ግዕዝ ሆስፒታል። ሁሉም መብቶች የተጠበቁ።',
  }
};

// ── DOM READY ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNav();
  initServicesGrid();
  initScrollEffects();
  initBackToTop();
  setFooterYear();
});

// ── LANGUAGE ──────────────────────────────────────────────────
function initLanguage() {
  const switcher = document.getElementById('language-switcher');
  if (!switcher) return;

  const saved = localStorage.getItem('gh_lang') || 'eng';
  switcher.value = saved;
  applyTranslations(saved);

  switcher.addEventListener('change', e => {
    const lang = e.target.value;
    localStorage.setItem('gh_lang', lang);
    applyTranslations(lang);
    // sync all switchers on page (if multiple)
    document.querySelectorAll('#language-switcher').forEach(s => s.value = lang);
  });
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.eng;
  document.documentElement.lang = lang === 'tig' ? 'ti' : lang === 'amh' ? 'am' : 'en';

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (!t[key]) return;
    if (el.tagName === 'INPUT' && el.placeholder !== undefined && key.includes('placeholder')) {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // Page <title>
  const titleEl = document.querySelector('title[data-translate]');
  if (titleEl) {
    const tk = titleEl.getAttribute('data-translate');
    if (t[tk]) titleEl.textContent = t[tk];
  }

  // Footer year
  const footerText = document.getElementById('footer-text');
  if (footerText && t['footer-text']) {
    footerText.innerHTML = t['footer-text'];
  }

  // Re-render service grid labels if present
  renderServiceCards(lang);
}

// ── SERVICES GRID ─────────────────────────────────────────────
function initServicesGrid() {
  renderServiceCards(localStorage.getItem('gh_lang') || 'eng');
}

function renderServiceCards(lang) {
  const grid = document.getElementById('serviceGrid');
  if (!grid) return;
  const t = TRANSLATIONS[lang] || TRANSLATIONS.eng;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card reveal">
      <div class="service-card-icon"><i class="${s.icon}"></i></div>
      <h3>${t[s.key] || s.key}</h3>
    </div>
  `).join('');
  // re-observe new elements
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── NAVIGATION ────────────────────────────────────────────────
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  const header = document.getElementById('siteHeader');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!header.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  }

  // Sticky shadow
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Active nav link by current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function initScrollEffects() {
  document.querySelectorAll('.reveal, .service-card, .doctor-card, .quick-card, .pillar, .news-card, .gallery-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 6) * 60 + 'ms';
    revealObserver.observe(el);
  });
}

// ── BACK TO TOP ───────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── FOOTER YEAR ───────────────────────────────────────────────
function setFooterYear() {
  const el = document.getElementById('footer-text');
  if (el && !el.textContent.trim()) {
    el.textContent = `© ${new Date().getFullYear()} Geez Hospital. All rights reserved.`;
  }
}
