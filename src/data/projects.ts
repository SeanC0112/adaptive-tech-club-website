export interface Project {
  id: string;
  title: string;
  description: string;
  category: "toy" | "device" ;
  hasDocumentation: boolean;
  inProgress?: boolean;
  features?: string[];
  steps?: { title: string; description: string }[];
  image?: string; // this is the cover image
  photos?: string[]; // this is a list of images in the details grid
}

export const projects: Project[] = [
  {
    id: "Rolling Duck Toy",
    title: "Rolling Duck Toy",
    description:
      "Adapted duck toy that flaps on a rolling round surface while quacking.",
    image: "/project-images/flapping-duck/photo2.jpg",
    category: "toy",
    hasDocumentation: true,
    features: [
      "Switch-adapted on/off button",
      "Promotes attention tracking",
      "Drives and flaps wings",
      "Plays music",
      "Rechargeable (90 minute use)",
    ],
    inProgress: false,
    photos: [
      "/project-images/flapping-duck/photo1.jpg",
      "/project-images/flapping-duck/photo2.jpg",
    ]
  },
  {
    id: "3D Printed Buttons",
    title: "3D Printed Buttons",
    description:
      "A 3D-printed accessibility switch designed for use with adapted toys and assistive technology.",
    image: "/project-images/button/photo2.png",
    category: "device",
    hasDocumentation: true,
    features: [
      "Large top surface",
      "Easily pressable from any point",
      "Compatible with all adapted toys",
      "Customizable colors",
      "Only 3 printed parts, no screws required",
    ],
    inProgress: false,
    photos: [
      "/project-images/button/photo1.png",
      "/project-images/button/photo2.png",
    ]
  },
  {
    id: "Mini Power Chair",
    title: "Mini Power Chair",
    description:
      "An adapted remote-controlled ride-on car that enables safe, independent movement.",
    image: "/project-images/car/cover.jpg",
    category: "toy",
    hasDocumentation: true,
    features: [
      "Allows a child to control their own movement",
      "Can be joystick or switch adapted",
      "Remote control override for safety",
      "Holds one child",
      "Safety harness",
    ],
    inProgress: false,
    photos: [
      "/project-images/car/photo1.jpeg",
      "/project-images/car/photo2.png",
      "/project-images/car/photo3.png",
      "/project-images/car/photo4.jpg",
      "/project-images/car/photo5.JPG",
      "/project-images/car/photo6.jpeg",
    ]
  },
  {
    id: "dinosaur-toy",
    title: "Switch Adapted Inflatable RC Dinosaur",
    description:
      "A large dinosaur toy on wheels that self-inflates and can be driven via remote control.",
    image: "/project-images/dinosaur-toy/cover.jpg",
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
    id: "Switch-Adapted Bidet",
    title: "Switch-Adapted Bidet",
    description:
      "A Happy Bidet custom adapted to be controlled with two foot pedals.",
    image: "/project-images/bidet/cover.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Two modes (spray and clean toilet)",
      "Spray strength controlled by duration or frequency of pedal press",
      "Adjustable spray angle",
      "Plugs into a wall outlet",
      "Easy to set up",
    ],
    inProgress: false,
    photos: [
      "/project-images/bidet/photo1.png",
      "/project-images/bidet/photo2.jpeg",
      "/project-images/bidet/photo3.jpeg",
    ]
  },
  {
    id: "Moving Gear Dino",
    title: "Moving Gear Dino",
    description:
      "Switch-adapted dinosaur with a transparent design that displays the toy’s inner gears.",
    image: "/project-images/gear-dino/cover.png",
    category: "toy",
    hasDocumentation: true,
    features: [
      "Automatically navigates obstacles",
      "Plays music and lights up",
      "Arms and tail move back and forth",
      "Battery-powered",
      "A variety of other gear car designs also available",
    ],
    inProgress: false,
    photos: [
      "/project-images/gear-dino/photo1.jpg",
      "/project-images/gear-dino/photo2.jpg",
      "/project-images/gear-dino/photo3.jpg",
    ]
  },
  {
    id: "RC Shark Toy",
    title: "Rolling Duck Toy",
    description:
      "Joystick adapted remote-controlled shark toy that swims when submerged in water.",
    image: "/project-images/shark/shark2.jpg",
    category: "toy",
    hasDocumentation: true,
    features: [
      "Joystick adapted",
      "65 foot range",
      "Rechargeable toy & battery-powered remote control",
      "Water proof",
    ],
    inProgress: false,
    photos: [
      "/project-images/shark/shark1.png",
      "/project-images/shark/shark2.jpg",
    ]
  },
  {
    id: "Switch-MP3-Player",
    title: "Switch MP3 Player",
    description:
      "A custom built switch accessible battery powered MP3 Player that can play any audio on its included speakers or via headphones.",
    image: "/project-images/mp3-player/cover.png",
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
    id: "Dancing Space Duck",
    title: "Dancing Space Duck",
    description:
      "Switch adapted duck wearing a spacesuit that dances to the music.",
    image: "/project-images/dancing-duck/cover.png",
    category: "toy",
    hasDocumentation: true,
    features: [
      "Switch-adapted",
      "Dances and waddles side to side",
      "Plays music and lights up",
      "Battery-powered",
    ],
    inProgress: false,
    photos: [
      "/project-images/dancing-duck/photo1.jpg",
      "/project-images/dancing-duck/photo2.jpg",
      "/project-images/dancing-duck/photo3.jpg",
      "/project-images/dancing-duck/photo4.jpg",
    ]
  },
  {
    id: "Pouring Cup",
    title: "Pouring Cup",
    description:
      "Switch-adapted device that pours water when a button is pressed.",
    image: "",
    category: "device",
    hasDocumentation: true,
    features: [
      "Clamp to attach mechanism to any table",
      "Gooseneck articulating arm allowing specific cup placement",
      "Multiple cup sizes",
      "Pours cup with continual button press",
    ],
    inProgress: true,
    photos: [
      "/project-images/pouring-cup/photo1.png",
    ]
  },
];
