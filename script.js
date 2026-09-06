// Master Admin Password
const ADMIN_PASS = "gigagetAbdi11052009Alua";

// World Countries List
const worldCountries = [
    "Malaysia 🇲🇾", "Kazakhstan 🇰🇿", "Kyrgyzstan 🇰🇬", "Uzbekistan 🇺🇿", "Tajikistan 🇹🇯", "Turkmenistan 🇹🇲",
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Brazil", "Brunei", "Bulgaria", "Cambodia",
    "Canada", "China 🇨🇳", "Czech Republic", "Denmark", "Egypt", "Finland", "France", "Georgia", "Germany",
    "Greece", "Hungary", "India 🇮🇳", "Indonesia 🇮🇩", "Iran", "Iraq", "Ireland", "Italy", "Japan 🇯🇵", "Jordan",
    "Kuwait", "Latvia", "Lebanon", "Lithuania", "Maldives", "Mexico", "Mongolia", "Netherlands", "New Zealand",
    "Norway", "Oman", "Pakistan", "Palestine", "Philippines", "Poland", "Portugal", "Qatar", "Saudi Arabia",
    "Singapore 🇸🇬", "South Korea 🇰🇷", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand 🇹🇭", "Turkey",
    "UAE 🇦🇪", "United Kingdom 🇬🇧", "United States 🇺🇸", "Vietnam"
];

// Multilingual Dictionary
const i18nData = {
    en: {
        "nav.about": "About Us", "nav.news": "News & Events", "nav.achievements": "Achievements", "nav.departments": "Departments", "nav.whyUs": "Why Join", "nav.contact": "Contact", "btn.join": "Join Us", "btn.joinNow": "Become a Member", "btn.learnMore": "Learn More",
        "hero.subtitle": "Connecting ambitious young minds from Central Asia and Malaysia to create meaningful projects and lead the future.",
        "goal.title": "🎯 Our Next Target:", "about.title": "Who We Are",
        "about.p1": "We are not here just to create another youth community. We are here to build something that matters.",
        "about.p2": "Central Asia Connect Malaysia connects ambitious young people from Central Asia and Malaysia.",
        "about.p3": "Our team brings rich experience from the Central Asian Youth Parliament. Now in Malaysia! 🇲🇾",
        "timeline.title": "Our Journey", "timeline.p1": "Building foundational experience.", "timeline.p2": "Opening representations in Kyrgyzstan.", "timeline.p3": "Launching in Malaysia.",
        "news.title": "News & Gallery", "news.subtitle": "Latest updates and photos published by leadership",
        "achievements.title": "Our Track Record", "achievements.subtitle": "What we have accomplished together before expanding",
        "achieve.1": "Partnered with Ak Zhol Party 🇰🇿", "achieve.2": "Youth forums with institutional partners 🏛️", "achieve.3": "Internship programs 🎓", "achieve.4": "Mock courts with KazNU ⚖️", "achieve.5": "Initiatives with Akimat 🤝", "achieve.6": "Completed 3 AI projects 🤖",
        "counter.projects": "Key Projects", "counter.countries": "Countries Connected", "counter.participants": "Youth Engaged",
        "dept.title": "Our Departments", "dept.media.name": "Department of Media", "dept.media.short": "Content, social media, creative projects.", "dept.ecology.name": "Department of Ecology", "dept.ecology.short": "Environmental initiatives & eco-awareness.", "dept.journalism.name": "Department of Journalism", "dept.journalism.short": "Interviews, reports, investigations.", "dept.ir.name": "International Relations", "dept.ir.short": "International diplomacy & partnerships.", "dept.education.name": "Department of Education", "dept.education.short": "Language courses & workshops.", "dept.business.name": "Department of Business", "dept.business.short": "Startups & business networking.",
        "why.title": "Why Join Us?", "why.1.title": "Real International Projects", "why.1.desc": "Practical experience on cross-border initiatives.", "why.2.title": "Global Networking", "why.2.desc": "Connect with peers, diplomats, and business mentors.", "why.3.title": "Leadership Growth", "why.3.desc": "Become a project lead or journalist.", "why.4.title": "Create Your Own Ideas", "why.4.desc": "We help you realize your own projects.",
        "form.title": "Ready to Make an Impact?", "form.subtitle": "Fill out the form below to become part of our team.", "form.name": "Full Name", "form.institution": "University / School", "form.email": "Email Address", "form.phone": "Phone Number (WhatsApp)", "form.telegram": "Telegram Username", "form.country": "Country", "form.dept": "Preferred Department", "form.motivation": "Why do you want to join us?", "form.submit": "Submit Application 🚀", "form.successTitle": "Application Submitted!", "form.successMsg": "Thank you for joining us. Our team will contact you shortly."
    },
    ms: {
        "nav.about": "Tentang Kami", "nav.news": "Berita & Galeri", "nav.achievements": "Pencapaian", "nav.departments": "Jabatan", "nav.whyUs": "Sertai Kami", "nav.contact": "Hubungi", "btn.join": "Sertai Kami", "btn.joinNow": "Jadi Ahli Sekarang", "btn.learnMore": "Ketahui Lebih Lanjut",
        "hero.subtitle": "Menghubungkan belia berpotensi dari Asia Tengah dan Malaysia untuk membina projek bermakna.",
        "goal.title": "🎯 Sasaran Seterusnya:", "about.title": "Siapa Kami", "about.p1": "Kami mahu membina sesuatu yang benar-benar memberi manfaat.", "about.p2": "Central Asia Connect Malaysia menghubungkan belia Asia Tengah dan Malaysia.", "about.p3": "Pasukan kami membawa pengalaman dari Central Asian Youth Parliament. Kini di Malaysia! 🇲🇾",
        "timeline.title": "Perjalanan Kami", "timeline.p1": "Membina pengalaman awal.", "timeline.p2": "Membuka perwakilan di Kyrgyzstan.", "timeline.p3": "Melancarkan di Malaysia.",
        "news.title": "Berita & Galeri", "news.subtitle": "Pengumuman dan gambar terkini dari pimpinan",
        "achievements.title": "Pencapaian Kami", "achievements.subtitle": "Apa yang telah kami capai bersama", "achieve.1": "Bekerjasama dengan Parti Ak Zhol 🇰🇿", "achieve.2": "Forum belia 🏛️", "achieve.3": "Program internship 🎓", "achieve.4": "Simulasi mahkamah KazNU ⚖️", "achieve.5": "Inisiatif Akimat 🤝", "achieve.6": "3 projek AI 🤖",
        "counter.projects": "Projek Utama", "counter.countries": "Negara Terhubung", "counter.participants": "Belia Terlibat",
        "dept.title": "Jabatan Kami", "dept.media.name": "Department of Media", "dept.media.short": "Kandungan dan komunikasi digital.", "dept.ecology.name": "Department of Ecology", "dept.ecology.short": "Projek alam sekitar.", "dept.journalism.name": "Department of Journalism", "dept.journalism.short": "Kewartawanan & laporan.", "dept.ir.name": "International Relations", "dept.ir.short": "Diplomasi & kerjasama.", "dept.education.name": "Department of Education", "dept.education.short": "Pendidikan & bengkel.", "dept.business.name": "Department of Business", "dept.business.short": "Keusahawanan & startup.",
        "why.title": "Kenapa Sertai Kami?", "why.1.title": "Projek Antarabangsa", "why.1.desc": "Pengalaman praktikal.", "why.2.title": "Rangkaian Global", "why.2.desc": "Hubungan dengan usahawan.", "why.3.title": "Kepimpinan", "why.3.desc": "Peluang memimpin.", "why.4.title": "Idea Sendiri", "why.4.desc": "Realisasikan projek anda.",
        "form.title": "Bersedia Memberi Impak?", "form.subtitle": "Isi borang di bawah.", "form.name": "Nama Penuh", "form.institution": "Universiti / Sekolah", "form.email": "E-mel", "form.phone": "Nombor Telefon (WhatsApp)", "form.telegram": "Username Telegram", "form.country": "Negara", "form.dept": "Jabatan Pilihan", "form.motivation": "Mengapa anda mahu menyertai kami?", "form.submit": "Hantar Permohonan 🚀", "form.successTitle": "Permohonan Dihantar!", "form.successMsg": "Terima kasih. Pasukan kami akan menghubungi anda."
    },
    kk: {
        "nav.about": "Біз туралы", "nav.news": "Жаңалықтар", "nav.achievements": "Жетістіктер", "nav.departments": "Департаменттер", "nav.whyUs": "Қосылу", "nav.contact": "Байланыс", "btn.join": "Қосылу", "btn.joinNow": "Мүше болу", "btn.learnMore": "Толығырақ",
        "hero.subtitle": "Орталық Азия мен Малайзия жастарын біріктіріп, маңызды жобаларды жүзеге асыру.",
        "goal.title": "🎯 Келесі мақсатымыз:", "about.title": "Біз кімбіз", "about.p1": "Біз қоғамға пайда әкелетін үлкен қозғалыс құру үшін жиналдық.", "about.p2": "Central Asia Connect Malaysia — халықаралық жастар ұйымы.", "about.p3": "Командамыз CA Youth Parliament аясында үлкен тәжірибе жинаған. Енді Малайзияда! 🇲🇾",
        "timeline.title": "Біздің жолымыз", "timeline.p1": "Тәжірибе жинақтау.", "timeline.p2": "Қырғызстанда өкілдік ашу.", "timeline.p3": "Малайзияда бастау.",
        "news.title": "Жаңалықтар мен Галерея", "news.subtitle": "Басшылық жариялаған соңғы хабарландырулар мен фотолар",
        "achievements.title": "Жетістіктеріміз", "achievements.subtitle": "Атқарған жұмыстарымыз", "achieve.1": "«Ақ жол» партиясымен 🇰🇿", "achieve.2": "Жастар форумдары 🏛️", "achieve.3": "Тағылымдамалар 🎓", "achieve.4": "ҚазҰУ сот симуляциялары ⚖️", "achieve.5": "Әкімдікпен жобалар 🤝", "achieve.6": "3 AI жобасы 🤖",
        "counter.projects": "Негізгі Жобалар", "counter.countries": "Біріккен Елдер", "counter.participants": "Қамтылған Жастар",
        "dept.title": "Департаменттер", "dept.media.name": "Department of Media", "dept.media.short": "Медиа, креатив және SMM.", "dept.ecology.name": "Department of Ecology", "dept.ecology.short": "Экологиялық жобалар.", "dept.journalism.name": "Department of Journalism", "dept.journalism.short": "Журналистика және сұхбаттар.", "dept.ir.name": "International Relations", "dept.ir.short": "Халықаралық байланыстар.", "dept.education.name": "Department of Education", "dept.education.short": "Білім беру, тіл курстары.", "dept.business.name": "Department of Business", "dept.business.short": "Кәсіпкерлік және стартаптар.",
        "why.title": "Неге бізге қосылу керек?", "why.1.title": "Нақты халықаралық жобалар", "why.1.desc": "Іс жүзінде тәжірибе жинаңыз.", "why.2.title": "Ғаламдық нетворкинг", "why.2.desc": "Сарапшылармен танысыңыз.", "why.3.title": "Көшбасшылық", "why.3.desc": "Жоба жетекшісі болыңыз.", "why.4.title": "Өз идеяңызды жүзеге асыру", "why.4.desc": "Біз сізге көмектесеміз.",
        "form.title": "Өзгеріс жасауға дайынсыз ба?", "form.subtitle": "Анкетаны толтырыңыз.", "form.name": "Толық аты-жөніңіз", "form.institution": "Университет / Мектеп", "form.email": "Email поштаңыз", "form.phone": "Телефон нөміріңіз (WhatsApp)", "form.telegram": "Telegram юзернейміңіз", "form.country": "Еліңіз", "form.dept": "Департаментіңіз", "form.motivation": "Неліктен бізге қосылғыңыз келеді?", "form.submit": "Өтініш жіберу 🚀", "form.successTitle": "Өтініш қабылданды!", "form.successMsg": "Біз сізбен жақында хабарласамыз."
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    populateCountries();
    initScrollProgress();
    initScrollReveal();
    initCounters();
    initLanguageSwitcher();
    initThemeToggle();
    initForm();
    initFloatingCTA();
    renderPublicNewsFeed();
});

function populateCountries() {
    const select = document.getElementById('country');
    worldCountries.forEach(country => {
        const opt = document.createElement('option');
        opt.value = country;
        opt.innerText = country;
        select.appendChild(opt);
    });
}

function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        document.getElementById("progress-bar").style.width = (winScroll / height) * 100 + "%";
    });
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initCounters() {
    let animated = false;
    window.addEventListener('scroll', () => {
        const section = document.getElementById('achievements');
        if (!section) return;
        if (section.getBoundingClientRect().top < window.innerHeight && !animated) {
            document.querySelectorAll('.counter').forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const inc = target / 50;
                const update = () => {
                    count += inc;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(update, 30);
                    } else counter.innerText = target;
                };
                update();
            });
            animated = true;
        }
    });
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.getAttribute('data-lang');
            updateTranslations();
        });
    });
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang] && i18nData[currentLang][key]) {
            el.innerText = i18nData[currentLang][key];
        }
    });
}

function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function initForm() {
    const form = document.getElementById('membership-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submission = {
            id: Date.now(),
            fullName: document.getElementById('fullName').value,
            institution: document.getElementById('institution').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            telegram: document.getElementById('telegram').value,
            country: document.getElementById('country').value,
            dept: document.getElementById('dept').value,
            motivation: document.getElementById('motivation').value,
            date: new Date().toLocaleString()
        };

        let existing = JSON.parse(localStorage.getItem('cacm_submissions') || '[]');
        existing.push(submission);
        localStorage.setItem('cacm_submissions', JSON.stringify(existing));

        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: ['#010066', '#CC0001', '#FFCC00'] });

        form.classList.add('hidden');
        document.getElementById('form-success').classList.remove('hidden');
    });
}

// ADMIN PORTAL & PUBLISHING LOGIC
function openAdminModal() {
    document.getElementById('admin-modal').style.display = 'block';
    document.getElementById('admin-login-view').classList.remove('hidden');
    document.getElementById('admin-dashboard-view').classList.add('hidden');
    document.getElementById('admin-password').value = '';
    document.getElementById('admin-error').style.display = 'none';
}

function closeAdminModal() {
    document.getElementById('admin-modal').style.display = 'none';
}

function verifyAdmin() {
    const pass = document.getElementById('admin-password').value;
    if (pass === ADMIN_PASS) {
        document.getElementById('admin-login-view').classList.add('hidden');
        document.getElementById('admin-dashboard-view').classList.remove('hidden');
        renderAdminApplicationsData();
        renderAdminNewsList();
    } else {
        document.getElementById('admin-error').style.display = 'block';
    }
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    if (tabName === 'applications') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('tab-applications').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('tab-news').classList.add('active');
    }
}

function renderAdminApplicationsData() {
    const tbody = document.getElementById('admin-table-body');
    const data = JSON.parse(localStorage.getItem('cacm_submissions') || '[]');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No submissions stored yet.</td></tr>';
        return;
    }

    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.fullName}</strong></td>
            <td>${item.institution}</td>
            <td><a href="https://wa.me/${item.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color:var(--primary-red); font-weight:bold;">${item.phone}</a></td>
            <td><a href="https://t.me/${item.telegram.replace('@','')}" target="_blank">${item.telegram}</a></td>
            <td>${item.country}</td>
            <td><span class="badge-pill" style="background:#010066; color:#fff;">${item.dept}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function clearAllSubmissions() {
    if (confirm("Are you sure you want to delete all stored submissions and phone numbers?")) {
        localStorage.removeItem('cacm_submissions');
        renderAdminApplicationsData();
    }
}

function exportDataCSV() {
    const data = JSON.parse(localStorage.getItem('cacm_submissions') || '[]');
    if (data.length === 0) return alert("No data to export!");

    let csv = "ID,Full Name,Institution,Email,Phone,Telegram,Country,Department,Motivation,Date\n";
    data.forEach(row => {
        csv += `"${row.id}","${row.fullName}","${row.institution}","${row.email}","${row.phone}","${row.telegram}","${row.country}","${row.dept}","${row.motivation}","${row.date}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'CACM_Submissions.csv');
    a.click();
}

// NEWS & PHOTO PUBLISHING LOGIC
function handlePublishNews(event) {
    event.preventDefault();
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;
    const fileInput = document.getElementById('news-image');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            saveAndPublishNews(title, content, e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        saveAndPublishNews(title, content, null);
    }
}

function saveAndPublishNews(title, content, imageUrl) {
    const newsItem = {
        id: Date.now(),
        title: title,
        content: content,
        image: imageUrl || 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        date: new Date().toLocaleDateString()
    };

    let newsFeed = JSON.parse(localStorage.getItem('cacm_news') || '[]');
    newsFeed.unshift(newsItem);
    localStorage.setItem('cacm_news', JSON.stringify(newsFeed));

    document.getElementById('admin-news-form').reset();
    renderAdminNewsList();
    renderPublicNewsFeed();
    alert("News published successfully!");
}

function renderAdminNewsList() {
    const newsList = document.getElementById('admin-news-list');
    const newsFeed = JSON.parse(localStorage.getItem('cacm_news') || '[]');
    newsList.innerHTML = '';

    if (newsFeed.length === 0) {
        newsList.innerHTML = '<p style="color:var(--text-muted);">No news published yet.</p>';
        return;
    }

    newsFeed.forEach(item => {
        const div = document.createElement('div');
        div.className = 'admin-news-item';
        div.innerHTML = `
            <div>
                <strong>${item.title}</strong>
                <p style="font-size:0.75rem; color:var(--text-muted);">${item.date}</p>
            </div>
            <button class="btn btn-primary" onclick="deleteNews(${item.id})">Delete</button>
        `;
        newsList.appendChild(div);
    });
}

function deleteNews(id) {
    let newsFeed = JSON.parse(localStorage.getItem('cacm_news') || '[]');
    newsFeed = newsFeed.filter(item => item.id !== id);
    localStorage.setItem('cacm_news', JSON.stringify(newsFeed));
    renderAdminNewsList();
    renderPublicNewsFeed();
}

function renderPublicNewsFeed() {
    const publicFeed = document.getElementById('public-news-feed');
    const newsFeed = JSON.parse(localStorage.getItem('cacm_news') || '[]');
    publicFeed.innerHTML = '';

    if (newsFeed.length === 0) {
        publicFeed.innerHTML = `
            <div class="news-card">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" alt="News Image">
                <div class="news-body">
                    <div class="news-date">SYSTEM ANNOUNCEMENT</div>
                    <h3 class="news-title">Welcome to Central Asia Connect Malaysia!</h3>
                    <p class="news-text">Our official portal is now live. Stay tuned for announcements and photo updates from our team!</p>
                </div>
            </div>
        `;
        return;
    }

    newsFeed.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <img src="${item.image}" alt="News Photo">
            <div class="news-body">
                <div class="news-date">${item.date}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-text">${item.content}</p>
            </div>
        `;
        publicFeed.appendChild(card);
    });
}

function initFloatingCTA() {
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('floating-btn');
        if (window.scrollY > 400) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
    });
}
