import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = { title: "Our care in action" };
const photos = [
  { src: "/images/kaveri/fleet.jpg", alt: "Kaveri ambulance fleet", caption: "A fleet ready to support patient journeys" },
  { src: "/images/kaveri/ambulance-front.jpg", alt: "Kaveri ambulance", caption: "An ambulance prepared for service" },
  { src: "/images/kaveri/clinical-interior.jpg", alt: "Ambulance interior", caption: "Inside a Kaveri patient transport vehicle" },
  { src: "/images/kaveri/ambulance-side.jpg", alt: "Patient transport vehicle", caption: "A Kaveri ambulance from the side" },
  { src: "/images/kaveri/office.jpg", alt: "Kaveri office", caption: "The Kaveri team at their office" },
  { src: "/images/kaveri/facility.jpg", alt: "Kaveri facility", caption: "Kaveri vehicles at the service facility" },
];
export default function GalleryPage() { return <section className="subpage"><div className="wrap"><span className="eyebrow">Our care in action</span><h1>Every journey,<br/><em>with care.</em></h1><p className="subpage-lead">A look at the vehicles, people and spaces behind Kaveri’s patient transport services.</p><div className="gallery-grid">{photos.map((photo)=><figure className="gallery-item" key={photo.src}><div><Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 640px) 100vw, 33vw"/></div><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>; }
