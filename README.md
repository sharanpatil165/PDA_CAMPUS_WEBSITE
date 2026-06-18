# Smart Campus Navigation System — PDACEK

Web-based mini project for **P.D.A. College of Engineering (Kalaburagi)** — helps students, visitors, and faculty find departments, classrooms, laboratories, and campus facilities.

## Features

- Department, classroom, and facility search with live suggestions
- Block, floor, and text directions for each location
- Interactive SVG campus schematic map (clickable blocks)
- Google Maps embed for outdoor campus reference
- Department and facility detail pages
- Responsive layout and dark mode (saved in browser)

## How to run

**Option 1 — Open directly**

```bash
open index.html
```

**Option 2 — Local server (recommended)**

```bash
cd ~/Documents/smart-campus-pda
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080)

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage, quick search, module cards |
| `search.html` | Full search with filters |
| `map.html` | SVG map + Google Maps |
| `department.html` | Department details (`?id=cse`, etc.) |
| `facilities.html` | Facility grid and details (`?id=library`, etc.) |
| `assets/js/campus-data.js` | All campus location data |
| `assets/js/app.js` | Search, map, page logic |
| `assets/js/theme.js` | Dark / light mode |

## Building photos (search shows images)

When someone searches a department, library, canteen, or classroom, a **building photo** appears next to the result.

1. Take photos on your phone.
2. Save them in **`assets/img/buildings/`** using the names in **`assets/img/buildings/PHOTOS.md`** (e.g. `cse.jpg`, `library.jpg`, `canteen.jpg`).
3. Refresh the site — your photos replace the placeholder automatically.

Classrooms use their department’s photo (e.g. CS-401 → `cse.jpg`).

## Editing campus data

All locations are in **`assets/js/campus-data.js`**. Update `departments`, `classrooms`, `facilities`, or `blocks` when rooms or blocks change. Block/floor details in this demo are **representative** — verify against your campus layout for production use.

## Technologies

- HTML5, CSS3, JavaScript (vanilla)
- Bootstrap 5.3 (CDN)
- Google Maps embed (no API key)

## Limitations

- Data must be updated manually in `campus-data.js`
- No real-time GPS tracking
- Limited to predefined campus locations
- Schematic map is not to scale

## Future enhancements

- GPS-based navigation
- AI route optimization
- Mobile application
- Voice assistant
- Indoor navigation (BLE / Wi‑Fi)

## Presentation flow (suggested slides)

1. Title — Smart Campus Navigation, PDACEK  
2. Introduction  
3. Problem statement  
4. Objectives  
5. Proposed solution  
6. Features (search, map, facilities, dark mode)  
7. Technologies used  
8. System architecture (static site + `campus-data.js`)  
9. Working process (search → data → block/floor/directions)  
10. Screenshots (homepage, search, map, department page)  
11. Advantages  
12. Future scope  
13. Conclusion  
14. Thank you  

## Demo searches

Try: **CSE**, **Library**, **Canteen**, **FY-101**, **ECE**, **First Year**

## License

Educational mini project — P.D.A. College of Engineering.
# PDA-CAMPUS-WEBSITE
