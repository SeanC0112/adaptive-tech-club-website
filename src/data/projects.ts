export interface Project {
  id: string;
  title: string;
  description: string;
  category: "toy" | "device";
  hasDocumentation: boolean;
  inProgress?: boolean;
  features?: string[];
  materials?: string[];
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
    materials: ["Remote Control Duck Toy", "Solder + Iron", "Female Jack"],
    inProgress: false,
    photos: [
      "/project-images/flapping-duck/photo1.jpg",
      "/project-images/flapping-duck/photo2.jpg",
    ],
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
    materials: [
      "PLA",
      "PETG",
      "3D Printer",
      "Limit Switch (Model: V-156-1C25)",
      "Male Jack",
      "Solder + Iron",
    ],
    inProgress: false,
    photos: [
      "/project-images/button/photo1.png",
      "/project-images/button/photo2.png",
    ],
  },
  {
    id: "Mini Powered Chair",
    title: "Mini Powered Chair",
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
    ],
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
    ],
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
    ],
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
    ],
  },
  {
    id: "Accessible Game Controller",
    title: "Accessible Game Controller",
    description:
      "Allows kids to play computer games with accessible buttons.",
    image: "/project-images/game-controller/photo3.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Four different input buttons",
      "Buttons can be mapped to any keyboard keys",
      "C cord plugs into computer",
      "Goes with custom made gaming website, game4all.org",
    ],
    inProgress: false,
    photos: [
      "/project-images/game-controller/photo1.jpeg",
      "/project-images/game-controller/photo2.jpeg",
      "/project-images/game-controller/photo4.jpeg",
      "/project-images/game-controller/photo5.jpeg",
    ],
  },
  {
    id: "RC Shark Toy",
    title: "RC Shark Toy",
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
    ],
  },
  {
    id: "Key Guide",
    title: "Key Guide",
    description:
      "Helps those without fine motor skills use click on icons in verbalizing communication apps.",
    image: "/project-images/key-guide/photo1.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Easily attachable with clips",
      "Provides increased control for pressing individual symbols",
      "Can be customized to different app layouts",
      "Highly durable",
      "Easy to clean",
    ],
    inProgress: false,
    photos: [
      "/project-images/key-guide/photo2.jpeg",
      "/project-images/key-guide/photo3.jpeg",
      "/project-images/key-guide/photo4.jpeg",
    ],
  },
  {
    id: "Tricycle Pedal Adapters",
    title: "Tricycle Pedal Adapters",
    description:
      "Allows kids with limited mobility to keep their feet on tricycle pedals.",
    image: "/project-images/tricicle/photo3.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Velcro secures a child’s foot",
      "Nut and bolt mechanism attaches to tricycle pedal",
      "Compatible with most tricycles",
    ],
    inProgress: false,
    photos: [
      "/project-images/tricicle/photo1.jpeg",
      "/project-images/tricicle/photo2.jpeg",
      "/project-images/tricicle/photo4.jpeg",
    ],
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
    ],
  },
  {
    id: "Small Audio Communication Case",
    title: "Small Audio Communication Case",
    description:
      "Case for TalkingBrix 2 button that mounts to a wall.",
    image: "/project-images/audio-com-small/photo1.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "3D printed",
      "Keeps device protected",
      "Secures from child tinkering",
      "Easily removable by adult",
      "Can screws into wall or mounting device",
      "Charging port accessible while mounted",
    ],
    inProgress: false,
    photos: [
      "/project-images/audio-com-small/photo2.png",
      "/project-images/audio-com-small/photo3.png",
      "/project-images/audio-com-small/photo4.png",
      "/project-images/audio-com-small/photo5.png",
    ],
  },
  /*
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
    photos: ["/project-images/pouring-cup/photo1.png"],
  },
  */
  
  {
    id: "Blue2 Case",
    title: "Blue2 Case",
    description:
      "Stops an AbleNet Blue2 from being broken by securing it to a wheelchair and ensures that settings are not accidentally changed by a student.",
    image: "/project-images/blue2/photo6.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Velcro attaches securely to a wheelchair",
      "Covers setting control buttons",
      "On/off switch, pair button, and plug holes are still accessible",
    ],
    inProgress: false,
    photos: [
      "/project-images/blue2/photo1.jpeg",
      "/project-images/blue2/photo2.jpeg",
      "/project-images/blue2/photo3.jpeg",
      "/project-images/blue2/photo4.jpeg",
      "/project-images/blue2/photo5.jpeg",
      "/project-images/blue2/photo7.png",
      "/project-images/blue2/photo8.png",
    ],
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
    ],
  },
  {
    id: "Big Audio Communication Case",
    title: "Big Audio Communication Case",
    description:
      "Case for large audio communication device that allows access to buttons without changing settings and mounts to an articulating arm.",
    image: "/project-images/audio-com-big/photo2.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "3D printed",
      "Keeps device protected",
      "Secures from child tinkering",
      "Easily removable by adult",
      "Can screw into mounting device",
    ],
    inProgress: false,
    photos: [
      "/project-images/audio-com-big/photo1.jpeg",
      "/project-images/audio-com-big/photo2.jpeg",
      "/project-images/audio-com-big/photo3.jpeg",
      "/project-images/audio-com-big/photo4.jpeg",
      "/project-images/audio-com-big/photo5.jpeg",
      "/project-images/audio-com-big/photo6.jpeg",
      "/project-images/audio-com-big/photo7.jpeg",
      "/project-images/audio-com-big/photo8.jpeg",
      "/project-images/audio-com-big/photo9.jpeg",
    ],
  },
  {
    id: "Medium Audio Communication Case",
    title: "Medium Audio Communication Case",
    description:
      "Case for medium audio communication device that allows access to button without changing settings and mounts to an articulating arm.",
    image: "/project-images/audio-com-medium/photo10.jpeg",
    category: "device",
    hasDocumentation: true,
    features: [
      "3D printed",
      "Keeps device protected",
      "Secures from child tinkering",
      "Easily removable by adult",
      "Can screw into mounting device",
    ],
    inProgress: false,
    photos: [
      "/project-images/audio-com-medium/photo2.jpeg",
      "/project-images/audio-com-medium/photo4.jpeg",
      "/project-images/audio-com-medium/photo5.jpeg",
      "/project-images/audio-com-medium/photo6.jpeg",
      "/project-images/audio-com-medium/photo7.jpeg",
      "/project-images/audio-com-medium/photo8.jpeg",
      "/project-images/audio-com-medium/photo9.jpeg",
    ],
  },
  {
    id: "RC Button",
    title: "RC Button",
    description:
      "Wireless interface for a switch-adapted toy. Compatible with any custom button attached via a 3.5mm headphone jack.",
    image: "/project-images/rc-button/RCbutton1.png",
    category: "device",
    hasDocumentation: true,
    features: [
      "Communicates with toy via wireless",
      "Turns toy on for a set amount of time after each button press",
      "Includes wireless transmitter and reciever",
      "Uses 3 AA batteries",
    ],
    inProgress: true,
    photos: [
      "/project-images/rc-button/RCbutton1.png",
      "/project-images/rc-button/RCButton2.jpg",
      "/project-images/rc-button/RCButton3.png",
      "/project-images/rc-button/RCButton4.jpg",
    ],
  },
  {
    id: "Adjustable Time Button",
    title: "Adjustable Time Button",
    description:
      "Allows the user to control how long a switch-adapted toy stays powered on for.",
    image: "/project-images/time-button/dial2.jpg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Dial-controlled runtime ranges from 2-20 seconds",
      "Compatible with any button attached via a 3.5mm jack",
      "Uses 3 AA batteries",
    ],
    inProgress: true,
    photos: [
      "/project-images/time-button/dial1.png",
      "/project-images/time-button/dial2.jpg",
      "/project-images/time-button/dial3.png",
    ],
  },
  {
    id: "Audio Communication Device",
    title: "Audio Communication Device",
    description:
      "Enables nonverbal communication through a button that verbalizes a customizable sound/word/sentence.",
    image: "/project-images/audio-com/comm1.jpg",
    category: "device",
    hasDocumentation: true,
    features: [
      "Customizable sound",
      "Clear audio quality",
      "Easy-to-press button",
      "Uses 3 AA batteries",
    ],
    inProgress: true,
    photos: [
      "/project-images/audio-com/comm1.jpg",
      "/project-images/audio-com/photo1.png",
    ],
  },
];
