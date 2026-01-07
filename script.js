document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    const getLanguageFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang');
    };

    const updateUrlLanguage = (lang) => {
        const url = new URL(window.location.href);
        if (lang === 'tig') {
            url.searchParams.delete('lang');
        } else {
            url.searchParams.set('lang', lang);
        }
        window.history.pushState({ path: url.href }, '', url.href);
    };

    const translations = {
        'tig': {
            // Header Menu Items (Common)
            'home': 'መእተዊ',
            'services': 'ግልጋሎታትና',
            'doctors': 'ሓኻይምና',
            'news': 'ሓድሽ ሓበሬታ',
            'gallery': 'ጋለሪ',
            'contact': 'ምትእስሳር',
            'logo-alt': 'ግዕዝ ሆስፒታል ሎጎ',

            // Index.html Specific Content
            'hero-h2': 'ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን',
            'hero-p': 'ግዕዝ ሆስፒታል - ዘመናዊ ሆስፒታል!',
            'hero-btn-appointment': 'ቆፀሮ ንምሓዝ',
            'hero-btn-services': 'ግልጋሎታትና ርኣዩ',
            'about-h2': 'ብዛዕባና (About Us)',
            'about-p1': 'ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ ኢሉ እዉን ኣብ ትግራይ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።',
            'vision-h3': 'ራእይ (Vision)',
            'vision-p': 'ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',
            'mission-h3': 'ልእኽቶ (Mission)',
            'mission-p': 'ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።',
            'services-h3': 'ግልጋሎታት (Our Services)',
            'services-p-about': 'ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን ናይ ህፁፅ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።ንዝርዝር እንህቦም ግልጋሎታት ኣብ ግልጋሎታትና ዝብል ኣርእስቲ የንቢቡ።',
            'our-services-h2': 'ግልጋሎታትና',
            'all-services-btn': 'ኩሎም ግልጋሎታትና',
            'doctors-h2': 'ሓኻይምና',
            'doctors-p': 'ግዕዝ ሆስፒታል ብልዑል ተመኩሮን ሞያን ዘለዎም ስፔሻሊስት ሓኻይም ግልጋሎት ይህብ።',
            'dr-tesfay-name': 'ዶ/ር ተስፋይ ኣጽብሃ',
            'dr-tesfay-specialty': 'ሳብ-ስፔሻሊስት ሕማማት ልቢ',
            'dr-higus-name': 'ዶ/ር ሕጉስ ተኽሉ',
            'dr-higus-specialty': 'ስፔሻሊስት ሕክምና ውሽጣዊ ሕማማት',
            'appointment-btn': 'ቆፀሮ',
            'testimonials-h2': 'ናይ ሕሙማት ምስክርነት',
            'testimonial-p': '"ግዕዝ ሆስፒታል ብሓልዮቶምን ሞያዊ ብቕዓቶምን ብጣዕሚ ፍሉያት እዮም። እቶም ሓኻይም ኣዝዮም ለዋሃትን ብሉፃትን እዮም። ንዝገበሩለይ ሕክምናዊ ክንክን ኣዝየ የመስግን"',
            'testimonial-span': '- ኣይተ ገብረመድህን ካሕሳይ',
            'contact-h2': 'ምትእስሳር',
            'contact-p': 'ንዝኾነ ሕቶ ወይ ሓሳብ፣ ክትረኽቡና ትኽእሉ ኢኹም።',
            'address-strong': 'ኣድራሻ:',
            'address-text': 'ከተማ ኣኽሱም፣ ጣብያ ክንደያ ፊትንፊት ኢትዮቴሌኮም ዉርድ ኢልካ፣ ድሕሪ ሴንትራል ካፌ',
            'phone-strong': 'ቴለፎን:',
            'email-strong': 'ኢሜይል:',
            'facebook-strong': 'ፌስቡክ:',

            // Contact Form specific translations
            'contact-name': 'ሙሉእ ሽም:',
            'contact-email': 'ኢሜይል:',
            'contact-subject': 'ዋኒኑ:', // CHANGED HERE
            'contact-phone': 'ቑፅሪ ቴለፎን:',
            'contact-address': 'ኣድራሻ:',
            'contact-age': 'ዕድመ:',
            'contact-gender': 'ፆታ:',
            'gender-select': 'ምረፅ',
            'gender-male': 'ተባዕታይ',
            'gender-female': 'ኣንስተይቲ',
            'gender-other': 'ካልእ',
            'contact-message': 'መልእኽቲ:',
            'contact-submit': 'መልእኽቲ ስደድ',

            // Services.html Specific Content
            'services-page-h2': 'ግልጋሎታትና',
            'services-page-intro-p': 'ግዕዝ ሆስፒታል ዝተፈላለዩን ዘመናዊን ግልጋሎታት ብስፔሻሊስትን ብፍሉይ ስፔሻሊስትን(sub specialist)ብቕዓትት ዘለዎም ሓኻይም ግልጋሎት ይህብ።',
            
            'service1-h3': 'ስፔሻሊስት ሕክምና ውሽጣዊ ሕማማት',
            'service1-p': 'ምሉእ ናይ ውሽጣዊ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ። እዚ ግልጋሎት ንዝተፈላለዩ ሕማማት ከም ሕማም ደም፣ ሕማም ኩላሊት፣ ሕማም ሳንቡእ፣ ሕማም ሆርሞን፣ ወዘተ ዘጠቓለለ እዩ።',
            'service2-h3': 'ፍሉይ ስፔሻሊስት ሕክምና ሕማማት ልቢ',
            'service2-p': 'ፍሉይ ናይ ልቢ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ሳብ ስፔሻሊስት ሓኻይም ይወሃብ። ECG፣ Echocardiography፣ Stress Test ዝኣመሰሉ ዘመናዊ መሳርሒታትን ኣገባባትን ንጥቀም።',
            'service3-h3': 'ስፔሻሊስት ሓፈሻዊ መጥባሕቲ',
            'service3-p': 'ስፔሻሊስት ሓፈሻዊ መጥባሕቲ ብዘመናዊ መሳርሒታትን ኣገባባትን ይወሃብ። እዚ ንዝተፈላለዩ ንኣብነት ን appendices, hernias, gallbladder, ወዘተ መጥባሕቲ ዝሓቖፈ እዩ።',
            'service4-h3': 'ስፔሻሊስት ሕክምና ህፃውንቲን ኣባፅሕን',
            'service4-p': 'ናይ ህፃውንቲን ኣባፅሕን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ። ንህጻናት ዝምጥን ፍሉይ ክንክን ንህብ።',
            'service5-h3': 'ስፔሻሊስት ሕክምና ማህፀንን ጥንስን',
            'service5-p': 'ምሉእ ናይ ማህፀንን ጥንስን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ። ቅድሚ ሕርሲ፣ ኣብ ሕርሲን ድሕሪ ሕርሲን ዘድሊ ክንክን ይህብ።',
            'service6-h3': 'ስፔሻሊስት ሕክምና ካብ ክሳድ ንላዕሊ(ENT)',
            'service6-p': 'ናይ ክሳድ፣ እዝንን ኣፍንጫን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ። ንዝተፈላለዩ ሕማማት ENT ብዘመናዊ መሳርሒታት(Endoscopy) መርመራን ሕክምናን ንህብ።',
            'service7-h3': 'ስፔሻሊስት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን)',
            'service7-p': 'ዘመናዊ ግልጋሎት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን) ብስፔሻሊስት ሓኪም ይወሃብ። ትክክለኛ መርመራ ንምሃብ ዝሕግዝ ዘመናዊ ቴክኖሎጂ ንጥቀም።',
            'service8-h3': 'ስፔሻሊስት ሕክምና ስኒ',
            'service8-p': 'ምሉእ ናይ ስኒ ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ። ካብ ንጹህ ስኒ ክሳብ ኮሮናን ስኒ ምልዋጥን ዝሓቖፈ ግልጋሎት ንህብ።',
            'service9-h3': 'ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን',
            'service9-p': 'ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን ብልዑል ተመኩሮ ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ። ንዝተፈላለዩ ነርቫዊ ሕማማት ፍሉይ ሕክምና ንህብ።',
            'service10-h3': 'ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ነርቭን ዓንዲሑቐን',
            'service10-p': 'ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ ነርቭን ዓንዲ ሑቐን ብስፔሻሊስት ሓኪም ይወሃብ። ንስባራት፣ ቁስልን ሕማማት መገጣጠምን ሕክምና ንህብ።',
            'service11-h3': 'ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን',
            'service11-p': 'ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን ብስፔሻሊስት ሓኪም ይወሃብ። ንዝተፈላለዩ ሕማማት ቆርበትን ውሽጣዊን ክንክን ንህብ።',
            'service12-h3': 'ስፔሻሊስት መደቀስን ቃንዛን',
            'service12-p': 'ስፔሻሊስት መደቀስን ቃንዛን ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ። ቅድሚን ድሕሪን መጥባሕቲ ዘድሊ ክንክን ንህብ።',
            'service13-h3': 'ምሉእ ዘመናዊ ላቦራቶሪ',
            'service13-p': 'ምሉእ ዘመናዊ ላቦራቶሪ ግልጋሎት ይወሃብ። ንኹሎም ዓይነታት መርመራ ደምን ሽንትን ካልኦት ባዮሎጂካዊ መርመራታትን ብዘመናዊ መሳርሒታት ግልጋሎት ንህብ።',
            'service14-h3': 'መርመራን ሕክምናን ፊዝዮቴራፒ',
            'service14-p': 'ምሉእ መርመራን ሕክምናን ብፊዝዮቴራፒ ሓኪም ግልጋሎት ይወሃብ። ንዝተፈላለዩ ዓይነት ሕማማት ቅርጺ ኣካልን ምንቅስቓስን ሕክምና ንህብ።',
            'service15-h3': 'ስፔሻሊስት ሕክምና ስነ ኣእምሮ',
            'service15-p': 'ስፔሻሊስት ሕክምና ስነ ኣእምሮ ግልጋሎት ይወሃብ። ንዝተፈላለዩ ኣእምሮኣዊ ሕማማት ምኽሪን ሕክምናን ንህብ።',
            'service16-h3': 'ናይ መዋልዳን ምሉእ ግልጋሎት',
            'service16-p': 'ምሉእ ግልጋሎት መዋልዳን፣ ካብ ቅድሚ ሕርሲ ክሳብ ድሕሪ ሕርሲ፣ ብልዑል ልምዲን ተሞኩሮን ዘለዎም ሰብ ሞያን ብስፔሻሊስት ሓኪምን ብዘመናዊ መሳርሒታትን ይወሃብ።',
            'service17-h3': 'ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን',
            'service17-p': 'ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን ግልጋሎት ይወሃብ። 24 ሰዓት ግልጋሎት ፋርማሲን ኣምቡላንስን ንህብ እዩ።',
            'service18-h3': 'ካልኦት ግልጋሎትን ይረኽቡ',
            'service18-p': 'ግዕዝ ሆስፒታል ካልኦት ዘይተዘርዘሩ ግልጋሎት ንሕብረተሰብን ነቕርብ። ንዝኾነ ሕቶ ወይ ተወሳኺ ሓበሬታ ምሕታት ይከኣል እዩ።',
            
            // Footer (Common)
            'footer-text': 'Copyright © 2026 Geez Hospital. All rights reserved. Developed By Aser Teklu G'
        },
        'eng': {
            // Header Menu Items (Common)
            'home': 'Home',
            'services': 'Services',
            'doctors': 'Doctors',
            'news': 'News',
            'gallery': 'Gallery',
            'contact': 'Contact',
            'logo-alt': 'Geez Hospital Logo',

            // Index.html Specific Content
            'hero-h2': 'Chosen for our care, trusted for our expertise',
            'hero-p': 'Geez Hospital - A Modern Hospital!',
            'hero-btn-appointment': 'Book Appointment',
            'hero-btn-services': 'View Our Services',
            'about-h2': 'About Us',
            'about-p1': 'Established in 2011 E.C., Geez Hospital is one of the leading healthcare institutions in Central Zone and Tigray, providing modern and efficient medical services with international standards. It aims to make world-class medical care accessible to every citizen in the entire zone and neighboring areas. It is particularly founded on providing compassionate care, high professional competence, and modern equipment. It places great emphasis on patient safety and excellent service.',
            'vision-h3': 'Vision',
            'vision-p': 'To become a renowned medical institution in Africa by providing world-class medical services, known for its excellent professional competence and patient-centered care.',
            'mission-h3': 'Mission',
            'mission-p': 'To provide excellent quality, affordable, accessible, and accountable medical care to all citizens; to offer the community medical care that combines outstanding professional skill and compassionate care, which is accessible, quality-assured, and reasonably priced; to create a medical practice that adheres to international standards and upholds the highest medical ethics.',
            'services-h3': 'Our Services',
            'services-p-about': 'We offer a wide range of specialist and sub-specialist fields (for example: cardiology, oncology, neurology, orthopedics, ENT, ophthalmology, dermatology and cosmetology, maternal and child care, and emergency services) with modern technology and professional competence. For a detailed list of our services, please refer to the "Services" section.',
            'our-services-h2': 'Our Services',
            'all-services-btn': 'All Our Services',
            'doctors-h2': 'Our Doctors',
            'doctors-p': 'Geez Hospital provides services with specialist doctors who have extensive experience and expertise.',
            'dr-tesfay-name': 'Dr. Tesfay Atsbeha',
            'dr-tesfay-specialty': 'Sub-Specialist, Heart Diseases',
            'dr-higus-name': 'Dr. Higus Teklu',
            'dr-higus-specialty': 'Specialist, Internal Medicine',
            'appointment-btn': 'Appointment',
            'testimonials-h2': 'Patient Testimonials',
            'testimonial-p': '"Geez Hospital is truly exceptional for its compassion and professional competence. The doctors are incredibly kind and excellent. I am very grateful for the medical care they provided."',
            'testimonial-span': '- Mr. Gebremedhin Kahsay',
            'contact-h2': 'Contact Us',
            'contact-p': 'For any questions or comments, you can reach us.',
            'address-strong': 'Address:',
            'address-text': 'Aksum City, Kindeya Kebele, In front of Ethiotelecom, behind Central Cafe',
            'phone-strong': 'Phone:',
            'email-strong': 'Email:',
            'facebook-strong': 'Facebook:',

            // Contact Form specific translations
            'contact-name': 'Full Name:',
            'contact-email': 'Email:',
            'contact-subject': 'Subject:',
            'contact-phone': 'Phone Number:',
            'contact-address': 'Address:',
            'contact-age': 'Age:',
            'contact-gender': 'Gender:',
            'gender-select': 'Select',
            'gender-male': 'Male',
            'gender-female': 'Female',
            'gender-other': 'Other',
            'contact-message': 'Message:',
            'contact-submit': 'Send Message',

            // Services.html Specific Content
            'services-page-h2': 'Our Services',
            'services-page-intro-p': 'Geez Hospital offers various modern services provided by specialist and sub-specialist doctors with high proficiency.',
            
            'service1-h3': 'Specialist Internal Medicine',
            'service1-p': 'Complete examination and treatment of internal diseases by highly experienced and qualified specialist doctors. This service includes various diseases such as blood pressure, kidney disease, lung disease, hormonal imbalance, etc.',
            'service2-h3': 'Sub-Specialist Cardiology',
            'service2-p': 'Specialized examination and treatment of heart diseases by highly experienced sub-specialist doctors. We use modern equipment and techniques such as ECG, Echocardiography, and Stress Test.',
            'service3-h3': 'Specialist General Surgery',
            'service3-p': 'Specialist general surgery is provided with modern equipment and techniques. This includes surgeries for conditions such as appendices, hernias, gallbladder, etc.',
            'service4-h3': 'Specialist Pediatrics and Adolescents Medicine',
            'service4-p': 'Examination and treatment of children and adolescents by a specialist doctor. We provide special care suitable for children.',
            'service5-h3': 'Specialist Obstetrics and Gynecology',
            'service5-p': 'Complete examination and treatment for obstetrics and gynecology by a specialist doctor. We provide necessary care before, during, and after childbirth.',
            'service6-h3': 'Specialist ENT (Ear, Nose, Throat)',
            'service6-p': 'Examination and treatment of throat, ear, and nose conditions by a specialist doctor. We provide examination and treatment for various ENT diseases using modern equipment (Endoscopy).',
            'service7-h3': 'Specialist Radiology (Ultrasound, X-ray, CT Scan, ECG)',
            'service7-p': 'Modern radiology services (Ultrasound, X-ray, CT Scan, ECG) are provided by a specialist doctor. We use modern technology to provide accurate diagnoses.',
            'service8-h3': 'Specialist Dental Treatment',
            'service8-p': 'Complete dental treatment by a specialist doctor. We offer services ranging from dental cleaning to crowns and tooth replacement.',
            'service9-h3': 'Specialist Neurosurgery (Nerves, Spine, Brain)',
            'service9-p': 'Specialist surgery for nerves, spine, and brain is provided by highly experienced specialist doctors. We offer specialized treatment for various neurological diseases.',
            'service10-h3': 'Specialist Orthopedics and Traumatology (Bones, Joints, Nerves, Spine)',
            'service10-p': 'Specialist treatment for bones, joints, nerves, and spine by a specialist doctor. We provide treatment for fractures, injuries, and joint diseases.',
            'service11-h3': 'Specialist Dermatology, Laser, and Cosmetology',
            'service11-p': 'Specialist treatment for skin, laser, and cosmetology by a specialist doctor. We provide care for various skin and internal conditions.',
            'service12-h3': 'Specialist Anesthesia and Pain Management',
            'service12-p': 'Specialist anesthesia and pain management treatment by a specialist doctor. We provide necessary care before and after surgery.',
            'service13-h3': 'Full Modern Laboratory',
            'service13-p': 'Full modern laboratory services are provided. We offer services for all types of blood, urine, and other biological tests using modern equipment.',
            'service14-h3': 'Physiotherapy Examination and Treatment',
            'service14-p': 'Complete examination and treatment by a physiotherapy doctor. We provide treatment for various types of body form and movement disorders.',
            'service15-h3': 'Specialist Psychiatry',
            'service15-p': 'Specialist psychiatry services are provided. We offer counseling and treatment for various mental illnesses.',
            'service16-h3': 'Complete Maternity Services',
            'service16-p': 'Complete maternity services, from pre-natal to post-natal care, are provided by highly experienced and skilled professionals and specialist doctors, using modern equipment.',
            'service17-h3': 'Full Pharmacy and Ambulance Services',
            'service17-p': 'Full pharmacy and ambulance services are provided. 24-hour pharmacy and ambulance services are available.',
            'service18-h3': 'Other Services Available',
            'service18-p': 'Geez Hospital also offers other unlisted services to the community. Inquiries for any questions or additional information are welcome.',

            // Footer (Common)
            'footer-text': 'Copyright © 2026 Geez Hospital. All rights reserved. Developed By Aser Teklu G'
        }
    };

    const applyLanguage = (lang) => {
        const currentTranslations = translations[lang];
        const currentPage = window.location.pathname.split('/').pop();

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (currentTranslations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = currentTranslations[key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = currentTranslations[key];
                }
                else {
                    element.textContent = currentTranslations[key];
                }
            }
        });

        const headerLogoImg = document.querySelector('header .logo img');
        if (headerLogoImg) headerLogoImg.alt = currentTranslations['logo-alt'];

        const footerP = document.querySelector('footer #footer-text');
        if (footerP) footerP.innerHTML = currentTranslations['footer-text'];

        document.documentElement.lang = (lang === 'eng') ? 'en' : 'ti';

        const topBarAddressSpan = document.querySelector('.top-bar .address-info span');
        if (topBarAddressSpan) {
            topBarAddressSpan.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${currentTranslations['address-text']}`;
        }

        const topBarPhoneSpan = document.querySelector('.top-bar .contact-info span:nth-of-type(1)');
        if (topBarPhoneSpan) {
            topBarPhoneSpan.innerHTML = `<i class="fas fa-phone"></i> +251920008338/+251962333388`;
        }

        const topBarEmailSpan = document.querySelector('.top-bar .contact-info span:nth-of-type(2)');
        if (topBarEmailSpan) {
            topBarEmailSpan.innerHTML = `<i class="fas fa-envelope"></i> geezhospital@gmail.com`;
        }

        if (currentPage === 'index.html' || currentPage === '') {
            const serviceGridIndexPage = document.querySelector('#services .service-grid');
            if (serviceGridIndexPage && serviceGridIndexPage.children.length === 0) { 
                 const servicesForIndexPage = [
                    { name: currentTranslations["service1-h3"], icon: "fas fa-stethoscope", description: currentTranslations["service1-p"] },
                    { name: currentTranslations["service2-h3"], icon: "fas fa-heartbeat", description: currentTranslations["service2-p"] },
                    { name: currentTranslations["service3-h3"], icon: "fas fa-surgical-mask", description: currentTranslations["service3-p"] },
                    { name: currentTranslations["service4-h3"], icon: "fas fa-baby", description: currentTranslations["service4-p"] },
                    { name: currentTranslations["service5-h3"], icon: "fas fa-venus-mars", description: currentTranslations["service5-p"] },
                    { name: currentTranslations["service6-h3"], icon: "fas fa-ear", description: currentTranslations["service6-p"] },
                    { name: currentTranslations["service7-h3"], icon: "fas fa-x-ray", description: currentTranslations["service7-p"] },
                    { name: currentTranslations["service8-h3"], icon: "fas fa-tooth", description: currentTranslations["service8-p"] },
                    { name: currentTranslations["service9-h3"], icon: "fas fa-brain", description: currentTranslations["service9-p"] },
                    { name: currentTranslations["service10-h3"], icon: "fas fa-bone", description: currentTranslations["service10-p"] },
                    { name: currentTranslations["service11-h3"], icon: "fas fa-spa", description: currentTranslations["service11-p"] },
                    { name: currentTranslations["service12-h3"], icon: "fas fa-syringe", description: currentTranslations["service12-p"] },
                    { name: currentTranslations["service13-h3"], icon: "fas fa-flask", description: currentTranslations["service13-p"] },
                    { name: currentTranslations["service14-h3"], icon: "fas fa-wheelchair", description: currentTranslations["service14-p"] },
                    { name: currentTranslations["service15-h3"], icon: "fas fa-brain", description: currentTranslations["service15-p"] },
                    { name: currentTranslations["service16-h3"], icon: "fas fa-baby-carriage", description: currentTranslations["service16-p"] },
                    { name: currentTranslations["service17-h3"], icon: "fas fa-ambulance", description: currentTranslations["service17-p"] },
                    { name: currentTranslations["service18-h3"], icon: "fas fa-plus-circle", description: currentTranslations["service18-p"] }
                ];
                serviceGridIndexPage.innerHTML = '';
                servicesForIndexPage.forEach(service => {
                    const serviceCard = document.createElement('div');
                    serviceCard.classList.add('service-card');
                    serviceCard.innerHTML = `
                        <i class="${service.icon} fa-3x"></i>
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                    `;
                    serviceGridIndexPage.appendChild(serviceCard);
                });
            }
        }
    };

    languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        if (selectedLang === 'tig' || selectedLang === 'eng') {
            updateUrlLanguage(selectedLang);
            localStorage.setItem('selectedLanguage', selectedLang);
            window.location.reload(); 
        }
    });

    const savedLanguage = localStorage.getItem('selectedLanguage');
    const langInUrl = getLanguageFromUrl();

    let initialLang = 'tig';

    if (langInUrl) {
        initialLang = langInUrl;
    } else if (savedLanguage) {
        initialLang = savedLanguage;
    }

    if (languageSwitcher) {
        languageSwitcher.value = initialLang;
    }
    applyLanguage(initialLang);
    updateUrlLanguage(initialLang);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});