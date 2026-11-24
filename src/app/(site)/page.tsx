import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { PhoneNumbers } from "@/components/site/PhoneNumbers";

const clients = [
  { src: "/uploads/seed/clients/1.png", alt: "St. Martha’s Hospital" },
  { src: "/uploads/seed/clients/2.png", alt: "Healthcare partner" },
  { src: "/uploads/seed/clients/3.png", alt: "People Care International Hospital" },
  { src: "/uploads/seed/clients/4.png", alt: "ESIC" },
  { src: "/uploads/seed/clients/5.png", alt: "Belenus Champion Hospital" },
  { src: "/uploads/seed/clients/6.png", alt: "P. D. Hinduja Hospital" },
  { src: "/uploads/seed/clients/7.png", alt: "Biocon" },
  { src: "/uploads/seed/clients/8.png", alt: "Precise Health Care" },
];

export default function HomePage() {
  return <>
    <section className="hero hero-corporate">
      <div className="wrap corporate-hero-grid">
        <div className="corporate-hero-copy">
          <span className="eyebrow"><i/>Kaveri HealthTech Pvt. Ltd.</span>
          <h1>Care that moves<br/><em>when you need it.</em></h1>
          <p>24/7 ambulance, patient transport and family support services, backed by a coordinated team.</p>
          <div className="corporate-hero-actions"><PhoneNumbers className="phone-pair--hero"/><Link className="text-link" href="/services">Explore our services <span>→</span></Link></div>
        </div>
        <div className="corporate-hero-photo">
          <Image src="/images/kaveri/fleet.jpg" alt="Kaveri HealthTech ambulance fleet" fill priority unoptimized sizes="(max-width: 640px) 100vw, 58vw"/>
          <div className="photo-badge"><span className="photo-badge-mark">✚</span><span><b>Emergency response</b><small>Available 24 hours</small></span></div>
        </div>
      </div>
      <div className="corporate-proof"><div className="wrap corporate-proof-grid"><div><strong>20+</strong><span>years of experience</span></div><div><strong>104</strong><span>self-owned ambulances</span></div><div><strong>136+</strong><span>cities and towns covered</span></div><div className="proof-note">Built for dependable response<br/>and thoughtful care.</div></div></div>
    </section>

    <section className="section services-section corporate-services"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">Our services</span><h2>One team.<br/><em>More ways to help.</em></h2></div><Link className="button button-outline" href="/services">View all services <span>↗</span></Link></div><div className="service-grid corporate-service-grid">{services.map((service,i)=><Link href={`/services/${service.slug}`} className="service-card" key={service.slug}><div className="home-service-photo"><Image src={service.image} alt={service.imageAlt} fill unoptimized sizes="(max-width: 640px) 100vw, 25vw"/><span>0{i+1}</span></div><div className="home-service-copy"><h3>{service.title}</h3><p>{service.category}</p><span className="service-arrow">↗</span></div></Link>)}</div></div></section>

    <section className="client-strip"><div className="wrap"><div className="client-strip-heading"><span className="eyebrow">Our partners</span><p>Supporting care teams across healthcare and industry.</p></div><div className="client-logo-grid">{clients.map((client)=><div className="client-logo-box" key={client.src}><Image src={client.src} alt={client.alt} width={180} height={90} unoptimized/></div>)}</div></div></section>

    <section className="corporate-story"><div className="wrap corporate-story-grid"><div className="corporate-story-photo"><Image src="/images/kaveri/team.jpg" alt="Kaveri HealthTech team coordinating services" fill unoptimized sizes="(max-width: 640px) 100vw, 50vw"/><span>People and readiness, working together</span></div><div className="corporate-story-copy"><span className="eyebrow">A coordinated care partner</span><h2>Support for urgent moments<br/>and <em>everyday operations.</em></h2><p>From emergency response to workplace health and event support, Kaveri helps organizations and families coordinate the care they need.</p><div className="story-actions"><Link className="button button-dark" href="/contact">Talk to our team <span>→</span></Link><a className="story-email" href="mailto:kaverihealthtech@gmail.com">kaverihealthtech@gmail.com</a></div></div></div></section>

    <section className="care-band"><div className="wrap care-inner"><div className="care-mark">✚</div><div><span className="eyebrow">Our team is here</span><h2>Need support?<br/><em>Call Kaveri.</em></h2><p>Speak with our team about availability and next steps.</p></div><PhoneNumbers className="phone-pair--band"/></div></section>
  </>;
}
