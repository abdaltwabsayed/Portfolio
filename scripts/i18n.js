/* Language: English by default, Arabic on demand (navbar globe button).
   English text lives in index.html and is read from there; only the Arabic
   lives below. Anything user-facing needs data-i18n="key" in the HTML and a
   matching key in AR. The choice is remembered. */
(function () {
    var root = document.documentElement;
    var KEY = 'portfolio-lang';

    var AR = {
        'meta.title': 'عبدالتواب عكاشة الشيخ — البورتفوليو',
        'nav.about': 'نبذة',
        'nav.work': 'أعمالي',
        'nav.contact': 'تواصل',
        'hero.name': 'أهلًا، أنا عبدالتواب!',
        'hero.role': 'مطوّر ويب متكامل',
        'hero.alt': 'صورة شخصية لعبدالتواب عكاشة الشيخ',
        'hero.cue': 'انتقل إلى قسم نبذة عني',
        'about.title': 'نبذة عني',
        'about.text': 'أنا طالب في السنة الخامسة بكلية الهندسة، جامعة الفيوم، تخصص هندسة علوم الحاسب، وأركّز على تطوير الويب المتكامل (HTML وCSS وJavaScript وReact). وأعمل حاليًا على تعميق هذه المهارات من خلال مبادرة رواد مصر الرقمية (DEPI)، كما أوسّع خبراتي في Java وPython وC وأساسيات قواعد البيانات (SQLite).',
        'about.project': 'من المشاريع التي أعتزّ بها <strong>Nahed</strong>، وهو بوت على تيليجرام طوّرته مع زميلين لمساعدة أساتذة الجامعة على إدارة الواجبات ومشاركة الملفات مع الطلاب. وقد صمّمتُ ونفّذتُ ميزات تسجيل الدخول والتسجيل والواجبات بلغة Java.',
        'about.skillsTitle': 'ما أقدّمه للفريق',
        'about.s1': 'التعاون',
        'about.s2': 'الإصغاء الجيد',
        'about.s3': 'الصبر تحت الضغط',
        'about.s4': 'إدارة الوقت',
        'edu.title': 'التعليم',
        'edu.degree': 'بكالوريوس هندسة علوم الحاسب (CSE)',
        'edu.faculty': 'كلية الهندسة، جامعة الفيوم',
        'edu.badge': 'السنة الخامسة — جارية',
        'learn.title': 'التدريب والتعلّم',
        'learn.depi.h': 'مبادرة رواد مصر الرقمية (DEPI)',
        'learn.depi.p': 'برنامج تدريبي وطني للمهارات الرقمية، أطلقته وزارة الاتصالات وتكنولوجيا المعلومات المصرية. أحضر جلسات تقنية وغير تقنية أربعة أيام أسبوعيًا، حضوريًا وعبر الإنترنت، وأطوّر خلالها مهاراتي في React وتطوير الويب الحديث.',
        'status.inprogress': 'جارٍ حاليًا',
        'status.completed': 'مكتمل',
        'learn.cs.h': 'CS50: مقدمة في علوم الحاسب',
        'learn.cs.p': 'جامعة هارفارد، عبر الإنترنت. كانت أول تعرّف لي على البرمجة؛ بدأتُها في 2023 وأنهيتُها في 2024، وبنيتُ خلالها أساسًا في المفاهيم الجوهرية للبرمجة وعلوم الحاسب.',
        'learn.db.h': 'CS50: مقدمة في قواعد البيانات',
        'learn.db.p': 'جامعة هارفارد، عبر الإنترنت. درستُ أساسيات قواعد البيانات وSQLite.',
        'skills.title': 'المهارات التقنية',
        'skills.front': 'الواجهة الأمامية',
        'skills.prog': 'لغات البرمجة',
        'skills.db': 'قواعد البيانات',
        'skills.net': 'الشبكات',
        'skills.tools': 'الأدوات وبيئات التطوير',
        'skills.reldb': 'أساسيات قواعد البيانات العلائقية',
        'skills.ccna': 'CCNA (قيد الدراسة)',
        'lang.title': 'اللغات',
        'lang.ar.h': 'العربية',
        'lang.ar.p': 'اللغة الأم',
        'lang.en.h': 'الإنجليزية',
        'lang.en.p': 'إجادة تقنية وأكاديمية',
        'lang.ja.h': 'اليابانية',
        'lang.ja.p': 'المستوى N4، قيد التعلّم',
        'work.title': 'بعض من مشاريعي',
        'work.all': 'عرض الكل',
        'contact.title': 'لنعمل معًا...',
        'contact.sub': 'كيف تحب قهوتك؟',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'footer.copy': '&copy; تصميم وتنفيذ <a id="profile-link" href="https://github.com/abdaltwabsayed/">عبدالتواب</a> ☺️',
        'lang.toggle': 'التبديل إلى الإنجليزية'
    };
    var EN = { 'lang.toggle': 'Switch to Arabic' };

    var lang = 'en';
    try { if (localStorage.getItem(KEY) === 'ar') lang = 'ar'; } catch (e) { }
    // Direction is set before first paint so the layout never flashes the wrong way round.
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    function attrParts(el) {
        var p = el.getAttribute('data-i18n-attr').split(':');
        return { attr: p[0], key: p[1] };
    }

    function capture() {
        EN['meta.title'] = document.title;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            EN[el.getAttribute('data-i18n')] = el.innerHTML;
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            var p = attrParts(el);
            EN[p.key] = el.getAttribute(p.attr);
        });
    }

    function apply(l) {
        var dict = l === 'ar' ? AR : EN;
        lang = l;
        root.lang = l;
        root.dir = l === 'ar' ? 'rtl' : 'ltr';
        document.title = dict['meta.title'];
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.innerHTML = dict[el.getAttribute('data-i18n')];
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            var p = attrParts(el);
            el.setAttribute(p.attr, dict[p.key]);
        });
        var btn = document.getElementById('lang-toggle');
        if (btn) {
            var label = dict['lang.toggle'];
            btn.setAttribute('aria-label', label);
            btn.title = label;
            btn.querySelector('.lang-label').textContent = l === 'ar' ? 'EN' : 'عربي';
        }
        document.dispatchEvent(new Event('langchange'));
    }

    document.addEventListener('DOMContentLoaded', function () {
        capture();
        apply(lang);
        var btn = document.getElementById('lang-toggle');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var next = lang === 'ar' ? 'en' : 'ar';
            apply(next);
            try { localStorage.setItem(KEY, next); } catch (e) { }
        });
    });
})();
