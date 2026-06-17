export interface Project {
  id: string;
  title: string;
  description: string;
  category: "toy" | "device";
  hasDocumentation: boolean;
  inProgress?: boolean;
  features?: string[];
  materials?: string[];
  steps?: { title: string; description: string; image?: string }[];
  image?: string; // this is the cover image
  photos?: string[]; // this is a list of images in the details grid
  overview?: string; // longer write-up intro shown above the cards
  parts?: { name: string; description: string }[]; // parts breakdown
  printSettings?: { part: string; setting: string }[]; // 3D print settings
  githubUrl?: string; // link to project files / source on GitHub
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
    overview:
      "This adaptive button is a 3D-printed accessibility switch designed for use with adapted toys and assistive technology. It is intended to be easy to press for children and individuals who may have difficulty operating small or stiff buttons. The button is made up of three printed parts that assemble without tools (beyond an optional dab of glue) and a standard off-the-shelf switch. The design is open and easy to customize, reprint, or repair.",
    githubUrl: "https://github.com/AdaptiveTechClub/button",
    features: [
      "Large top surface, easy to press from any point",
      "Living hinge mechanism transmits force to the switch reliably",
      "Three-part modular design, easy to print, assemble, and service",
      "Compatible with standard 3.5 mm mono jack wiring for adaptive toy switches",
      "No supports required on most printers",
    ],
    materials: [
      "PLA",
      "PETG",
      "3D Printer",
      "Limit Switch (Model: V-156-1C25)",
      "Male Jack",
      "Solder + Iron",
    ],
    parts: [
      {
        name: "Top (top.stl)",
        description:
          "The large dome-shaped pressing surface. Snaps onto the body and can be glued permanently. Can be printed in any color.",
      },
      {
        name: "Body (body.stl)",
        description:
          "The main structural piece. Contains a living hinge mechanism that flexes when the top is pressed, depressing the switch below. MUST be printed in PETG for flexibility — PLA is too brittle and will snap.",
      },
      {
        name: "Base (base.stl)",
        description:
          "The bottom plate. Houses the switch and wiring. Screws onto the body. Can be printed in PLA or PETG.",
      },
      {
        name: "Switch",
        description: "An off-the-shelf momentary switch. Mounted in the base.",
      },
    ],
    printSettings: [
      { part: "Top", setting: "PLA or PETG, 20%+ infill, 0.2 mm layers" },
      {
        part: "Body",
        setting:
          "PETG only, 20% infill, 0.2 mm layers. Ironing of the surface below the hinge piece recommended — use modifier shapes in your preferred slicer.",
      },
      { part: "Base", setting: "PLA or PETG, 20%+ infill, 0.2 mm layers" },
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
    overview:
      "This guide covers the electronics for turning an off-the-shelf ride-on car into a powered chair a child can drive themselves. The car keeps its original remote so an adult can always take over, while a small Arduino lets the child steer with a joystick or with accessible switches. The same wiring supports both input methods at once.",
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
    materials: [
      "Ride-on car with a 2.4 GHz remote control",
      "Arduino Pro Micro",
      "Perfboard",
      "5-pin JST-XH joystick connector and joystick",
      "Two panel-mount 3.5 mm switch jacks",
      "Hookup wire in five colors, plus heat shrink",
      "Soldering iron",
      "Multimeter",
      "Heat gun or lighter",
    ],
    steps: [
      {
        title: "Study the wiring schematic",
        description:
          "Before cutting or soldering anything, get familiar with the full schematic. The build ties together three systems: the car's original transmitter (pulled from its remote), an Arduino Pro Micro that reads the joystick and switches, and the car's onboard power. Every connection below maps to a point on this diagram.",
        image: "/project-images/car-build/schematic.png",
      },
      {
        title: "Adapt the remote",
        description:
          "Open the car's remote and expose its transmitter board. For each direction, solder a wire to that button's signal pad — the pad that is not tied to ground — and connect the transmitter's power and ground to the board. Solder every connection except the antenna. Then drill a small hole in the top of the case, route the antenna wire out through it, and close the remote back up.",
        image: "/project-images/car-build/remote.jpg",
      },
      {
        title: "Mount the Arduino on a perfboard",
        description:
          "Solder an Arduino Pro Micro onto a piece of perfboard. This is the brain of the build: it reads the joystick and switches and translates them into the same button presses the transmitter expects.",
        image: "/project-images/car-build/arduino.jpg",
      },
      {
        title: "Tap 5V from the car",
        description:
          "Use a multimeter to find a point in the car's electronics that supplies a steady 5V. Connect the transmitter's power and ground here so the whole system shares one power source.",
        image: "/project-images/car-build/power.png",
      },
      {
        title: "Wire the joystick connector",
        description:
          "Cut about two feet of wire in five colors — one each for Ground, Forward, Backward, Left, and Right — and solder them to the 5-pin JST-XH joystick connector. Keep the color code consistent; you'll match these same colors at the Arduino and the transmitter.",
        image: "/project-images/car-build/joystick-colors.png",
      },
      {
        title: "Connect the joystick to the transmitter and Arduino",
        description:
          "Run the Forward, Backward, Left, and Right signal wires to the matching button pads on the transmitter, and connect the shared ground. Then wire Backward to pin 3, Left to pin 2, and Right to pin 4 on the Arduino. Double-check Forward and Backward — they are easy to swap.",
        image: "/project-images/car-build/wiring-overview.png",
      },
      {
        title: "Add accessible switch jacks",
        description:
          "So the chair can also be driven with external switches, wire up two panel-mount 3.5 mm jacks. Cut three longer wires (two signal, one ground) and one short ground wire. Use the short wire to bridge ground between the two jacks, and run the long ground wire to the board's ground. Solder one signal wire to the transmitter's Forward button and the other to pin 5 on the Arduino.",
        image: "/project-images/car-build/switch-jacks.jpg",
      },
      {
        title: "Upload the firmware and test",
        description:
          "Upload the project's Arduino code to the Pro Micro, then power everything up and test each direction. If something doesn't respond, check that the Arduino is powered and running the correct code, that the joystick works on its own (cut power to the Arduino to isolate it), and that every connection reads continuous on a multimeter. Still stuck? Ask another ATC member for a second set of eyes.",
      },
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
    description: "Allows kids to play computer games with accessible buttons.",
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
    description: "Case for TalkingBrix 2 button that mounts to a wall.",
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
  {
    id: "Vibrating Turtle Toy",
    title: "Vibrating Turtle Toy",
    description:
      "Switch-adapted turtle toy which vibrates when the button is pressed.",
    image: "/project-images/turtle-stuffy/cover.jpeg",
    category: "toy",
    hasDocumentation: true,
    inProgress: false,
    features: [
      "Switch-adapted",
      "Vibrates when button is pressed",
      "Battery-powered",
    ],
    materials: [
      "Turtle Vibrating Stuffed Animal",
      "Solder + Iron",
      "Female Jack",
    ],
    photos: [
      "/project-images/turtle-stuffy/1.jpeg",
      "/project-images/turtle-stuffy/2.jpeg",
    ],
  },
];
