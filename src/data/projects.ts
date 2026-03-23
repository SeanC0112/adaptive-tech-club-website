export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "toy" | "device" | "tool";
  complexity: "simple" | "intermediate" | "advanced";
  hasDocumentation: boolean;
  summary?: string;
  materials?: string[];
  steps?: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: "switch-adapted-bubble-machine",
    title: "Switch-Adapted Bubble Machine",
    description: "A battery-powered bubble machine modified with an external switch jack so kids who can't press small buttons can activate it with accessible switches.",
    image: "",
    category: "toy",
    complexity: "simple",
    hasDocumentation: true,
    summary: "This project adds a 3.5mm switch jack to a standard battery-operated bubble machine, allowing children to use adaptive switches to activate it independently.",
    materials: [
      "Battery-operated bubble machine",
      "3.5mm mono jack socket",
      "Wire (22 AWG)",
      "Soldering iron & solder",
      "Drill with appropriate bit",
      "Heat shrink tubing",
    ],
    steps: [
      { title: "Open the toy", description: "Remove screws from the battery compartment and carefully open the housing to expose the circuit board." },
      { title: "Locate the switch contacts", description: "Find the ON/OFF switch and identify the two solder points that connect when the switch is pressed." },
      { title: "Solder wires to contacts", description: "Solder two lengths of 22 AWG wire to the switch contact points. Use heat shrink tubing to insulate connections." },
      { title: "Drill mounting hole", description: "Choose a location on the housing and drill a hole sized for the 3.5mm jack socket." },
      { title: "Install the jack", description: "Mount the 3.5mm jack socket in the drilled hole and solder the two wires to the jack terminals." },
      { title: "Test and reassemble", description: "Insert batteries, plug in an adaptive switch, and test. Once working, reassemble the housing." },
    ],
  },
  {
    id: "adapted-art-spinner",
    title: "Adapted Art Spinner",
    description: "A spin-art machine modified for switch access, letting kids create colorful artwork by pressing an adaptive switch.",
    image: "",
    category: "toy",
    complexity: "simple",
    hasDocumentation: true,
    summary: "Modification of a battery-operated spin art toy to accept an external adaptive switch for independent creative play.",
    materials: [
      "Battery-operated spin art toy",
      "3.5mm mono jack socket",
      "Wire (22 AWG)",
      "Soldering iron & solder",
      "Drill",
    ],
    steps: [
      { title: "Disassemble the toy", description: "Open the spin art machine to access the motor circuit." },
      { title: "Identify motor switch", description: "Find the power switch contacts on the PCB." },
      { title: "Wire the jack", description: "Solder wires from the switch contacts to a 3.5mm jack socket." },
      { title: "Mount and test", description: "Drill a hole, mount the jack, test with an adaptive switch, and reassemble." },
    ],
  },
  {
    id: "communication-board",
    title: "Low-Tech Communication Board",
    description: "A durable, printed communication board with symbols and words to help non-verbal kids express their needs.",
    image: "",
    category: "device",
    complexity: "intermediate",
    hasDocumentation: true,
    summary: "A laminated picture-based communication board designed for children who are non-verbal or have limited speech.",
    materials: [
      "Printed symbol sheets (PCS or custom)",
      "Laminating pouches & laminator",
      "Velcro dots",
      "Foam board or sturdy backing",
      "Binder rings (optional)",
    ],
    steps: [
      { title: "Design the layout", description: "Create a grid of commonly used symbols, words, and phrases appropriate for the child's needs." },
      { title: "Print and laminate", description: "Print symbols at appropriate sizes and laminate individual cards and the base board." },
      { title: "Attach Velcro", description: "Apply Velcro dots to the back of each symbol card and corresponding spots on the board." },
      { title: "Organize by category", description: "Group symbols into categories (needs, feelings, activities) for intuitive navigation." },
      { title: "Customize and iterate", description: "Work with the child and caregivers to refine the symbol selection and layout." },
    ],
  },
  {
    id: "adapted-rc-car",
    title: "Switch-Adapted RC Car",
    description: "A remote-controlled car modified so the controller buttons work with accessible switches.",
    image: "",
    category: "toy",
    complexity: "intermediate",
    hasDocumentation: false,
  },
  {
    id: "sensory-light-box",
    title: "Sensory Light Box",
    description: "A custom-built LED light box for sensory stimulation and exploration, with switch control.",
    image: "",
    category: "device",
    complexity: "advanced",
    hasDocumentation: false,
  },
  {
    id: "adapted-paint-roller",
    title: "Adapted Paint Roller",
    description: "A paint roller with an ergonomic grip modification for children with limited hand strength.",
    image: "",
    category: "tool",
    complexity: "simple",
    hasDocumentation: false,
  },
];
