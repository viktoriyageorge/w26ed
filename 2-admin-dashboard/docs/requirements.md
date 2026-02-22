# Admin Dashboard (MVP)

## Context
You join an existing internal admin tool. The team needs a small MVP upgrade.

## Architecture (for now)
- Static HTML5 only (no CSS, no JS yet)
- Multiple pages with navigation
- Semantic HTML5 structure is required

## Pages
1) Home (index.html)
2) Users (users.html)
3) Settings (settings.html)

## Global Requirements
R1. Every page must include: header, nav, main, footer

R2. Use correct HTML5 doctype and meta charset

R3. Avoid deprecated / non-recommended tags (center, font, big, etc.)

## Home (index.html)
H1. Add a short "System status" section using a list (ul or dl)

## Users (users.html)
U1. Add a table with thead, tbody, tfoot

U2. Table columns: ID, Username, Role, Status

U3. Add at least 3 users in tbody

U4. In tfoot show a summary row (e.g., Total users: 3)

## Settings (settings.html)
S1. Create a form for "Create user" (simulate feature request)

S2. Fields:

    - Username (text, required, autofocus)
    - Email (email, required)
    - Role (select: Admin, Editor, Viewer)
    - Active (checkbox, checked by default)
    
S3. Use proper label for connections

S4. Use POST as method and action
