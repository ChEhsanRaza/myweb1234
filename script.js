// script.js
document.getElementById("language-toggle").addEventListener("click", function() {
    var languageButton = document.getElementById("language-toggle");
    var currentLanguage = languageButton.textContent.trim();
    
    if (currentLanguage === "اردو") {
        // Change to English
        languageButton.textContent = "Urdu";
        translateToEnglish();
    } else {
        // Change to Urdu
        languageButton.textContent = "اردو";
        translateToUrdu();
    }
});

function translateToUrdu() {
    // Replace English text with Urdu translations
    document.getElementById("biography").innerHTML = "<h2>ذاتی سرگرمی</h2><p>میں گورنمنٹ ایلیمنٹری اسکول نمبر 5 حویلی لاکھہ، اوکاڑہ میں ششویں کلاس کا طالب علم ہوں، سیکشن B میں پڑھتا ہوں۔ میری کلاس کی استاد جناب یوسف ہیں۔ میرے اسکول کا ای ایم آئی ایس کوڈ 39310078 ہے اور میرا  رول نمبر 3 ہے۔ میں نیا سیکھنے اور نئی چیزیں جاننے کے لئے جوش و خروش رکھتا ہوں۔ فارغ وقت میں مذہب، سائنس، اور زبانوں کا مطالعہ کرنے کا مجھے بہت شوق ہے۔ میں تعلیم کی طاقت پر یقین رکھتا ہوں کہ وہ زندگیوں کو تبدیل کرنے میں اور سماج پر مثبت اثر ڈالنے میں کارگر ہے۔</p>";
    document.getElementById("resume").innerHTML = "<h2>سیرت نامہ</h2><p>جلد ہی آرہا ہے...</p>";
    document.getElementById("contact").innerHTML = "<h2>رابطہ</h2><p>ای میل: chehsan1947pk@gmail.com</p><p>فون: +92 323 7726057</p>";
}

function translateToEnglish() {
    // Replace Urdu translations with English text
    document.getElementById("biography").innerHTML = "<h2>Biography</h2><p>I am a sixth-grade student studying at Govt. Elementary school no. 5 Haveli Lakha, Okara in section B. My class teacher is Ms. Mr Yousaf. My School's EMIS code is 39310078 and my roll number is 3. I am passionate about learning and exploring new things. In my free time, I enjoy studying religion, science, and languages. I believe in the power of education to transform lives and make a positive impact on society.</p>";
    document.getElementById("resume").innerHTML = "<h2>Resume</h2><p>Coming soon...</p>";
    document.getElementById("contact").innerHTML = "<h2>Contact</h2><p>Email: chehsan1947pk@gmail.com </p><p>Phone: +92 323 7726057</p>";
}
