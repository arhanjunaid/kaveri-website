export type Service = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "road-ambulance",
    title: "Road ambulance",
    category: "Ambulance services",
    summary: "24/7 emergency response and patient transfers by road, coordinated by Kaveri’s team.",
    image: "/images/kaveri/services/road-ambulance.jpg",
    imageAlt: "Kaveri road ambulance",
    details: ["Emergency and inter-hospital transfers", "Trained EMTs and drivers", "BLS, fully equipped, neonatal and temperature-controlled options"],
  },
  {
    slug: "train-ambulance",
    title: "Train ambulance",
    category: "Ambulance services",
    summary: "Patient transport by rail for journeys that need careful coordination from departure to arrival.",
    image: "/images/kaveri/services/train-ambulance.jpg",
    imageAlt: "Train used for patient transport",
    details: ["Rail journey coordination", "Transfer planning between locations", "Call us to discuss route and availability"],
  },
  {
    slug: "air-ambulance",
    title: "Air ambulance",
    category: "Ambulance services",
    summary: "Air medical transport for patients who need to travel longer distances.",
    image: "/images/kaveri/services/air-ambulance.jpg",
    imageAlt: "Air ambulance helicopter",
    details: ["Air transport coordination", "Journey and availability planning", "Support for domestic transfers"],
  },
  {
    slug: "repatriation",
    title: "Repatriation of human remains",
    category: "Family support",
    summary: "Domestic and international repatriation support, handled with dignity and care.",
    image: "/images/kaveri/services/repatriation.jpg",
    imageAlt: "Air transport for repatriation",
    details: ["Domestic and international coordination", "Documentation and transfer support", "Culturally considerate arrangements"],
  },
  {
    slug: "divine-farewell",
    title: "Divine Farewell",
    category: "Family support",
    summary: "Compassionate funeral support to help families manage arrangements during a difficult time.",
    image: "/images/kaveri/services/divine-farewell.jpg",
    imageAlt: "Traditional farewell ceremony",
    details: ["Funeral service coordination", "Practical guidance for families", "Respectful, personal support"],
  },
  {
    slug: "freezer-box",
    title: "Freezer box services",
    category: "Family support",
    summary: "Freezer box arrangements for respectful preservation and transfer between locations.",
    image: "/images/kaveri/services/freezer-box.jpg",
    imageAlt: "Freezer box service equipment",
    details: ["Freezer box arrangements", "Support with moving between locations", "Call us to check availability"],
  },
  {
    slug: "occupational-health-centre",
    title: "Occupational Health Centre",
    category: "Workplace and event care",
    summary: "OHC setup and management to support health needs in the workplace.",
    image: "/images/kaveri/services/occupational-health.jpg",
    imageAlt: "Occupational health consultation",
    details: ["OHC setup and management", "Workplace-focused health support", "Solutions shaped around your site"],
  },
  {
    slug: "event-medical-support",
    title: "Event medical support",
    category: "Workplace and event care",
    summary: "Ambulance and medical support for events, with on-site coordination.",
    image: "/images/kaveri/services/event-medical.jpg",
    imageAlt: "Medical response team at an event",
    details: ["Ambulance support for events", "On-site medical service coordination", "Plan coverage with our team"],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
