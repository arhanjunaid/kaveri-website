import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { PhoneNumbers } from "@/components/site/PhoneNumbers";

const hospitalPartners = [
  { name: "Narayana Health City", logo: "https://pimwp.s3-accelerate.amazonaws.com/2022/10/narayana-health-logo-vector.png" },
  { name: "Medicover Hospital", logo: "https://twc-carepass.s3.ap-south-1.amazonaws.com/providers/1780592770428-h78a7p-nobg.png" },
  { name: "ESI Hospitals", logo: "/uploads/seed/clients/4.png" },
  { name: "Sparsh Hospitals", logo: "https://www.federal.bank.in/documents/d/guest/sparsh-logo-png-png" },
  { name: "Narayana Peripheral", logo: "https://pimwp.s3-accelerate.amazonaws.com/2022/10/narayana-health-logo-vector.png" },
  { name: "Karunashraya", logo: "/images/partners/karunashraya.svg" },
];
const featuredServiceSlugs = new Set(["road-ambulance", "hospital-patient-transfer", "air-ambulance", "train-ambulance", "repatriation", "divine-farewell", "corporate-industrial-ambulance", "occupational-health-centre", "event-medical-support"]);

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
          <Image src="/uploads/seed/resource/ambulance-front-three-quarter-01.jpeg" alt="Kaveri HealthTech ambulance in Bengaluru" fill priority unoptimized sizes="(max-width: 640px) 100vw, 58vw"/>
          <div className="photo-badge"><span className="photo-badge-mark">✚</span><span><b>Emergency response</b><small>Available 24 hours</small></span></div>
        </div>
      </div>
      <div className="corporate-proof"><div className="wrap corporate-proof-grid"><div><strong>Since 2005</strong><span>emergency care and logistics</span></div><div><strong>104</strong><span>self-owned ambulances</span></div><div><strong>2,000+</strong><span>partner ambulances</span></div><div><strong>136+</strong><span>cities covered</span></div></div></div>
    </section>

    <section className="section services-section corporate-services"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">Our services</span><h2>One team.<br/><em>More ways to help.</em></h2></div><Link className="button button-outline" href="/services">View all services <span>↗</span></Link></div><div className="service-grid corporate-service-grid">{services.filter((service)=>featuredServiceSlugs.has(service.slug)).map((service,i)=><Link href={`/services/${service.slug}`} className="service-card" key={service.slug}><div className="home-service-photo"><Image src={service.image} alt={service.imageAlt} fill unoptimized sizes="(max-width: 640px) 100vw, 25vw"/><span>{String(i+1).padStart(2,"0")}</span></div><div className="home-service-copy"><h3>{service.title}</h3><p>{service.category}</p><span className="service-arrow">↗</span></div></Link>)}</div></div></section>

    <section className="client-strip"><div className="wrap"><div className="client-strip-heading"><span className="eyebrow">Partnered hospitals</span><p>Working with healthcare partners across the region.</p></div><div className="partner-logo-grid">{hospitalPartners.map((partner)=><div className="partner-logo-card" key={partner.name}><Image src={partner.logo} alt={`${partner.name} logo`} width={220} height={100} unoptimized /></div>)}</div></div></section>

    <section className="corporate-story"><div className="wrap corporate-story-grid"><div className="corporate-story-photo"><Image src="/uploads/seed/resource/kaveri-team-meeting.jpeg" alt="Kaveri HealthTech team coordinating services" fill unoptimized sizes="(max-width: 640px) 100vw, 50vw"/><span>People and readiness, working together</span></div><div className="corporate-story-copy"><span className="eyebrow">A coordinated care partner</span><h2>Support for urgent moments<br/>and <em>everyday operations.</em></h2><p>From emergency response to workplace health and event support, Kaveri helps organizations and families coordinate the care they need.</p><ul className="corporate-capabilities"><li>Live GPS tracking</li><li>Seamless patient transfers</li><li>Custom solutions for organizations</li></ul><div className="story-actions"><Link className="button button-dark" href="/contact">Talk to our team <span>→</span></Link><a className="story-email" href="mailto:kaverihealthtech@gmail.com">kaverihealthtech@gmail.com</a></div></div></div></section>

    <section className="care-band"><div className="wrap care-inner"><div className="care-mark">✚</div><div><span className="eyebrow">Our team is here</span><h2>Need support?<br/><em>Call Kaveri.</em></h2><p>Speak with our team about availability and next steps.</p></div><PhoneNumbers className="phone-pair--band"/></div></section>
  </>;
}
