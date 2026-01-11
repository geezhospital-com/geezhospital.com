document.addEventListener('DOMContentLoaded', () => {
    // Language translation data
    const translations = {
        "eng": {
            "hero-main-title": "Geez Hospital", // Simplified
            "hero-h2": "Chosen for our care, trusted for our expertise!.",
            "hero-p": "Prioritizing your health, we offer comprehensive services with the finest specialists and sub-specialists, combined with modern technological equipment. For any inquiries or to book an appointment, please register here.",
            "hero-btn-appointment": "Book an Appointment",
            "hero-btn-services": "View Our Services",
            "contact-us-btn": "Contact Us",
            "home": "Home",
            "about-us": "About Us",
            "menu-about-us": "About Us",
            "menu-mission": "Mission",
            "menu-vision": "Vision",
            "menu-services-about": "Services Overview",
            "services": "Services",
            "service1-h3": "Internal Medicine",
            "service2-h3": "Cardiology",
            "service3-h3": "General Surgery",
            "service4-h3": "Pediatrics & Adolescents",
            "service5-h3": "Obstetrics & Gynecology",
            "service6-h3": "ENT",
            "service7-h3": "Radiology",
            "service8-h3": "Dental",
            "service9-h3": "Neurosurgery",
            "service10-h3": "Orthopedics",
            "service11-h3": "Dermatology & Cosmetology",
            "service12-h3": "Anesthesia & Pain Management",
            "service13-h3": "Laboratory",
            "service14-h3": "Physiotherapy",
            "service15-h3": "Psychiatry",
            "service16-h3": "Ophthalmology",
            "service17-h3": "Maternity Services",
            "service18-h3": "Pharmacy & Ambulance",
            "service19-h3": "Other Services",
            "doctors": "Doctors",
            "menu-surgeons": "Surgeons",
            "menu-gynecologists": "Gynecologists",
            "menu-pediatricians": "Pediatricians",
            "menu-internists": "Internists",
            "menu-orthopedicians": "Orthopedicians",
            "menu-radiologists": "Radiologists",
            "menu-oncologists": "Oncologists",
            "menu-maxillofacial": "Maxillofacial Surgeons",
            "menu-ent-plastic": "ENT, Head & Neck and Plastic Surgeons",
            "menu-dermatologists": "Dermatologists",
            "menu-psychiatrists": "Psychiatrists",
            "menu-ophthalmologists": "Ophthalmologists", // This key is present in your translations but not directly in the HTML menu
            "departments": "Departments",
            "dept-surgery": "Surgery",
            "dept-pediatrics": "Pediatrics",
            "dept-obsgyn": "Obstetrics and Gynecology",
            "dept-internal-medicine": "Internal Medicine",
            "dept-orthopedics": "Orthopedics",
            "dept-radiology": "Radiology",
            "dept-oncology": "Oncology",
            "dept-dermatology": "Dermatology",
            "dept-psychiatry": "Psychiatry",
            "dept-ophthalmology": "Ophthalmology",
            "facilities": "Facilities",
            "media": "Media",
            "media-patient-info": "Patient Information",
            "media-articles": "Articles",
            "news": "News and Events",
            "gallery": "Gallery",
            "patient-satisfaction-survey": "Patient Satisfaction Survey",
            "contact": "Contact Us",
            "search-placeholder": "Search...",
            "footer-text": "Copyright © 2026 <span class=\"geez-color\">Geez</span> <span class=\"hospital-color\">Hospital</span><br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "About Us", // Assuming this is for about.html hero
            "about-p": "Learn more about Geez Hospital, our mission, vision, and the core values that guide us in providing exceptional healthcare.", // Assuming for about.html hero
            "about-h3": "About Us", // Assuming for about.html general section title
            "about-p1": "Established in 2011 E.C., Geez Hospital is one of the leading institutions in the central zone and Tigray, providing modern and efficient medical services with international standards. We aim to make world-class healthcare accessible to every citizen, becoming one of the largest and most trusted medical institutions in the entire zone and its surroundings. We are founded on providing compassionate care, high professional competence, and modern equipment. We place great emphasis on patient safety and excellent service.",
            "mission-h3": "Our Mission",
            "mission-p": "To provide excellent, affordable, accessible, and accountable medical care to all citizens; to offer comprehensive, high-quality, and affordable healthcare that combines professional excellence with compassionate care; to create a world-class medical practice and uphold the highest medical ethics.",
            "vision-h3": "Our Vision",
            "vision-p": "We envision a future where Geez Hospital is synonymous with innovation, empathy, and unparalleled medical outcomes, setting new benchmarks for healthcare excellence across the continent.",
            "services-h3": "Services Overview", // For about.html services overview section
            "services-p-about": "At Geez Hospital, we are dedicated to offering a comprehensive suite of medical services designed to meet the diverse needs of our community. Our state-of-the-art facilities and a team of dedicated professionals ensure that you receive the best possible care across all specialties.",
            "services-page-h2": "Our Services", // For services.html hero
            "services-page-intro-p": "Geez Hospital offers diverse and modern services provided by highly qualified specialists and sub-specialists.", // For services.html hero
            "all-services-btn": "View All Our Services",
            "departments-h2": "Our Departments", // For departments.html hero
            "departments-p": "Explore the specialized departments at Geez Hospital, where expert care meets advanced technology.", // For departments.html hero
            "facilities-h2": "Our Facilities", // For facilities.html hero
            "facilities-p": "Geez Hospital is equipped with state-of-the-art medical technology and modern facilities to provide you with the best possible care.", // For facilities.html hero
            "doctors-page-title": "Our Doctors", // For doctors.html hero
            "doctors-page-intro": "Geez Hospital provides various services with highly qualified and experienced specialists and sub-specialists. Chosen for our care, trusted for our expertise.", // For doctors.html hero
            "patient-info-h2": "Patient Information", // For patient-info.html hero
            "patient-info-p": "Find essential information for your visit, including admission, discharge, rights, and responsibilities.", // For patient-info.html hero
            "articles-h2": "Health Articles", // For articles.html hero
            "articles-p": "Stay informed with our latest health articles, tips, and medical insights from our expert team.", // For articles.html hero
            "news-h2": "News and Events", // For news.html hero
            "news-p": "Follow the latest news, medical advice, and important updates from Geez Hospital here.", // For news.html hero
            "gallery-h2": "Gallery", // For gallery.html hero
            "gallery-p": "View various images of Geez Hospital, including all modern equipment and medical care provided.", // For gallery.html hero
            "contact-h2": "Contact Us", // Added for contact page hero title
            "contact-p": "For any inquiries or to book an appointment, please reach out to us.", // Added for contact page hero paragraph
            "contact-form-title": "Send us a Message", // Added for contact form title
            "form-full-name": "Full Name:", // Added for form labels
            "form-email": "Email:",
            "form-subject": "Subject/Service:",
            "form-phone": "Phone Number:",
            "form-address": "Address:",
            "form-age": "Age:",
            "form-gender": "Gender:",
            "form-select-gender": "Select Gender",
            "form-gender-male": "Male",
            "form-gender-female": "Female",
            "form-gender-other": "Other",
            "form-message": "Message:",
            "form-submit-btn": "Send",
            "our-location-map": "Our Location on Map", // Added for map section title
            "view-on-map": "View on Map", // Added for map button text

            // Individual Service descriptions for services.html
            "internal-medicine-desc": "Comprehensive internal medicine diagnosis and treatment are provided by highly experienced and professional specialist doctors.",
            "cardiology-desc": "Specialized cardiac disease diagnosis and treatment are provided by highly experienced and professional sub-specialist doctors.",
            "general-surgery-desc": "General surgery is performed using modern equipment and techniques.",
            "pediatrics-adolescents-desc": "Dedicated medical care for infants, children, and teenagers, covering their growth, development, and specific health issues.",
            "obsgyn-desc": "Comprehensive health services for women, including prenatal care, childbirth, postnatal care, and reproductive health.",
            "ent-desc": "Diagnosis and treatment of disorders related to the ear, nose, and throat, including head and neck conditions.",
            "radiology-desc": "Advanced diagnostic imaging services such as X-rays, CT scans, MRI, and ultrasound to aid in accurate medical diagnosis.",
            "dental-desc": "Full range of dental services, from routine check-ups and cleanings to complex restorative and cosmetic dentistry.",
            "neurosurgery-desc": "Surgical treatment for conditions affecting the brain, spinal cord, and peripheral nerves.",
            "orthopedics-desc": "Care for musculoskeletal system disorders, including bones, joints, ligaments, tendons, and muscles.",
            "dermatology-cosmetology-desc": "Diagnosis and treatment of skin, hair, and nail conditions, along with aesthetic and cosmetic procedures.",
            "anesthesia-pain-management-desc": "Providing safe anesthesia for surgeries and effective management of acute and chronic pain conditions.",
            "laboratory-desc": "Comprehensive laboratory testing services crucial for accurate diagnosis and effective patient management.",
            "physiotherapy-desc": "Rehabilitation services to restore movement, strength, and function for patients recovering from injury or illness.",
            "psychiatry-desc": "Mental health services focusing on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders.",
            "ophthalmology-desc": "Comprehensive eye care services, including diagnosis and treatment of eye diseases, vision correction, and surgical procedures.",
            "maternity-services-desc": "Full range of maternity care, from prenatal to postpartum, ensuring the health and well-being of mother and baby.",
            "pharmacy-ambulance-desc-full": "24/7 pharmacy services and emergency ambulance transportation for critical care and patient transfer.",
            "other-services-desc": "Beyond our core specialties, we offer a variety of additional medical and supportive services to ensure holistic patient care.",

            // Individual Department descriptions for departments.html
            "dept-surgery-desc": "Our surgery department offers a wide range of surgical procedures, from general to highly specialized operations, performed by experienced surgeons using state-of-the-art equipment.",
            "dept-pediatrics-desc": "Dedicated care for infants, children, and adolescents, focusing on their unique health needs with compassion and expertise.",
            "dept-obsgyn-desc": "Comprehensive healthcare for women, including pregnancy, childbirth, and reproductive health services.",
            "dept-internal-medicine-desc": "Diagnosis and treatment of adult diseases, providing primary care and managing complex health conditions.",
            "dept-orthopedics-desc": "Specialized care for musculoskeletal system, including bone, joint, ligament, and muscle injuries and diseases.",
            "dept-radiology-desc": "Advanced diagnostic imaging services including X-rays, CT scans, MRIs, and ultrasounds to aid in accurate diagnosis.",
            "dept-oncology-desc": "Comprehensive cancer care, from diagnosis and treatment to supportive care and survivorship programs.",
            "dept-dermatology-desc": "Diagnosis and treatment of skin, hair, and nail conditions, including cosmetic and aesthetic services.",
            "dept-psychiatry-desc": "Mental health services for various psychiatric conditions, offering diagnosis, therapy, and medication management.",
            "dept-ophthalmology-desc": "Comprehensive eye care services, including diagnosis and treatment of eye diseases, vision correction, and surgical procedures."
        },
        "tig": {
            "hero-main-title": "ግዕዝ ሆስፒታል",
            "hero-h2": "ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን",
            "hero-p": "ንጥዕናኹም ቀዳምነት ብምሃብ፣ ብሉፃት ስፔሻሊስትን ሳብስፔሻሊስትታትን ሓኻይም ምስ ዘመናዊ ቴክኖሎጂ መሳርሒታት(ማሽን) ኣዋዲድንና ንፅበየኩም ኣለና። ንዝኾነ ሕቶ ወይ ቆፀሮ ንምሓዝ በይዝኦም ኣብዚ ይመዝገቡ።",
            "hero-btn-appointment": "ቆፀሮ ንምሓዝ",
            "hero-btn-services": "ግልጋሎታትና ርኣዩ",
            "contact-us-btn": "ተወከሰና", // Changed to "ተወከሱና" if preferred for politeness or left as "ተወከሰና"
            "home": "መእተዊ",
            "about-us": "ብዛዕባና",
            "menu-about-us": "ብዛዕባና",
            "menu-mission": "ተልእኾና",
            "menu-vision": "ራእይና",
            "menu-services-about": "ዝርዝር ግልጋሎታት",
            "services": "ግልጋሎታት",
            "service1-h3": "ውሽጣዊ ሕክምና",
            "service2-h3": "ሕክምና ልቢ",
            "service3-h3": "ሓፈሻዊ ሕክምና",
            "service4-h3": "ሕክምና ህጻናትን ኣባጽሕን", // Retained for clarity
            "service5-h3": "ሕክምና ነፍሰጾራትን ደቂኣንስትዮን",
            "service6-h3": "ENT",
            "service7-h3": "ራድዮሎጂ",
            "service8-h3": "ሕክምና ስኒ",
            "service9-h3": "ኒውሮሰርጀሪ",
            "service10-h3": "ኦርቶፔዲክስ",
            "service11-h3": "ደርማቶሎጂን ኮስመቶሎጂን",
            "service12-h3": "ኣነስቴዥያን ሕክምና ሕማምን",
            "service13-h3": "ላብራቶሪ",
            "service14-h3": "ፊዝዮቴራፒ",
            "service15-h3": "ሳይካትሪ",
            "service16-h3": "ሕክምና ዓይኒ",
            "service17-h3": "ኣገልግሎታት ማትርኒቲ",
            "service18-h3": "ፋርማሲን ኣምቡላንስን",
            "service19-h3": "ካልኦት ግልጋሎታት",
            "doctors": "ሓኻይምና",
            "menu-surgeons": "ሰርጀንስ",
            "menu-gynecologists": "ጋይናኮሎጂስትስ",
            "menu-pediatricians": "ፔዲያትሪሽያን",
            "menu-internists": "ኢንተርኒስትስ",
            "menu-orthopedicians": "ኦርቶፔዲሽያን",
            "menu-radiologists": "ራድዮሎጂስትስ",
            "menu-oncologists": "ኦንኮሎጂስትስ",
            "menu-maxillofacial": "ማክሲሎፋሻል ሰርጀንስ",
            "menu-ent-plastic": "ENT, ርእሲን ክሳድን ከምኡ እውን ፕላስቲክ ሰርጀንስ",
            "menu-dermatologists": "ደርማቶሎጂስትስ",
            "menu-psychiatrists": "ሳይካትሪስትስ",
            "menu-ophthalmologists": "ኦፍታልሞሎጂስትስ",
            "departments": "ክፍለታት",
            "dept-surgery": "ክፍሊ ሕክምና",
            "dept-pediatrics": "ክፍሊ ሕክምና ህጻናትን ኣባጽሕን",
            "dept-obsgyn": "ክፍሊ ሕክምና ነፍሰጾራትን ደቂኣንስትዮን",
            "dept-internal-medicine": "ክፍሊ ውሽጣዊ ሕማማት ሕክምና",
            "dept-orthopedics": "ክፍሊ ኦርቶፔዲክስ",
            "dept-radiology": "ክፍሊ ራድዮሎጂ",
            "dept-oncology": "ክፍሊ ኦንኮሎጂ",
            "dept-dermatology": "ክፍሊ ደርማቶሎጂ",
            "dept-psychiatry": "ክፍሊ ሳይካትሪ",
            "dept-ophthalmology": "ክፍሊ ሕክምና ዓይኒ",
            "facilities": "መሳርሒታት ሕክምና",
            "media": "ሚድያ",
            "media-patient-info": "ሓበሬታ ሕሙማት",
            "media-articles": "ጽሑፋት ጥዕና", // Corrected duplicate key
            "news": "ዜናን ፍጻሜታትን",
            "gallery": "ጋለሪ",
            "patient-satisfaction-survey": "ናይ ሕሙማት ሳትስፋክሽን መርመራ",
            "contact": "ተወከሰና",
            "search-placeholder": "ድለ...",
            "footer-text": "Copyright © 2026 <span class=\"geez-color\">ግዕዝ</span> <span class=\"hospital-color\">ሆስፒታል</span><br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "ብዛዕባና",
            "about-p": "ብዛዕባ ሆስፒታል ግዕዝ፣ ተልእኾና፣ ራእይና፣ ከምኡ እውን ነቲ ዝለዓለ ሕክምናዊ ክንክን ንምሃብ ዝመርሑና መሰረታዊ መትከላት እዞም ዝስዑቡ እዮም።",
            "about-h3": "ብዛዕባና",
            "about-p1": "ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።",
            "mission-h3": "ተልእኾና",
            "mission-p": "ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።",
            "vision-h3": "ራእይና",
            "vision-p": "ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።",
            "services-h3": "ዝርዝር ግልጋሎታት",
            "services-p-about": "ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ሕክምና ዉሽጣዊ ሕማማት፣ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን ናይ ሃንደበታዊ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።",
            "services-page-h2": "ግልጋሎታትና",
            "services-page-intro-p": "ግዕዝ ሆስፒታል ብብሉፃት ስፔሻሊስትን ሳብስፔሻሊስትታትን ሓኻይም ዝወሃቡ ዝተፈላለዩን ዘመናዊን ግልጋሎታት ይህብ።",
            "all-services-btn": "ኹሎም ግልጋሎታትና ኣብዚ ርአ",
            "departments-h2": "ክፍለታት ሕክምና",
            "departments-p": "ኣብ ሆስፒታል ግዕዝ ዝርከቡ ፍሉያት ክፍሊታት ሕክምና ዝድህስሱሉ፣ ብቑዕ ክንክን ምስ ዘመናዊ ቴክኖሎጂ ዝርከቡሉ ቦታ እዩ።",
            "facilities-h2": "መሳርሒታት ሕክምና",
            "facilities-p": "ግዕዝ ሆስፒታል ንተገልገልቲ ዝበለጸ ሕክምና ንምሃብ ብብሉጽ ተኽኖሎጂን ዘመናዊ መሳርሕታትን ምስ ብሉጻት ሰብ ምያ ሕክምና ኣወሃሂዱ ግልጋሎት ይህብ ኣሎ።",
            "doctors-page-title": "ሓኻይምና",
            "doctors-page-intro": "ግዕዝ ሆስፒታል ብብሉፃት ብቑዓትን ተመኩሮ ዘለዎምን ስፔሻሊስትን ሳብስፔሻሊስትታትን ሓኻይም ዝተፈላለዩ ግልጋሎታት ይህብ። ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን።",
            "patient-info-h2": "ሓበሬታ ሕሙማት",
            "patient-info-p": "ናብ ሆስፒታልና ክትመፅእ እንተኾይንካ ወይ ክትወፅእ እንተኾይንካ፣ ከምኡ'ውን መሰላትን ሓላፍነታትን ናይ ሕክምና ንምርካብ ዘድልየካ ኩሉ ኣገዳሲ ሓበሬታ ኣብዚ ይርከብ።",
            "articles-h2": "ጽሑፋት ጥዕና",
            "articles-p": "ብብሉጻት ሓኻይም ዝምልከቶም ሰራሕተኛታትን ጠቐምቲ ሓሳባትን ምኽሪታን ዝረኽብሉ ዓምዲ እዩ።",
            "news-h2": "ዜናን ፍጻሜታትን",
            "news-p": "ኣብ ግዕዝ ሆስፒታል ዝወፅኡ ሓደሽቲ ሓበሬታታት፣ ሕክምናዊ ምኽሪታትን ኣገደስቲ ዝርዝራትን ኣብዚ ተኸታተሉ።",
            "gallery-h2": "ጋለሪ",
            "gallery-p": "ናይ ግዕዝ ሆስፒታል ዝተፈላለዩ ምስልታት ኩሎም ዘመነዎት መሳርሕታትን ዝተገብሩ ሕክምናዊ ክንክንን ኣብዚ ምርኣይ ይኽእሉ እዮም ።",
            "contact-h2": "ተራኸቡና", // Added for contact page hero title
            "contact-p": "ንዝኾነ ሕቶ ወይ ቆፀሮ ንምሓዝ በይዝኦም ኣብዚ ይመዝገቡ።", // Added for contact page hero paragraph
            "contact-form-title": "መልእኽቲ ስደዱልና", // Added for contact form title
            "form-full-name": "ምሉእ ሽም:", // Added for form labels
            "form-email": "ኢሜይል:",
            "form-subject": "ዝደለይዎ ሕቶ/ሕክምና:",
            "form-phone": "ቁፅሪ ስልኪ:",
            "form-address": "ኣድራሻ:",
            "form-age": "ዕድመ:",
            "form-gender": "ፆታ:",
            "form-select-gender": "ጾታ ምረፅ",
            "form-gender-male": "ተባዕታይ",
            "form-gender-female": "ኣንስተይቲ",
            "form-gender-other": "ካልእ",
            "form-message": "መልእኽቲ:",
            "form-submit-btn": "ልኣኽ",
            "our-location-map": "ኣድራሻና ብካርታ", // Added for map section title
            "view-on-map": "ኣብ ካርታ ርኣይ", // Added for map button text

            // Individual Service descriptions for services.html
            "internal-medicine-desc": "ሓፈሻዊ ናይ ሕክምና ውሽጢ ምርመራን ሕክምናን ብልዑል ተመክሮን ሞያዊ ብቕዓትን ዝለዎም ስፔሻሊስት ሓኻይም ይወሃብ።",
            "cardiology-desc": "ፍሉይ ናይ ሕማም ልቢ ምርመራን ሕክምናን ብልዑል ተመክሮን ሞያዊ ብቕዓትን ዝለዎም ሳብስፔሻሊስት ሓኻይም ይወሃብ።",
            "general-surgery-desc": "ሓፈሻዊ ናይ ሕክምና ሰርጀሪ ብዘመናዊ መሳርሒታትን ኣገባብን ይስራሕ።",
            "pediatrics-adolescents-desc": "ፍሉይ ሕክምናዊ ክንክን ንጨናዉን፣ ህፃናትን ታሕተዋይን፣ ንዕቤትኦም፣ ምዕባለኦምን ፍሉይ ጥዕናኦም ትኹረት ዝገብር።",
            "obsgyn-desc": "ምሉእ ጥዕናዊ ግልጋሎታት ንደቂኣንስትዮ፣ ቅድሚ ሕርሲ፣ ሕርሲ፣ ድሕሪ ሕርሲ ክንክንን ዝራባሕ ጥዕናን ዝሓወሰ።",
            "ent-desc": "ምርመራን ሕክምናን ንሕማማት ኣፍንጫ፣ ቖርበት፣ ጕርዲ፣ ከምኡ’ውን ሕማማት ርእስን ቖርበትን።",
            "radiology-desc": "ዘመናዊ ናይ ምስልታት ምርመራ (X-ray, CT scan, MRI, Ultrasound) ንቅኑዕ ሕክምናዊ ምርመራ ዝሕግዝ።",
            "dental-desc": "ምሉእ ናይ ጥርስ ሕክምና ግልጋሎታት፣ ካብ ልሙድ ምርመራን ጽሬትን ክሳብ ዝተሓላለኸ ተሃድሶን ጽባቐን።",
            "neurosurgery-desc": "ሰርጀሪ ሕክምና ንሕማማት ኣእምሮ፣ ሓዋስን ካልኦት ነርቮች።",
            "orthopedics-desc": "ክንክን ንሕማማት ኣዕጽምቲ፣ መገጣጠሚታት፣ ስራቓት፣ ጅማትን ጭዋዳታትን።",
            "dermatology-cosmetology-desc": "ምርመራን ሕክምናን ንሕማማት ቖርበት፣ ጸጉርን ጽፍርን፣ ከምኡ’ውን ጽባቐን ኣስቴቲካዊን ግልጋሎታት።",
            "anesthesia-pain-management-desc": "ንሰርጀሪ ዝኸውን ድሕንነታዊ ኣኔስቴዥያን ንዝተፋላለየ ቃንዛን ዘይምቕርን ኣድካሚ ሕክምናን።",
            "laboratory-desc": "ምሉእ ናይ ላቦራቶሪ ምርመራ ግልጋሎታት ንቅኑዕ ምርመራን ንጥጡሕ ሕሙማት ምሕደራን።",
            "physiotherapy-desc": "ተሃድሶ ግልጋሎታት ንምንቅስቓስ፣ ሓይልን ተግባርን ንምምላስ ንሕሙማት ድሕሪ ሕማም ወይ መጕዳእቲ።",
            "psychiatry-desc": "ኣእምሮኣዊ ጥዕና ግልጋሎታት፣ ኣብ ምርመራ፣ ሕክምናን ምክልኻል ስነ-ኣእምሮኣዊ፣ ስምዒታዊን ናይ ባህሪ ሕማማትን ትኹረት ዝገብር።",
            "ophthalmology-desc": "ምሉእ ናይ ኣዒንቲ ክንክን ግልጋሎታት፣ ምርመራን ሕክምናን ንሕማማት ኣዒንቲ፣ ምስትኽኻል ራእይን ሰርጀሪ ሕክምናን።",
            "maternity-services-desc": "ምሉእ ናይ ሕርሲ ክንክን፣ ቅድሚ ሕርሲ ክሳብ ድሕሪ ሕርሲ፣ ንጥዕና ወላድን ህፃንን ንምርግጋጽ።",
            "pharmacy-ambulance-desc-full": "24/7 ፋርማሲ ግልጋሎታትን ኣምቡላንስ ኣገልግሎትን ንኣሳሲ ሕክምናን ሕሙማት ንምብጻሕን።",
            "other-services-desc": "ካብ ቀንዲ ስፔሻሊስትታትና ወጻኢ፣ ንምሉእ ሕክምናዊ ክንክን ሕሙማት ዝተፈላለዩ ተወሳኺ ሕክምናዊን ደገፍን ግልጋሎታት ንህብ።",

            // Individual Department descriptions for departments.html
            "dept-surgery-desc": "ክፍሊ ሰርጀሪና ካብ ሓፈሻዊ ክሳብ ልዑል ፍሉይነት ዘለዎም ዝተፈላለዩ ናይ ሰርጀሪ ስርሓት የቕርብ፣ ብልምዲ ዝለዎም ሓኻይም ሰርጀሪ ብምጥቃም ዘመናዊ መሳርሒታት ይካየድ።",
            "dept-pediatrics-desc": "ፍሉይ ክንክን ንጨናዉን፣ ህፃናትን ታሕተዋይን፣ ኣብ ፍሉይ ጥዕናኦም ብሓልዮትን ብሞያን ትኹረት ዝገብር።",
            "dept-obsgyn-desc": "ምሉእ ጥዕናዊ ግልጋሎት ንደቂኣንስትዮ፣ ሕርሲ፣ ምውላድ፣ ከምኡ’ውን ዝራባሕ ጥዕና ግልጋሎታት ዝሓወሰ።",
            "dept-internal-medicine-desc": "ምርመራን ሕክምናን ንሕማማት ዓበይቲ፣ ቀዳማይ ክንክን ብምሃብን ንዝተሓላለኸ ጥዕናዊ ኩነታት ምምሕዳርን።",
            "dept-orthopedics-desc": "ፍሉይ ክንክን ንስርዓተ-ኣዕጽምቲ፣ ኣዕጽምቲ፣ መገጣጠሚታት፣ ስራቓትን ሕማማት ጭዋዳታትን ዝሓወሰ።",
            "dept-radiology-desc": "ዘመናዊ ናይ ምርመራ ምስልታት ግልጋሎታት ከም X-ray, CT scan, MRI, and ultrasound ንቅኑዕ ምርመራ ዝሕግዝ።",
            "dept-oncology-desc": "ምሉእ ሕክምና ነቀርሳ፣ ካብ ምርመራን ሕክምናን ክሳብ ደገፍን ድሕሪ ሕክምና ፕሮግራማትን።",
            "dept-dermatology-desc": "ምርመራን ሕክምናን ንሕማማት ቖርበት፣ ጸጉርን ጽፍርን፣ ከምኡ’ውን ጽባቐን ኣስቴቲካዊ ግልጋሎታትን።",
            "dept-psychiatry-desc": "ኣእምሮኣዊ ጥዕና ግልጋሎታት ንዝተፈላለዩ ናይ ስነ-ኣእምሮ ሕማማት፣ ምርመራ፣ ሕክምናን መድሃኒት ምሕደራን ዝቕርብ።",
            "dept-ophthalmology-desc": "ምሉእ ናይ ኣዒንቲ ክንክን ግልጋሎታት፣ ምርመራን ሕክምናን ንሕማማት ኣዒንቲ፣ ምስትኽኻል ራእይን ሰርጀሪ ሕክምናን።"
        },
        "amh": {
            "hero-main-title": "ግዕዝ ሆስፒታል", // Simplified
            "hero-h2": "በእንክብካቤያችን ተመርጠናል፣ በሙያችን ታምነናል",
            "hero-p": "ጤንነትዎን ቅድሚያ በመስጠት፣ የላቀ ብቃት ካላቸው ስፔሻሊስቶች እና ንዑስ-ስፔሻሊስቶች ጋር፣ ዘመናዊ የቴክኖሎጂ መሳሪያዎችን በማጣመር አጠቃላይ አገልግሎት እንሰጣለን። ለማንኛውም ጥያቄ ወይም ቀጠሮ ለመያዝ እዚህ ይመዝገቡ።",
            "hero-btn-appointment": "ቀጠሮ ይያዙ",
            "hero-btn-services": "አገልግሎቶቻችንን ይመልከቱ",
            "contact-us-btn": "ያግኙን",
            "home": "ዋና ገጽ",
            "about-us": "ስለ እኛ",
            "menu-about-us": "ስለ እኛ",
            "menu-mission": "ተልዕኮ",
            "menu-vision": "ራዕይ",
            "menu-services-about": "የአገልግሎቶች አጠቃላይ እይታ",
            "services": "አገልግሎቶች",
            "service1-h3": "የውስጥ ደዌ ህክምና",
            "service2-h3": "የልብ ህክምና",
            "service3-h3": "አጠቃላይ ቀዶ ጥገና",
            "service4-h3": "የህፃናት እና ወጣቶች ህክምና",
            "service5-h3": "የማህፀንና ፅንስ ህክምና",
            "service6-h3": "የአፍንጫ፣ ጆሮ፣ ጉሮሮ ህክምና",
            "service7-h3": "ራዲዮሎጂ",
            "service8-h3": "የጥርስ ህክምና",
            "service9-h3": "የነርቭ ቀዶ ጥገና",
            "service10-h3": "የአጥንት ህክምና",
            "service11-h3": "የቆዳ ህክምና እና ውበት",
            "service12-h3": "ማደንዘዣ እና ህመም ማስታገሻ",
            "service13-h3": "ላብራቶሪ",
            "service14-h3": "ፊዚዮቴራፒ",
            "service15-h3": "የአእምሮ ህክምና",
            "service16-h3": "የአይን ህክምና",
            "service17-h3": "የወሊድ አገልግሎቶች",
            "service18-h3": "ፋርማሲ እና አምቡላንስ",
            "service19-h3": "ሌሎች አገልግሎቶች",
            "doctors": "ሐኪሞች",
            "menu-surgeons": "የቀዶ ጥገና ሐኪሞች",
            "menu-gynecologists": "የማህፀን ሐኪሞች",
            "menu-pediatricians": "የህፃናት ሐኪሞች",
            "menu-internists": "የውስጥ ደዌ ሐኪሞች",
            "menu-orthopedicians": "የአጥንት ህክምና ሐኪሞች",
            "menu-radiologists": "ራዲዮሎጂስቶች",
            "menu-oncologists": "የካንሰር ህክምና ሐኪሞች",
            "menu-maxillofacial": "ማክሲሎፌሻል የቀዶ ጥገና ሐኪሞች",
            "menu-ent-plastic": "የአፍንጫ፣ ጆሮ፣ ጉሮሮ፣ አንገት እና የፕላስቲክ ቀዶ ጥገና ሐኪሞች",
            "menu-dermatologists": "የቆዳ ህክምና ሐኪሞች",
            "menu-psychiatrists": "የአእምሮ ህክምና ባለሙያዎች",
            "menu-ophthalmologists": "የአይን ህክምና ባለሙያዎች",
            "departments": "መምሪያዎች",
            "dept-surgery": "የቀዶ ጥገና ክፍል",
            "dept-pediatrics": "የህፃናት ህክምና ክፍል",
            "dept-obsgyn": "የማህፀንና ፅንስ ህክምና ክፍል",
            "dept-internal-medicine": "የውስጥ ደዌ ህክምና ክፍል",
            "dept-orthopedics": "የአጥንት ህክምና ክፍል",
            "dept-radiology": "ራዲዮሎጂ ክፍል",
            "dept-oncology": "የካንሰር ህክምና ክፍል",
            "dept-dermatology": "የቆዳ ህክምና ክፍል",
            "dept-psychiatry": "የአእምሮ ህክምና ክፍል",
            "dept-ophthalmology": "የአይን ህክምና ክፍል",
            "facilities": "የህክምና መገልገያዎች",
            "media": "ሚዲያ",
            "media-patient-info": "የታካሚ መረጃ",
            "media-articles": "ጽሑፎች",
            "news": "ዜናዎች እና ዝግጅቶች",
            "gallery": "ጋለሪ",
            "patient-satisfaction-survey": "የታካሚ እርካታ ጥናት",
            "contact": "ያግኙን",
            "search-placeholder": "ፈልግ...",
            "footer-text": "Copyright © 2026 <span class=\"geez-color\">ግዕዝ</span> <span class=\"hospital-color\">ሆስፒታል</span><br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "ስለ እኛ",
            "about-p": "ስለ ግዕዝ ሆስፒታል፣ ተልዕኮአችን፣ ራዕያችን፣ እና በልዩ የጤና እንክብካቤ አሰጣጥ ላይ የሚመሩን መሰረታዊ እሴቶች የበለጠ ይረዱ።",
            "about-h3": "ስለ እኛ",
            "about-p1": "ግዕዝ ሆስፒታል በ2011 ዓ.ም. የተቋቋመ ሲሆን በማዕከላዊ ዞን እና ትግራይ ውስጥ ዓለም አቀፍ ደረጃውን የጠበቀ ዘመናዊና ቀልጣፋ የህክምና አገልግሎት ከሚሰጡ ተቋማት አንዱ ነው። የአለም ደረጃ የህክምና አገልግሎትን ለእያንዳንዱ ዜጋ ተደራሽ ለማድረግ፣ በመላው ዞኑ እና አካባቢው ትልቁ እና ታማኝ የህክምና ተቋማት አንዱ ለመሆን ያለመ ነው። በአዛኝ እንክብካቤ፣ ከፍተኛ የሙያ ብቃት እና ዘመናዊ መሳሪያዎች ላይ የተመሰረተ ነው። የታካሚ ደህንነት እና እጅግ በጣም ጥሩ አገልግሎት ላይ ከፍተኛ ትኩረት እንሰጣለን።",
            "mission-h3": "ተልዕኮአችን",
            "mission-p": "ለሁሉም ዜጎች እጅግ በጣም ጥሩ፣ ተመጣጣኝ፣ ተደራሽ እና ተጠያቂ የህክምና እንክብካቤ መስጠት፤ የሙያ ብቃትን ከአዛኝ እንክብካቤ ጋር የሚያጣምር ሁሉን አቀፍ፣ ከፍተኛ ጥራት ያለው እና ተመጣጣኝ የጤና እንክብካቤ መስጠት፤ ዓለም አቀፍ ደረጃ ያለው የህክምና አሰራር መፍጠር እና ከፍተኛ የህክምና ስነ-ምግባርን መጠበቅ።",
            "vision-h3": "ራዕያችን",
            "vision-p": "በእኛ እጅግ በጣም ጥሩ ሙያዊ ብቃት እና የታካሚ ተኮር እንክብካቤ በመነዳት፣ በአፍሪካ ውስጥ ዓለም አቀፍ ደረጃ ያለው የህክምና ተቋም ለመሆን።",
            "services-h3": "የአገልግሎቶች አጠቃላይ እይታ",
            "services-p-about": "ብዙ አይነት ልዩ ልዩ እና ንዑስ ልዩ ልዩ መስኮች (ለምሳሌ የልብ ህክምና፣ ኦንኮሎጂ፣ የነርቭ ቀዶ ጥገና፣ የአጥንት ህክምና፣ የአፍንጫ፣ ጆሮ፣ ጉሮሮ ህክምና፣ የአይን ህክምና፣ የቆዳ ህክምና፣ የማህፀንና ፅንስ ህክምና፣ የህፃናት ህክምና፣ የተለያዩ የምርመራ አገልግሎቶች እና የድንገተኛ ህክምና) በዘመናዊ ቴክኖሎጂ እና በሙያ ብቃት እናቀርባለን። ለዝርዝር አገልግሎቶቻችን፣ 'የእኛ አገልግሎቶች' የሚለውን ክፍል ይመልከቱ።",
            "services-page-h2": "አገልግሎቶቻችን",
            "services-page-intro-p": "ግዕዝ ሆስፒታል ከፍተኛ ብቃት ባላቸው ስፔሻሊስቶች እና ንዑስ-ስፔሻሊስቶች የሚሰጡ የተለያዩ እና ዘመናዊ አገልግሎቶችን ይሰጣል።",
            "all-services-btn": "ሁሉንም አገልግሎቶቻችንን ይመልከቱ",
            "departments-h2": "የእኛ መምሪያዎች",
            "departments-p": "በግዕዝ ሆስፒታል ያሉትን ልዩ ልዩ ክፍሎች ያስሱ፣ የባለሙያ እንክብካቤ ከዘመናዊ ቴክኖሎጂ ጋር የሚገናኝበት ቦታ ነው።",
            "facilities-h2": "የእኛ መገልገያዎች",
            "facilities-p": "ግዕዝ ሆስፒታል ዘመናዊ የህክምና ቴክኖሎጂ እና ዘመናዊ መገልገያዎች የተገጠመለት ሲሆን የተሻለውን እንክብካቤ ለእርስዎ ለማቅረብ ነው።",
            "doctors-page-title": "የእኛ ሐኪሞች",
            "doctors-page-intro": "ግዕዝ ሆስፒታል ከፍተኛ ብቃት ባላቸው እና ልምድ ባላቸው ስፔሻሊስቶች እና ንዑስ-ስፔሻሊስቶች የተለያዩ አገልግሎቶችን ይሰጣል። በእንክብካቤያችን ተመርጠናል፣ በሙያችን ታምነናል።",
            "patient-info-h2": "የታካሚ መረጃ",
            "patient-info-p": "ጉብኝትዎን በተመለከተ አስፈላጊ መረጃዎችን፣ የመግቢያ፣ የመውጫ፣ መብቶችን እና ኃላፊነቶችን ጨምሮ ያግኙ።",
            "articles-h2": "የጤና ጽሑፎች",
            "articles-p": "ከባለሙያ ቡድናችን የቅርብ ጊዜ የጤና ጽሑፎችን፣ ምክሮችን እና የህክምና ግንዛቤዎችን ያግኙ።",
            "news-h2": "ዜናዎች እና ዝግጅቶች",
            "news-p": "ከግዕዝ ሆስፒታል የቅርብ ጊዜ ዜናዎችን፣ የህክምና ምክሮችን እና ጠቃሚ መረጃዎችን እዚህ ይከታተሉ።",
            "gallery-h2": "ጋለሪ",
            "gallery-p": "የግዕዝ ሆስፒታል የተለያዩ ምስሎችን፣ ሁሉንም ዘመናዊ መሳሪያዎች እና የተሰጡ የህክምና አገልግሎቶችን እዚህ ማየት ይችላሉ።",
            "contact-h2": "ያግኙን",
            "contact-p": "ለሁሉም ጥያቄዎችዎ ወይም ቀጠሮ ለመያዝ፣ እባክዎ ያግኙን።",
            "contact-form-title": "መልእክት ይላኩልን",
            "form-full-name": "ሙሉ ስም:",
            "form-email": "ኢሜይል:",
            "form-subject": "ርዕስ/አገልግሎት:",
            "form-phone": "ስልክ ቁጥር:",
            "form-address": "አድራሻ:",
            "form-age": "እድሜ:",
            "form-gender": "ጾታ:",
            "form-select-gender": "ጾታ ይምረጡ",
            "form-gender-male": "ወንድ",
            "form-gender-female": "ሴት",
            "form-gender-other": "ሌላ",
            "form-message": "መልእክት:",
            "form-submit-btn": "ላክ",
            "our-location-map": "አድራሻችን በካርታ",
            "view-on-map": "በካርታ ይመልከቱ",

            // Individual Service descriptions for services.html
            "internal-medicine-desc": "ሁሉን አቀፍ የውስጥ ደዌ ህክምና ምርመራ እና ህክምና ለአዋቂዎች በሽታዎች፣ ከቀዶ ጥገና ውጭ በሆኑ ዘዴዎች እና የረጅም ጊዜ የጤና አስተዳደር ላይ ትኩረት በማድረግ የሚሰጥ።",
            "cardiology-desc": "ለልብ እና የደም ቧንቧ ሁኔታዎች ልዩ እንክብካቤ፣ የምርመራ፣ ህክምና እና የመከላከያ ፕሮግራሞችን ጨምሮ።",
            "general-surgery-desc": "ከመደበኛ እስከ ውስብስብ ቀዶ ህክምናዎች ድረስ ሰፊ የሆነ የቀዶ ህክምና አገልግሎት በሰለጠኑ የቀዶ ህክምና ባለሙያዎች የሚከናወን።",
            "pediatrics-adolescents-desc": "ለጨቅላ ህጻናት፣ ህጻናት እና ወጣቶች የተወሰነ የህክምና እንክብካቤ፣ እድገታቸውን፣ ልማታቸውን እና ልዩ የጤና ችግሮችን የሚሸፍን።",
            "obsgyn-desc": "ለሴቶች ሁሉን አቀፍ የጤና አገልግሎቶች፣ ከወሊድ በፊት የሚደረግ እንክብካቤ፣ ወሊድ፣ ከወሊድ በኋላ የሚደረግ እንክብካቤ እና የመራቢያ ጤና አገልግሎቶችን ጨምሮ።",
            "ent-desc": "ከጆሮ፣ አፍንጫ እና ጉሮሮ ጋር የተያያዙ ችግሮችን መመርመር እና ማከም፣ የራስ እና የአንገት ሁኔታዎችን ጨምሮ።",
            "radiology-desc": "የላቀ የምርመራ ምስል አገልግሎቶች እንደ ኤክስሬይ፣ ሲቲ ስካን፣ ኤምአርአይ እና አልትራሳውንድ ትክክለኛ የህክምና ምርመራን ለመርዳት።",
            "dental-desc": "ከመደበኛ ምርመራዎች እና ጽዳት እስከ ውስብስብ የማገገሚያ እና የኮስሜቲክ የጥርስ ህክምና ድረስ ሙሉ የጥርስ ህክምና አገልግሎቶች።",
            "neurosurgery-desc": "አንጎልን፣ የአከርካሪ አጥንትን እና የዳርቻ ነርቮችን የሚያካትቱ ሁኔታዎች የቀዶ ህክምና።",
            "orthopedics-desc": "የአጥንት፣ የመገጣጠሚያዎች፣ ጅማቶች፣ ጅማቶች እና ጡንቻዎችን ጨምሮ የአጥንትና ጡንቻ ስርዓት ችግሮችን መንከባከብ።",
            "dermatology-cosmetology-desc": "የቆዳ፣ የፀጉር እና የጥፍር ሁኔታዎችን መመርመር እና ማከም፣ ከውበት እና የኮስሜቲክ ሂደቶች ጋር።",
            "anesthesia-pain-management-desc": "ለቀዶ ጥገና ደህንነቱ የተጠበቀ ማደንዘዣ እና የከባድ እና ሥር የሰደደ የህመም ሁኔታዎችን ውጤታማ አስተዳደር መስጠት።",
            "laboratory-desc": "ትክክለኛ ምርመራ እና ውጤታማ የታካሚ አስተዳደር ወሳኝ የሆኑ አጠቃላይ የላቦራቶሪ ምርመራ አገልግሎቶች።",
            "physiotherapy-desc": "ከጉዳት ወይም ከበሽታ ለሚያገግሙ ታካሚዎች እንቅስቃሴን፣ ጥንካሬን እና ተግባርን ለመመለስ የማገገሚያ አገልግሎቶች።",
            "psychiatry-desc": "የአእምሮ፣ ስሜታዊ እና የባህሪ ችግሮችን መመርመር፣ ማከም እና መከላከል ላይ የሚያተኩሩ የአእምሮ ጤና አገልግሎቶች።",
            "ophthalmology-desc": "ሁሉን አቀፍ የአይን ህክምና አገልግሎቶች፣ የአይን በሽታዎችን መመርመር እና ማከም፣ የማየት ችሎታ ማስተካከያ እና የቀዶ ህክምና ሂደቶችን ጨምሮ።",
            "maternity-services-desc": "ከወሊድ በፊት እስከ ድህረ ወሊድ ድረስ ሙሉ የወሊድ እንክብካቤ፣ የእናትና ልጅ ጤና እና ደህንነት ማረጋገጥ።",
            "pharmacy-ambulance-desc-full": "24/7 ፋርማሲ አገልግሎቶች እና የአደጋ ጊዜ አምቡላንስ መጓጓዣ ለከባድ እንክብካቤ እና የታካሚ ዝውውር።",
            "other-services-desc": "ከዋና ዋና ልዩ ባለሙያዎቻችን በተጨማሪ ሁሉን አቀፍ የታካሚ እንክብካቤን ለማረጋገጥ የተለያዩ ተጨማሪ የህክምና እና የድጋፍ አገልግሎቶችን እናቀርባለን።",

            // Individual Department descriptions for departments.html
            "dept-surgery-desc": "የቀዶ ህክምና ክፍል አጠቃላይ ከሆኑት እስከ ከፍተኛ ልዩ ለሆኑት ድረስ ሰፊ የሆነ የቀዶ ህክምና አገልግሎቶችን ይሰጣል፣ እነዚህም ልምድ ባላቸው የቀዶ ህክምና ባለሙያዎች ዘመናዊ መሳሪያዎችን በመጠቀም ይከናወናሉ።",
            "dept-pediatrics-desc": "ለጨቅላ ህጻናት፣ ህጻናት እና ወጣቶች የተወሰነ እንክብካቤ፣ በእዝነትና በሙያዊ ብቃት በልዩ የጤና ፍላጎቶቻቸው ላይ ያተኩራል።",
            "dept-obsgyn-desc": "ለሴቶች ሁሉን አቀፍ የጤና እንክብካቤ፣ እርግዝናን፣ ወሊድን እና የመራቢያ ጤና አገልግሎቶችን ጨምሮ።",
            "dept-internal-medicine-desc": "የአዋቂዎች በሽታዎችን መመርመር እና ማከም፣ የመጀመሪያ ደረጃ እንክብካቤን መስጠት እና ውስብስብ የጤና ሁኔታዎችን ማስተዳደር።",
            "dept-orthopedics-desc": "የአጥንት፣ የመገጣጠሚያዎች፣ ጅማቶች እና ጡንቻዎችን ጨምሮ የጡንቻኮስክሌትታል ስርዓት ችግሮችን ልዩ እንክብካቤ።",
            "dept-radiology-desc": "ትክክለኛ ምርመራን ለመርዳት እንደ ኤክስሬይ፣ ሲቲ ስካን፣ ኤምአርአይ እና አልትራሳውንድ ያሉ የላቀ የምርመራ ምስል አገልግሎቶች።",
            "dept-oncology-desc": "ከምርመራ እና ህክምና እስከ ደጋፊ እንክብካቤ እና የድህረ-ህክምና ፕሮግራሞች ድረስ ሁሉን አቀፍ የካንሰር እንክብካቤ።",
            "dept-dermatology-desc": "የቆዳ፣ የፀጉር እና የጥፍር ሁኔታዎችን መመርመር እና ማከም፣ የውበት እና የመዋቢያ አገልግሎቶችን ጨምሮ።",
            "dept-psychiatry-desc": "ለተለያዩ የአእምሮ ህክምና ሁኔታዎች የአእምሮ ጤና አገልግሎቶች፣ ምርመራ፣ ህክምና እና የመድሃኒት አስተዳደርን ጨምሮ።",
            "dept-ophthalmology-desc": "ሁሉን አቀፍ የአይን ህክምና አገልግሎቶች፣ የአይን በሽታዎችን መመርመር እና ማከም፣ የማየት ችሎታ ማስተካከያ እና የቀዶ ህክምና ሂደቶችን ጨምሮ።"
        }
    };

    // Function to apply translations
    function applyTranslations(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // For input placeholders
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else if (element.tagName === 'TITLE') {
                    // Update document title separately to ensure it's always set correctly
                    document.title = translations[lang][key];
                } else if (element.tagName === 'SPAN' && element.closest('.footer-info')) {
                    // For the footer-text, which contains spans and br tags
                    element.innerHTML = translations[lang][key];
                }
                else {
                    // For general elements, use innerHTML to allow for HTML tags within translations
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Handle specific elements that might need dynamic content updates beyond innerHTML
        const currentPath = window.location.pathname.split('/').pop(); // Get just the filename

        // Generic function for updating hero paragraph
        const updateHeroSectionContent = (pageFilename, h2Key, pKey) => {
            if (currentPath === pageFilename) {
                const heroH2 = document.querySelector('.hero-section.inner-hero h2');
                const heroP = document.querySelector('.hero-section.inner-hero p');
                if (heroH2 && translations[lang][h2Key]) {
                    heroH2.textContent = translations[lang][h2Key];
                }
                if (heroP && translations[lang][pKey]) {
                    heroP.textContent = translations[lang][pKey];
                }
            }
        };

        // Apply to specific pages that use inner-hero
        updateHeroSectionContent('about.html', 'about-h2', 'about-p');
        updateHeroSectionContent('departments.html', 'departments-h2', 'departments-p');
        updateHeroSectionContent('facilities.html', 'facilities-h2', 'facilities-p');
        updateHeroSectionContent('patient-info.html', 'patient-info-h2', 'patient-info-p');
        updateHeroSectionContent('articles.html', 'articles-h2', 'articles-p');
        updateHeroSectionContent('contact.html', 'contact-h2', 'contact-p');
        updateHeroSectionContent('gallery.html', 'gallery-h2', 'gallery-p');
        updateHeroSectionContent('news.html', 'news-h2', 'news-p');
        updateHeroSectionContent('services.html', 'services-page-h2', 'services-page-intro-p');
        updateHeroSectionContent('doctors.html', 'doctors-page-title', 'doctors-page-intro');

        // Special handling for index.html hero section
        if (currentPath === 'index.html') {
            const indexHeroH1 = document.querySelector('#hero-section h1[data-translate="hero-main-title"]');
            const indexHeroH2 = document.querySelector('#hero-section h2[data-translate="hero-h2"]');
            const indexHeroP = document.querySelector('#hero-section p[data-translate="hero-p"]');

            if (indexHeroH1 && translations[lang]['hero-main-title']) {
                // Ensure the span tags are preserved for styling, update only text content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = translations[lang]['hero-main-title'];
                indexHeroH1.innerHTML = tempDiv.innerHTML;
            }
            if (indexHeroH2 && translations[lang]['hero-h2']) {
                indexHeroH2.textContent = translations[lang]['hero-h2'];
            }
            if (indexHeroP && translations[lang]['hero-p']) {
                indexHeroP.textContent = translations[lang]['hero-p'];
            }
        }


        // Update specific descriptions on services.html
        if (currentPath === 'services.html') {
            const serviceDescriptions = {
                "service-internal-medicine-item": "internal-medicine-desc",
                "service-cardiology-item": "cardiology-desc",
                "service-general-surgery-item": "general-surgery-desc",
                "service-pediatrics-item": "pediatrics-adolescents-desc", // Corrected key
                "service-obsgyn-item": "obsgyn-desc",
                "service-ent-item": "ent-desc",
                "service-radiology-item": "radiology-desc",
                "service-dental-item": "dental-desc",
                "service-neurosurgery-item": "neurosurgery-desc",
                "service-orthopedics-item": "orthopedics-desc",
                "service-dermatology-item": "dermatology-cosmetology-desc", // Corrected key
                "service-anesthesia-item": "anesthesia-pain-management-desc", // Corrected key
                "service-laboratory-item": "laboratory-desc",
                "service-physiotherapy-item": "physiotherapy-desc",
                "service-psychiatry-item": "psychiatry-desc",
                "service-ophthalmology-item": "ophthalmology-desc",
                "service-maternity-item": "maternity-services-desc", // Corrected key
                "service-pharmacy-ambulance-item": "pharmacy-ambulance-desc-full", // Corrected key
                "service-other-item": "other-services-desc"
            };

            for (const id in serviceDescriptions) {
                const element = document.querySelector(`#${id} p`);
                if (element && translations[lang][serviceDescriptions[id]]) {
                    element.textContent = translations[lang][serviceDescriptions[id]];
                }
            }
        }

        // Update specific descriptions on departments.html
        if (currentPath === 'departments.html') {
            const departmentDescriptions = {
                "dept-surgery-item": "dept-surgery-desc",
                "dept-pediatrics-item": "dept-pediatrics-desc",
                "dept-obsgyn-item": "dept-obsgyn-desc",
                "dept-internal-medicine-item": "dept-internal-medicine-desc",
                "dept-orthopedics-item": "dept-orthopedics-desc",
                "dept-radiology-item": "dept-radiology-desc",
                "dept-oncology-item": "dept-oncology-desc",
                "dept-dermatology-item": "dept-dermatology-desc",
                "dept-psychiatry-item": "dept-psychiatry-desc",
                "dept-ophthalmology-item": "dept-ophthalmology-desc",
                // Add keys for oral-dental-maxillofacial and ent-plastic-surgery if they have distinct descriptions
                "dept-oral-dental-maxillofacial-item": "dept-oral-dental-maxillofacial-desc", // Assuming you'll add this desc to translations
                "dept-ent-plastic-surgery-item": "dept-ent-plastic-surgery-desc" // Assuming you'll add this desc to translations
            };

            for (const id in departmentDescriptions) {
                const element = document.querySelector(`#${id} p`);
                if (element && translations[lang][departmentDescriptions[id]]) {
                    element.textContent = translations[lang][departmentDescriptions[id]];
                }
            }
        }

        // Update text for doctors.html cards (specialties)
        if (currentPath === 'doctors.html') {
            const doctorSpecialties = {
                "doctor-tesfa": "dr-tesfa-specialty", // Example, adjust based on your doctor data in translations
                "doctor-rahel": "dr-rahel-specialty",
                "doctor-hana": "dr-hana-specialty",
                "doctor-samuel": "dr-samuel-specialty",
                "doctor-yonas": "dr-yonas-specialty",
                "doctor-sara": "dr-sara-specialty",
                "doctor-dawit": "dr-dawit-specialty",
                "doctor-eden": "dr-eden-specialty",
                "doctor-mekonen": "dr-mekonen-specialty",
                "doctor-senait": "dr-senait-specialty",
                "doctor-fisseha": "dr-fisseha-specialty"
            };

            for (const id in doctorSpecialties) {
                const element = document.querySelector(`#${id} .doctor-specialty`); // Assuming a class 'doctor-specialty' for the p tag
                if (element && translations[lang][doctorSpecialties[id]]) {
                    element.textContent = translations[lang][doctorSpecialties[id]];
                }
            }
        }
    }


    // Language Switcher functionality
    const languageSwitcherDesktop = document.getElementById('language-switcher');
    const languageSwitcherMobile = document.getElementById('language-switcher-mobile');

    // Function to handle language change (can be reused)
    function handleLanguageChange(event) {
        const selectedLang = event.target.value;
        localStorage.setItem('selectedLang', selectedLang); // Save selected language
        applyTranslations(selectedLang);
        // Ensure both dropdowns reflect the change if they exist
        if (languageSwitcherDesktop) languageSwitcherDesktop.value = selectedLang;
        if (languageSwitcherMobile) languageSwitcherMobile.value = selectedLang;
    }

    if (languageSwitcherDesktop) {
        languageSwitcherDesktop.addEventListener('change', handleLanguageChange);
    }
    if (languageSwitcherMobile) {
        languageSwitcherMobile.addEventListener('change', handleLanguageChange);
    }

    // Set initial language from localStorage or default to Tigrigna
    const savedLang = localStorage.getItem('selectedLang') || 'tig';
    if (languageSwitcherDesktop) languageSwitcherDesktop.value = savedLang;
    if (languageSwitcherMobile) languageSwitcherMobile.value = savedLang;
    applyTranslations(savedLang);


    // Dropdown functionality for desktop
    document.querySelectorAll('nav ul li.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 992) { // Only for desktop hover (matching CSS breakpoint)
                dropdown.querySelector('.submenu').style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 992) { // Only for desktop hover
                dropdown.querySelector('.submenu').style.display = 'none';
            }
        });
    });

    // Mobile Navigation Toggle (Hamburger menu toggle)
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('nav ul'); // Assumed nav ul is the main menu for mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Add/remove 'active' class
            // Close any open dropdowns when main nav is toggled
            document.querySelectorAll('nav ul li.dropdown .submenu').forEach(submenu => {
                submenu.style.display = 'none';
            });
        });
    }

    // Toggle dropdowns for mobile (click on parent link)
    document.querySelectorAll('nav ul li.dropdown > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) { // Only for mobile/tablet
                e.preventDefault(); // Prevent navigating immediately
                const parentLi = link.closest('li.dropdown');
                const submenu = parentLi.querySelector('.submenu');

                // Close other open submenus first
                document.querySelectorAll('nav ul li.dropdown .submenu').forEach(otherSubmenu => {
                    if (otherSubmenu !== submenu && otherSubmenu.style.display === 'block') {
                        otherSubmenu.style.display = 'none';
                    }
                });

                // Toggle current submenu
                submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
            }
        });
    });


    // Close mobile menu and dropdowns if clicking outside
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 992) { // Match breakpoint
            const header = document.querySelector('header');
            const isClickInsideHeader = header && header.contains(event.target);
            const isClickOnNavToggle = navToggle && navToggle.contains(event.target);

            if (!isClickInsideHeader && !isClickOnNavToggle) { // Only close if click is completely outside header
                if (navMenu) navMenu.classList.remove('active');
                document.querySelectorAll('nav ul li.dropdown .submenu').forEach(submenu => {
                    submenu.style.display = 'none';
                });
            }
        }
    });


    // Search functionality
    const searchInputDesktop = document.getElementById('search-input');
    const searchButtonDesktop = document.getElementById('search-button');
    // Assuming you have mobile search input/button as well, e.g., on a mobile header
    const searchInputMobile = document.getElementById('search-input-mobile'); // Placeholder
    const searchButtonMobile = document.getElementById('search-button-mobile'); // Placeholder


    function handleSearch() {
        let query = '';
        if (window.innerWidth > 992 && searchInputDesktop) {
            query = searchInputDesktop.value.toLowerCase();
        } else if (window.innerWidth <= 992 && searchInputMobile) { // Use mobile if screen is small
            query = searchInputMobile.value.toLowerCase();
        }

        if (query) {
            // For now, redirect to a generic search page. You can implement in-page search later.
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    }

    if (searchButtonDesktop && searchInputDesktop) {
        searchButtonDesktop.addEventListener('click', handleSearch);
        searchInputDesktop.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    // Only attach if mobile search elements exist
    if (searchButtonMobile && searchInputMobile) {
        searchButtonMobile.addEventListener('click', handleSearch);
        searchInputMobile.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }


    // Dynamic content filtering for services, departments, doctors pages
    const currentPath = window.location.pathname.split('/').pop(); // Get just the filename

    // Function to filter items based on URL parameter
    function applyPageFilter(pageFilename, paramName, itemClass, idPrefix = '') {
        if (currentPath === pageFilename) {
            const urlParams = new URLSearchParams(window.location.search);
            const selectedParam = urlParams.get(paramName);

            const allItems = document.querySelectorAll(`.${itemClass}`);

            if (selectedParam) {
                allItems.forEach(item => {
                    item.style.display = 'none'; // Hide all
                });

                const targetId = `${idPrefix}${selectedParam}-item`; // Construct ID like 'service-internal-medicine-item'
                const targetItem = document.getElementById(targetId);

                if (targetItem) {
                    targetItem.style.display = 'block'; // Show the selected item
                    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to it
                }
            } else {
                // If no specific parameter, ensure all items are visible
                allItems.forEach(item => {
                    item.style.display = 'block'; // Show all
                });
            }
        }
    }
    
    // Apply filters to respective pages
    // Note: The idPrefix ensures the generated ID matches your HTML IDs
    applyPageFilter('services.html', 'service', 'service-item', 'service-');
    applyPageFilter('departments.html', 'dept', 'department-item', 'dept-');
    applyPageFilter('doctors.html', 'specialty', 'doctor-card', 'doctor-');

    // Sticky Header (optional, can be done with CSS too)
    const header = document.querySelector('header');
    const topBar = document.querySelector('.top-bar'); // Get the top bar
    let headerOffset = 0;
    if (header) {
        headerOffset = header.offsetTop;
    }

    function stickyHeader() {
        if (header) {
            if (window.pageYOffset > headerOffset) {
                header.classList.add('sticky');
                // Optional: add padding to body to prevent content jump
                // document.body.style.paddingTop = header.offsetHeight + 'px';
            } else {
                header.classList.remove('sticky');
                // document.body.style.paddingTop = '0';
            }
        }
    }
    window.addEventListener('scroll', stickyHeader);


    // Initial setup of dynamic menu links on page load
    function setupDynamicMenuLinks() {
        // Services Submenu
        document.querySelectorAll('ul.submenu a[href^="services.html?service="]').forEach(link => {
            // Extract the data-translate key and use it to build the service parameter
            const dataTranslateKey = link.getAttribute('data-translate');
            // Example: "service1-h3" -> "service1" or "internal-medicine" if your translation key is structured that way
            let serviceParam = '';
            if (dataTranslateKey.includes('-h3')) {
                // If key is like "service1-h3", remove "-h3" to get "service1"
                serviceParam = dataTranslateKey.replace('-h3', '');
            } else {
                // If key is already clean like "internal-medicine"
                // You might need a more robust mapping here if translation keys are not direct service names
                const serviceKeyMap = {
                    "internal-medicine": "internal-medicine",
                    "cardiology": "cardiology",
                    "general-surgery": "general-surgery",
                    "pediatrics-adolescents": "pediatrics", // Maps "pediatrics-adolescents" to "pediatrics" in URL
                    "obsgyn": "obsgyn",
                    "ent": "ent",
                    "radiology": "radiology",
                    "dental": "dental",
                    "neurosurgery": "neurosurgery",
                    "orthopedics": "orthopedics",
                    "dermatology-cosmetology": "dermatology", // Maps "dermatology-cosmetology" to "dermatology" in URL
                    "anesthesia-pain-management": "anesthesia", // Maps to "anesthesia"
                    "laboratory": "laboratory",
                    "physiotherapy": "physiotherapy",
                    "psychiatry": "psychiatry",
                    "ophthalmology": "ophthalmology",
                    "maternity-services": "maternity", // Maps "maternity-services" to "maternity"
                    "pharmacy-ambulance": "pharmacy-ambulance", // Maps "pharmacy-ambulance" to "pharmacy-ambulance"
                    "other-services": "other" // Maps "other-services" to "other"
                };
                serviceParam = serviceKeyMap[dataTranslateKey] || dataTranslateKey; // Use map or fallback
            }
            link.href = `services.html?service=${serviceParam}`;
        });

        // Doctors Submenu
        document.querySelectorAll('ul.submenu a[href^="doctors.html?specialty="]').forEach(link => {
            const dataTranslateKey = link.getAttribute('data-translate');
            let specialtyParam = dataTranslateKey.replace('menu-', ''); // e.g., "menu-surgeons" -> "surgeons"
            // You might need more specific mappings here if your URL parameters differ from menu-keys
            // E.g., if "menu-ent-plastic" should map to "ent-plastic-surgery" in URL
            const doctorKeyMap = {
                "ent-plastic": "ent-plastic-surgery",
                "maxillofacial": "maxillofacial" // Assuming it's already "maxillofacial"
            };
            specialtyParam = doctorKeyMap[specialtyParam] || specialtyParam;
            link.href = `doctors.html?specialty=${specialtyParam}`;
        });

        // Departments Submenu
        document.querySelectorAll('ul.submenu a[href^="departments.html?dept="]').forEach(link => {
            const dataTranslateKey = link.getAttribute('data-translate');
            let deptParam = dataTranslateKey.replace('dept-', ''); // e.g., "dept-surgery" -> "surgery"
            // Specific mappings for department URLs if needed
            const departmentKeyMap = {
                "oral-dental-maxillofacial": "oral-dental-maxillofacial", // Example mapping
                "ent-plastic-surgery": "ent-plastic-surgery" // Example mapping
            };
            deptParam = departmentKeyMap[deptParam] || deptParam;
            link.href = `departments.html?dept=${deptParam}`;
        });
    }

    // Call setupDynamicMenuLinks on initial load
    setupDynamicMenuLinks();

});