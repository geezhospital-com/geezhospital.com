document.addEventListener('DOMContentLoaded', () => {
    // Language translation data
    const translations = {
        "eng": {
            "hero-main-title": "Geez Hospital|ግዕዝ ሆስፒታል",
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
            "service16-h3": "Maternity Services",
            "service17-h3": "Pharmacy & Ambulance",
            "service18-h3": "Other Services",
            "doctors": "Doctors",
            "menu-surgeons": "Surgeons",
            "menu-gynecologists": "Gynecologists",
            "menu-pediatricians": "Pediatricians",
            "menu-internists": "Internists",
            "menu-orthopedicians": "Orthopedicians",
            "menu-radiologists": "Radiologists",
             "menu-ent-plastic": "ENT, Head & Neck and Plastic Surgeons",
            "menu-dermatologists": "Dermatologists",
            "departments": "Departments",
            "dept-surgery": "Surgery",
            "dept-pediatrics": "Pediatrics",
            "dept-obsgyn": "Obstetrics and Gynecology",
            "dept-internal-medicine": "Internal Medicine",
            "dept-orthopedics": "Orthopedics",
            "dept-radiology": "Radiology",
            "dept-dermatology": "Dermatology",
            "dept-ent-plastic-surgery": "ENT and Plastic Surgery",
            "dept-ophthalmology": "Ophthalmology",
            "dept-psychiatry": "Psychiatry",
            "facilities": "Facilities",
            "media": "Media",
            "media-patient-info": "Patient Information",
            "media-articles": "Articles",
            "news": "News and Events",
            "gallery": "Gallery",
            "patient-satisfaction-survey": "Patient Satisfaction Survey", // NEW
            "contact": "Contact Us",
            "search-placeholder": "Search...",
            "footer-text": "Copyright © 2026 Geez Hospital<br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "About Us",
            "about-p1": "Geez Hospital's established in 2011 E.C., it is one of the leading institutions in the central zone and Tigray, providing modern and efficient medical services with international standards. We aim to make world-class healthcare accessible to every citizen, becoming one of the largest and most trusted medical institutions in the entire zone and its surroundings. We are founded on providing compassionate care, high professional competence, and modern equipment. We place great emphasis on patient safety and excellent service.",
            "mission-h3": "Our Mission",
            "mission-p": "To provide excellent, affordable, accessible, and accountable medical care to all citizens; to offer comprehensive, high-quality, and affordable healthcare that combines professional excellence with compassionate care; to create a world-class medical practice and uphold the highest medical ethics.",
            "vision-h3": "Our Vision",
            "vision-p": "To become a globally respected medical institution in Africa by providing world-class medical services, driven by our excellent professional competence and patient-centered care.",
            "services-h3": "Services Overview",
            "services-p-about": "We offer a wide range of specialist and sub-specialist fields (e.g., Cardiology, Oncology, Neurosurgery, Orthopedics, ENT, Ophthalmology, Dermatology, Obstetrics and Gynecology, Pediatric care, various diagnostic services, and emergency care) with modern technology and professional competence. For a detailed list of our services, please refer to the 'Our Services' section.",
            "all-services-btn": "View All Our Services",
            "departments-h2": "Our Departments", // Added for departments.html hero
            "departments-p": "Explore the specialized departments at Geez Hospital, where expert care meets advanced technology.", // Added for departments.html hero
            "facilities-h2": "Our Facilities", // Added for facilities.html hero
            "facilities-p": "Geez Hospital is equipped with state-of-the-art medical technology and modern facilities to provide you with the best possible care.", // Added for facilities.html hero
            "patient-info-h2": "Patient Information", // Added for patient-info.html hero
            "patient-info-p": "Find essential information for your visit, including admission, discharge, rights, and responsibilities.", // Added for patient-info.html hero
            "articles-h2": "Health Articles", // Added for articles.html hero
            "articles-p": "Stay informed with our latest health articles, tips, and medical insights from our expert team.", // Added for articles.html hero
        },
        "tig": {
            "hero-main-title": "ግዕዝ ሆስፒታል|Geez Hospital",
            "contact-us-btn": "ተወከሱና",
            "home": "መእተዊ",
            "about-us": "ብዛዕባና",
            "menu-about-us": "ብዛዕባና",
            "menu-mission": "ተልእኾና",
            "menu-vision": "ራእይና",
            "menu-services-about": "ዝርዝር ግልጋሎታት",
            "services": "ግልጋሎታት",
            "service1-h3": "ውሽጣዊ ሕማማት ሕክምና",
            "service2-h3": "ሕክምና ልቢ",
            "service3-h3": "ሓፈሻዊ ሕክምና",
            "service4-h3": "ሕክምና ህጻናት",
            "service5-h3": "ሕክምና ነፍሰፁራትን ደቂኣንስትዮን",
            "service6-h3": "ሕክምና ኣፍንጫ፣ ጆሮ፣ ጉሮሮ",
            "service7-h3": "ራድዮሎጂ",
            "service8-h3": "ሕክምና ኣስናን",
            "service9-h3": "ኒውሮሰርጀሪ",
            "service10-h3": "ኦርቶፔዲክስ",
            "service11-h3": "ደርማቶሎጂን ኮስመቶሎጂን",
            "service12-h3": "ኣነስቴዥያን ሕክምና ሕማምን",
            "service13-h3": "ላብራቶሪ",
            "service14-h3": "ፊዝዮቴራፒ",
            "service15-h3": "ሳይካትሪ",
            "service16-h3": "ኣገልግሎታት ማትርኒቲ",
            "service17-h3": "ፋርማሲን ኣምቡላንስን",
            "service18-h3": "ካልኦት ኣገልግሎታት",
            "doctors": "ሓከምቲ",
            "menu-surgeons": "ሰርጀንስ",
            "menu-gynecologists": "ጋይናኮሎጂስትስ",
            "menu-pediatricians": "ፔዲያትሪሽያን",
            "menu-internists": "ኢንተርኒስትስ",
            "menu-orthopedicians": "ኦርቶፔዲሽያን",
            "menu-radiologists": "ራድዮሎጂስትስ",
            "menu-oncologists": "ኦንኮሎጂስትስ",
            "menu-dermatologists": "ደርማቶሎጂስትስ",
            "departments": "ክፍለታት",
            "dept-surgery": "ክፍሊ ሕክምና",
            "dept-pediatrics": "ክፍሊ ሕክምና ህጻናት",
            "dept-obsgyn": "ክፍሊ ሕክምና ነፍሰጾራትን ደቂኣንስትዮን",
            "dept-internal-medicine": "ክፍሊ ውሽጣዊ ሕክምና",
            "dept-orthopedics": "ክፍሊ ኦርቶፔዲክስ",
            "dept-radiology": "ክፍሊ ራድዮሎጂ",
            "dept-dermatology": "ክፍሊ ደርማቶሎጂ",
            "dept-ent-plastic-surgery": "ክፍሊ ENT and ፕላስቲክ ሕክምና",
            "dept-ophthalmology": "ክፍሊ ኣዒንቲ",
            "dept-psychiatry": "ክፍሊ ሳይካትሪ",
            "facilities": "መሳርሒታት",
            "media": "ሚድያ",
            "media-patient-info": "ሓበሬታ ሕሙማት",
            "media-articles": "ፅሑፋት",
            "news": "ዜናን ፍፃሜታትን",
            "gallery": "ጋለሪ",
            "patient-satisfaction-survey": "ናይ ተገልገልቲ  ዕግበት ዳህሳስ", // NEW
            "contact": "ተወከሰና",
            "search-placeholder": "ድለ...",
            "footer-text": "Copy right © 2026 ሆስፒታል ግዕዝ<br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "ብዛዕባና",
            "about-p1": "ሆስፒታል ግዕዝ ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ  ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።",
            "mission-h3": "ተልእኾና",
            "mission-p": "ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።",
            "vision-h3": "ራእይና",
            "vision-p": "ብምኽንያት እቲ እነርእዮ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእኸል ዝገበረ ሓልዮትን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።",
            "services-h3": "ዝርዝር ግልጋሎታት",
            "services-p-about": "ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን  ናይ ህፁፅ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።ንዝርዝር እንህቦም ግልጋሎታት ኣብ ግልጋሎታትና ይወከሱ",
            "all-services-btn": "ኹሎም ዝርዝር ግልጋሎታትና ርአ",
            "departments-h2": "ክፍሊታት ሕክምና", // Added for departments.html hero
            "departments-p": "ኣብ ሆስፒታል ግዕዝ ዝርከቡ ፍሉያት ክፍሊታት ሕክምና ዝድህስሱሉ፣ ብቑዕ ክንክን ምስ ዘመናዊ ቴክኖሎጂ ዝርከቡሉ ቦታ እዩ።", // Added for departments.html hero
            "facilities-h2": "መሳርሒታትና", // Added for facilities.html hero
            "facilities-p": "ግዕዝ ሆስፒታል ንተገልገልቲ ዝበለጸ ሕክምና ንምሃብ ብብሉጽ ተኽኖሎጂን ዘመናዊ ሳርሕታትን ዝተዓጠቐ እዩ።", // Added for facilities.html hero
            "patient-info-h2": "ሓበሬታ ሕሙማት", // Added for patient-info.html hero
            "patient-info-p": "ናብ ሆስፒታልና ክትመፅእ እንተኾይንካ ወይ ክትወፅእ እንተኾይንካ፣ ከምኡ'ውን መሰላትን ሓላፍነታትን ናይ ሕክምና ንምርካብ ዘድልየካ ኩሉ ኣገዳሲ ሓበሬታ ኣብዚ ትረኽቦ።", // Added for patient-info.html hero
            "articles-h2": "ጽሑፋት ጥዕና", // Added for articles.html hero
            "articles-p": "ብብሉጻት ሓኻይም ዝምልከቶም ሰራሕተኛታትን  ጠቐምቲ ሓሳባትን ምኽሪታን ዝረኽብሉ ዓምዲ እዩ።", // Added for articles.html hero
        },
        "amh": {
            "hero-main-title": "ግዕዝ ሆስፒታል",
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
            "service16-h3": "የወሊድ አገልግሎቶች",
            "service17-h3": "ፋርማሲ እና አምቡላንስ",
            "service18-h3": "ሌሎች አገልግሎቶች",
            "doctors": "ሐኪሞች",
            "menu-surgeons": "የቀዶ ጥገና ሐኪሞች",
            "menu-gynecologists": "የማህፀን ሐኪሞች",
            "menu-pediatricians": "የህፃናት ሐኪሞች",
            "menu-internists": "የውስጥ ደዌ ሐኪሞች",
            "menu-orthopedicians": "የአጥንት ህክምና ሐኪሞች",
            "menu-radiologists": "ራዲዮሎጂስቶች",
            "menu-oncologists": "የካንሰር ህክምና ሐኪሞች",
            "menu-dermatologists": "የቆዳ ህክምና ሐኪሞች",
            "departments": "መምሪያዎች",
            "dept-surgery": "የቀዶ ጥገና ክፍል",
            "dept-pediatrics": "የህፃናት ህክምና ክፍል",
            "dept-obsgyn": "የማህፀንና ፅንስ ህክምና ክፍል",
            "dept-internal-medicine": "የውስጥ ደዌ ህክምና ክፍል",
            "dept-orthopedics": "የአጥንት ህክምና ክፍል",
            "dept-radiology": "ራዲዮሎጂ ክፍል",
            "dept-oncology": "የካንሰር ህክምና ክፍል",
            "dept-ophthalmology": "የአይን ህክምና ክፍል",
            "dept-psychiatry": "የስነ-አእምሮ ህክምና ክፍል",
            "facilities": "የህክምና መገልገያዎች",
            "media": "ሚዲያ",
            "media-patient-info": "የታካሚ መረጃ",
            "media-articles": "ጽሑፎች",
            "news": "ዜናዎች እና ዝግጅቶች",
            "gallery": "ጋለሪ",
            "patient-satisfaction-survey": "የታካሚ እርካታ ጥናት", // NEW
            "contact": "ያግኙን",
            "search-placeholder": "ፈልግ...",
            "footer-text": "Copy right © 2026 ግዕዝ ሆስፒታል<br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "ስለ እኛ",
            "about-p1": "ግዕዝ ሆስፒታል በ2011 ዓ.ም. የተቋቋመ ሲሆን በማዕከላዊ ዞን እና ትግራይ ውስጥ ዓለም አቀፍ ደረጃውን የጠበቀ ዘመናዊና ቀልጣፋ የህክምና አገልግሎት ከሚሰጡ ተቋማት አንዱ ነው። የአለም ደረጃ የህክምና አገልግሎትን ለእያንዳንዱ ዜጋ ተደራሽ ለማድረግ፣ በመላው ዞኑ እና አካባቢው ትልቁ እና ታማኝ የህክምና ተቋማት አንዱ ለመሆን ያለመ ነው። በአዛኝ እንክብካቤ፣ ከፍተኛ የሙያ ብቃት እና ዘመናዊ መሳሪያዎች ላይ የተመሰረተ ነው። የታካሚ ደህንነት እና እጅግ በጣም ጥሩ አገልግሎት ላይ ከፍተኛ ትኩረት እንሰጣለን።",
            "mission-h3": "ተልዕኮአችን",
            "mission-p": "ለሁሉም ዜጎች እጅግ በጣም ጥሩ፣ ተመጣጣኝ፣ ተደራሽ እና ተጠያቂ የህክምና እንክብካቤ መስጠት፤ የሙያ ብቃትን ከአዛኝ እንክብካቤ ጋር የሚያጣምር ሁሉን አቀፍ፣ ከፍተኛ ጥራት ያለው እና ተመጣጣኝ የጤና እንክብካቤ መስጠት፤ ዓለም አቀፍ ደረጃ ያለው የህክምና አሰራር መፍጠር እና ከፍተኛ የህክምና ስነ-ምግባርን መጠበቅ።",
            "vision-h3": "ራዕያችን",
            "vision-p": "በእኛ እጅግ በጣም ጥሩ ሙያዊ ብቃት እና የታካሚ ተኮር እንክብካቤ በመነዳት፣ በአፍሪካ ውስጥ ዓለም አቀፍ ደረጃ ያለው የህክምና ተቋም ለመሆን።",
            "services-h3": "የአገልግሎቶች አጠቃላይ እይታ",
            "services-p-about": "ብዙ አይነት ልዩ ልዩ እና ንዑስ ልዩ ልዩ መስኮች (ለምሳሌ የልብ ህክምና፣ ኦንኮሎጂ፣ የነርቭ ቀዶ ጥገና፣ የአጥንት ህክምና፣ የአፍንጫ፣ ጆሮ፣ ጉሮሮ ህክምና፣ የአይን ህክምና፣ የቆዳ ህክምና፣ የማህፀንና ፅንስ ህክምና፣ የህፃናት ህክምና፣ የተለያዩ የምርመራ አገልግሎቶች እና የድንገተኛ ህክምና) በዘመናዊ ቴክኖሎጂ እና በሙያ ብቃት እናቀርባለን። ለዝርዝር አገልግሎቶቻችን፣ 'የእኛ አገልግሎቶች' የሚለውን ክፍል ይመልከቱ።",
            "all-services-btn": "ሁሉንም አገልግሎቶቻችንን ይመልከቱ",
            "departments-h2": "የእኛ መምሪያዎች", // Added for departments.html hero
            "departments-p": "በግዕዝ ሆስፒታል ያሉትን ልዩ ልዩ ክፍሎች ያስሱ፣ የባለሙያ እንክብካቤ ከዘመናዊ ቴክኖሎጂ ጋር የሚገናኝበት ቦታ ነው።", // Added for departments.html hero
            "facilities-h2": "የእኛ መገልገያዎች", // Added for facilities.html hero
            "facilities-p": "ግዕዝ ሆስፒታል ዘመናዊ የህክምና ቴክኖሎጂ እና ዘመናዊ መገልገያዎች የተገጠመለት ሲሆን የተሻለውን እንክብካቤ ለእርስዎ ለማቅረብ ነው።", // Added for facilities.html hero
            "patient-info-h2": "የታካሚ መረጃ", // Added for patient-info.html hero
            "patient-info-p": "ጉብኝትዎን በተመለከተ አስፈላጊ መረጃዎችን፣ የመግቢያ፣ የመውጫ፣ መብቶችን እና ኃላፊነቶችን ጨምሮ ያግኙ።", // Added for patient-info.html hero
            "articles-h2": "የጤና ጽሑፎች", // Added for articles.html hero
            "articles-p": "ከባለሙያ ቡድናችን የቅርብ ጊዜ የጤና ጽሑፎችን፣ ምክሮችን እና የህክምና ግንዛቤዎችን ያግኙ።", // Added for articles.html hero
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
                } else {
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
        // Example: If you have dynamic text in hero sections that aren't data-translate, update them here
        // For example, the `departments-p` and `facilities-p` in the hero sections
        const currentPath = window.location.pathname;
        if (currentPath.includes('departments.html')) {
            const heroP = document.querySelector('#departments-hero p');
            if (heroP && translations[lang]['departments-p']) {
                heroP.textContent = translations[lang]['departments-p'];
            }
        } else if (currentPath.includes('facilities.html')) {
            const heroP = document.querySelector('#facilities-hero p');
            if (heroP && translations[lang]['facilities-p']) {
                heroP.textContent = translations[lang]['facilities-p'];
            }
        } else if (currentPath.includes('patient-info.html')) {
            const heroP = document.querySelector('#patient-info-hero p');
            if (heroP && translations[lang]['patient-info-p']) {
                heroP.textContent = translations[lang]['patient-info-p'];
            }
        } else if (currentPath.includes('articles.html')) {
            const heroP = document.querySelector('#articles-hero p');
            if (heroP && translations[lang]['articles-p']) {
                heroP.textContent = translations[lang]['articles-p'];
            }
        }
        // ... add more specific updates if needed for other pages
    }


    // Language Switcher functionality
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            localStorage.setItem('selectedLang', selectedLang); // Save selected language
            applyTranslations(selectedLang);
        });

        // Set initial language from localStorage or default to Tigrigna
        const savedLang = localStorage.getItem('selectedLang') || 'tig';
        languageSwitcher.value = savedLang;
        applyTranslations(savedLang);
    }

    // Dropdown functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.submenu').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.submenu').style.display = 'none';
        });

        // For mobile/touch devices, allow click to toggle
        dropdown.querySelector('a').addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // Adjust breakpoint as needed
                e.preventDefault(); // Prevent navigating immediately
                const submenu = dropdown.querySelector('.submenu');
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        });
    });

    // Mobile Navigation Toggle (if you implement a hamburger menu)
    const navToggle = document.getElementById('nav-toggle'); // Assuming you have a toggle button
    const navMenu = document.querySelector('nav ul');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Add/remove 'active' class
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    }

    // Dynamic content filtering for services.html, doctors.html, departments.html
    // This part should already be in your HTML files, but including a general reminder
    // You'll need specific JavaScript logic within each page if you want dynamic filtering
    // based on URL parameters (e.g., services.html?service=cardiology)
    // Example for departments.html (as provided in previous response):
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDept = urlParams.get('dept');
    if (selectedDept) {
        document.querySelectorAll('.department-item').forEach(item => {
            item.style.display = 'none';
        });
        const targetDept = document.getElementById(selectedDept + '-item');
        if (targetDept) {
            targetDept.style.display = 'block'; // Or 'flex', 'grid'
        }
    }
    // You would replicate similar logic for services.html (using 'service' parameter)
    // and doctors.html (using 'specialty' parameter) if you want to show only one
    // item based on the URL. Otherwise, you can just show all.
});