import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.summary } : { title: "Service" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <section className="service-detail-page"><div className="wrap">
    <div className="service-detail-top"><Link className="service-back" href="/services">← All services</Link><span className="eyebrow">{service.category}</span></div>
    <div className="service-detail-grid">
      <div className="service-detail-image"><Image src={service.image} alt={service.imageAlt} fill priority unoptimized sizes="(max-width: 760px) 100vw, 55vw"/><span className="service-image-label">Kaveri HealthTech</span></div>
      <div className="service-detail-copy"><h1>{service.title}</h1><p className="service-detail-summary">{service.summary}</p><ul>{service.details.map((detail)=><li key={detail}><span>✓</span>{detail}</li>)}</ul><div className="service-detail-actions"><a className="button button-dark" href="tel:+917619108108">Call 7619 108 108 <span>↗</span></a><a className="button button-outline" href="tel:+917676100400">Call 7676 100 400</a></div><a className="service-email" href="mailto:kaverihealthtech@gmail.com">Or email kaverihealthtech@gmail.com</a></div>
    </div>
    <div className="service-enquiry-layout"><div><span className="eyebrow">Need this service?</span><h2>Request a<br/><em>call back.</em></h2><p>Share your contact details and our team can discuss availability and next steps.</p></div><form className="contact-card service-enquiry" action="mailto:kaverihealthtech@gmail.com" method="get" encType="text/plain"><h2>Request a call back</h2><input type="hidden" name="service" value={service.title}/><label>Your name<input name="name" required placeholder="Your name"/></label><label>Phone number<input type="tel" name="phone" required placeholder="Your phone number"/></label><label>Message<textarea name="message" rows={3} placeholder={`Tell us about your ${service.title.toLowerCase()} need`} /></label><button className="button button-dark" type="submit">Prepare email request <span>→</span></button><small>This opens your email app to send your request.</small></form></div>
  </div></section>;
}
