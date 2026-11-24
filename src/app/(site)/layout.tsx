import Link from "next/link";
import Image from "next/image";

const links = [{ href: "/services", label: "Our services" }, { href: "/about", label: "About us" }, { href: "/locations", label: "Locations" }, { href: "/contact", label: "Contact" }];

function Header() {
  return <header className="site-header"><div className="wrap nav-inner"><Link href="/" className="brand" aria-label="Kaveri HealthTech home"><Image src="/uploads/seed/logo-2.png" alt="Kaveri HealthTech" width={224} height={80} unoptimized className="brand-logo" /></Link><nav aria-label="Main navigation">{links.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><a className="nav-cta" href="tel:+917619108108">Call 7619 108 108 <span>↗</span></a></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="wrap footer-main"><div><Link href="/" className="brand brand-light"><Image src="/uploads/seed/logo-2.png" alt="Kaveri HealthTech" width={224} height={80} unoptimized className="brand-logo" /></Link><p>24/7 emergency transport and family support.<br/>Care and dignity at every step.</p></div><div><span className="footer-label">Explore</span>{links.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><span className="footer-label">Reach us</span><a href="tel:+917619108108">+91 7619 108 108</a><a href="tel:+917676100400">+91 7676 100 400</a><a href="mailto:kaverihealthtech@gmail.com">kaverihealthtech@gmail.com</a><a href="https://maps.app.goo.gl/dUPptM8SSVVAYsbd6" target="_blank" rel="noreferrer">No. 33, 23, 20th Cross Road, near Navarang Theatre,<br/>1st Block, Rajajinagar, Bengaluru 560010</a></div><div className="footer-callout"><span>Need help now?</span><p>Call our 24/7 service line.</p><a href="tel:+917619108108">Call Kaveri <b>→</b></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Kaveri HealthTech Pvt. Ltd.</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div><span>Care, in every direction.</span></div></footer>;
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></>;
}
