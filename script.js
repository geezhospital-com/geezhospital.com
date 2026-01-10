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
            "service16-h3": "Ophthamology",
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
            "footer-text": "Copyright © 2026 Geez Hospital<br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "About Us", // Hero Title
            "about-p": "Learn more about Geez Hospital, our mission, vision, and the values that guide us in providing exceptional healthcare.", // Hero Paragraph
            "about-h3": "About Us", // Section Title
            "about-p1": "Established in 2011 E.C., Geez Hospital is one of the leading institutions in the central zone and Tigray, providing modern and efficient medical services with international standards. We aim to make world-class healthcare accessible to every citizen, becoming one of the largest and most trusted medical institutions in the entire zone and its surroundings. We are founded on providing compassionate care, high professional competence, and modern equipment. We place great emphasis on patient safety and excellent service.",
            "mission-h3": "Our Mission",
            "mission-p": "To provide excellent, affordable, accessible, and accountable medical care to all citizens; to offer comprehensive, high-quality, and affordable healthcare that combines professional excellence with compassionate care; to create a world-class medical practice and uphold the highest medical ethics.",
            "vision-h3": "Our Vision",
            "vision-p": "We envision a future where Geez Hospital is synonymous with innovation, empathy, and unparalleled medical outcomes, setting new benchmarks for healthcare excellence across the continent.",
            "services-h3": "Services Overview",
            "services-p-about": "At Geez Hospital, we are dedicated to offering a comprehensive suite of medical services designed to meet the diverse needs of our community. Our state-of-the-art facilities and a team of dedicated professionals ensure that you receive the best possible care across all specialties.",
            "all-services-btn": "View All Our Services",
            "departments-h2": "Our Departments",
            "departments-p": "Explore the specialized departments at Geez Hospital, where expert care meets advanced technology.",
            "facilities-h2": "Our Facilities",
            "facilities-p": "Geez Hospital is equipped with state-of-the-art medical technology and modern facilities to provide you with the best possible care.",
            "patient-info-h2": "Patient Information",
            "patient-info-p": "Find essential information for your visit, including admission, discharge, rights, and responsibilities.",
            "articles-h2": "Health Articles",
            "articles-p": "Stay informed with our latest health articles, tips, and medical insights from our expert team.",
        },
        "tig": {
            "hero-main-title": "ሆስፒታል ግዕዝ|Geez Hospital",
            "contact-us-btn": "ተወከሱና",
            "home": "መእተዊ",
            "about-us": "ብዛዕባና",
            "menu-about-us": "ብዛዕባና",
            "menu-mission": "ተልእኾና",
            "menu-vision": "ራእይና",
            "menu-services-about": "ዝርዝር ግልጋሎታትና",
            "services": "ግልጋሎታትና",
            "service1-h3": "ውሽጣዊ ሕማማት ሕክምና",
            "service2-h3": "ሕክምና ልቢ",
            "service3-h3": "ሓፈሻዊ ሕክምና",
            "service4-h3": "ሕክምና ህጻናትን ኣባጽሕን",
            "service5-h3": "ሕክምና ነፍሰጾራትን ደቂኣንስትዮን",
            "service6-h3": "ሕክምና ልዕሊ ክሳድ",
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
            "departments": "ክፍሊታት ሕክምና",
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
            "facilities": "ማሽናት ሕክምና",
            "media": "ሚድያ",
            "media-patient-info": "ሓበሬታ ሕሙማት",
            "media-articles": "ጽሑፋት",
            "news": "ዜናን ፍጻሜታትን",
            "gallery": "ጋለሪ",
            "patient-satisfaction-survey": "ናይ ሕሙማት ሳትስፋክሽን መርመራ",
            "contact": "ተወከሰና",
            "search-placeholder": "ድለ...",
            "footer-text": "Copy right © 2026 ሆስፒታል ግዕዝ<br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "ብዛዕባና", // Hero Title
            "about-p": "ብዛዕባ ሆስፒታል ግዕዝ፣ ተልእኾና፣ ራእይና፣ ከምኡ እውን ነቲ ዝለዓለ ሕክምናዊ ክንክን ንምሃብ ዝመርሑና መሰረታዊ መትከላት እዞም ዝስዑቡ እዮም።", // Hero Paragraph
            "about-h3": "ብዛዕባና", // Section Title
            "about-p1": "ሆስፒታል ግዕዝ ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።",
            "mission-h3": "ተልእኾና",
            "mission-p": "ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።",
            "vision-h3": "ራእይና",
            "vision-p": "ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።",
            "services-h3": "ዝርዝር ግልጋሎታት",
            "services-p-about": "ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን ናይ ሃንደበታዊ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።",
            "all-services-btn": "ኹሎም ግልጋሎታትና ኣብዚ ርአ",
            "departments-h2": "ክፍሊታት ሕክምና",
            "departments-p": "ኣብ ሆስፒታል ግዕዝ ዝርከቡ ፍሉያት ክፍሊታት ሕክምና ዝድህስሱሉ፣ ብቑዕ ክንክን ምስ ዘመናዊ ቴክኖሎጂ ዝርከቡሉ ቦታ እዩ።",
            "facilities-h2": "መሳርሒታት(ማሽናት) ሕክምና",
            "facilities-p": "ግዕዝ ሆስፒታል ንተገልገልቲ ዝበለጸ ሕክምና ንምሃብ ብብሉጽ ተኽኖሎጂን ዘመናዊ መሳርሕታትን ምስ ብሉጻት ሰብ ምያ ሕክምና ኣወሃሂዱ ግልጋሎት ይህብ ኣሎ።",
            "patient-info-h2": "ሓበሬታ ሕሙማት",
            "patient-info-p": "ናብ ሆስፒታልና ክትመፅእ እንተኾይንካ ወይ ክትወፅእ እንተኾይንካ፣ ከምኡ'ውን መሰላትን ሓላፍነታትን ናይ ሕክምና ንምርካብ ዘድልየካ ኩሉ ኣገዳሲ ሓበሬታ ኣብዚ ይርከብ።",
            "articles-h2": "ጽሑፋት ጥዕና",
            "articles-p": "ብብሉጻት ሓኻይም ዝምልከቶም ሰራሕተኛታትን  ጠቐምቲ ሓሳባትን ምኽሪታን ዝረኽብሉ ዓምዲ እዩ።",
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
            "footer-text": "Copy right © 2026 ግዕዝ ሆስፒታል<br>Developed By Aser Teklu Gebrekidan-0911179955",
            "about-h2": "ስለ እኛ", // Hero Title
            "about-p": "ስለ ግዕዝ ሆስፒታል፣ ተልዕኮአችን፣ ራዕያችን፣ እና በልዩ የጤና እንክብካቤ አሰጣጥ ላይ የሚመሩን እሴቶች የበለጠ ይረዱ።", // Hero Paragraph
            "about-h3": "ስለ እኛ", // Section Title
            "about-p1": "ግዕዝ ሆስፒታል በ2011 ዓ.ም. የተቋቋመ ሲሆን በማዕከላዊ ዞን እና ትግራይ ውስጥ ዓለም አቀፍ ደረጃውን የጠበቀ ዘመናዊና ቀልጣፋ የህክምና አገልግሎት ከሚሰጡ ተቋማት አንዱ ነው። የአለም ደረጃ የህክምና አገልግሎትን ለእያንዳንዱ ዜጋ ተደራሽ ለማድረግ፣ በመላው ዞኑ እና አካባቢው ትልቁ እና ታማኝ የህክምና ተቋማት አንዱ ለመሆን ያለመ ነው። በአዛኝ እንክብካቤ፣ ከፍተኛ የሙያ ብቃት እና ዘመናዊ መሳሪያዎች ላይ የተመሰረተ ነው። የታካሚ ደህንነት እና እጅግ በጣም ጥሩ አገልግሎት ላይ ከፍተኛ ትኩረት እንሰጣለን።",
            "mission-h3": "ተልዕኮአችን",
            "mission-p": "ለሁሉም ዜጎች እጅግ በጣም ጥሩ፣ ተመጣጣኝ፣ ተደራሽ እና ተጠያቂ የህክምና እንክብካቤ መስጠት፤ የሙያ ብቃትን ከአዛኝ እንክብካቤ ጋር የሚያጣምር ሁሉን አቀፍ፣ ከፍተኛ ጥራት ያለው እና ተመጣጣኝ የጤና እንክብካቤ መስጠት፤ ዓለም አቀፍ ደረጃ ያለው የህክምና አሰራር መፍጠር እና ከፍተኛ የህክምና ስነ-ምግባርን መጠበቅ።",
            "vision-h3": "ራዕያችን",
            "vision-p": "በእኛ እጅግ በጣም ጥሩ ሙያዊ ብቃት እና የታካሚ ተኮር እንክብካቤ በመነዳት፣ በአፍሪካ ውስጥ ዓለም አቀፍ ደረጃ ያለው የህክምና ተቋም ለመሆን።",
            "services-h3": "የአገልግሎቶች አጠቃላይ እይታ",
            "services-p-about": "ብዙ አይነት ልዩ ልዩ እና ንዑስ ልዩ ልዩ መስኮች (ለምሳሌ የልብ ህክምና፣ ኦንኮሎጂ፣ የነርቭ ቀዶ ጥገና፣ የአጥንት ህክምና፣ የአፍንጫ፣ ጆሮ፣ ጉሮሮ ህክምና፣ የአይን ህክምና፣ የቆዳ ህክምና፣ የማህፀንና ፅንስ ህክምና፣ የህፃናት ህክምና፣ የተለያዩ የምርመራ አገልግሎቶች እና የድንገተኛ ህክምና) በዘመናዊ ቴክኖሎጂ እና በሙያ ብቃት እናቀርባለን። ለዝርዝር አገልግሎቶቻችን፣ 'የእኛ አገልግሎቶች' የሚለውን ክፍል ይመልከቱ።",
            "all-services-btn": "ሁሉንም አገልግሎቶቻችንን ይመልከቱ",
            "departments-h2": "የእኛ መምሪያዎች",
            "departments-p": "በግዕዝ ሆስፒታል ያሉትን ልዩ ልዩ ክፍሎች ያስሱ፣ የባለሙያ እንክብካቤ ከዘመናዊ ቴክኖሎጂ ጋር የሚገናኝበት ቦታ ነው።",
            "facilities-h2": "የእኛ መገልገያዎች",
            "facilities-p": "ግዕዝ ሆስፒታል ዘመናዊ የህክምና ቴክኖሎጂ እና ዘመናዊ መገልገያዎች የተገጠመለት ሲሆን የተሻለውን እንክብካቤ ለእርስዎ ለማቅረብ ነው።",
            "patient-info-h2": "የታካሚ መረጃ",
            "patient-info-p": "ጉብኝትዎን በተመለከተ አስፈላጊ መረጃዎችን፣ የመግቢያ፣ የመውጫ፣ መብቶችን እና ኃላፊነቶችን ጨምሮ ያግኙ።",
            "articles-h2": "የጤና ጽሑፎች",
            "articles-p": "ከባለሙያ ቡድናችን የቅርብ ጊዜ የጤና ጽሑፎችን፣ ምክሮችን እና የህክምና ግንዛቤዎችን ያግኙ።",
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
        const currentPath = window.location.pathname;
        const heroP = document.querySelector('.hero-section p'); // Targeting hero p for all pages
        if (currentPath.includes('about.html') && heroP && translations[lang]['about-p']) {
            heroP.textContent = translations[lang]['about-p'];
        } else if (currentPath.includes('departments.html') && heroP && translations[lang]['departments-p']) {
            heroP.textContent = translations[lang]['departments-p'];
        } else if (currentPath.includes('facilities.html') && heroP && translations[lang]['facilities-p']) {
            heroP.textContent = translations[lang]['facilities-p'];
        } else if (currentPath.includes('patient-info.html') && heroP && translations[lang]['patient-info-p']) {
            heroP.textContent = translations[lang]['patient-info-p'];
        } else if (currentPath.includes('articles.html') && heroP && translations[lang]['articles-p']) {
            heroP.textContent = translations[lang]['articles-p'];
        }
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
            if (window.innerWidth > 768) { // Only for desktop hover
                dropdown.querySelector('.submenu').style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) { // Only for desktop hover
                dropdown.querySelector('.submenu').style.display = 'none';
            }
            // For mobile, ensure it stays hidden after mouseleave
            if (window.innerWidth <= 768) {
                dropdown.querySelector('.submenu').style.display = 'none';
            }
        });

        // For mobile/touch devices, allow click to toggle
        dropdown.querySelector('a').addEventListener('click', (e) => {
            if (window.innerWidth <= 768) { // Adjust breakpoint as needed for mobile
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

    // Mobile Navigation Toggle (Hamburger menu toggle)
    const navToggle = document.getElementById('nav-toggle'); // Assuming you have a toggle button for mobile
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

    // Dynamic content filtering for departments.html (and similar for services/doctors)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDept = urlParams.get('dept');
    if (selectedDept) {
        document.querySelectorAll('.department-item').forEach(item => {
            item.style.display = 'none';
        });
        const targetDept = document.getElementById(selectedDept + '-item');
        if (targetDept) {
            targetDept.style.display = 'block'; // Or 'flex', 'grid' depending on your layout
        }
    }
});