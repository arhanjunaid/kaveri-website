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
    title: "Emergency ambulance services",
    category: "Ambulance services",
    summary: "24/7 road response and patient transport, with ambulance options for different care needs.",
    image: "/uploads/seed/resource/ambulance-front-three-quarter-01.jpeg",
    imageAlt: "Kaveri ambulance from the front at its Bengaluru fleet yard",
    details: ["BLS and ALS ambulances", "ICU, ventilator and cardiac support", "Neonatal, paediatric, oxygen and patient transport options", "Trained EMTs and drivers", "Live GPS tracking and coordinated response"],
  },
  {
    slug: "hospital-patient-transfer",
    title: "Hospital patient transfers",
    category: "Patient transport",
    summary: "Coordinated transfers between hospitals, home and care facilities.",
    image: "/uploads/seed/resource/ambulance-interior-blue.jpeg",
    imageAlt: "Patient stretcher and medical equipment inside a Kaveri ambulance",
    details: ["ICU-to-ICU transfers", "Hospital admissions and discharges", "Home-to-hospital transfers", "Long-distance medical transportation"],
  },
  {
    slug: "air-ambulance",
    title: "Air ambulance and medical evacuation",
    category: "Ambulance services",
    summary: "Air ambulance coordination and medical transport for longer-distance journeys.",
    image: "/uploads/seed/resource/ambulance-interior-medical-equipment.jpeg",
    imageAlt: "Medical equipment arranged inside a Kaveri ambulance",
    details: ["Air ambulance coordination", "Bed-to-bed transfer planning", "Medical escort services", "Commercial airline and airport medical assistance"],
  },
  {
    slug: "train-ambulance",
    title: "Train ambulance",
    category: "Ambulance services",
    summary: "Patient transport by rail, coordinated around the journey and transfer requirements.",
    image: "/uploads/seed/resource/ambulance-interior-dual-stretcher-01.jpeg",
    imageAlt: "Patient transport setup inside a Kaveri ambulance",
    details: ["Rail journey coordination", "Transfer planning between locations", "Call us to discuss route and availability"],
  },
  {
    slug: "repatriation",
    title: "International repatriation of human remains",
    category: "Family support",
    summary: "Domestic and international repatriation support, handled with dignity and care.",
    image: "/uploads/seed/resource/mortuary-floral-farewell-wide.jpeg",
    imageAlt: "Floral arrangement prepared for a dignified farewell",
    details: ["Documentation and embassy coordination", "Embalming and preservation arrangements", "Coffin box and IATA-compliant packing coordination", "Airport, customs and destination support"],
  },
  {
    slug: "divine-farewell",
    title: "Funeral and mortuary services",
    category: "Divine Farewell",
    summary: "Practical, compassionate support for families and funeral arrangements.",
    image: "/uploads/seed/resource/mortuary-floral-farewell.jpeg",
    imageAlt: "Respectful floral farewell arrangement prepared by Kaveri",
    details: ["Freezer box rental, including VIP options", "Mortuary assistance and hearse van services", "Cremation and burial assistance", "Respectful guidance for families"],
  },
  {
    slug: "freezer-box",
    title: "Freezer box services",
    category: "Family support",
    summary: "Freezer box arrangements for respectful preservation and transport between locations.",
    image: "/uploads/seed/resource/freezer-box-transparent-detail.jpeg",
    imageAlt: "Kaveri transparent freezer box equipment",
    details: ["Freezer box arrangements", "Support with moving between locations", "Call us to check availability"],
  },
  {
    slug: "corporate-industrial-ambulance",
    title: "Corporate and industrial ambulance services",
    category: "Workplace and event care",
    summary: "Dedicated ambulance and on-site response options for workplaces and industrial locations.",
    image: "/uploads/seed/resource/ambulance-fleet-lineup.jpeg",
    imageAlt: "Kaveri ambulance fleet ready for workplace and industrial response",
    details: ["12-hour deployment options", "Dedicated 24/7 ambulance availability", "On-site medical response", "Support for construction, industrial and infrastructure sites"],
  },
  {
    slug: "occupational-health-centre",
    title: "Occupational Health Centre services",
    category: "Workplace and event care",
    summary: "OHC setup and management to support health needs in the workplace.",
    image: "/uploads/seed/resource/kaveri-team-meeting.jpeg",
    imageAlt: "Kaveri team coordinating healthcare services at the office",
    details: ["OHC setup and management", "Doctors, nurses and paramedics deployment", "Medical equipment supply", "Health check-ups and emergency response planning"],
  },
  {
    slug: "event-medical-support",
    title: "Event medical services",
    category: "Workplace and event care",
    summary: "Ambulance and medical support for events, with on-site coordination.",
    image: "/uploads/seed/resource/ambulance-side-kaveri-01.jpeg",
    imageAlt: "Kaveri ambulance prepared for event standby support",
    details: ["ALS and BLS ambulances", "Doctors, nurses and EMTs", "First aid stations", "Coverage planning for corporate events, sports and gatherings"],
  },
  {
    slug: "long-distance-patient-transport",
    title: "Long-distance patient transportation",
    category: "Patient transport",
    summary: "Interstate and intercity patient transfers planned around continuity of care.",
    image: "/uploads/seed/resource/ambulance-interior-dual-stretcher-02.jpeg",
    imageAlt: "Patient transport stretcher inside a Kaveri ambulance",
    details: ["Interstate and intercity transfers", "Continuous oxygen support", "Cardiac monitoring and ventilator support when required", "Trained medical staff and family travel assistance"],
  },
  {
    slug: "medical-equipment-support",
    title: "Medical equipment support",
    category: "Healthcare logistics",
    summary: "Medical equipment support for patient transport and healthcare operations.",
    image: "/uploads/seed/resource/ambulance-interior-medical-equipment.jpeg",
    imageAlt: "Medical equipment arranged inside a Kaveri ambulance",
    details: ["Ventilators and cardiac monitors", "Defibrillators, syringe and infusion pumps", "Oxygen cylinders", "BiPAP and CPAP units"],
  },
  {
    slug: "hospital-partnership-solutions",
    title: "Hospital partnership solutions",
    category: "Healthcare logistics",
    summary: "Ambulance fleet and patient transfer support for hospitals and healthcare partners.",
    image: "/uploads/seed/resource/kaveri-team-outside-sign.jpeg",
    imageAlt: "Kaveri team outside the ambulance service office",
    details: ["Dedicated ambulance fleet management", "Emergency response and patient transfer management", "Standby ambulance services", "Fleet operations and maintenance"],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
