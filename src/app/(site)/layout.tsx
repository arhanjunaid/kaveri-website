import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/site/MobileMenu";
import { PhoneNumbers } from "@/components/site/PhoneNumbers";

const links = [{ href: "/", label: "Home" }, { href: "/services", label: "Our services" }, { href: "/about", label: "About us" }, { href: "/locations", label: "Locations" }, { href: "/contact", label: "Contact" }];

function Header() {
  return <header className="site-header"><div className="wrap nav-inner"><Link href="/" className="brand" aria-label="Kaveri HealthTech home"><Image src="/uploads/seed/logo-2.png" alt="Kaveri HealthTech" width={224} height={80} unoptimized className="brand-logo" /></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><PhoneNumbers className="phone-pair--header"/><MobileMenu items={links}/></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="wrap footer-main"><div><Link href="/" className="brand brand-light"><Image src="/uploads/seed/logo-2.png" alt="Kaveri HealthTech" width={224} height={80} unoptimized className="brand-logo" /></Link><p>24/7 emergency transport and family support.<br/>Care and dignity at every step.</p></div><div><span className="footer-label">Explore</span>{links.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><span className="footer-label">Reach us</span><PhoneNumbers className="phone-pair--footer"/><a href="mailto:kaverihealthtech@gmail.com">kaverihealthtech@gmail.com</a><a href="https://maps.app.goo.gl/dUPptM8SSVVAYsbd6" target="_blank" rel="noreferrer">No. 33, 23, 20th Cross Road, near Navarang Theatre,<br/>1st Block, Rajajinagar, Bengaluru 560010</a></div><div className="footer-callout"><span>Need help now?</span><p>Call our 24/7 service line.</p><PhoneNumbers className="phone-pair--footer-cta"/></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Kaveri HealthTech Pvt. Ltd.</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div><span>Care, in every direction.</span></div></footer>;
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></>;
}
