import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
export const metadata: Metadata = { title: "Our services" };
export default function ServicesPage() { return <section className="subpage"><div className="wrap"><div className="service-intro"><div><span className="eyebrow">Kaveri HealthTech</span><h1>Support for every<br/><em>kind of journey.</em></h1></div><a className="button button-dark" href="tel:+917619108108">Call 7619 108 108 <span>↗</span></a></div><div className="service-grid service-grid-photo service-grid-eight">{services.map((service,i)=><Link href={`/services/${service.slug}`} className="service-card" key={service.slug}><div className="service-photo"><Image src={service.image} alt={service.imageAlt} fill unoptimized sizes="(max-width: 640px) 100vw, 25vw"/><span>0{i+1}</span></div><h3>{service.title}</h3><p>{service.summary}</p></Link>)}</div><div className="subpage-cta"><h2>Talk with our team about availability.</h2><Link className="button button-dark" href="/contact">Contact Kaveri <span>→</span></Link></div></div></section>; }
