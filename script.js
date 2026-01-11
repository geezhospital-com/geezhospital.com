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
            "menu-ophthalmologists": "Ophthalmologists",
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
            "about-h2": "About Us",
            "about-p": "Learn more about Geez Hospital, our mission, vision, and the core values that guide us in providing exceptional healthcare.",
            "about-h3": "About Us",
            "about-p1": "Established in 2011 E.C., Geez Hospital is one of the leading institutions in the central zone and Tigray, providing modern and efficient medical services with international standards. We aim to make world-class healthcare accessible to every citizen, becoming one of the largest and most trusted medical institutions in the entire zone and its surroundings. We are founded on providing compassionate care, high professional competence, and modern equipment. We place great emphasis on patient safety and excellent service.",
            "mission-h3": "Our Mission",
            "mission-p": "To provide excellent, affordable, accessible, and accountable medical care to all citizens; to offer comprehensive, high-quality, and affordable healthcare that combines professional excellence with compassionate care; to create a world-class medical practice and uphold the highest medical ethics.",
            "vision-h3": "Our Vision",
            "vision-p": "We envision a future where Geez Hospital is synonymous with innovation, empathy, and unparalleled medical outcomes, setting new benchmarks for healthcare excellence across the continent.",
            "services-h3": "Services Overview",
            "services-p-about": "At Geez Hospital, we are dedicated to offering a comprehensive suite of medical services designed to meet the diverse needs of our community. Our state-of-the-art facilities and a team of dedicated professionals ensure that you receive the best possible care across all specialties.",
            "services-page-h2": "Our Services",
            "services-page-intro-p": "Geez Hospital offers diverse and modern services provided by highly qualified specialists and sub-specialists.",
            "all-services-btn": "View All Our Services",
            "departments-h2": "Our Departments",
            "departments-p": "Explore the specialized departments at Geez Hospital, where expert care meets advanced technology.",
            "facilities-h2": "Our Facilities",
            "facilities-p": "Geez Hospital is equipped with state-of-the-art medical technology and modern facilities to provide you with the best possible care.",
            "doctors-page-title": "Our Doctors",
            "doctors-page-intro": "Geez Hospital provides various services with highly qualified and experienced specialists and sub-specialists. Chosen for our care, trusted for our expertise.",
            "patient-info-h2": "Patient Information",
            "patient-info-p": "Find essential information for your visit, including admission, discharge, rights, and responsibilities.",
            "articles-h2": "Health Articles",
            "articles-p": "Stay informed with our latest health articles, tips, and medical insights from our expert team.",
            "news-h2": "News and Events",
            "news-p": "Follow the latest news, medical advice, and important updates from Geez Hospital here.",
            "gallery-h2": "Gallery",
            "gallery-p": "View various images of Geez Hospital, including all modern equipment and medical care provided.",
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
            "view-on-map": "View on Map" // Added for map button text
        },
        "tig": {
            "hero-main-title": "ግዕዝ ሆስፒታል",
            "hero-h2": "ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን",
            "hero-p": "ንጥዕናኹም ቀዳምነት ብምሃብ፣ ብሉፃት ስፔሻሊስትን ሳብስፔሻሊስትታትን ሓኻይም ምስ ዘመናዊ ቴክኖሎጂ መሳርሒታት(ማሽን) ኣዋዲድንና ንፅበየኩም ኣለና። ንዝኾነ ሕቶ ወይ ቆፀሮ ንምሓዝ በይዝኦም ኣብዚ ይመዝገቡ።",
            "hero-btn-appointment": "ቆፀሮ ንምሓዝ",
            "hero-btn-services": "ግልጋሎታትና ርኣዩ",
            "contact-us-btn": "ተወከሰና", // Changed to "ተወከሱና" if preferred for politeness or left as "ተወከሰና"
            "home": "መበገሲ ገጽ",
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
            "contact-form-title": "መልእኽቲ ስደዱልና", // Added for form labels
            "form-full-name": "ምሉእ ሽም:",
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
            "view-on-map": "ኣብ ካርታ ርኣይ" // Added for map button text
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
            "view-on-map": "በካርታ ይመልከቱ"
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
                } else if (element.tagName === 'OPTION' && element.parentElement.id === 'gender') {
                    // Specific handling for gender select options if needed, but innerHTML should work
                    element.innerHTML = translations[lang][key];
                }
                else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        // Update document title
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.hasAttribute('data-translate')) {
            const titleKey = titleElement.getAttribute('data-translate');
            if (translations[lang] && translations[lang][titleKey]) {
                titleElement.textContent = translations[lang][titleKey];
            }
        }

        // Handle specific elements that might need dynamic content updates beyond innerHTML
        const currentPath = window.location.pathname;

        // Generic function for updating hero paragraph
        const updateHeroParagraph = (pageIdentifier, h2Key, pKey) => {
            if (currentPath.includes(pageIdentifier)) {
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
        updateHeroParagraph('about.html', 'about-h2', 'about-p');
        updateHeroParagraph('departments.html', 'departments-h2', 'departments-p');
        updateHeroParagraph('facilities.html', 'facilities-h2', 'facilities-p');
        updateHeroParagraph('patient-info.html', 'patient-info-h2', 'patient-info-p');
        updateHeroParagraph('articles.html', 'articles-h2', 'articles-p');
        updateHeroParagraph('contact.html', 'contact-h2', 'contact-p');
        updateHeroParagraph('gallery.html', 'gallery-h2', 'gallery-p');
        updateHeroParagraph('news.html', 'news-h2', 'news-p');
        updateHeroParagraph('services.html', 'services-page-h2', 'services-page-intro-p'); // Specific for services
        updateHeroParagraph('doctors.html', 'doctors-page-title', 'doctors-page-intro'); // Specific for doctors
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
    const navMenu = document.querySelector('nav ul');
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
            const isClickInsideHeader = header.contains(event.target);
            const isClickOnNavToggle = navToggle && navToggle.contains(event.target);

            if (!isClickInsideHeader && !isClickOnNavToggle) { // Only close if click is completely outside header
                navMenu.classList.remove('active');
                document.querySelectorAll('nav ul li.dropdown .submenu').forEach(submenu => {
                    submenu.style.display = 'none';
                });
            }
        }
    });


    // Search functionality
    const searchInputDesktop = document.getElementById('search-input');
    const searchButtonDesktop = document.getElementById('search-button');
    const searchInputMobile = document.getElementById('search-input-mobile');
    const searchButtonMobile = document.getElementById('search-button-mobile');


    function handleSearch() {
        let query = '';
        if (window.innerWidth > 992 && searchInputDesktop) {
            query = searchInputDesktop.value.toLowerCase();
        } else if (window.innerWidth <= 992 && searchInputMobile) {
            query = searchInputMobile.value.toLowerCase();
        }

        if (query) {
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
    if (searchButtonMobile && searchInputMobile) {
        searchButtonMobile.addEventListener('click', handleSearch);
        searchInputMobile.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }


    // Dynamic content filtering for departments.html (and similar for services/doctors)
    const currentPath = window.location.pathname;

    // Function to filter items based on URL parameter
    function applyPageFilter(pageIdentifier, paramName, itemClass, itemIdPrefix = '') {
        if (currentPath.includes(pageIdentifier)) {
            const urlParams = new URLSearchParams(window.location.search);
            const selectedParam = urlParams.get(paramName);

            const allItems = document.querySelectorAll(`.${itemClass}`);

            if (selectedParam) {
                allItems.forEach(item => {
                    item.style.display = 'none'; // Hide all
                });

                const targetItem = document.getElementById(`${itemIdPrefix}${selectedParam}-item`);
                if (targetItem) {
                    targetItem.style.display = getComputedStyle(targetItem).display === 'none' ? 'block' : getComputedStyle(targetItem).display; // Restore original display type or 'block'
                }
            } else {
                // If no specific parameter, ensure all items are visible
                allItems.forEach(item => {
                    item.style.display = getComputedStyle(item).display === 'none' ? 'block' : getComputedStyle(item).display; // Restore original display
                });
            }
        }
    }

    // Apply filters to respective pages
    applyPageFilter('departments.html', 'dept', 'department-item', 'dept-');
    applyPageFilter('services.html', 'service', 'service-item', ''); // Service IDs like "internal-medicine-item"
    applyPageFilter('doctors.html', 'specialty', 'doctor-detail-card', ''); // Doctor IDs like "surgeons-item"
});