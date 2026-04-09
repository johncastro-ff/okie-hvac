export interface ServiceSilo {
  title: string;
  slug: string;
  accent: "cool" | "warm";
  description: string;
  services: ServicePage[];
}

export interface ServicePage {
  title: string;
  slug: string;
  description: string;
  whyChoose: string;
}

export const SERVICE_SILOS: ServiceSilo[] = [
  {
    title: "HVAC Contractor",
    slug: "hvac-contractor",
    accent: "cool",
    description: "Full-service HVAC solutions for residential and commercial properties in Stillwater, OK. From installation to emergency repairs, we keep your systems running year-round.",
    services: [
      { title: "AC System Maintenance", slug: "ac-system-maintenance", description: "Keep your air conditioning running at peak efficiency with professional AC maintenance services. Our comprehensive tune-ups extend system life, lower energy bills, and prevent costly breakdowns.", whyChoose: "OKIE HVAC Systems provides thorough AC maintenance with multi-point inspections, ensuring your system operates efficiently through Oklahoma's brutal summers." },
      { title: "AC System Repair", slug: "ac-system-repair", description: "Fast, reliable air conditioning repair when your system breaks down. We diagnose and fix all AC issues including refrigerant leaks, compressor failures, and electrical problems.", whyChoose: "With 24/7 emergency availability and fully stocked service vehicles, we get your AC back up and running fast — no matter the time of day." },
      { title: "HVAC System Maintenance", slug: "hvac-system-maintenance", description: "Comprehensive HVAC maintenance plans that keep your heating and cooling systems running efficiently all year long. Prevent breakdowns before they happen.", whyChoose: "Our maintenance plans are designed for Oklahoma's extreme climate — we prepare your system for both scorching summers and freezing winters." },
      { title: "HVAC System Repair", slug: "hvac-system-repair", description: "Expert HVAC repair services for all makes and models. From minor fixes to major system overhauls, we restore comfort to your home or business.", whyChoose: "Our technicians are trained on all major HVAC brands and carry common replacement parts, meaning faster repairs and less downtime." },
      { title: "Install AC", slug: "install-ac", description: "Professional air conditioning installation sized and configured for your property. We install high-efficiency systems that deliver reliable cooling for years to come.", whyChoose: "We perform detailed load calculations to ensure your new AC system is perfectly sized, maximizing comfort and minimizing energy costs." },
      { title: "Repair HVAC", slug: "repair-hvac", description: "Complete HVAC repair services covering heating, cooling, ventilation, and air quality systems. We fix it right the first time.", whyChoose: "OKIE HVAC Systems stands behind every repair with a satisfaction guarantee. We're not done until your system is running perfectly." },
      { title: "Emergency HVAC Repair", slug: "emergency-hvac-repair", description: "24/7 emergency HVAC repair for when your system fails at the worst possible time. No overtime charges, no hidden fees — just fast, professional service.", whyChoose: "We understand that HVAC emergencies don't wait for business hours. Our team responds quickly with the tools and parts to get your system running again." },
      { title: "HVAC Maintenance Plan", slug: "hvac-maintenance-plan", description: "Join our HVAC maintenance plan for priority service, discounted repairs, and scheduled tune-ups that keep your system running efficiently all year.", whyChoose: "Plan members get priority scheduling, discounted parts and labor, and the peace of mind that comes with regular professional maintenance." },
    ],
  },
  {
    title: "Air Conditioning Contractor",
    slug: "air-conditioning-contractor",
    accent: "cool",
    description: "Expert air conditioning installation and tune-up services. We install and maintain all types of cooling systems including central AC and ductless mini-splits.",
    services: [
      { title: "AC Installation", slug: "ac-installation", description: "Complete air conditioning installation services for new construction and system replacements. We install all major brands with expert precision.", whyChoose: "From permit pulling to final testing, we handle every step of your AC installation with meticulous attention to detail and code compliance." },
      { title: "AC Tune-Up", slug: "ac-tune-up", description: "Professional AC tune-up services that optimize your system's performance, improve energy efficiency, and catch small problems before they become expensive repairs.", whyChoose: "Our comprehensive AC tune-ups include cleaning, calibration, and a detailed inspection report so you know exactly how your system is performing." },
      { title: "Ductless Mini-Split Installation", slug: "ductless-mini-split-installation", description: "Professional ductless mini-split installation for efficient heating and cooling without ductwork. Perfect for additions, garages, and hard-to-cool spaces.", whyChoose: "We're experienced in all major ductless brands and can design a zoned comfort solution that fits your space and budget perfectly." },
    ],
  },
  {
    title: "Air Conditioning Repair Service",
    slug: "air-conditioning-repair-service",
    accent: "cool",
    description: "Fast, reliable AC repair services to get your cooling back when you need it most. We diagnose and fix all air conditioning problems.",
    services: [
      { title: "AC Not Cooling Repair", slug: "ac-not-cooling-repair", description: "Is your AC running but not cooling? We diagnose and repair all causes of poor cooling including low refrigerant, dirty coils, compressor issues, and airflow problems.", whyChoose: "We use advanced diagnostic tools to pinpoint the exact cause of your cooling problem, ensuring an accurate repair the first time." },
      { title: "AC Tune-Up (Repair)", slug: "ac-tune-up-repair", description: "Preventive AC tune-ups focused on identifying and addressing potential repair issues before they cause a breakdown during peak cooling season.", whyChoose: "Our repair-focused tune-ups go deeper than basic maintenance, targeting wear patterns and component degradation before they fail." },
      { title: "Refrigerant Recharge", slug: "refrigerant-recharge", description: "Professional refrigerant recharge services to restore your AC's cooling capacity. We also find and repair refrigerant leaks to prevent future issues.", whyChoose: "We're EPA-certified for refrigerant handling and always check for leaks before recharging, so you're not paying for refrigerant that's just going to leak out again." },
    ],
  },
  {
    title: "Heating Contractor",
    slug: "heating-contractor",
    accent: "warm",
    description: "Professional heating system installation for furnaces, heat pumps, and ductless systems. We keep Stillwater warm through Oklahoma winters.",
    services: [
      { title: "Heating System Installation", slug: "heating-system-installation", description: "Expert heating system installation for furnaces, heat pumps, and hybrid systems. We size and install your new heating system for maximum comfort and efficiency.", whyChoose: "We evaluate your home's heating needs, insulation, and ductwork to recommend the most efficient and cost-effective heating solution." },
      { title: "Heat Pump Installation", slug: "heat-pump-installation", description: "Professional heat pump installation for year-round heating and cooling efficiency. Heat pumps are an excellent choice for Oklahoma's moderate climate.", whyChoose: "We install high-efficiency heat pumps that provide both heating and cooling, reducing your energy costs and environmental impact." },
      { title: "Furnace Installation", slug: "furnace-installation", description: "Complete furnace installation services for gas and electric furnaces. We remove your old system and install a properly sized, high-efficiency replacement.", whyChoose: "Our furnace installations include full system testing, ductwork inspection, and a thorough walkthrough of your new system's features and maintenance needs." },
      { title: "Ductless Heating Services", slug: "ductless-heating-services", description: "Ductless heating solutions for spaces without existing ductwork. Mini-split heat pumps provide efficient, zone-controlled heating for any room.", whyChoose: "We design ductless heating systems that provide precise temperature control room-by-room, eliminating wasted energy heating unused spaces." },
    ],
  },
  {
    title: "Furnace Repair Service",
    slug: "furnace-repair-service",
    accent: "warm",
    description: "Expert furnace and heating system repair services. When your heat goes out, we respond fast to restore warmth and safety to your home.",
    services: [
      { title: "Heating System Repair", slug: "heating-system-repair", description: "Professional heating system repair for all types of furnaces, heat pumps, and boilers. We restore heat quickly and safely.", whyChoose: "Our technicians diagnose heating problems accurately and carry common parts for same-day repairs whenever possible." },
      { title: "Heating System Maintenance", slug: "heating-system-maintenance", description: "Scheduled heating system maintenance that keeps your furnace or heat pump running safely and efficiently through the entire heating season.", whyChoose: "Regular heating maintenance prevents carbon monoxide risks, extends equipment life, and keeps your energy bills low." },
      { title: "Furnace Tune-Up", slug: "furnace-tune-up", description: "Comprehensive furnace tune-up services including burner cleaning, heat exchanger inspection, safety testing, and efficiency optimization.", whyChoose: "Our furnace tune-ups include a carbon monoxide safety check and detailed report on your system's condition and remaining useful life." },
      { title: "Heat Pump Repair", slug: "heat-pump-repair", description: "Expert heat pump repair for all brands and models. We fix refrigerant issues, defrost problems, compressor failures, and electrical faults.", whyChoose: "We understand the unique demands of heat pump systems in Oklahoma's climate and repair them to perform at their best year-round." },
      { title: "Heater Not Working Repair", slug: "heater-not-working-repair", description: "Emergency heater repair when your heating system stops working. We diagnose and fix the problem fast to restore warmth to your home.", whyChoose: "No heat is an emergency — we treat it like one with fast response times and the expertise to get your heater running again quickly." },
    ],
  },
  {
    title: "Mechanical Contractor",
    slug: "mechanical-contractor",
    accent: "cool",
    description: "Complete mechanical contracting services including ductwork, ventilation, thermostats, and indoor air quality solutions.",
    services: [
      { title: "HVAC Duct & Vent Installation", slug: "hvac-duct-vent-installation", description: "Professional ductwork and ventilation installation designed for optimal airflow, efficiency, and comfort. New construction and retrofit services available.", whyChoose: "We design and install duct systems using industry-leading practices, ensuring even airflow and minimal energy loss throughout your property." },
      { title: "HVAC Duct & Vent Repair", slug: "hvac-duct-vent-repair", description: "Duct repair services that seal leaks, fix damage, and restore proper airflow to your HVAC system. Leaky ducts waste energy and money.", whyChoose: "We use advanced leak detection to find and seal duct leaks that are costing you money and reducing your system's performance." },
      { title: "HVAC Duct & Vent Cleaning", slug: "hvac-duct-vent-cleaning", description: "Professional duct cleaning services that remove dust, allergens, and debris from your ventilation system, improving air quality and system efficiency.", whyChoose: "Our thorough duct cleaning process removes years of buildup, reducing allergens and improving the air your family breathes every day." },
      { title: "Thermostat Installation", slug: "thermostat-installation", description: "Smart and programmable thermostat installation services. Upgrade your thermostat for better comfort control and lower energy bills.", whyChoose: "We install and configure smart thermostats to work perfectly with your HVAC system, maximizing comfort and energy savings." },
      { title: "Thermostat Repair", slug: "thermostat-repair", description: "Thermostat repair and troubleshooting services. If your thermostat isn't reading correctly or controlling your system properly, we can fix it.", whyChoose: "Before recommending a replacement, we thoroughly diagnose thermostat issues — often a simple repair is all that's needed." },
      { title: "Indoor Air Quality", slug: "indoor-air-quality", description: "Comprehensive indoor air quality solutions including air purifiers, humidifiers, dehumidifiers, UV lights, and ventilation improvements.", whyChoose: "We assess your home's air quality and recommend targeted solutions that address your specific concerns, from allergens to humidity." },
    ],
  },
];

export const SERVICE_AREAS = [
  "Stillwater", "Perkins", "Glencoe", "Yale", "Ripley", "Cushing",
  "Drumright", "Morrison", "Perry", "Pawnee", "Cleveland", "Langston",
  "Coyle", "Mulhall", "Orlando", "Red Rock", "Marland", "Ralston",
];

export const PHONE = "(405) 338-9194";
export const PHONE_HREF = "tel:+14053389194";
export const EMAIL = "Claytin@okiehvac.com";
export const EMAIL_HREF = "mailto:Claytin@okiehvac.com";
export const ADDRESS = "308 E Thomas Ave, Stillwater, OK";
export const STREET_ADDRESS = "308 E Thomas Ave";
export const CITY = "Stillwater";
export const STATE = "OK";
export const ZIP = "74074";
export const BUSINESS_NAME = "OKIE HVAC Systems";
export const SITE_URL = "https://okiehvac.com"; // Update when domain is confirmed
export const GEO_LAT = 36.1156;
export const GEO_LNG = -97.0584;
export const GOOGLE_REVIEW_COUNT = 252;
export const GOOGLE_RATING = 5.0;
