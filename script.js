document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    // ንኹሉ እቲ ኣብ ገጽ ዘሎ ትግርኛ ጽሑፍን ናይ እንግሊዝኛ ትርጉሙን ዝሓዘ object
    const translations = {
        'tig': {
            // Header Menu Items
            'home': 'መእተዊ',
            'services': 'ግልጋሎታትና',
            'doctors': 'ሓኻይምና',
            'news': 'ሓድሽ ሓበሬታ',
            'gallery': 'ጋለሪ',
            'contact': 'ምትእስሳር',
            // Logo
            'logo-h1': 'ግዕዝ ሆስፒታል',

            // Index.html Specific Content
            'hero-h2': 'ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን',
            'hero-p': 'ግዕዝ ሆስፒታል - ዘመናዊ ሆስፒታል!',
            'hero-btn-appointment': 'ቆፀሮ ንምሓዝ',
            'hero-btn-services': 'ግልጋሎታትና ርኣዩ',
            'about-h2': 'ብዛዕባና (About Us)',
            'about-p1': 'ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ ኢሉ እዉን ኣብ ትግራይ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።',
            'vision-h3': 'ራእይ (Vision)',
            'vision-p': 'ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',
            'mission-h3': 'ልእኽ (Mission)',
            'mission-p': 'ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።',
            'services-h3': 'ግልጋሎታት (Our Services)',
            'services-p-about': 'ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን ናይ ህፁፅ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።ንዝርዝር እንህቦም ግልጋሎታት ኣብ ግልጋሎታትና ዝብል ኣርእስቲ የንቢቡ።',
            'our-services-h2': 'ግልጋሎታትና', // ኣብ index.html ዘሎ
            'all-services-btn': 'ኩሎም ግልጋሎታትና', // ኣብ index.html ዘሎ
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
            'address-text': 'ከተማ ኣኽሱም፣ ጣብያ ክንደያ ትሕቲ ኢትዮቴሌኮም ዉርድ ኢልካ፣ ድሕሪ ሴንትራል ካፌ',
            'phone-strong': 'ቴለፎን:',
            'email-strong': 'ኢሜይል:',
            'facebook-strong': 'ፌስቡክ:',

            // Services.html Specific Content
            'services-page-h2': 'ግልጋሎታትና', // ኣብ services.html ዘሎ H2
            'services-page-intro-p': 'ግዕዝ ሆስፒታል ዝተፈላለዩን ዘመናዊን ግልጋሎታት ብስፔሻሊስትን ብፍሉይ ስፔሻሊስትን(sub specialist)ብቕዓትት ዘለዎም ሓኻይም ግልጋሎት ይህብ።', // ኣብ services.html ዘሎ intro P
            
            // ንነፍሲ-ወከፍ ግልጋሎት (Service Items)
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
            'service17-p': 'ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን ግልጋሎት ይወሃብ። 24 ሰዓት ግልጋሎት ፋርማሲን ኣምቡላንስን ድሉው እዩ።',
            'service18-h3': 'ካልኦት ግልጋሎትን ይረኽቡ',
            'service18-p': 'ግዕዝ ሆስፒታል ካልኦት ዘይተዘርዘሩ ግልጋሎት ንሕብረተሰብን ነቕርብ። ንዝኾነ ሕቶ ወይ ተወሳኺ ሓበሬታ ምሕታት ይከኣል እዩ።',
            
            // Footer (ንኹሎም ገጻት ዝምልከት)
            'footer-text': '&copy; 2024 ግዕዝ ሆስፒታል. ኩሉ መሰላት ዝተሓለወ እዩ።'
        },
        'eng': {
            // Header Menu Items
            'home': 'Home',
            'services': 'Services',
            'doctors': 'Doctors',
            'news': 'News',
            'gallery': 'Gallery',
            'contact': 'Contact',
            // Logo
            'logo-h1': 'Geez Hospital',

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
            'address-text': 'Aksum City, Kindeya Kebele, below Ethiotelecom, behind Central Cafe',
            'phone-strong': 'Phone:',
            'email-strong': 'Email:',
            'facebook-strong': 'Facebook:',

            // Services.html Specific Content
            'services-page-h2': 'Our Services', // In services.html
            'services-page-intro-p': 'Geez Hospital offers various modern services provided by specialist and sub-specialist doctors with high proficiency.', // In services.html
            
            // For each Service (Service Items)
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

            // Footer (Applies to all pages)
            'footer-text': '&copy; 2024 Geez Hospital. All rights reserved.'
        }
    };

    // ነቲ ቋንቋ ዝቕይር function
    const applyLanguage = (lang) => {
        const currentTranslations = translations[lang];
        const currentPage = window.location.pathname.split('/').pop();

        // Common elements for all pages (e.g., Header Menu, Logo)
        document.querySelector('nav ul li a[href="index.html"]').textContent = currentTranslations['home'];
        document.querySelector('nav ul li a[href="services.html"]').textContent = currentTranslations['services'];
        document.querySelector('nav ul li a[href="doctors.html"]').textContent = currentTranslations['doctors'];
        document.querySelector('nav ul li a[href="news.html"]').textContent = currentTranslations['news'];
        document.querySelector('nav ul li a[href="gallery.html"]').textContent = currentTranslations['gallery'];
        document.querySelector('nav ul li a[href="contact.html"]').textContent = currentTranslations['contact'];
        document.querySelector('.logo h1').textContent = currentTranslations['logo-h1'];

        // Footer (Common for all pages)
        document.querySelector('footer p').innerHTML = currentTranslations['footer-text'];
        document.documentElement.lang = (lang === 'eng') ? 'en' : 'ti'; // 'ti' for Tigrigna

        // Page-specific content
        if (currentPage === 'index.html' || currentPage === '') {
            // Index.html specific content
            document.querySelector('#hero h2').textContent = currentTranslations['hero-h2'];
            document.querySelector('#hero p').textContent = currentTranslations['hero-p'];
            document.querySelector('#hero .btn:nth-of-type(1)').textContent = currentTranslations['hero-btn-appointment'];
            document.querySelector('#hero .btn:nth-of-type(2)').textContent = currentTranslations['hero-btn-services'];

            document.querySelector('#about h2').textContent = currentTranslations['about-h2'];
            document.querySelector('#about p:nth-of-type(1)').textContent = currentTranslations['about-p1'];
            document.querySelector('#about h3:nth-of-type(1)').textContent = currentTranslations['vision-h3'];
            document.querySelector('#about p:nth-of-type(2)').textContent = currentTranslations['vision-p'];
            document.querySelector('#about h3:nth-of-type(2)').textContent = currentTranslations['mission-h3'];
            document.querySelector('#about p:nth-of-type(3)').textContent = currentTranslations['mission-p'];
            document.querySelector('#about h3:nth-of-type(3)').textContent = currentTranslations['services-h3'];
            document.querySelector('#about p:nth-of-type(4)').textContent = currentTranslations['services-p-about'];

            document.querySelector('#services h2').textContent = currentTranslations['our-services-h2'];
            document.querySelector('#services .btn-secondary').textContent = currentTranslations['all-services-btn'];

            document.querySelector('#doctors h2').textContent = currentTranslations['doctors-h2'];
            document.querySelector('#doctors p').textContent = currentTranslations['doctors-p'];
            
            const doctorCards = document.querySelectorAll('.doctor-card');
            if (doctorCards[0]) {
                doctorCards[0].querySelector('h3').textContent = currentTranslations['dr-tesfay-name'];
                doctorCards[0].querySelector('p').textContent = currentTranslations['dr-tesfay-specialty'];
                doctorCards[0].querySelector('.btn-small').textContent = currentTranslations['appointment-btn'];
            }
            if (doctorCards[1]) {
                doctorCards[1].querySelector('h3').textContent = currentTranslations['dr-higus-name'];
                doctorCards[1].querySelector('p').textContent = currentTranslations['dr-higus-specialty'];
                doctorCards[1].querySelector('.btn-small').textContent = currentTranslations['appointment-btn'];
            }

            document.querySelector('#testimonials h2').textContent = currentTranslations['testimonials-h2'];
            document.querySelector('.testimonial-card p').textContent = currentTranslations['testimonial-p'];
            document.querySelector('.testimonial-card span').textContent = currentTranslations['testimonial-span'];

            document.querySelector('#contact h2').textContent = currentTranslations['contact-h2'];
            document.querySelector('#contact p:nth-of-type(1)').textContent = currentTranslations['contact-p'];
            
            const addressP = document.querySelector('.contact-info p:nth-of-type(1)');
            if (addressP) { addressP.innerHTML = `<strong>${currentTranslations['address-strong']}</strong> ${currentTranslations['address-text']}`; }
            const phoneP = document.querySelector('.contact-info p:nth-of-type(2)');
            if (phoneP) { phoneP.innerHTML = `<strong>${currentTranslations['phone-strong']}</strong> +251920008338 / +251962333388`; }
            const emailP = document.querySelector('.contact-info p:nth-of-type(3)');
            if (emailP) { emailP.innerHTML = `<strong>${currentTranslations['email-strong']}</strong> geezhospital@gmail.com`; }
            const facebookP = document.querySelector('.contact-info p:nth-of-type(4)');
            if (facebookP) { facebookP.innerHTML = `<strong>${currentTranslations['facebook-strong']}</strong> <a href="https://www.facebook.com/profile.php?id=61572930304902" target="_blank">Geez Hospital Facebook Page</a>`; }
        } 
        else if (currentPage === 'services.html') {
            // Services.html specific content
            const pageHeroH2 = document.querySelector('#page-hero h2');
            if (pageHeroH2) pageHeroH2.textContent = currentTranslations['services-page-h2'];

            const pageHeroP = document.querySelector('#page-hero p');
            if (pageHeroP) pageHeroP.textContent = currentTranslations['services-page-intro-p'];

            // Iterate and update service items
            const serviceItems = document.querySelectorAll('.service-item');
            if (serviceItems[0]) {
                serviceItems[0].querySelector('h3').textContent = currentTranslations['service1-h3'];
                serviceItems[0].querySelector('p').textContent = currentTranslations['service1-p'];
            }
            if (serviceItems[1]) {
                serviceItems[1].querySelector('h3').textContent = currentTranslations['service2-h3'];
                serviceItems[1].querySelector('p').textContent = currentTranslations['service2-p'];
            }
            if (serviceItems[2]) {
                serviceItems[2].querySelector('h3').textContent = currentTranslations['service3-h3'];
                serviceItems[2].querySelector('p').textContent = currentTranslations['service3-p'];
            }
            if (serviceItems[3]) {
                serviceItems[3].querySelector('h3').textContent = currentTranslations['service4-h3'];
                serviceItems[3].querySelector('p').textContent = currentTranslations['service4-p'];
            }
            if (serviceItems[4]) {
                serviceItems[4].querySelector('h3').textContent = currentTranslations['service5-h3'];
                serviceItems[4].querySelector('p').textContent = currentTranslations['service5-p'];
            }
            if (serviceItems[5]) {
                serviceItems[5].querySelector('h3').textContent = currentTranslations['service6-h3'];
                serviceItems[5].querySelector('p').textContent = currentTranslations['service6-p'];
            }
            if (serviceItems[6]) {
                serviceItems[6].querySelector('h3').textContent = currentTranslations['service7-h3'];
                serviceItems[6].querySelector('p').textContent = currentTranslations['service7-p'];
            }
            if (serviceItems[7]) {
                serviceItems[7].querySelector('h3').textContent = currentTranslations['service8-h3'];
                serviceItems[7].querySelector('p').textContent = currentTranslations['service8-p'];
            }
            if (serviceItems[8]) {
                serviceItems[8].querySelector('h3').textContent = currentTranslations['service9-h3'];
                serviceItems[8].querySelector('p').textContent = currentTranslations['service9-p'];
            }
            if (serviceItems[9]) {
                serviceItems[9].querySelector('h3').textContent = currentTranslations['service10-h3'];
                serviceItems[9].querySelector('p').textContent = currentTranslations['service10-p'];
            }
            if (serviceItems[10]) {
                serviceItems[10].querySelector('h3').textContent = currentTranslations['service11-h3'];
                serviceItems[10].querySelector('p').textContent = currentTranslations['service11-p'];
            }
            if (serviceItems[11]) {
                serviceItems[11].querySelector('h3').textContent = currentTranslations['service12-h3'];
                serviceItems[11].querySelector('p').textContent = currentTranslations['service12-p'];
            }
            if (serviceItems[12]) {
                serviceItems[12].querySelector('h3').textContent = currentTranslations['service13-h3'];
                serviceItems[12].querySelector('p').textContent = currentTranslations['service13-p'];
            }
            if (serviceItems[13]) {
                serviceItems[13].querySelector('h3').textContent = currentTranslations['service14-h3'];
                serviceItems[13].querySelector('p').textContent = currentTranslations['service14-p'];
            }
            if (serviceItems[14]) {
                serviceItems[14].querySelector('h3').textContent = currentTranslations['service15-h3'];
                serviceItems[14].querySelector('p').textContent = currentTranslations['service15-p'];
            }
            if (serviceItems[15]) {
                serviceItems[15].querySelector('h3').textContent = currentTranslations['service16-h3'];
                serviceItems[15].querySelector('p').textContent = currentTranslations['service16-p'];
            }
            if (serviceItems[16]) {
                serviceItems[16].querySelector('h3').textContent = currentTranslations['service17-h3'];
                serviceItems[16].querySelector('p').textContent = currentTranslations['service17-p'];
            }
            if (serviceItems[17]) {
                serviceItems[17].querySelector('h3').textContent = currentTranslations['service18-h3'];
                serviceItems[17].querySelector('p').textContent = currentTranslations['service18-p'];
            }

            // You will need to add specific code for services.html here to update the dynamic services.
            // This requires adding IDs or specific classes to your service elements in services.html
            // For now, I've added a basic structure to demonstrate.
        }
        // Add more conditions for other pages (doctors.html, news.html, etc.) here
        // else if (currentPage === 'doctors.html') {
        //     // Update doctors.html specific content
        // }
    };

    // ኣብቲ ቋንቋ ተቐያሪ ለውጢ ምስ ዝመጽእ
    languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        if (selectedLang === 'tig' || selectedLang === 'eng') {
            applyLanguage(selectedLang);
            // ነቲ ዝተመርጸ ቋንቋ ኣብ Local Storage ኣቐምጦ
            localStorage.setItem('selectedLanguage', selectedLang);
            // ገጹ ንምጥራይ (refresh) ብግደ ንምቕያር ንጥቀመሉ
            window.location.reload(); 
        }
    });

    // እቲ ገጽ ምስ ተጻዕነ (loaded) ነቲ ዝተመርጸ ቋንቋ ኣውጽእ
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === 'tig' || savedLanguage === 'eng')) {
        languageSwitcher.value = savedLanguage; // ነቲ dropdown ኣስተካኽሎ
        applyLanguage(savedLanguage);
    } else {
        // ምንም ቋንቋ እንተዘይተረኺቡ፣ ብdefault ትግርኛ ይኹን
        languageSwitcher.value = 'tig'; // ነቲ dropdown ናብ ትግርኛ የስተካኽሎ
        applyLanguage('tig');
    }

    // Dynamic Services Loading for index.html (This part needs to be in index.html's script or conditional)
    // As per your current setup, this is for the 'services' section on index.html, not services.html
    const servicesForIndexPage = [
        { name: "ስፔሻሊስት ሕክምና ውሽጣዊ ሕማማት", icon: "fas fa-stethoscope", description: "ምሉእ ናይ ውሽጣዊ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ።" },
        { name: "ፍሉይ ስፔሻሊስት ሕክምና ሕማማት ልቢ", icon: "fas fa-heartbeat", description: "ፍሉይ ናይ ልቢ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ሳብ ስፔሻሊስት ሓኻይም ይወሃብ።" },
        { name: "ስፔሻሊስት ሓፈሻዊ መጥባሕቲ", icon: "fas fa-surgical-mask", description: "ስፔሻሊስት ሓፈሻዊ መጥባሕቲ ብዘመናዊ መሳርሒታትን ኣገባባትን ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ህፃውንቲን ኣባፅሕን", icon: "fas fa-baby", description: "ናይ ህፃውንቲን ኣባፅሕን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ማህፀንን ጥንስን", icon: "fas fa-venus-mars", description: "ምሉእ ናይ ማህፀንን ጥንስን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ካብ ክሳድ ንላዕሊ(ENT)", icon: "fas fa-ear", description: "ናይ ክሳድ፣ እዝንን ኣፍንጫን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን)", icon: "fas fa-x-ray", description: "ዘመናዊ ግልጋሎት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን) ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ስኒ", icon: "fas fa-tooth", description: "ምሉእ ናይ ስኒ ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን", icon: "fas fa-brain", description: "ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን ብልዑል ተመኩሮ ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ነርቭን ዓንዲሑቐን", icon: "fas fa-bone", description: "ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ ነርቭን ዓንዲ ሑቐን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን", icon: "fas fa-spa", description: "ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት መደቀስን ቃንዛን", icon: "fas fa-syringe", description: "ስፔሻሊስት መደቀስን ቃንዛን ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ምሉእ ዘመናዊ ላቦራቶሪ", icon: "fas fa-flask", description: "ምሉእ ዘመናዊ ላቦራቶሪ ግልጋሎት ይወሃብ።" },
        { name: "መርመራን ሕክምናን ፊዝዮቴራፒ", icon: "fas fa-wheelchair", description: "ምሉእ መርመራን ሕክምናን ብፊዝዮቴራፒ ሓኪም ግልጋሎት ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ስነ ኣእምሮ", icon: "fas fa-brain", description: "ስፔሻሊስት ሕክምና ስነ ኣእምሮ ግልጋሎት ይወሃብ።" },
        { name: "ናይ መዋልዳን ምሉእ ግልጋሎት", icon: "fas fa-baby-carriage", description: "ምሉእ ግልጋሎት መዋልዳን፣ ካብ ቅድሚ ሕርሲ ክሳብ ድሕሪ ሕርሲ፣ ብልዑል ልምዲን ተሞኩሮን ዘለዎም ሰብ ሞያን ብዘመናዊ መሳርሒታትን ይወሃብ።" },
        { name: "ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን", icon: "fas fa-ambulance", description: "ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን ግልጋሎት ይወሃብ።" },
        { name: "ካልኦት ግልጋሎትን ይረኽቡ", icon: "fas fa-plus-circle", description: "ካልኦት ዘይተዘርዘሩ ግልጋሎት ኣብ ግዕዝ ሆስፒታል ይረኽቡ።" }
    ];

    const serviceGridIndexPage = document.querySelector('#services .service-grid'); // ን index.html ጥራይ
    if (serviceGridIndexPage) {
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

    // You might also want to add a simple smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});