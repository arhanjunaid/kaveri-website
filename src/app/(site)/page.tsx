import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-wash" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Kaveri HealthTech Pvt. Ltd.</span>
          <h1>Here when<br/>it <em>matters.</em></h1>
          <p>24/7 ambulance, patient transport and family support services—with care at every step.</p>
          <div className="hero-actions"><a className="button button-dark" href="tel:+917619108108">Call 7619 108 108 <span>↗</span></a><Link className="text-link" href="/services">Explore services <span>→</span></Link></div>
          <div className="hero-stats"><div><strong>20+</strong><span>years of experience</span></div><div><strong>104</strong><span>self-owned ambulances</span></div><div><strong>136+</strong><span>cities and towns covered</span></div></div>
        </div>
        <div className="hero-art">
          <Image src="/images/kaveri/fleet.jpg" alt="Kaveri ambulance fleet ready for patient transport" fill priority unoptimized sizes="(max-width: 640px) 100vw, 50vw" className="hero-photo" />
          <div className="hero-photo-overlay" />
          <div className="art-caption"><span>✚</span><div><b>Kaveri ambulance services</b><small>Ready around the clock</small></div></div>
        </div>
      </div>
      <div className="hero-bottom"><div className="wrap hero-bottom-inner"><span>Healthcare support with a human touch</span><div className="hero-services"><b>Emergency response</b><i/><b>Patient transport</b><i/><b>Family support</b></div></div></div>
    </section>
    <section className="section services-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">What we do</span><h2>Care for every<br/><em>kind of journey.</em></h2></div><Link className="button button-outline" href="/services">All services <span>↗</span></Link></div><div className="service-grid home-service-grid">{services.map((s,i)=><Link href={`/services/${s.slug}`} className="service-card" key={s.slug}><div className="home-service-photo"><Image src={s.image} alt={s.imageAlt} fill unoptimized sizes="(max-width: 640px) 100vw, 33vw"/><span>0{i+1}</span></div><div className="home-service-copy"><h3>{s.title}</h3><p>{s.category}</p><span className="service-arrow">↗</span></div></Link>)}</div></div></section>
    <section className="photo-story"><div className="wrap photo-story-grid"><div className="photo-story-main"><Image src="/images/kaveri/ambulance-front.jpg" alt="Kaveri ambulance prepared for service" fill unoptimized sizes="(max-width: 640px) 100vw, 56vw"/><span>Ready when care calls</span></div><div className="photo-story-side"><Image src="/images/kaveri/clinical-interior.jpg" alt="Patient care interior inside a Kaveri ambulance" fill unoptimized sizes="(max-width: 640px) 100vw, 32vw"/><span>Equipped for the journey</span></div></div></section>
    <section className="care-band"><div className="wrap care-inner"><div className="care-mark">✚</div><div><span className="eyebrow">Our team is here</span><h2>Need support?<br/><em>Call Kaveri.</em></h2><p>Speak with our team about ambulance availability or any of our services.</p></div><a className="button button-light" href="tel:+917619108108">Call 7619 108 108 <span>→</span></a></div></section>
  </>;
}
