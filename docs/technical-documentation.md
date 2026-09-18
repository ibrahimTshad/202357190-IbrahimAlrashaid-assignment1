# Technical Documentation

## 1. Project Overview

This project is a responsive single-page personal portfolio for Ibrahim Alrashaid. It introduces the student, presents two academic projects, and includes a contact form. The website was created using HTML, CSS, and JavaScript without a framework or backend server.

The main goals of the implementation are simplicity, responsive behavior, readable code, and basic user interaction through a light and dark theme toggle.

## 2. Technologies

- **HTML5:** Provides the content and semantic page structure.
- **CSS3:** Controls colors, spacing, project-card layout, image presentation, and responsive behavior.
- **JavaScript:** Controls the light/dark theme and updates interface information dynamically.
- **Git and GitHub:** Provide version control and public project hosting.

## 3. Project Structure

```text
assignment-1/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── cpu.png
│       └── track.jpeg
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## 4. HTML Structure

The website is implemented as one page in `index.html`. Navigation links use section identifiers to move to the corresponding part of the page.

### Header and Navigation

The header contains the portfolio name, links to the About, Projects, and Contact sections, and the theme-toggle button. The navigation uses an accessible label to identify it as the main navigation area.

### Hero Section

The hero section displays the portfolio owner's name, a short professional tagline, and a link that moves the visitor to the Projects section.

### About Section

The About Me section contains a short introduction describing the student's interest in technology, programming, and web development.

### Projects Section

The Projects section uses individual project cards. Each card contains an image, project title, and description. The featured projects are:

1. A five-stage pipelined CPU designed using Verilog and Logisim.
2. An assignment tracker interface designed in Figma for students and teachers.

Both images use descriptive alternative text. A shared image class gives the images consistent presentation even though the original files have different aspect ratios.

### Contact Section

The contact form contains required fields for name, email, and message. The email field uses the HTML `email` input type so the browser can perform basic format validation. This assignment does not require a backend, so the form does not transmit or permanently store messages.

### Footer

The footer contains the copyright notice and a link to the portfolio owner's GitHub profile.

## 5. CSS and Responsive Design

The stylesheet is stored in `css/styles.css`. CSS custom properties define reusable theme colors for the page background, text, muted text, primary color, and cards.

The project cards are arranged with CSS Grid so they can appear next to each other when enough horizontal space is available. On smaller screens, the layout changes to a single column. Flexbox is used where appropriate to align navigation items and keep card content organized.

Project images use a common height and `object-fit` so both cards have a consistent layout. `max-width` and responsive rules prevent images and form controls from overflowing their containers.

A media query adjusts the layout for mobile screens. The site should be tested by resizing the browser and by using the device toolbar in browser developer tools.

## 6. JavaScript Interaction

The JavaScript file is stored in `js/script.js`. The main interactive feature is the light/dark theme toggle.

When the button is selected, JavaScript changes the `data-theme` attribute on the root HTML element. CSS reads this attribute and applies the corresponding color variables. The button text and `aria-pressed` value are also updated so the current state is clear.

The selected theme is saved using `localStorage`. This allows the visitor's theme choice to remain active after the page is refreshed. If the visitor has not previously selected a theme, the script can use the operating system's color preference as the initial setting.

The script also updates the copyright year using the current year from the visitor's device.

## 7. Accessibility

The project includes several basic accessibility features:

- Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`
- Labels connected to every contact-form field
- Alternative text for project images
- An accessible label and state for the theme-toggle button
- An `aria-live` status area for form feedback
- Standard heading order and descriptive navigation text

Color contrast and keyboard navigation should be checked in both light and dark themes before submission.

## 8. Performance and Compatibility

The website does not use large frameworks or external JavaScript libraries, which keeps the project lightweight. Images should be compressed to reasonable file sizes to improve loading speed.

The site uses standard HTML, CSS Grid, Flexbox, CSS custom properties, and JavaScript features supported by current versions of Chrome, Edge, Firefox, and Safari.

## 9. Testing

The following manual tests should be completed before submission:

1. Open `index.html` and confirm that the stylesheet, script, and images load.
2. Select each navigation link and confirm that it moves to the correct section.
3. Toggle between light and dark themes and refresh the page to confirm that the choice is retained.
4. Confirm that both project images have consistent dimensions without unwanted distortion.
5. Resize the browser to desktop, tablet, and mobile widths.
6. Submit the contact form with empty fields and confirm that required-field validation appears.
7. Enter an invalid email address and confirm that browser validation appears.
8. Open the browser console and confirm that there are no errors.
9. Test the website in at least two major browsers.

## 10. Known Limitations

- The contact form has no backend and does not send messages.
- Project cards provide summaries but do not currently link to separate project pages or source repositories.
- The website is a foundation that can be expanded with additional projects, skills, deployment, and form processing in later assignments.

## 11. Running Locally

No installation is required. Download or clone the repository and open `index.html` in a web browser. The folder structure must remain unchanged so the relative paths to the stylesheet, JavaScript, and images continue to work.
