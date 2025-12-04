# ReactJS Portfolio Application

A professional portfolio website built with ReactJS and Vite. This application features a modern hero section with a full-page background image and customizable personal information.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

### Personal Information

Open `src/App.jsx` and modify the `siteProps` object to customize your portfolio:

```javascript
const siteProps = {
  name: "Yohaan Nathan",                 // Your name
  title: "Software Developer",           // Your job title
  organization: "XYZ Project",           // Your organization
  email: "jaya@xyzproject.com",          // Your email
  phone: "+1 (555) 123-4567",            // Your phone number
  location: "San Francisco, CA",         // Your location
  bio: "Your professional biography"     // Your bio
};
```

### siteProps Properties

- **name**: Developer's name displayed as the main heading
- **title**: Professional title or role
- **organization**: Company or project name
- **email**: Contact email address
- **phone**: Contact phone number
- **location**: Current location or city
- **bio**: Professional biography or description

### Styling and Animations

The application includes several CSS animations in `src/style.css`:

- **bounceIn**: Initial fade-in animation for elements
- **pulse**: Opacity variation effect
- **spin**: Rotation animation
- **float**: Vertical floating motion
- **bounce**: Scroll indicator animation

To customize the color scheme, fonts, or layout, edit the CSS variables and classes in `src/style.css`.

### Background Image

Replace `image.png` in the root directory with your own background image. The image should be high resolution for best results.

## Features

- Responsive design
- Smooth animations
- Full-page hero section with background image
- Navigation menu (Home, About, Portfolio, Contact)
- Scroll indicator
- Customizable personal information
- Modern gradient overlays

## Technology Stack

- React 18.2.0
- Vite 4.3.9
- CSS3 with animations
- JavaScript ES6+

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, specify a different port:

```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

Clear node modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Fix audit issues and rebuild:

```bash
npm audit fix
npm run build
```
