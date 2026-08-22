import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-copy">
          <span className="mono">©</span> Copyright{' '}
          <span className="footer-name">Lucas Varela Negro</span>{' '}
          <span className="mono">{year}</span>
        </p>
      </div>
    </footer>
  );
}