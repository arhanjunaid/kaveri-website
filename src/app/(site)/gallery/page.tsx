import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = { title: "Our care in action" };
const photos = [
  { src: "/uploads/seed/resource/ambulance-fleet-lineup.jpeg", alt: "Kaveri ambulance fleet", caption: "A fleet ready to support patient journeys" },
  { src: "/uploads/seed/resource/ambulance-front-three-quarter-01.jpeg", alt: "Kaveri ambulance", caption: "An ambulance prepared for service" },
  { src: "/uploads/seed/resource/ambulance-interior-medical-equipment.jpeg", alt: "Ambulance interior", caption: "Inside a Kaveri patient transport vehicle" },
  { src: "/uploads/seed/resource/ambulance-side-kaveri-01.jpeg", alt: "Patient transport vehicle", caption: "A Kaveri ambulance from the side" },
  { src: "/uploads/seed/resource/kaveri-team-meeting.jpeg", alt: "Kaveri team at the office", caption: "The Kaveri team coordinating services" },
  { src: "/uploads/seed/resource/ambulance-fleet-workshop.jpeg", alt: "Kaveri facility", caption: "Kaveri vehicles at the service facility" },
];
export default function GalleryPage() { return <section className="subpage"><div className="wrap"><span className="eyebrow">Our care in action</span><h1>Every journey,<br/><em>with care.</em></h1><p className="subpage-lead">A look at the vehicles, people and spaces behind Kaveri’s patient transport services.</p><div className="gallery-grid">{photos.map((photo)=><figure className="gallery-item" key={photo.src}><div><Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 640px) 100vw, 33vw"/></div><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>; }
