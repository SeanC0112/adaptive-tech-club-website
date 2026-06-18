// Content for the "New Club Kit" wiki at /newclub.
// Copy is transcribed verbatim from the source document — do not edit wording.
// Inline bold and links mirror the source. Long source URLs live in
// newClubKitLinks.ts to keep this file readable.
// Sections marked as placeholders use lorem ipsum until the real copy is written.

import { kitLinks } from "./newClubKitLinks";

// A single inline run of text: optionally bold and/or a link.
export type InlineSpan = { text: string; bold?: boolean; href?: string };
// Rich text is either a plain string or a sequence of inline runs.
export type Rich = string | (string | InlineSpan)[];

export type KitListItem = Rich | { text: Rich; items: Rich[] };

export type KitBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: Rich }
  | { type: "def"; term: Rich; text: Rich }
  | { type: "list"; items: KitListItem[] };

export interface KitSection {
  slug: string;
  emoji: string;
  label: string; // short label shown in the sidebar
  title: string; // page heading
  placeholder?: boolean;
  blocks: KitBlock[];
}

export const newClubKit: KitSection[] = [
  {
    slug: "about",
    emoji: "ℹ️",
    label: "About ATC",
    title: "About ATC",
    blocks: [
      { type: "h2", text: "Mission Statement" },
      {
        type: "p",
        text: "The Adaptive Tech Club is a student-led organization that adapts technology and modifies toys for children with disabilities. Our free toys and tech eliminate cost barriers while ensuring every child has access to play, education, and independence.",
      },
      { type: "h2", text: "Why the Adaptive Tech Club Matters" },
      { type: "h3", text: "Why Adapt Toys?" },
      {
        type: "p",
        text: "Adapting toys for children with disabilities is important for several key reasons:",
      },
      {
        type: "list",
        items: [
          [
            { text: "Cost", bold: true },
            " — Pre-adapted toys can be wildly expensive. A standard Pie Face game costs ",
            { text: "$35", bold: true },
            ", but the adapted version runs ",
            { text: "$155", bold: true },
            " — more than 4x the price. Wheelchairs tell a similar story: costs range from ",
            { text: "$90", bold: true },
            " (low) to ",
            { text: "$4,455", bold: true },
            " (average) to ",
            { text: "$9,000", bold: true },
            " (high) — accessibility shouldn't come at a premium.",
          ],
          [
            { text: "Need", bold: true },
            " — Many children cannot access standard toys without modifications.",
          ],
          [
            { text: "Fulfilling", bold: true },
            " — Creating adaptations makes a real difference in a child's life.",
          ],
          [
            { text: "Fun", bold: true },
            " — It's genuinely enjoyable work because who doesn't like to play with toys!",
          ],
        ],
      },
      { type: "h3", text: "Why Build Other Assistive Tech?" },
      {
        type: "p",
        text: [
          "The same logic applies to broader assistive technology. A commercial switch (like the Ablenet big red button) costs ",
          { text: "$265", bold: true },
          ", while a DIY version built with a breadboard and basic components can be made for ",
          { text: "under $15", bold: true },
          " — a savings of over 90%.",
        ],
      },
      { type: "p", text: "Beyond cost, building your own tech is:" },
      {
        type: "list",
        items: [
          [
            { text: "Cost-effective", bold: true },
            " — Dramatic savings over commercial alternatives",
          ],
          [
            { text: "Need-driven", bold: true },
            " — Tailored exactly to the user's specific situation",
          ],
          [
            { text: "Fulfilling", bold: true },
            " — Real-world impact for real people",
          ],
          [{ text: "Fun", bold: true }, " — Hands-on making and tinkering"],
          [
            { text: "Challenging", bold: true },
            " — Pushes your skills and problem-solving",
          ],
          [
            { text: "Inventive", bold: true },
            " — Encourages creative, original solutions",
          ],
        ],
      },
      { type: "h3", text: "The Bottom Line" },
      {
        type: "p",
        text: [
          "The Adaptive Tech Club exists because ",
          {
            text: "accessible technology is too expensive, too generic, and too hard to get",
            bold: true,
          },
          " — and we can fix that. By adapting toys and building custom tech, club members directly improve the lives of people with disabilities while gaining meaningful engineering and design experience.",
        ],
      },
    ],
  },
  {
    slug: "leader-selection",
    emoji: "🗳️",
    label: "Leader Selection",
    title: "Leader Selection",
    blocks: [
      { type: "h2", text: "Selecting Leaders" },
      {
        type: "p",
        text: "Leaders are chosen by current leaders and must be approved by the club teacher. Before being officially approved, candidates must accept the responsibilities outlined below.",
      },
      {
        type: "p",
        text: [
          { text: "A few rules for the selection process:", bold: true },
        ],
      },
      {
        type: "list",
        items: [
          "Leaders should only be added at the start of a semester (fall or spring).",
          "Do not let personal friendships influence your decision. This can be difficult, but you must prioritize qualifications over closeness.",
          "Do not use an application form. Let people's actions speak for themselves — past attendance and contributions to projects are their resume.",
          "If someone asks how to become a leader, be honest and transparent about what you're looking for and how decisions are made (as outlined here).",
        ],
      },
      { type: "h2", text: "Leader Balance" },
      {
        type: "p",
        text: [
          "There should be ",
          { text: "2–4 leaders", bold: true },
          " at all times. When selecting leaders, aim for the following balance:",
        ],
      },
      { type: "h3", text: "Grade mix" },
      {
        type: "list",
        items: [
          "There should be a mix of grades in leadership at all times.",
          "No more than 3 leaders from the same grade.",
          "At least 1 leader must be a sophomore or junior.",
        ],
      },
      { type: "h3", text: "Gender representation" },
      {
        type: "list",
        items: [
          "At least 1 leader should identify as female or non-binary, whenever possible.",
          "There should be at least 1 leader who identifies as female or non-binary.",
          "If there is literally no one who is qualified then this is not totally necessary. But that would point to a larger problem with the club. Are the current leaders not encouraging all genders to participate, learn, and advance equally? To begin to remedy this actively try to recruit not guy members. Maybe having a female/non-binary leader would make not-guys more comfortable joining the club..?! So basically there should be a non-binary or female leader at all times if at all possible.",
        ],
      },
      { type: "h3", text: "Role coverage" },
      {
        type: "p",
        text: "Leadership as a whole should cover these four areas. Not every leader needs to cover all of them, but the team collectively should:",
      },
      {
        type: "list",
        items: [
          [
            { text: "Technical depth", bold: true },
            " — Able to design a new complex device or figure out how to adapt a difficult toy with minimal outside help.",
          ],
          [
            { text: "Organization", bold: true },
            " — Comfortable with emails, finances, grant applications, ordering supplies on time, Google Suite, and making posters.",
          ],
          [
            { text: "Outreach & warmth", bold: true },
            " — Outgoing, charismatic, and good at making people feel welcome. Critical for club fairs, onboarding new members, and ensuring ATC remains inclusive and approachable.",
          ],
        ],
      },
      {
        type: "p",
        text: "Everyone will pitch in on everything — especially organizational tasks — but each area should have at least one person who is very adept in it.",
      },
      { type: "h2", text: "Minimum Qualifications" },
      { type: "p", text: "A leader candidate must:" },
      {
        type: "list",
        items: [
          [{ text: "Not be a freshman.", bold: true }],
          "Feel comfortable teaching someone else to adapt toys.",
          [
            "Meet ",
            { text: "at least one", bold: true },
            " of the following tracks:",
          ],
        ],
      },
      { type: "h3", text: "Track A — Consistent long-term participation" },
      {
        type: "list",
        items: [
          "Attended nearly all meetings (at least an hour each) for at least one year, and",
          "Can adapt toys well and with reasonable speed, and",
          "Deeply understands toy adaptation in principle — could work through an unfamiliar toy without help.",
        ],
      },
      { type: "h3", text: "Track B — High-impact participation" },
      {
        type: "list",
        items: [
          "Attended the majority of meetings and put in meaningful time outside of club hours, and",
          "Is very skilled at adapting toys, and",
          "Has led or played an integral role in a successful advanced project.",
        ],
      },
      { type: "h2", text: "Leader Responsibilities" },
      {
        type: "p",
        text: "Before being officially selected, candidates should pledge to the following:",
      },
      {
        type: "def",
        term: "Attendance",
        text: "Show up to every meeting possible. In practice, this means missing at most four Monday meetings per year, except under unusual circumstances.",
      },
      {
        type: "def",
        term: "Outside work",
        text: "Be willing and excited to do an average of about one hour of ATC-related work per week outside of meetings. This might include grant applications, emails, advanced project work, meeting planning, Amazon research, purchasing supplies, or communicating with other leaders and contacts.",
      },
      {
        type: "p",
        text: "This workload will often be uneven — some weeks there's nothing, other weeks might mean three hours on a grant application or prepping for the club fair. That's normal and expected.",
      },
      {
        type: "def",
        term: "Communication",
        text: "Be reliable and responsive. Reply to messages from other leaders within a day, barring unusual circumstances. Get work done on time, and speak up early if you need help.",
      },
      {
        type: "def",
        term: "Sharing the unglamorous work",
        text: "Some tasks aren't fun. Someone still has to do them — and that someone is almost always a leader. Whether it's taking attendance, running the club fair table, filling out grant paperwork, or placing Amazon orders, less enjoyable tasks should be divided fairly. Every leader will end up doing some things they don't love, and accepting that is part of the role.",
      },
    ],
  },
  {
    slug: "leader-roles",
    emoji: "🏷️",
    label: "Leader Roles",
    title: "Leader Roles",
    blocks: [
      { type: "h2", text: "Leadership Mindsets" },
      {
        type: "p",
        text: "These aren't tasks – rather attitudes every leader should carry into every meeting.",
      },
      {
        type: "def",
        term: "Be a Welcomer",
        text: "Actively greet and spend time with every new member. During meetings, don't cluster with close friends — distribute your attention, especially toward newer or less-connected members.",
      },
      {
        type: "def",
        term: "Think Big-Picture",
        text: "Keep the club's broader timeline in mind at all times. Anticipate events and projects far enough ahead to act on them — for example, knowing a PPP Day is a month out so a sign-up form goes out with enough lead time.",
      },
      {
        type: "def",
        term: "Hold the Standard",
        text: "Address disrespectful behavior directly when you see it — whether that's not cleaning up, leaving PPP Days early without permission, or unkind words. Leaders set the tone.",
      },
      { type: "h2", text: "Individual Roles" },
      {
        type: "p",
        text: "Each role below is owned by one leader. Everyone helps, but one person is responsible.",
      },
      { type: "h3", text: "Major" },
      {
        type: "def",
        term: "Leader of Delegation",
        text: "Has a larger vote in leadership conflicts. Keeps other leaders accountable for fulfilling their roles and steps in when something is falling through the cracks.",
      },
      {
        type: "def",
        term: "Project Coordinator",
        text: "Works directly with project leads — providing technical support and keeping projects moving on a timeline.",
      },
      {
        type: "def",
        term: "Technician (can be shared by two leaders)",
        text: "Repairs broken toys and malfunctioning equipment on an ongoing basis.",
      },
      {
        type: "def",
        term: "Principal Outreach Coordinator",
        text: "Coordinates with teachers and occupational therapists to determine where adapted toys are needed. Plans connection events between ATC and local programs, ensures toys reach their destinations, and maintains relationships with partner organizations.",
      },
      {
        type: "def",
        term: "Financial Captain",
        text: "Handles all ordering and tracks spending. Monitors fund levels, coordinates grant applications when funds run low, and stays ahead of when new supplies need to be purchased.",
      },
      { type: "h3", text: "Supporting" },
      {
        type: "def",
        term: "Secretary",
        text: "Sends meeting emails and manages forms for events like PPP Day.",
      },
      {
        type: "def",
        term: "Visual Lead",
        text: "Makes club posters, meeting slideshows, and manages social media.",
      },
      { type: "h2", text: "All-Leader Roles" },
      {
        type: "p",
        text: "Every leader shares ownership of these. No one person is solely responsible, but no one gets to ignore them either.",
      },
      { type: "h3", text: "Major" },
      {
        type: "def",
        term: "Adapting Teacher",
        text: "Teaches and assists with toy adaptation during meetings. Regularly checks in with members to catch issues early and keep broken toys to a minimum.",
      },
      {
        type: "def",
        term: "Application Writer",
        text: "Writes grant applications and any other external submissions — for example, OpenSauce.",
      },
      {
        type: "def",
        term: "Presenter",
        text: "Leads full-group presentations at club meetings and contributes to slideshow content.",
      },
      { type: "h3", text: "Supporting" },
      {
        type: "def",
        term: "Clean-Up Captain (possibly rotates weekly)",
        text: "Ensures the electronics room is left in good condition. Reminds members to clean up before leaving and keeps the club's area organized.",
      },
      {
        type: "def",
        term: "Delivery Assistant",
        text: "Helps transport and deliver adapted toys and materials to partner destinations.",
      },
    ],
  },
  {
    slug: "tools",
    emoji: "⚒️",
    label: "Tool List",
    title: "Tools & Materials",
    blocks: [
      { type: "h2", text: "Core Toolkit" },
      {
        type: "def",
        term: [
          { text: "Flush Cutters", bold: true, href: kitLinks.flushCutters },
        ],
        text: "Used to trim wire leads cleanly and cut zip ties or excess wire. The flush cut leaves a flat edge, which matters when working in tight spaces inside toys.",
      },
      {
        type: "def",
        term: [
          { text: "Soldering Iron", bold: true, href: kitLinks.solderingIron },
        ],
        text: "The primary tool for toy adaptation — used to make and break electrical connections. A temperature-controlled iron is strongly preferred. Many of the accessories listed below (flux, steel wool, solder sucker, etc.) can be purchased together as a kit, which is usually more economical than buying individually.",
      },
      {
        type: "list",
        items: [
          [
            { text: "Solder", bold: true, href: kitLinks.solder },
            " — The filler metal that forms the electrical joint. Use rosin-core solder for electronics work. Lead-free solder is required for toys, since adapted toys go to children and maintaining a safe club space is vital.",
          ],
          [
            { text: "Flux/Soldering Paste", bold: true, href: kitLinks.flux },
            " — Applied before soldering to clean the joint surface and help solder flow evenly. Especially useful on older or oxidized contacts.",
          ],
          [
            { text: "Steel Wool", bold: true, href: kitLinks.steelWool },
            " — Used to clean the soldering iron tip between joints. Fine-grade (0000) works best.",
          ],
          [
            {
              text: "Solder Sucker (Desoldering Pump)",
              bold: true,
              href: kitLinks.solderSucker,
            },
            " — Removes solder from a joint when desoldering a connection. Useful when correcting mistakes or salvaging components.",
          ],
        ],
      },
      {
        type: "def",
        term: [
          {
            text: "Solid Core Wire",
            bold: true,
            href: kitLinks.solidCoreWire,
          },
        ],
        text: "Used to make new connections between a toy's motor switch and the added jack. Solid core is easier to work with for most people; stranded wire is a fine alternative for those who prefer it.",
      },
      {
        type: "def",
        term: "3.5mm Female Jacks",
        text: "The standard jack used in adapted toys — allows external switches to control the toy. Two types are available:",
      },
      {
        type: "list",
        items: [
          [
            { text: "Wired jacks", bold: true, href: kitLinks.wiredJacks },
            " — Come pre-attached to a short wire harness, which you then solder to the toy's circuit. Easier to work with in soft-shell toys (e.g. stuffed animals). Generally recommended for beginners.",
          ],
          [
            {
              text: "Screw-terminal jacks",
              bold: true,
              href: kitLinks.screwJacks,
            },
            " — Just the jack itself; you solder wires directly to it. A better fit for hard-shell toys where the jack can be mounted cleanly into the housing.",
          ],
        ],
      },
      { type: "h2", text: "Optional / Situational" },
      {
        type: "def",
        term: [
          { text: "Wire Strippers", bold: true, href: kitLinks.wireStrippers },
        ],
        text: "Removes insulation from wire ends before soldering. Flush cutters can do this job in a pinch, so wire strippers aren't strictly necessary — but they're faster and cleaner when available.",
      },
      {
        type: "def",
        term: [
          {
            text: "Heat Shrink Tubing",
            bold: true,
            href: kitLinks.heatShrink,
          },
        ],
        text: "Slipped over a solder joint and shrunk with heat to insulate and protect it. Electrical tape works as a substitute and is more forgiving for beginners.",
      },
      {
        type: "def",
        term: "Heat Gun / Lighter",
        text: "Required if you're using heat shrink tubing. A heat gun gives more control; a lighter works fine in a pinch.",
      },
      {
        type: "def",
        term: [{ text: "Superglue", bold: true, href: kitLinks.superglue }],
        text: "Occasionally useful for reattaching plastic housing or securing components that have come loose inside a toy.",
      },
      { type: "h2", text: "Testing" },
      {
        type: "def",
        term: "Test Buttons",
        text: "Used to verify that a toy has been adapted correctly before it goes out. Any of the following work:",
      },
      {
        type: "list",
        items: [
          [
            { text: "3D-printed buttons", bold: true },
            " — Printable files available at ",
            { text: "adaptivetechclub.org", href: kitLinks.atcButtons },
          ],
          [
            { text: "A male 3.5mm jack", bold: true, href: kitLinks.maleJack },
            " — Bridging the two contacts will trigger the toy the same way a switch would.",
          ],
        ],
      },
      { type: "h2", text: "Other Equipment" },
      {
        type: "def",
        term: "3D Printer (Bambu, Prusa, etc.)",
        text: [
          "Used to fabricate custom adaptive switches, button housings, and other assistive components. Having access to a printer significantly expands what the club can build and is important for more advanced projects. ",
          { text: "ex", href: kitLinks.bambuEx },
        ],
      },
      {
        type: "list",
        items: [
          [
            { text: "Filament", bold: true },
            " — PLA is the standard choice for most ATC projects: easy to print, available in many colors, and rigid enough for switch housings.",
          ],
        ],
      },
    ],
  },
  {
    slug: "buying-toys",
    emoji: "🧸",
    label: "Buying Toys",
    title: "Best Toys for New Members",
    blocks: [
      { type: "h2", text: "Before You Buy Anything" },
      {
        type: "p",
        text: "Before purchasing a toy for your club, look it up online and think through the following:",
      },
      {
        type: "list",
        items: [
          "Where is the on/off switch? How does it connect to the rest of the circuit?",
          "How would you adapt it? What exactly would pressing an external button do once adapted?",
          "Will that adapted functionality actually be useful and engaging for the end user?",
        ],
      },
      {
        type: "p",
        text: "Getting into the habit of thinking this through before opening a toy saves a lot of frustration.",
      },
      { type: "h2", text: "Difficulty Guide" },
      { type: "p", text: "Toys below are tagged by difficulty:" },
      {
        type: "list",
        items: [
          [
            { text: "(a)", bold: true },
            " — Easiest. Best for a member's very first adaptation.",
          ],
          [
            { text: "(b)", bold: true },
            " — Moderate. Good for members who have completed one or two toys.",
          ],
          [
            { text: "(c)", bold: true },
            " — A step up. Still appropriate for newer members, but involves more complexity.",
          ],
        ],
      },
      { type: "p", text: "These map loosely to the theory levels below." },
      { type: "h2", text: "Theory" },
      {
        type: "def",
        term: "Level 1 — Simple on/off switch on a circuit board",
        text: "The switch is soldered directly onto the board with no intermediate wires. Easy to understand conceptually and easy to solder to. The ideal first toy.",
      },
      {
        type: "def",
        term: "Level 2 — Simple on/off switch attached to wires",
        text: "The switch connects to the board via leads rather than being soldered directly. Same basic concept as Level 1, but the wiring can make soldering slightly trickier depending on how much slack there is.",
      },
      {
        type: "def",
        term: "Level 3 — More complex switch",
        text: "May involve an extra wire to ensure that both a motor and sound activate together, or other small complications. Still a good teaching toy — the added complexity is manageable and instructive.",
      },
      { type: "h2", text: "Toy List" },
      {
        type: "def",
        term: "Two-Button Remote Control Toy (a)",
        text: [
          "Examples: ",
          { text: "car", href: kitLinks.rcCar },
          ", ",
          { text: "spider", href: kitLinks.rcSpider },
          ", ",
          { text: "mouse", href: kitLinks.rcMouse },
          " Involves unscrewing the remote housing and soldering to the circuit board. Two adaptation points (one per button), so members can adapt both and see how each maps to a function.",
        ],
      },
      {
        type: "def",
        term: "Singing/Light-Up/Moving Stuffy (a/b)",
        text: [
          "Examples: ",
          { text: "dino", href: kitLinks.stuffyDino },
          ", ",
          { text: "elmo", href: kitLinks.stuffyElmo },
          ", ",
          { text: "cactus", href: kitLinks.stuffyCactus },
          " Difficulty varies by toy. Most involve opening the stuffed animal, locating the button, and soldering to it — generally intuitive. May require a small amount of sewing or hot glue to close the toy back up neatly afterward.",
        ],
      },
      {
        type: "def",
        term: "Stuffed Animal on a Leash with Push Button (b)",
        text: [
          "Examples: ",
          { text: "horse", href: kitLinks.leashHorse },
          ", ",
          { text: "bunny", href: kitLinks.leashBunny },
          " Similar process to the singing stuffy — locate the push button, solder to it, and close the toy back up. May involve a small amount of sewing or hot glue. The external leash button is a good conversation starter for teaching members what adaptation actually does for a user.",
        ],
      },
      {
        type: "def",
        term: "Bubble Toy (b)",
        text: [
          "Examples: ",
          { text: "gun", href: kitLinks.bubbleGun },
          ", ",
          { text: "dino", href: kitLinks.bubbleDino },
          " Involves unscrewing the housing and soldering to a button with wires. Bubble toys tend to be crowd-pleasers when demonstrated — good for club fairs or PPP Day showcases.",
        ],
      },
      {
        type: "def",
        term: "Electric Gear Car Toy (c)",
        text: [
          "Examples: ",
          { text: "snail", href: kitLinks.gearSnail },
          ", ",
          { text: "car", href: kitLinks.gearCar },
          ", ",
          { text: "train", href: kitLinks.gearTrain },
          ", ",
          { text: "police", href: kitLinks.gearPolice },
          ", ",
          { text: "dino", href: kitLinks.gearDino },
          " The transparent housing makes these visually engaging and good for explaining how the toy works internally. Adaptation involves some disassembly and reassembly, and the soldering/wiring may be slightly more involved than earlier toys. A good next step once a member has a couple of simpler toys under their belt.",
        ],
      },
    ],
  },
  {
    slug: "outreach",
    emoji: "🤝",
    label: "Outreach",
    title: "Outreach",
    blocks: [
      {
        type: "def",
        term: "Your existing network",
        text: "The easiest place to begin is with people already connected to your school. Teachers, administrators, school counselors, and parents may have direct ties to special education programs, therapy practices, or disability organizations in your area. Ask around — a personal connection is almost always the warmest introduction.",
      },
      {
        type: "def",
        term: "Local organizations",
        text: "Beyond your immediate network, look for:",
      },
      {
        type: "list",
        items: [
          "Special education departments in your local school district",
          "Pediatric occupational therapy practices",
          "Children's hospitals and rehabilitation centers",
          "Disability nonprofits and community programs",
          "After-school programs serving children with disabilities",
        ],
      },
      {
        type: "p",
        text: 'A bit of research goes a long way. Search for "[your city] pediatric occupational therapy" or "[your district] special education" to find potential contacts.',
      },
      { type: "h2", text: "Making Contact" },
      {
        type: "def",
        term: "Email templates",
        text: "Cold outreach can feel daunting, but you don't have to write from scratch. ATC has pre-written email templates for introducing your club, explaining what adapted toys are, and proposing a donation or connection event. Use them as a starting point and personalize as needed.",
      },
      {
        type: "def",
        term: "Request form",
        text: "Once an organization is interested, direct them to ATC's request form — it collects the information you need to match toys to the right kids (age ranges, motor abilities, toy preferences, etc.). Having a form keeps the process organized and makes it easy to fulfill requests efficiently.",
      },
      { type: "h2", text: "Keeping It Going" },
      {
        type: "p",
        text: "Good outreach isn't a one-time ask — it's a relationship. Follow up after deliveries, check in periodically, and invite partner organizations to connection events when possible. The more they trust your club, the more consistently you'll be able to get toys where they're needed.",
      },
    ],
  },
  {
    slug: "how-to-adapt",
    emoji: "✂️",
    label: "How to Adapt",
    title: "How to Adapt a Toy",
    blocks: [
      {
        type: "p",
        text: "Toy adaptation is the process of adding a 3.5mm jack to a toy so that an external switch can control it — allowing children who can't operate a standard button to play independently. The process is mostly the same across toys, with small variations depending on the toy's internal design.",
      },
      { type: "h2", text: "Before You Start" },
      {
        type: "def",
        term: "Test the toy first.",
        text: "Always confirm the toy works before opening it. Put batteries in, turn it on, and make sure every function is working. If it's broken going in, you won't know later whether you caused the problem.",
      },
      {
        type: "def",
        term: "Think it through.",
        text: "Before picking up a screwdriver, ask yourself: Where is the switch? What will pressing an external button actually do? Is that the right function to adapt? Planning ahead saves a lot of backtracking.",
      },
      { type: "h2", text: "Step 1: Open the Toy" },
      {
        type: "p",
        text: "Remove the screws needed to access the toy's internals. Keep track of where each screw came from — toys often use different lengths in different spots.",
      },
      { type: "p", text: [{ text: "Tips:", bold: true }] },
      {
        type: "list",
        items: [
          "Don't strip the screws. Use the right screwdriver size and apply firm downward pressure while turning.",
          "Some toys have hidden screws under stickers or rubber feet. Check before forcing anything open.",
          "Set screws somewhere safe (a small cup or tray works well) so none go missing.",
        ],
      },
      { type: "h2", text: "Step 2: Find the Internal Switch" },
      {
        type: "p",
        text: "With the toy open, locate the button or switch that controls the function you want to adapt. This is what you'll be soldering to.",
      },
      {
        type: "p",
        text: [
          { text: "To confirm you've found the right spot:", bold: true },
          " Briefly bridge the two contact points on the switch with a loose wire. If the toy activates, you've found it. This is especially useful on toys with multiple switches or complex boards where it's not obvious which contact does what.",
        ],
      },
      { type: "h2", text: "Step 3: Solder the Jack" },
      {
        type: "p",
        text: "Solder the two leads of your 3.5mm jack onto the contact points of the switch.",
      },
      { type: "p", text: [{ text: "Key notes:", bold: true }] },
      {
        type: "list",
        items: [
          [
            { text: "Wire color doesn't matter", bold: true },
            " — the circuit is symmetric, so either lead can go to either contact.",
          ],
          [
            {
              text: "The original button should still work after adaptation.",
              bold: true,
            },
            " You're adding a parallel connection, not replacing the switch. Double-check this before closing the toy.",
          ],
          "Use flux on the contact points if solder isn't flowing well. Clean the iron tip with steel wool between joints.",
          "If you're using a wired jack, solder the jack's leads to the toy. If you're using a screw-terminal jack, solder wires to the jack first, then connect those wires to the toy.",
        ],
      },
      { type: "h2", text: "Step 4: Test Before Closing" },
      {
        type: "p",
        text: "Before reassembling, verify that the adaptation works. You have a few options:",
      },
      {
        type: "list",
        items: [
          [
            { text: "Pull the jack leads together by hand", bold: true },
            " — touching the two bare wire ends together should trigger the toy.",
          ],
          [
            { text: "Plug in a test button", bold: true },
            " — use a 3D-printed button or any male 3.5mm jack wired to a button to simulate a real switch press.",
          ],
          [
            { text: "Use a multimeter", bold: true },
            " — set to continuity mode, it will beep when the circuit is closed, confirming your connections are solid.",
          ],
        ],
      },
      {
        type: "p",
        text: "Also confirm the original button still works independently.",
      },
      { type: "h2", text: "Step 5: Cut an Exit Hole for the Wire" },
      {
        type: "p",
        text: "The jack's wire needs to exit the toy housing. Use wire snips (or the tip of a screw) to make a small notch or hole in the plastic shell where the wire will pass through.",
      },
      { type: "p", text: [{ text: "Tips:", bold: true }] },
      {
        type: "list",
        items: [
          "The hole should be just snug enough that the wire is slightly squeezed — this helps hold it in place and prevents the wire from being yanked and pulling the solder joints loose.",
          "Pick a spot on the edge of the toy where the hole won't be visible or interfere with reassembly.",
          "Smooth any sharp plastic edges that could cut into the wire over time.",
        ],
      },
      { type: "h2", text: "Step 6: Reassemble" },
      {
        type: "p",
        text: "Put the toy back together, routing the jack wire through the hole you made. Screw the housing closed, making sure no wires are pinched.",
      },
      {
        type: "p",
        text: "Do a final test with a button once the toy is fully assembled. If it works — you're done!",
      },
      { type: "h2", text: "Troubleshooting" },
      {
        type: "def",
        term: "The toy doesn't activate when I bridge the contacts.",
        text: "You may have the wrong contacts. Try other nearby points, or look more carefully at the PCB traces leading to the button.",
      },
      {
        type: "def",
        term: "The original button stopped working.",
        text: "Your solder joints may be bridging contacts they shouldn't be. Check for solder bridges and clean them up with a solder sucker.",
      },
      {
        type: "def",
        term: "The jack works sometimes but not reliably.",
        text: "A cold solder joint is the most likely cause — reheat and reflow the joint until it's shiny and well-formed.",
      },
      {
        type: "def",
        term: "The wire keeps pulling out of the hole.",
        text: "The exit hole may be too large. Add glue or strain relief",
      },
    ],
  },
  {
    slug: "how-to-repair",
    emoji: "🪛",
    label: "How to Repair",
    title: "How to Repair",
    placeholder: true,
    blocks: [
      {
        type: "p",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "p",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "list",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        ],
      },
    ],
  },
  {
    slug: "quality-control",
    emoji: "🔎",
    label: "Quality Control",
    title: "Quality Control",
    placeholder: true,
    blocks: [
      {
        type: "p",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "p",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "list",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        ],
      },
    ],
  },
  {
    slug: "how-to-organize",
    emoji: "🗄️",
    label: "How to Organize",
    title: "How to Organize",
    placeholder: true,
    blocks: [
      {
        type: "p",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        type: "p",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "list",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        ],
      },
    ],
  },
];
