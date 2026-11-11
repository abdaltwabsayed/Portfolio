export default function Footer({ copy }) {
  return (
    <footer className="site-footer">
      <div className="footer-main page-width">
        <div className="footer-topline">
          <a className="footer-brand" href="#home">Abdaltwab<span>© 2026</span></a>
          <p>{copy.note}</p>
          <a className="back-to-top mono-label" href="#home">{copy.top}<span aria-hidden="true">↑</span></a>
        </div>
        <figure className="poem" lang="ar" dir="rtl">
          <figcaption>{copy.poemLabel}</figcaption>
          <blockquote>
            <p>وأفضل الناس ما بين الورى رجلٌ</p>
            <p>تقضى على يده للناس حاجات</p>
            <p>لا تمنعن يد المعروف عن أحد</p>
            <p>ما دمت مقتدرا فالسعد تارات</p>
            <p>واشكر فضائل صنع الله إذ جعلت</p>
            <p>إليك لا لك عند الناس حاجات</p>
            <p>قد مات قوم وما ماتت مكارمهم</p>
            <p>وعاش قوم وهم في الناس أموات</p>
          </blockquote>
        </figure>
        <div className="footer-credit">
          <span>{copy.credit}</span>
          <a href="https://github.com/abdaltwabsayed/" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </footer>
  );
}
