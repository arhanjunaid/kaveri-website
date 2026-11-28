import type { Metadata } from "next";
import Image from "next/image";
import { readdirSync } from "node:fs";
import { join } from "node:path";
export const metadata: Metadata = { title: "Our care in action" };
const resourceDirectory = join(process.cwd(), "public", "uploads", "seed", "resource");
const photos = readdirSync(resourceDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name))
  .map((entry) => {
    const caption = entry.name
      .replace(/\.(jpe?g|png|webp)$/i, "")
      .replace(/-\d{2,}$/, "")
      .replaceAll("-", " ")
      .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
    return {
      src: `/uploads/seed/resource/${entry.name}`,
      alt: `Kaveri HealthTech ${caption.toLowerCase()}`,
      caption,
    };
  });

export default function GalleryPage() { return <section className="subpage"><div className="wrap"><span className="eyebrow">Our care in action</span><h1>Every journey,<br/><em>with care.</em></h1><p className="subpage-lead">A look at the vehicles, people and spaces behind Kaveri’s patient transport services.</p><div className="gallery-grid">{photos.map((photo)=><figure className="gallery-item" key={photo.src}><div><Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 640px) 100vw, 33vw"/></div><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>; }
