export interface Partner {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestFor: string;
}

export const partners: Partner[] = [
  {
    name: "ADT",
    tagline: "America's most trusted name in security",
    description:
      "With 150+ years of experience and the largest network of professional monitoring centers in the U.S., ADT offers professionally installed systems backed by a 6-month money-back guarantee.",
    highlights: [
      "24/7 professional monitoring",
      "Professional installation",
      "Smart home integration with Google Nest",
      "Theft protection guarantee",
    ],
    bestFor: "Homeowners who want a full-service, professionally managed system",
  },
  {
    name: "Vivint",
    tagline: "Premium smart home security",
    description:
      "Vivint combines award-winning security hardware with a powerful smart home platform. Cameras, locks, thermostats, and sensors all work together through one sleek app and touchscreen panel.",
    highlights: [
      "Award-winning equipment and app",
      "Outdoor cameras with Smart Deter",
      "Car Guard vehicle protection",
      "Professional installation included",
    ],
    bestFor: "Tech-forward households that want security plus smart home automation",
  },
  {
    name: "SimpliSafe",
    tagline: "Easy, affordable, no contracts",
    description:
      "SimpliSafe pioneered DIY home security with easy self-installation, affordable monitoring, and no long-term contracts. Systems arrive pre-configured and set up in about 30 minutes.",
    highlights: [
      "No long-term contracts",
      "DIY setup in ~30 minutes",
      "Affordable monthly monitoring",
      "Optional pro installation",
    ],
    bestFor: "Renters and budget-conscious buyers who want flexibility",
  },
  {
    name: "Ring Alarm",
    tagline: "Whole-home security by Amazon",
    description:
      "Ring Alarm pairs the famous Ring Video Doorbell with a full DIY alarm system. Deep Alexa integration and some of the lowest professional monitoring prices in the industry.",
    highlights: [
      "Industry-low monitoring cost",
      "Seamless Alexa integration",
      "Huge camera & doorbell lineup",
      "Easy self-installation",
    ],
    bestFor: "Amazon/Alexa households that want cameras and doorbells first",
  },
  {
    name: "Brinks Home",
    tagline: "Professional monitoring, fast response",
    description:
      "Brinks Home delivers professionally monitored security with some of the fastest alarm response times in the business, flexible equipment packages, and nationwide coverage.",
    highlights: [
      "Fast alarm response times",
      "Flexible equipment packages",
      "Pro or DIY installation",
      "30-day trial period",
    ],
    bestFor: "Families who prioritize rapid emergency response",
  },
  {
    name: "Frontpoint",
    tagline: "DIY security with pro-grade equipment",
    description:
      "Frontpoint ships professional-grade, cellular-first security equipment that you install yourself, backed by U.S.-based support and crash-and-smash protection.",
    highlights: [
      "100% cellular connection",
      "Crash & smash protection",
      "U.S.-based support",
      "No installation fees",
    ],
    bestFor: "DIYers who still want professional-grade hardware",
  },
  {
    name: "Cove",
    tagline: "Simple security, outstanding value",
    description:
      "Cove focuses on straightforward, affordable home security with a touchscreen panel, fast professional monitoring, and a lifetime equipment warranty on premium plans.",
    highlights: [
      "Low upfront equipment cost",
      "Lifetime warranty available",
      "InstaText & LiveAssist alerts",
      "60-day money-back guarantee",
    ],
    bestFor: "First-time buyers who want simplicity and value",
  },
  {
    name: "Abode",
    tagline: "Security for the smart home enthusiast",
    description:
      "Abode offers flexible, contract-free security with the industry's broadest smart home compatibility — HomeKit, Alexa, Google Home, and Z-Wave/Zigbee devices all supported.",
    highlights: [
      "Apple HomeKit compatible",
      "No contracts required",
      "On-demand monitoring plans",
      "Works with 160+ devices",
    ],
    bestFor: "Smart home power users who want maximum compatibility",
  },
];
