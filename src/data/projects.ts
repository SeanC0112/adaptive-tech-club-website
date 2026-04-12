export interface Project {
  id: string;
  title: string;
  description: string;
  category: "toy" | "device" ;
  hasDocumentation: boolean;
  inProgress?: boolean;
  features?: string[];
  steps?: { title: string; description: string }[];
  image?: string; // optional — falls back to icon if not set
  photos?: string[];
}

export const projects: Project[] = [
  {
    id: "Switch-MP3-Player",
    title: "Switch MP3 Player",
    description:
      "A custom built switch accessible battery powered MP3 Player that can play any audio on its included speakers or via headphones.",
    image: "/project-images/cover-images/mp3-player.png",
    category: "device",
    hasDocumentation: true,
    features: [
      "Built-in speakers",
      "Accepts any MP3 audio file",
      "Headphone capability",
      "Switch adapted Pause/Play button",
      "Switch adapted Next button",
      "Rechargable batteries",
    ],
    photos: [
      "/project-images/mp3-player/photo1.png",
      "/project-images/mp3-player/photo2.png",
      "/project-images/mp3-player/photo3.png",
    ]
  },
  {
    id: "dinosaur-toy",
    title: "Switch Adapted Inflatable RC Dinosaur",
    description:
      "A large dinosaur toy on wheels that self-inflates and can be driven via remote control.",
    image: "",
    category: "toy",
    hasDocumentation: true,
    features: [
      "Battery-powered",
      "Can be switch adapted or joystick adapted",
      "Slow speed promotes tracking accross room",
      "Self-inlates",
    ],
    photos: [
      "/project-images/dinosaur-toy/photo1.jpg",
      "/project-images/dinosaur-toy/photo2.jpg",
    ]
  },
  {
    id: "communication-board",
    title: "Low-Tech Communication Board",
    description:
      "A durable, printed communication board with symbols and words to help non-verbal kids express their needs.",
    image: "",
    category: "device",
    hasDocumentation: true,
    features: [
      "Printed symbol sheets (PCS or custom)",
      "Laminating pouches & laminator",
      "Velcro dots",
      "Foam board or sturdy backing",
      "Binder rings (optional)",
    ],
    inProgress: true,
    photos: [
      "/project-images/mp3-player/photo1.jpg",
      "/project-images/mp3-player/photo2.jpg",
      "/project-images/mp3-player/photo3.jpg",
    ]
  },
  {
    id: "adapted-rc-car",
    title: "Switch-Adapted RC Car",
    description:
      "A remote-controlled car modified so the controller buttons work with accessible switches.",
    image: "",
    category: "toy",
    hasDocumentation: false,
  },
  {
    id: "sensory-light-box",
    title: "Sensory Light Box",
    description:
      "A custom-built LED light box for sensory stimulation and exploration, with switch control.",
    image: "",
    category: "device",
    hasDocumentation: false,
  },
  {
    id: "adapted-paint-roller",
    title: "Adapted Paint Roller",
    description:
      "A paint roller with an ergonomic grip modification for children with limited hand strength.",
    image: "",
    category: "toy",
    hasDocumentation: false,
  },
];
