/**
 * Campus location data for P.D.A. College of Engineering, Kalaburagi (PDACEK).
 * Block/floor/room details are representative for navigation demo—verify on campus.
 */
const campusData = {
  college: {
    name: "P.D.A. College of Engineering",
    shortName: "PDACEK",
    address: "Gulbarga (Kalaburagi), Karnataka — 71-acre campus",
    established: 1958,
    website: "https://pdacek.ac.in",
    society: "Hyderabad Karnataka Education (HKE) Society",
    mapCoords: { lat: 17.3297, lng: 76.8343 },
  },

  /** Base path for building photos (see assets/img/buildings/PHOTOS.md) */
  buildingPhotosPath: "assets/img/buildings",
  placeholderImage: "assets/img/buildings/placeholder.svg",

  blocks: [
    { id: "block-a", name: "Administrative Block", description: "Main entrance, principal office, exam section, accounts.", svgRegionId: "region-admin", imageKey: "admin" },
    { id: "block-b", name: "Civil Engineering Block", description: "Civil department offices and laboratories.", svgRegionId: "region-civil", imageKey: "civil" },
    { id: "block-c", name: "Mechanical & Automobile Block", description: "Mechanical workshops, CAD/CAM, automobile labs.", svgRegionId: "region-mech", imageKey: "mech" },
    { id: "block-d", name: "Electronics & Communication Block", description: "ECE labs, communication and VLSI facilities.", svgRegionId: "region-ece", imageKey: "ece" },
    { id: "block-e", name: "Electrical & Electronics Block", description: "EEE machines lab, power electronics.", svgRegionId: "region-eee", imageKey: "eee" },
    { id: "block-f", name: "Computer Science Block", description: "CSE/CSD labs, programming and network labs.", svgRegionId: "region-cse", imageKey: "cse" },
    { id: "block-g", name: "Information Science Block", description: "ISE and AIML programs, software labs.", svgRegionId: "region-ise", imageKey: "ise" },
    { id: "block-h", name: "Instrumentation Block", description: "EIE process control and DSP labs.", svgRegionId: "region-eie", imageKey: "eie" },
    { id: "block-i", name: "Ceramic & Cement Technology Block", description: "CCT refractory and materials labs.", svgRegionId: "region-cct", imageKey: "cct" },
    { id: "block-j", name: "Industrial & Production Block", description: "IPE manufacturing and industrial engineering labs.", svgRegionId: "region-ipe", imageKey: "ipe" },
    { id: "block-k", name: "Basic Sciences Block", description: "Physics, Chemistry, Mathematics departments.", svgRegionId: "region-science", imageKey: "science" },
    { id: "block-l", name: "First Year Block", description: "Common first-year classrooms and tutorial halls.", svgRegionId: "region-fy", imageKey: "fy" },
    { id: "block-m", name: "Central Library", description: "Multi-storey library with reading halls.", svgRegionId: "region-library", imageKey: "library" },
    { id: "block-n", name: "Student Services Zone", description: "Canteen, bank, sports, SAC, stationary.", svgRegionId: "region-services", imageKey: "canteen" },
  ],

  departments: [
    {
      id: "civil",
      name: "Civil Engineering",
      blockId: "block-b",
      floor: "Ground & 1st Floor",
      hod: "Department Office — Ground Floor",
      directions: "From main gate, walk straight past admin block. Civil block is on the left with structural lab signage.",
      keywords: ["civil", "structure", "concrete"],
      classrooms: ["CE-101", "CE-102", "CE-Seminar"],
      labs: ["Structural Lab", "Material Testing Lab", "Soil Testing Lab", "Environmental Lab"],
    },
    {
      id: "mech",
      name: "Mechanical & Automobile Engineering",
      blockId: "block-c",
      floor: "Ground to 2nd Floor",
      hod: "Department Office — 1st Floor",
      directions: "From admin block, turn right toward workshop area. Follow signs for Mechanical & Automobile.",
      keywords: ["mechanical", "automobile", "workshop", "cad"],
      classrooms: ["ME-201", "ME-202", "AUTO-101"],
      labs: ["CAD/CAM Lab", "IC Engines Lab", "Machine Shop", "Automobile Servicing Lab"],
    },
    {
      id: "ece",
      name: "Electronics & Communication Engineering",
      blockId: "block-d",
      floor: "1st & 2nd Floor",
      hod: "Department Office — 1st Floor",
      directions: "Continue north from central pathway; ECE block has antenna tower display near entrance.",
      keywords: ["ece", "electronics", "communication", "vlsi"],
      classrooms: ["EC-301", "EC-302", "EC-Seminar Hall"],
      labs: ["Analog Circuit Lab", "Digital Circuit Lab", "Advanced Communication Lab", "VHDL & VLSI Lab"],
    },
    {
      id: "eee",
      name: "Electrical & Electronics Engineering",
      blockId: "block-e",
      floor: "Ground & 1st Floor",
      hod: "Department Office — Ground Floor",
      directions: "Adjacent to ECE block on the west side. Look for high-voltage lab warning boards.",
      keywords: ["eee", "electrical", "power"],
      classrooms: ["EE-201", "EE-202"],
      labs: ["Electrical Machines Lab", "High Voltage Lab", "Power Electronics Lab"],
    },
    {
      id: "cse",
      name: "Computer Science & Engineering",
      blockId: "block-f",
      floor: "1st to 3rd Floor",
      hod: "Department Office — 2nd Floor",
      directions: "From library junction, CSE block is the modern building with computer lab icons on facade.",
      keywords: ["cse", "computer", "programming", "csd"],
      classrooms: ["CS-401", "CS-402", "CS-403", "CSD Lab Hall"],
      labs: ["Programming Lab", "DBMS Lab", "Network Lab", "Hardware Lab"],
    },
    {
      id: "ise",
      name: "Information Science & Engineering",
      blockId: "block-g",
      floor: "1st & 2nd Floor",
      hod: "Department Office — 1st Floor",
      directions: "North-east of CSE block; shared pathway with AIML program signage.",
      keywords: ["ise", "information science", "aiml", "software"],
      classrooms: ["IS-301", "IS-302"],
      labs: ["Software Development Lab", "Multimedia & Network Lab", "AIML Lab"],
    },
    {
      id: "eie",
      name: "Electronics & Instrumentation Engineering",
      blockId: "block-h",
      floor: "Ground & 1st Floor",
      hod: "Department Office — Ground Floor",
      directions: "Near instrumentation gardens; follow EIE department boards from ECE block.",
      keywords: ["eie", "instrumentation", "control"],
      classrooms: ["EI-201", "EI-202"],
      labs: ["Process Control Lab", "Microprocessor Lab", "DSP Lab"],
    },
    {
      id: "cct",
      name: "Ceramic & Cement Technology",
      blockId: "block-i",
      floor: "Ground & 1st Floor",
      hod: "Department Office — Ground Floor",
      directions: "South campus wing; look for materials and kiln lab indicators.",
      keywords: ["cct", "ceramic", "cement"],
      classrooms: ["CCT-101", "CCT-102"],
      labs: ["Refractory Lab", "Glass Lab", "Materials Lab"],
    },
    {
      id: "ipe",
      name: "Industrial & Production Engineering",
      blockId: "block-j",
      floor: "1st & 2nd Floor",
      hod: "Department Office — 1st Floor",
      directions: "Between Mechanical and Basic Sciences blocks; follow IPE industrial engineering signs.",
      keywords: ["ipe", "industrial", "production"],
      classrooms: ["IP-301", "IP-302"],
      labs: ["Industrial Engineering Lab", "Advanced Manufacturing Lab"],
    },
    {
      id: "science",
      name: "Basic Sciences",
      blockId: "block-k",
      floor: "Ground & 1st Floor",
      hod: "Coordinators — Physics, Chemistry, Mathematics",
      directions: "Central academic zone near first-year block; shared lecture halls for science courses.",
      keywords: ["physics", "chemistry", "math", "basic science"],
      classrooms: ["BS-101", "BS-102", "BS-Lecture Hall"],
      labs: ["Physics Lab", "Chemistry Lab"],
    },
    {
      id: "fy",
      name: "First Year Engineering",
      blockId: "block-l",
      floor: "Ground to 2nd Floor",
      hod: "First Year Coordinator Office — 1st Floor",
      directions: "Close to main gate on east side; large FY block with tutorial room numbers 1–20.",
      keywords: ["first year", "fy", "freshers"],
      classrooms: ["FY-101", "FY-102", "FY-103", "FY-Tutorial-1"],
      labs: ["Engineering Workshop", "Basic Programming Lab"],
    },
  ],

  classrooms: [
    { id: "ce-101", name: "CE-101 Lecture Hall", deptId: "civil", blockId: "block-b", floor: "Ground Floor", room: "101", directions: "Enter Civil block, first classroom on right corridor." },
    { id: "me-201", name: "ME-201 Classroom", deptId: "mech", blockId: "block-c", floor: "2nd Floor", room: "201", directions: "Stairs to 2nd floor, second door on left." },
    { id: "ec-301", name: "EC-301 Classroom", deptId: "ece", blockId: "block-d", floor: "3rd Floor", room: "301", directions: "ECE block lift/stairs to 3rd floor, room 301." },
    { id: "cs-401", name: "CS-401 Classroom", deptId: "cse", blockId: "block-f", floor: "4th Floor", room: "401", directions: "CSE block, top floor west wing." },
    { id: "cs-prog-lab", name: "CSE Programming Lab", deptId: "cse", blockId: "block-f", floor: "2nd Floor", room: "Lab-2", directions: "CSE block 2nd floor, follow Programming Lab signs." },
    { id: "is-301", name: "IS-301 Classroom", deptId: "ise", blockId: "block-g", floor: "3rd Floor", room: "301", directions: "ISE block stairs to 3rd floor." },
    { id: "fy-101", name: "FY-101 Classroom", deptId: "fy", blockId: "block-l", floor: "Ground Floor", room: "101", directions: "First Year block ground floor, main corridor." },
    { id: "fy-tutorial-1", name: "FY Tutorial Room 1", deptId: "fy", blockId: "block-l", floor: "1st Floor", room: "T-1", directions: "First Year block, 1st floor tutorial wing." },
    { id: "ee-201", name: "EE-201 Classroom", deptId: "eee", blockId: "block-e", floor: "2nd Floor", room: "201", directions: "EEE block, 2nd floor central corridor." },
    { id: "ec-seminar", name: "ECE Seminar Hall", deptId: "ece", blockId: "block-d", floor: "1st Floor", room: "Seminar", directions: "ECE block ground/1st floor seminar hall near auditorium link." },
  ],

  facilities: [
    {
      id: "library",
      name: "Central Library",
      category: "Academic",
      blockId: "block-m",
      floor: "Ground to 3rd Floor",
      hours: "Mon–Sat: 8:00 AM – 8:00 PM",
      directions: "From main gate, walk straight; library is the large building with clock tower near academic core.",
      keywords: ["library", "books", "reading"],
      description: "70,000+ books, journals, digital resources, and reading halls.",
    },
    {
      id: "canteen",
      name: "College Canteen",
      category: "Food",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Mon–Sat: 7:30 AM – 6:00 PM",
      directions: "Student Services Zone, south of first-year block. Follow food court signs.",
      keywords: ["canteen", "food", "lunch"],
      description: "Vegetarian and snack counters for students and staff.",
    },
    {
      id: "auditorium",
      name: "Auditorium",
      category: "Events",
      blockId: "block-n",
      floor: "1st Floor",
      hours: "During scheduled events",
      directions: "Near admin block extension; main cultural and seminar venue.",
      keywords: ["auditorium", "events", "seminar"],
      description: "College events, guest lectures, and annual functions.",
    },
    {
      id: "sac",
      name: "Student Activity Centre (SAC)",
      category: "Student Life",
      blockId: "block-n",
      floor: "Ground & 1st Floor",
      hours: "Mon–Sat: 9:00 AM – 5:00 PM",
      directions: "Student Services Zone, next to sports ground entrance.",
      keywords: ["sac", "activities", "clubs"],
      description: "Student clubs, meetings, and co-curricular activities.",
    },
    {
      id: "medical",
      name: "Medical / Health Centre",
      category: "Health",
      blockId: "block-a",
      floor: "Ground Floor",
      hours: "Mon–Sat: 9:00 AM – 4:00 PM",
      directions: "Administrative block, ground floor near main reception.",
      keywords: ["medical", "health", "clinic"],
      description: "First aid and basic medical support for students and staff.",
    },
    {
      id: "sports",
      name: "Sports Ground & Indoor Stadium",
      category: "Sports",
      blockId: "block-n",
      floor: "Outdoor / Ground Floor",
      hours: "Mon–Sat: 6:00 AM – 6:00 PM",
      directions: "Behind Student Services Zone; follow sports pavilion boards.",
      keywords: ["sports", "ground", "gym", "stadium"],
      description: "Playground, indoor stadium, and gymnasium facilities.",
    },
    {
      id: "bank",
      name: "Campus Bank",
      category: "Services",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Banking hours (Mon–Fri)",
      directions: "Student Services Zone, near canteen and stationary shop.",
      keywords: ["bank", "atm"],
      description: "Banking services for students and staff on campus.",
    },
    {
      id: "stationary",
      name: "Stationary & Printing",
      category: "Services",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Mon–Sat: 8:00 AM – 5:00 PM",
      directions: "Student Services Zone, adjacent to post office lane.",
      keywords: ["stationary", "xerox", "printing"],
      description: "Notebooks, printing, and reprographic services.",
    },
    {
      id: "post-office",
      name: "Post Office",
      category: "Services",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Government postal hours",
      directions: "Student Services Zone, near stationary shop.",
      keywords: ["post", "mail"],
      description: "Postal services on campus.",
    },
    {
      id: "tpo",
      name: "Training & Placement Office (TPO)",
      category: "Academic",
      blockId: "block-f",
      floor: "Ground Floor",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      directions: "CSE block ground floor wing; also listed under Skill Labs on campus tour.",
      keywords: ["placement", "tpo", "career"],
      description: "Campus recruitment, internships, and career guidance.",
    },
    {
      id: "skill-labs",
      name: "Skill Labs / IDEA Lab",
      category: "Academic",
      blockId: "block-f",
      floor: "1st Floor",
      hours: "During lab sessions",
      directions: "CSE block 1st floor; AICTE IDEA Lab and skill development workshops.",
      keywords: ["skill", "idea lab", "workshop"],
      description: "Hands-on skill development and innovation lab.",
    },
    {
      id: "admin",
      name: "Principal & Admin Office",
      category: "Administration",
      blockId: "block-a",
      floor: "1st & 2nd Floor",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      directions: "Main administrative block directly inside main gate.",
      keywords: ["admin", "principal", "office"],
      description: "Principal office, exam section, and college administration.",
    },
  ],
};

/** Get block by id */
function getBlock(blockId) {
  return campusData.blocks.find((b) => b.id === blockId);
}

/** Get department by id */
function getDepartment(id) {
  return campusData.departments.find((d) => d.id === id);
}

/** Get facility by id */
function getFacility(id) {
  return campusData.facilities.find((f) => f.id === id);
}

/** Get classroom by id */
function getClassroom(id) {
  return campusData.classrooms.find((c) => c.id === id);
}

/** Photo filename key for a department, facility, or block */
function getImageKey(type, id, blockId, deptId) {
  if (type === "department") return id;
  if (type === "facility") return id;
  if (type === "classroom" && deptId) return deptId;
  const block = getBlock(blockId);
  return block?.imageKey || id;
}

/** Full image URL for search results and detail pages */
function getLocationImageUrl(type, id, blockId, deptId) {
  const base = campusData.buildingPhotosPath;
  const key = getImageKey(type, id, blockId, deptId);
  return `${base}/${key}.jpg`;
}

function getPlaceholderImageUrl() {
  return campusData.placeholderImage;
}

/** All searchable items with type */
function getAllSearchableItems() {
  const items = [];
  campusData.departments.forEach((d) => {
    items.push({
      type: "department",
      id: d.id,
      name: d.name,
      blockId: d.blockId,
      floor: d.floor,
      directions: d.directions,
      keywords: d.keywords || [],
      imageUrl: getLocationImageUrl("department", d.id, d.blockId),
      url: `department.html?id=${d.id}`,
    });
  });
  campusData.classrooms.forEach((c) => {
    const dept = getDepartment(c.deptId);
    items.push({
      type: "classroom",
      id: c.id,
      name: c.name,
      blockId: c.blockId,
      deptId: c.deptId,
      floor: c.floor,
      directions: c.directions,
      keywords: [dept?.name || "", c.room],
      imageUrl: getLocationImageUrl("classroom", c.id, c.blockId, c.deptId),
      url: `search.html?q=${encodeURIComponent(c.name)}`,
    });
  });
  campusData.facilities.forEach((f) => {
    items.push({
      type: "facility",
      id: f.id,
      name: f.name,
      blockId: f.blockId,
      floor: f.floor,
      directions: f.directions,
      keywords: f.keywords || [],
      imageUrl: getLocationImageUrl("facility", f.id, f.blockId),
      url: `facilities.html?id=${f.id}`,
    });
  });
  return items;
}

/** Image URL for department or facility record */
function getRecordImageUrl(record, type) {
  if (record.image) return record.image;
  if (type === "department") return getLocationImageUrl("department", record.id, record.blockId);
  if (type === "facility") return getLocationImageUrl("facility", record.id, record.blockId);
  if (type === "block") {
    const key = record.imageKey || record.id;
    return `${campusData.buildingPhotosPath}/${key}.jpg`;
  }
  return getPlaceholderImageUrl();
}

/** Items in a block */
function getItemsInBlock(blockId) {
  const depts = campusData.departments.filter((d) => d.blockId === blockId);
  const facs = campusData.facilities.filter((f) => f.blockId === blockId);
  const rooms = campusData.classrooms.filter((c) => c.blockId === blockId);
  return { departments: depts, facilities: facs, classrooms: rooms };
}
