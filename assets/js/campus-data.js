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
    founder: "Late Shri Mahadevappa Rampure",
    mapCoords: { lat: 17.3297, lng: 76.8343 },
    history: "Founded in 1958 by the HKE Society under the leadership of Late Shri Mahadevappa Rampure. It is the first institution of the HKE Society and became autonomous in the academic year 2007-08.",
    vision: "To be an institute of excellence in technical education and research that serves the needs of industry and society.",
    mission: [
      "To provide a high-quality educational experience for students with values and ethics that enables them to become leaders in their chosen professions.",
      "To explore, create, and develop innovations in engineering and science through research and development activities."
    ],
    achievements: [
      "First college in Karnataka to offer Electronics and Communication Engineering (ECE) in 1967.",
      "First college in South India to start Ceramic and Cement Technology (CCT) course in 1982."
    ]
  },

  /** Base path for building photos (see assets/img/buildings/PHOTOS.md) */
  buildingPhotosPath: "assets/img/buildings",
  placeholderImage: "assets/img/buildings/placeholder.svg",

  blocks: [
    { id: "block-a", name: "Administrative Block", description: "Main entrance, principal office, exam section, accounts.", svgRegionId: "region-admin", imageKey: "admin", photo: "admin-tower.jpg" },
    { id: "block-b", name: "Civil Engineering Block", description: "Civil department offices and laboratories.", svgRegionId: "region-civil", imageKey: "civil", photo: "civil-dept.jpg" },
    { id: "block-c", name: "Mechanical & Automobile Block", description: "Mechanical workshops, CAD/CAM labs, Automobile Engineering.", svgRegionId: "region-mech", imageKey: "mech", photo: "mechanical-dept.jpg" },

    { id: "block-d", name: "Electronics & Communication Block", description: "ECE labs, communication and VLSI facilities.", svgRegionId: "region-ece", imageKey: "ece", photo: "ece-dept.jpg" },
    { id: "block-e", name: "Electrical & Electronics Block", description: "EEE machines lab, power electronics.", svgRegionId: "region-eee", imageKey: "eee", photo: "eee-dept.jpg" },
    { id: "block-f", name: "Computer Science Block", description: "CSE/CSD labs, programming and network labs.", svgRegionId: "region-cse", imageKey: "cse", photo: "cse-dept.jpg" },
    { id: "block-g", name: "Information Science Block", description: "ISE and AIML programs, software labs.", svgRegionId: "region-ise", imageKey: "ise", photo: "ise-dept.jpg" },
    { id: "block-i", name: "Ceramic & Cement Technology Block", description: "CCT refractory and materials labs.", svgRegionId: "region-cct", imageKey: "cct", photo: "cct-department.jpg" },
    { id: "block-k", name: "Basic Sciences Block", description: "Physics, Chemistry, Mathematics departments.", svgRegionId: "region-science", imageKey: "science", photo: "chemistry-dept.jpg" },
    { id: "block-l", name: "First Year Block", description: "Common first-year classrooms and tutorial halls.", svgRegionId: "region-fy", imageKey: "fy", photo: "1st-yearblock.jpg" },
    { id: "block-p", name: "School of Architecture", description: "P.D. Salgar School of Architecture (PDSSSA). Design studios, architecture department offices, and classrooms.", svgRegionId: "region-arch", imageKey: "arch", photo: "architecture-dept.jpg" },
    { id: "block-m", name: "Central Library", description: "Multi-storey library with reading halls.", svgRegionId: "region-library", imageKey: "library", photo: "library.jpg" },
    { id: "block-n", name: "Student Services Zone", description: "Canteen, bank, cooperative store, 1000-capacity auditorium, first aid & medical facilities.", svgRegionId: "region-services", imageKey: "canteen", photo: "canteen.jpg" },
    { id: "block-o", name: "Student Hostel Block", description: "Residential hostel facilities for campus students.", svgRegionId: "region-hostel", imageKey: "hostel", photo: "hostel.jpg" },
    { id: "block-gate", name: "Main Gate", description: "Main entrance to the PDACEK campus. Security cabin, visitor registration, and start of the central road leading to all blocks.", svgRegionId: "region-gate", imageKey: "gate", photo: "main-gate.jpg" },
  ],

  departments: [
    {
      id: "civil",
      name: "Civil Engineering",
      blockId: "block-b",
      floor: "Ground & 1st Floor",
      hod: "Dr. Rajendrakumar Harsoor — Professor & HOD",
      photo: "civil-dept.jpg",
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
      photo: "mechanical-dept.jpg",
      directions: "From admin block, turn right toward workshop area. Follow signs for Mechanical & Automobile.",
      keywords: ["mechanical", "automobile", "workshop", "cad"],
      classrooms: ["ME-201", "ME-202", "AUTO-101"],
      labs: ["CAD/CAM Lab", "IC Engines Lab", "Machine Shop", "Automobile Servicing Lab"],
    },
    {
      id: "auto",
      name: "Automobile Engineering",
      blockId: "block-c",
      floor: "Ground Floor",
      hod: "Department Office — Ground Floor",
      photo: "mechanical-dept.jpg",
      directions: "Inside the Mechanical & Automobile block. Follow Automobile Engineering signs from the workshop entrance.",
      keywords: ["automobile", "auto", "vehicle", "automotive"],
      classrooms: ["AUTO-101", "AUTO-102"],
      labs: ["Automobile Servicing Lab", "Engine Testing Lab"],
    },

    {
      id: "ece",
      name: "Electronics & Communication Engineering",
      blockId: "block-d",
      floor: "1st & 2nd Floor",
      hod: "Dr. Vinayadatt V. Kohir — Professor & HOD",
      photo: "ece-dept.jpg",
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
      hod: "Dr. Sangamesh G Sakri — Assoc. Prof & HOD",
      photo: "eee-dept.jpg",
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
      hod: "Dr. Sujata Terdal — Professor & HOD",
      photo: "cse-dept.jpg",
      directions: "From library junction, CSE block is the modern building with computer lab icons on facade.",
      keywords: ["cse", "computer", "programming", "csd"],
      classrooms: ["CS-101", "CS-102", "CS-201", "CS-401", "CS-402", "CS-403", "CSD Lab Hall"],
      labs: ["Programming Lab", "DBMS Lab", "Network Lab", "Hardware Lab"],
    },
    {
      id: "ise",
      name: "Information Science & Engineering",
      blockId: "block-g",
      floor: "1st & 2nd Floor",
      hod: "Department Office — 1st Floor",
      photo: "ise-dept.jpg",
      directions: "North-east of CSE block; shared pathway with AIML program signage.",
      keywords: ["ise", "information science", "aiml", "software"],
      classrooms: ["IS-301", "IS-302"],
      labs: ["Software Development Lab", "Multimedia & Network Lab", "AIML Lab"],
    },
    {
      id: "cct",
      name: "Ceramic & Cement Technology",
      blockId: "block-i",
      floor: "Ground & 1st Floor",
      hod: "Department Office — Ground Floor",
      photo: "cct-department.jpg",
      directions: "South campus wing; look for materials and kiln lab indicators.",
      keywords: ["cct", "ceramic", "cement"],
      classrooms: ["CCT-101", "CCT-102"],
      labs: ["Refractory Lab", "Glass Lab", "Materials Lab"],
    },
    {
      id: "science",
      name: "Basic Sciences",
      blockId: "block-k",
      floor: "Ground & 1st Floor",
      hod: "Coordinators — Physics, Chemistry, Mathematics",
      photo: "chemistry-dept.jpg",
      directions: "Central academic zone near first-year block; shared lecture halls for science courses.",
      keywords: ["physics", "chemistry", "math", "basic science"],
      classrooms: ["BS-101", "BS-102", "BS-Lecture Hall"],
      labs: ["Physics Lab", "Chemistry Lab", "Mathematics Lab"],
    },
    {
      id: "humanities",
      name: "Humanities & Social Sciences",
      blockId: "block-k",
      floor: "Ground Floor",
      hod: "Department Office — Ground Floor",
      photo: "humanities-ss-dept.jpg",
      directions: "Basic Sciences block, ground floor wing near the first-year block entrance.",
      keywords: ["humanities", "social sciences", "english", "hss"],
      classrooms: ["HSS-101"],
      labs: [],
    },
    {
      id: "mathematics",
      name: "Mathematics Department",
      blockId: "block-k",
      floor: "1st Floor",
      hod: "HOD Mathematics — 1st Floor",
      photo: "maths-dept.jpg",
      directions: "Basic Sciences block, 1st floor. Adjacent to Physics department.",
      keywords: ["mathematics", "maths", "math"],
      classrooms: ["Math-101", "Math-102"],
      labs: ["Mathematics Lab"],
    },
    {
      id: "fy",
      name: "First Year Engineering",
      blockId: "block-l",
      floor: "Ground to 2nd Floor",
      hod: "First Year Coordinator Office — 1st Floor",
      photo: "1st-yearblock.jpg",
      directions: "Near the 1st year Physics Lab and close to the canteen. Look for the PDA College of Engineering and HKE Society signage at the entrance.",
      keywords: ["first year", "fy", "freshers", "1st sem", "2nd sem", "1st year"],
      classrooms: ["FY-101", "FY-102", "FY-103", "FY-Tutorial-1"],
      labs: ["Engineering Workshop", "Basic Programming Lab"],
      description: "Daily classroom block for all 1st and 2nd semester engineering students across all branches.",
    },
    {
      id: "arch",
      name: "Architecture (B.Arch) — PDSSSA",
      blockId: "block-p",
      floor: "Ground & 1st Floor",
      hod: "Prof. Architecture — HOD",
      photo: "architecture-dept.jpg",
      directions: "From main gate, turn right immediately past Parking 2. The Architecture block (PDSSSA) is on your right side.",
      keywords: ["architecture", "arch", "barch", "design", "pdsssa", "salgar"],
      classrooms: ["ARCH-101", "ARCH-102", "Studio-1", "Studio-2"],
      labs: ["Model Making Lab", "Computer Applications Lab"],
    },
  ],

  classrooms: [
    { id: "ce-101", name: "CE-101 Lecture Hall", deptId: "civil", blockId: "block-b", floor: "Ground Floor", room: "101", directions: "Enter Civil block, first classroom on right corridor." },
    { id: "me-201", name: "ME-201 Classroom", deptId: "mech", blockId: "block-c", floor: "2nd Floor", room: "201", directions: "Stairs to 2nd floor, second door on left." },
    { id: "ec-301", name: "EC-301 Classroom", deptId: "ece", blockId: "block-d", floor: "3rd Floor", room: "301", directions: "ECE block lift/stairs to 3rd floor, room 301." },
    { id: "cs-101", name: "CS-101 Classroom", deptId: "cse", blockId: "block-f", floor: "1st Floor", room: "101", directions: "CSE block 1st floor, first room on left." },
    { id: "cs-201", name: "CS-201 Classroom", deptId: "cse", blockId: "block-f", floor: "2nd Floor", room: "201", directions: "CSE block 2nd floor, main corridor." },
    { id: "cs-401", name: "CS-401 Classroom", deptId: "cse", blockId: "block-f", floor: "4th Floor", room: "401", directions: "CSE block, top floor west wing." },
    { id: "cs-prog-lab", name: "CSE Programming Lab", deptId: "cse", blockId: "block-f", floor: "2nd Floor", room: "Lab-2", directions: "CSE block 2nd floor, follow Programming Lab signs.", capacity: 60 },
    { id: "cs-net-lab", name: "CSE Network Lab", deptId: "cse", blockId: "block-f", floor: "3rd Floor", room: "Lab-3", directions: "CSE block 3rd floor, Network Lab.", capacity: 60 },
    { id: "ec-101", name: "EC-101 Classroom", deptId: "ece", blockId: "block-d", floor: "1st Floor", room: "101", directions: "ECE block 1st floor, room 101." },
    { id: "ec-102", name: "EC-102 Classroom", deptId: "ece", blockId: "block-d", floor: "1st Floor", room: "102", directions: "ECE block 1st floor, room 102." },
    { id: "is-301", name: "IS-301 Classroom", deptId: "ise", blockId: "block-g", floor: "3rd Floor", room: "301", directions: "ISE block stairs to 3rd floor." },
    { id: "fy-101", name: "FY-101 Classroom", deptId: "fy", blockId: "block-l", floor: "Ground Floor", room: "101", directions: "First Year block ground floor, main corridor." },
    { id: "fy-102", name: "FY-102 Classroom", deptId: "fy", blockId: "block-l", floor: "Ground Floor", room: "102", directions: "First Year block ground floor, next to FY-101." },
    { id: "fy-103", name: "FY-103 Classroom", deptId: "fy", blockId: "block-l", floor: "1st Floor", room: "103", directions: "First Year block 1st floor." },
    { id: "fy-tutorial-1", name: "FY Tutorial Room 1", deptId: "fy", blockId: "block-l", floor: "1st Floor", room: "T-1", directions: "First Year block, 1st floor tutorial wing." },
    { id: "ee-201", name: "EE-201 Classroom", deptId: "eee", blockId: "block-e", floor: "2nd Floor", room: "201", directions: "EEE block, 2nd floor central corridor." },
    { id: "ec-seminar", name: "ECE Seminar Hall", deptId: "ece", blockId: "block-d", floor: "1st Floor", room: "Seminar", directions: "ECE block ground/1st floor seminar hall near auditorium link." },
    { id: "lh-28", name: "LH-28 Seminar Hall", deptId: "cse", blockId: "block-f", floor: "2nd Floor", room: "LH-28", directions: "CSE block 2nd floor, large seminar hall." },
  ],

  /** Laboratory spaces with photo mappings */
  labs: [
    { id: "maths-lab", name: "Mathematics Lab", blockId: "block-k", deptId: "mathematics", floor: "1st Floor", photo: "maths-lab.jpg", altPhotos: ["maths-lab2.jpg"], equipment: "MATLAB, Mathematica, Python", description: "Computer-based math lab with 40 workstations for numerical computation and simulation.", directions: "Basic Sciences block, 1st floor, turn right from staircase." },
    { id: "physics-lab", name: "Physics Lab", blockId: "block-k", deptId: "science", floor: "Ground Floor", photo: "physics-lab1.jpeg", altPhotos: ["physics-lab2.jpg", "physics-lab3.jpg"], equipment: "Oscilloscopes, Spectrophotometer, Electronics Kits", description: "General physics lab with optics, mechanics, and electronics experiment stations.", directions: "Basic Sciences block, ground floor, left corridor." },
    { id: "chemistry-lab", name: "Chemistry Lab", blockId: "block-k", deptId: "science", floor: "Ground Floor", photo: "chemisrty-lab.jpg", altPhotos: ["chemisrty-lab2.jpg", "chemistry-lab1.jpeg"], equipment: "Burettes, Titration sets, Analysis equipment", description: "Wet lab for chemistry practicals — titration, analysis, and synthesis experiments.", directions: "Basic Sciences block, ground floor, right corridor past Physics lab." },
  ],

  /** Faculty with room assignments — searchable */
  faculty: [
    // Administration
    { id: "principal", name: "Dr. S. R. Patil", role: "Principal", department: "Administration", deptId: "admin", room: "Admin-01", blockId: "block-a", floor: "3rd Floor", keywords: ["principal", "admin", "director"] },
    { id: "vp-hotti", name: "Dr. Siddalingappa R Hotti", role: "Vice Principal", department: "Administration", deptId: "admin", room: "AP-01", blockId: "block-a", floor: "2nd Floor", keywords: ["vice principal"] },
    { id: "vp-bharati", name: "Dr. Bharati Harsoor", role: "Vice Principal", department: "Administration", deptId: "admin", room: "AP-02", blockId: "block-a", floor: "2nd Floor", keywords: ["vice principal"] },
    { id: "exam-controller", name: "Dr. Vijay Hiremath", role: "Controller of Exams & HOD Chemistry", department: "Chemistry / Administration", deptId: "science", room: "Chem-201", blockId: "block-k", floor: "2nd Floor", keywords: ["exams", "controller", "chemistry", "hod"] },
    { id: "dean-campus", name: "Dr. Harish Astagi", role: "Dean Campus", department: "Administration", deptId: "admin", room: "Dean-01", blockId: "block-a", floor: "3rd Floor", keywords: ["dean", "campus"] },
    { id: "dean-students", name: "Mr. Jayaprakash", role: "Dean Student Affairs", department: "Administration", deptId: "admin", room: "Dean-02", blockId: "block-a", floor: "3rd Floor", keywords: ["dean", "student affairs"] },

    // CSE Department (11 faculty)
    { id: "cse-hod", name: "Dr. Sujata Terdal", role: "Professor & HOD", department: "CSE", deptId: "cse", room: "CSE-201", blockId: "block-f", floor: "2nd Floor", photo: "cse_hod.jpg", keywords: ["hod", "computer science", "cse"] },
    { id: "cse-prof-nandyal", name: "Dr. Suvarna Nandyal", role: "Professor", department: "CSE", deptId: "cse", room: "CSE-202", blockId: "block-f", floor: "2nd Floor", keywords: ["professor", "computer science"] },
    { id: "cse-poorvika", name: "Smt. Poorvika Harsoor", role: "Assistant Professor (11 yrs)", department: "CSE", deptId: "cse", room: "CSE-203", blockId: "block-f", floor: "2nd Floor", keywords: ["assistant professor"] },
    { id: "cse-smitha", name: "Smt. Smitha Padashetty", role: "Assistant Professor (9 yrs)", department: "CSE", deptId: "cse", room: "CSE-204", blockId: "block-f", floor: "2nd Floor", keywords: ["assistant professor"] },
    { id: "cse-sudha", name: "Smt. Sudha V Pareddy", role: "Assistant Professor (8 yrs)", department: "CSE", deptId: "cse", room: "CSE-205", blockId: "block-f", floor: "1st Floor", keywords: ["assistant professor"] },
    { id: "cse-pallavi", name: "Smt. Pallavi Patil", role: "Assistant Professor (7 yrs)", department: "CSE", deptId: "cse", room: "CSE-206", blockId: "block-f", floor: "1st Floor", keywords: ["assistant professor"] },
    { id: "cse-pooja", name: "Dr. Pooja Aspalli", role: "Assistant Professor, PhD (9.5 yrs)", department: "CSE", deptId: "cse", room: "CSE-207", blockId: "block-f", floor: "1st Floor", keywords: ["assistant professor", "phd"] },
    { id: "cse-chetan", name: "Sri. Chetankumar Kalaskar", role: "Assistant Professor (12 yrs)", department: "CSE", deptId: "cse", room: "CSE-208", blockId: "block-f", floor: "Ground Floor", keywords: ["assistant professor"] },
    { id: "cse-satish", name: "Sri. Satishkumar Harsoor", role: "Assistant Professor (8 yrs)", department: "CSE", deptId: "cse", room: "CSE-209", blockId: "block-f", floor: "Ground Floor", keywords: ["assistant professor"] },
    { id: "cse-amar", name: "Amar Chinti", role: "Assistant Professor (1 yr)", department: "CSE", deptId: "cse", room: "CSE-210", blockId: "block-f", floor: "Ground Floor", keywords: ["assistant professor"] },
    { id: "cse-sushmita", name: "Sushmita Patil", role: "Assistant Professor (1 yr)", department: "CSE", deptId: "cse", room: "CSE-211", blockId: "block-f", floor: "Ground Floor", keywords: ["assistant professor"] },
    { id: "cse-jayshree", name: "Dr. Jayshree", role: "Faculty", department: "CSE", deptId: "cse", room: "CSE Block", blockId: "block-f", floor: "2nd Floor", photo: "Dr-jayshree.jpeg", keywords: ["faculty", "computer science"] },

    // ECE Department
    { id: "ece-hod", name: "Dr. Vinayadatt V. Kohir", role: "Professor & HOD", department: "ECE", deptId: "ece", room: "ECE-201", blockId: "block-d", floor: "2nd Floor", keywords: ["hod", "electronics", "ece"] },
    { id: "ece-gangadhar", name: "Dr. Gangadhar S. Biradar", role: "Associate Professor", department: "ECE", deptId: "ece", room: "ECE-202", blockId: "block-d", floor: "2nd Floor", keywords: ["associate professor", "electronics"] },

    // EEE Department
    { id: "eee-hod", name: "Dr. Sangamesh G Sakri", role: "Associate Professor & HOD", department: "EEE", deptId: "eee", room: "EEE-201", blockId: "block-e", floor: "2nd Floor", keywords: ["hod", "electrical", "eee"] },
    { id: "eee-aspalli", name: "Dr. M S Aspalli", role: "Professor", department: "EEE", deptId: "eee", room: "EEE-202", blockId: "block-e", floor: "2nd Floor", keywords: ["professor", "electrical"] },
    { id: "eee-navindgi", name: "Dr. M C Navindgi", role: "Professor", department: "EEE", deptId: "eee", room: "EEE-203", blockId: "block-e", floor: "1st Floor", keywords: ["professor", "electrical"] },

    // Mechanical Department
    { id: "mech-navindgi", name: "Dr. M C Navindgi", role: "Professor", department: "Mechanical", deptId: "mech", room: "Mech-201", blockId: "block-c", floor: "2nd Floor", keywords: ["professor", "mechanical"] },
    { id: "mech-jeergi", name: "Dr. Arunkumar B. Jeergi", role: "Professor", department: "Mechanical", deptId: "mech", room: "Mech-202", blockId: "block-c", floor: "2nd Floor", keywords: ["professor", "mechanical"] },

    // Civil Department
    { id: "civil-hod", name: "Dr. Rajendrakumar Harsoor", role: "Professor & HOD", department: "Civil", deptId: "civil", room: "Civil-201", blockId: "block-b", floor: "2nd Floor", keywords: ["hod", "civil"] },
    { id: "civil-mise", name: "Dr. Shashikant Mise", role: "Professor", department: "Civil", deptId: "civil", room: "Civil-202", blockId: "block-b", floor: "2nd Floor", keywords: ["professor", "civil"] },

    // Basic Sciences
    { id: "chem-hod", name: "Dr. Vijay Hiremath", role: "Professor & HOD Chemistry", department: "Chemistry", deptId: "science", room: "Chem-201", blockId: "block-k", floor: "2nd Floor", keywords: ["hod", "chemistry"] },
    { id: "chem-soma", name: "Dr. Shridevi Soma", role: "Professor", department: "Chemistry", deptId: "science", room: "Chem-202", blockId: "block-k", floor: "2nd Floor", keywords: ["professor", "chemistry"] },
    { id: "chem-jyoti", name: "Jyotilaxmi Maam", role: "Assistant Professor", department: "Chemistry", deptId: "science", room: "Chem-203", blockId: "block-k", floor: "1st Floor", keywords: ["assistant professor", "chemistry"] },
  ],

  facilities: [
    {
      id: "library",
      name: "Central Library",
      category: "Academic",
      blockId: "block-m",
      floor: "Ground to 3rd Floor",
      hours: "Mon–Sat: 8:00 AM – 8:00 PM",
      photo: "library.jpg",
      altPhotos: ["library2.jpg"],
      directions: "From main gate, walk straight; library is the large building with clock tower near academic core.",
      keywords: ["library", "books", "reading"],
      description: "40,000+ books, journals, digital resources, and reading halls.",
    },
    {
      id: "canteen",
      name: "College Canteen",
      category: "Food",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Mon–Sat: 7:00 AM – 7:00 PM",
      photo: "canteen.jpg",
      directions: "Student Services Zone, south of first-year block. Follow food court signs.",
      keywords: ["canteen", "food", "lunch"],
      description: "Vegetarian and snack counters for students and staff.",
    },
    {
      id: "seminar-hall",
      name: "Seminar Hall (LH-28)",
      category: "Academic",
      blockId: "block-f",
      floor: "2nd Floor",
      hours: "During scheduled events",
      photo: "seminar-hall.jpg",
      directions: "CSE Block, 2nd floor, LH-28 — large seminar hall for workshops and guest lectures.",
      keywords: ["seminar", "hall", "lh-28", "lecture hall"],
      description: "Main seminar hall for workshops, guest lectures, and department events.",
    },
    {
      id: "auditorium",
      name: "Auditorium",
      category: "Events",
      blockId: "block-n",
      floor: "1st Floor",
      hours: "During scheduled events",
      photo: "auditorium.jpg",
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
      id: "bank",
      name: "Canara Bank (Campus Branch)",
      category: "Services",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Banking hours (Mon–Fri)",
      photo: "clg-bank.jpg",
      directions: "Student Services Zone, near canteen and stationary shop.",
      keywords: ["bank", "atm", "canara"],
      description: "Canara Bank ATM and banking services for students and staff on campus.",
    },
    {
      id: "stationary",
      name: "Xerox & Stationery Shop",
      category: "Services",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "Mon–Sat: 8:00 AM – 5:00 PM",
      photo: "pda-xerox.jpg",
      directions: "Student Services Zone, adjacent to post office lane.",
      keywords: ["stationary", "xerox", "printing", "stationery"],
      description: "Notebooks, printing, photocopying, and stationery services.",
    },
    {
      id: "accounts",
      name: "Accounts & Admission Section",
      category: "Administration",
      blockId: "block-a",
      floor: "Ground Floor",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      photo: "account-section.jpg",
      directions: "Admin block, ground floor — accounts window for fee payment and admission queries.",
      keywords: ["accounts", "admission", "fees", "payment"],
      description: "Fee payment, admission queries, and financial administration.",
    },
    {
      id: "scholarship",
      name: "Scholarship Office",
      category: "Administration",
      blockId: "block-a",
      floor: "Ground Floor",
      hours: "Mon–Sat: 10:00 AM – 4:00 PM",
      photo: "scholarship-dept.jpg",
      directions: "Admin block, ground floor, next to accounts section.",
      keywords: ["scholarship", "financial aid"],
      description: "Scholarship applications, disbursements, and student financial aid.",
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
      id: "nptel",
      name: "NPTEL Local Chapter Centre",
      category: "Academic",
      blockId: "block-f",
      floor: "1st Floor",
      hours: "Mon–Sat: 9:00 AM – 5:00 PM",
      photo: "nptel-center.jpg",
      directions: "CSE Block, 1st floor — NPTEL study and examination centre.",
      keywords: ["nptel", "online courses", "swayam"],
      description: "NPTEL local chapter for online course coordination and certification exams.",
    },
    {
      id: "future-skills",
      name: "Centre for Future Skills & UiPath Automation",
      category: "Training",
      blockId: "block-a",
      floor: "1st–2nd Floor",
      hours: "During sessions",
      photo: "future-skills.jpg",
      altPhotos: ["uipath-corridor.jpg"],
      directions: "Near the admin block area — training centre for all departments, covering industry-ready skills, UiPath RPA automation, and emerging technologies.",
      keywords: ["future skills", "training", "upskilling", "uipath", "automation", "rpa", "all departments"],
      description: "College-wide training centre for all departments — industry-aligned programs in emerging technologies, UiPath Robotic Process Automation, and professional upskilling.",
    },
    {
      id: "admin",
      name: "Principal & Admin Office",
      category: "Administration",
      blockId: "block-a",
      floor: "1st & 2nd Floor",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      photo: "admin-tower.jpg",
      directions: "Main administrative block directly inside main gate.",
      keywords: ["admin", "principal", "office"],
      description: "Principal office, exam section, and college administration.",
    },

    {
      id: "auditorium",
      name: "Auditorium (1000 Capacity)",
      category: "Venue",
      blockId: "block-n",
      floor: "Ground Floor",
      hours: "During events",
      photo: "auditorium.jpg",
      directions: "Student Services Zone area — large 1000-seat auditorium used for convocations, seminars, and cultural events.",
      keywords: ["auditorium", "hall", "convocation", "seminar hall", "events", "1000 capacity"],
      description: "1000-capacity main auditorium and 200-seater gallery hall for college events, graduation ceremonies, and seminars.",
    },
    {
      id: "hostel",
      name: "Student Hostels",
      category: "Housing",
      blockId: "block-o",
      floor: "Ground to 3rd Floor",
      hours: "24/7 for residents",
      photo: "hostel.jpg",
      directions: "Walk past the Student Services Zone (Canteen/Bank) towards the far northeast end of the campus road.",
      keywords: ["hostel", "rooms", "dorm", "accommodation", "residence", "mess"],
      description: "On-campus hostel accommodations with mess facilities, recreational areas, and 24/7 security.",
    },
    {
      id: "parking-1",
      name: "Gate Parking Zone (West)",
      category: "Services",
      blockId: "block-gate",
      floor: "Ground Level",
      hours: "24/7",
      directions: "Immediately on the left upon entering the Main Gate, next to First Year Block.",
      keywords: ["parking", "vehicle", "car", "bike", "scooter", "gate"],
      description: "Parking zone near the main gate and First Year Block for visitors and students.",
    },
    {
      id: "parking-2",
      name: "Gate Parking Zone (East)",
      category: "Services",
      blockId: "block-gate",
      floor: "Ground Level",
      hours: "24/7",
      directions: "Immediately on the right upon entering the Main Gate, next to the Architecture block.",
      keywords: ["parking", "vehicle", "car", "bike", "scooter", "gate"],
      description: "Parking zone near the main gate and Architecture block.",
    },
    {
      id: "parking-3",
      name: "Services Parking Zone (East)",
      category: "Services",
      blockId: "block-n",
      floor: "Ground Level",
      hours: "24/7",
      directions: "Located near the Canteen and Student Services zone.",
      keywords: ["parking", "vehicle", "car", "bike", "scooter", "canteen", "services"],
      description: "Parking area serving the Canteen, Bank, and Auditorium zone.",
    }
  ],
  faqs: [
    {
      q: "How to get admission in PDACEK?",
      a: "Admission is based on Visvesvaraya Technological University (VTU) guidelines. Students can join via KEA (CET) counselling, COMED-K exam, or through Management Quota. For eligibility, you must pass 12th grade with physics, math, and chemistry/electronics/CS.",
      keywords: ["admission", "apply", "join", "eligibility", "seat", "quota", "kea", "cet", "comedk"]
    },
    {
      q: "Who should I contact for admissions?",
      a: "For admission queries, you can contact the official admission coordinators:<br>1. <strong>Dr. M S Aspalli</strong>: +91 9449618898<br>2. <strong>Mr. Sangamesh Jeevangi</strong>: +91 9743841111",
      keywords: ["contact", "admission contact", "admission number", "phone number", "call", "helpdesk", "office", "jeevangi", "aspalli"]
    },
    {
      q: "What is the contact number and address of the college?",
      a: "<strong>Address:</strong> Aiwan-E-Shahi Area, Kalaburagi, Karnataka - 585102.<br><strong>Office Phone:</strong> 08472-224360<br><strong>Email:</strong> principal@pdaengg.com / principal@pdaengg.ac.in",
      keywords: ["address", "contact number", "phone number", "phone", "email", "mail", "pin code", "location", "pda number"]
    },
    {
      q: "Tell me about the Placement Cell and companies visiting.",
      a: "PDACEK has an active Training and Placement Cell that organizes pre-placement training (aptitude, communication, coding skills) starting from the 1st semester. Top recruiting companies include TCS, Wipro, Cognizant, Infosys, and others. Internships are mandatory for all undergraduate students.",
      keywords: ["placement", "job", "recruit", "companies", "tcs", "wipro", "internship", "salary", "package", "training"]
    },
    {
      q: "Is PDACEK autonomous?",
      a: "Yes, P.D.A. College of Engineering has been an autonomous institution under Visvesvaraya Technological University (VTU) since the academic year 2007-08.",
      keywords: ["autonomous", "vtu", "affiliated", "university", "syllabus", "exam", "board"]
    },
    {
      q: "What courses or branches are offered in UG engineering?",
      a: "PDACEK offers 11 UG engineering courses:<br>- Civil Engineering<br>- Mechanical Engineering<br>- Electrical & Electronics (EEE)<br>- Electronics & Communication (ECE)<br>- Computer Science (CSE)<br>- Information Science (ISE)<br>- Ceramic & Cement Tech (CCT)<br>- Automobile Engineering<br>- Computer Science & Design (CSD)<br>- AI & Machine Learning (AIML)<br>- Architecture (B.Arch)",
      keywords: ["courses", "branches", "ug", "be", "btech", "degree", "departments", "intake"]
    }
  ]
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

/** Get faculty by id */
function getFacultyMember(id) {
  return campusData.faculty.find((f) => f.id === id);
}

/** Get all faculty in a department */
function getFacultyByDept(deptId) {
  return campusData.faculty.filter((f) => f.deptId === deptId);
}

/** Get lab by id */
function getLab(id) {
  return campusData.labs.find((l) => l.id === id);
}

/** Get labs by department */
function getLabsByDept(deptId) {
  return campusData.labs.filter((l) => l.deptId === deptId);
}

function getPlaceholderImageUrl() {
  return campusData.placeholderImage;
}

/** Build image URL from a photo filename */
function buildImageUrl(photoFilename) {
  if (!photoFilename) return getPlaceholderImageUrl();
  return `${campusData.buildingPhotosPath}/${photoFilename}`;
}

/** Image URL for a department */
function getDeptImageUrl(dept) {
  if (dept.photo) return buildImageUrl(dept.photo);
  return getPlaceholderImageUrl();
}

/** Image URL for a facility */
function getFacilityImageUrl(facility) {
  if (facility.photo) return buildImageUrl(facility.photo);
  return getPlaceholderImageUrl();
}

/** Image URL for a block */
function getBlockImageUrl(block) {
  if (block.photo) return buildImageUrl(block.photo);
  return getPlaceholderImageUrl();
}

/** Image URL for a lab */
function getLabImageUrl(lab) {
  if (lab.photo) return buildImageUrl(lab.photo);
  return getPlaceholderImageUrl();
}

/** Image URL for a faculty member (returns dept photo if no personal photo) */
function getFacultyImageUrl(faculty) {
  if (faculty.photo) return buildImageUrl(faculty.photo);
  const dept = getDepartment(faculty.deptId);
  if (dept && dept.photo) return buildImageUrl(dept.photo);
  return getPlaceholderImageUrl();
}

/** Photo filename key for a department, facility, or block — backwards compatible */
function getImageKey(type, id, blockId, deptId) {
  if (type === "department") {
    const dept = getDepartment(id);
    if (dept?.photo) return dept.photo.replace(/\.(jpg|jpeg|png)$/i, "");
    return id;
  }
  if (type === "facility") {
    const fac = getFacility(id);
    if (fac?.photo) return fac.photo.replace(/\.(jpg|jpeg|png)$/i, "");
    return id;
  }
  if (type === "classroom" && deptId) {
    const dept = getDepartment(deptId);
    if (dept?.photo) return dept.photo.replace(/\.(jpg|jpeg|png)$/i, "");
    return deptId;
  }
  if (type === "faculty") {
    const fac = campusData.faculty.find((f) => f.id === id);
    if (fac?.photo) return fac.photo.replace(/\.(jpg|jpeg|png)$/i, "");
    const dept = getDepartment(fac?.deptId);
    if (dept?.photo) return dept.photo.replace(/\.(jpg|jpeg|png)$/i, "");
    return id;
  }
  if (type === "lab") {
    const lab = getLab(id);
    if (lab?.photo) return lab.photo.replace(/\.(jpg|jpeg|png)$/i, "");
    return id;
  }
  const block = getBlock(blockId);
  return block?.imageKey || id;
}

/** Full image URL for search results and detail pages */
function getLocationImageUrl(type, id, blockId, deptId) {
  const base = campusData.buildingPhotosPath;

  // Use explicit photo property when available
  if (type === "department") {
    const dept = getDepartment(id);
    if (dept?.photo) return `${base}/${dept.photo}`;
  }
  if (type === "facility") {
    const fac = getFacility(id);
    if (fac?.photo) return `${base}/${fac.photo}`;
  }
  if (type === "classroom" && deptId) {
    const dept = getDepartment(deptId);
    if (dept?.photo) return `${base}/${dept.photo}`;
  }
  if (type === "faculty") {
    const member = campusData.faculty.find((f) => f.id === id);
    if (member?.photo) return `${base}/${member.photo}`;
    const dept = getDepartment(member?.deptId);
    if (dept?.photo) return `${base}/${dept.photo}`;
  }
  if (type === "lab") {
    const lab = getLab(id);
    if (lab?.photo) return `${base}/${lab.photo}`;
  }

  // Fallback: try block photo or placeholder
  const block = getBlock(blockId);
  if (block?.photo) return `${base}/${block.photo}`;

  return getPlaceholderImageUrl();
}

/** Image URL for department or facility record */
function getRecordImageUrl(record, type) {
  if (record.photo) return buildImageUrl(record.photo);
  if (record.image) return record.image;
  if (type === "department") return getLocationImageUrl("department", record.id, record.blockId);
  if (type === "facility") return getLocationImageUrl("facility", record.id, record.blockId);
  if (type === "block") {
    if (record.photo) return buildImageUrl(record.photo);
    const key = record.imageKey || record.id;
    return `${campusData.buildingPhotosPath}/${key}.jpg`;
  }
  return getPlaceholderImageUrl();
}

/** All searchable items with type */
function getAllSearchableItems() {
  const items = [];

  // Departments
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

  // Classrooms
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

  // Facilities
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

  // Faculty (searchable by name, room, department)
  campusData.faculty.forEach((f) => {
    const block = getBlock(f.blockId);
    items.push({
      type: "faculty",
      id: f.id,
      name: `${f.name} — ${f.role}`,
      blockId: f.blockId,
      deptId: f.deptId,
      floor: f.floor,
      directions: `${f.department} · Room ${f.room} · ${block?.name || ""}, ${f.floor}`,
      keywords: [f.department, f.room, f.role, ...(f.keywords || [])],
      imageUrl: getLocationImageUrl("faculty", f.id, f.blockId, f.deptId),
      url: f.deptId === "admin" ? `facilities.html?id=admin` : `department.html?id=${f.deptId}`,
    });
  });

  // Labs
  campusData.labs.forEach((l) => {
    items.push({
      type: "lab",
      id: l.id,
      name: l.name,
      blockId: l.blockId,
      deptId: l.deptId,
      floor: l.floor,
      directions: l.directions,
      keywords: [l.equipment || "", l.description || ""],
      imageUrl: getLocationImageUrl("lab", l.id, l.blockId, l.deptId),
      url: `department.html?id=${l.deptId}`,
    });
  });

  return items;
}

/** Items in a block */
function getItemsInBlock(blockId) {
  const depts = campusData.departments.filter((d) => d.blockId === blockId);
  const facs = campusData.facilities.filter((f) => f.blockId === blockId);
  const rooms = campusData.classrooms.filter((c) => c.blockId === blockId);
  const labs = campusData.labs.filter((l) => l.blockId === blockId);
  const faculty = campusData.faculty.filter((f) => f.blockId === blockId);
  return { departments: depts, facilities: facs, classrooms: rooms, labs, faculty };
}
