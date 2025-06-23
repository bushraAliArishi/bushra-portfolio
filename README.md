# Bushra Ali Arishi - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing backend development and no-code expertise.

## Features

- ✅ **Modern React with TypeScript** - Type-safe development
- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark/Light Mode** - Toggle between themes
- ✅ **Tech-Sprint Color Palette** - Professional tech-focused design
- ✅ **Interactive Components** - Smooth animations and hover effects
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **shadcn/ui Components** - High-quality UI components
- ✅ **Lucide Icons** - Beautiful, consistent icons

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Build Tool:** Vite
- **Package Manager:** pnpm
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Extract the project files
2. Navigate to the project directory:
   ```bash
   cd bushra-portfolio
   ```

3. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
bushra-portfolio/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── App.tsx          # Main application component
│   ├── App.css          # Global styles and color variables
│   ├── main.tsx         # Application entry point
│   └── index.css        # Base styles
├── public/              # Static assets
├── index.html           # HTML template
├── tsconfig.json        # TypeScript configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Color Palette (Tech-Sprint)

### Light Mode
- **Primary:** #0A84FF (Programming Blue)
- **Secondary:** #002B45 (Midnight Navy)
- **Accent:** #FF8A00 (Sprint Orange)
- **Support:** #18C9C9 (Tech Turquoise)
- **Neutral:** #F4F6F8 (Cloud Gray)

### Dark Mode (Enhanced)
- **Background:** #001A2B (Deep Navy)
- **Surface:** #00273E (Card Background)
- **Text Primary:** #E6EDF1 (Light Text)
- **Text Secondary:** #9FB4C1 (Muted Text)
- **Accent:** #FF9A1A (Softer Orange)

## Customization

### Colors
All colors are defined as CSS custom properties in `src/App.css`. You can easily modify the color scheme by updating the values in the `:root` and `.dark` selectors.

### Content
Update the personal information, projects, experience, and skills in `src/App.tsx`:

- **Personal Info:** Update name, title, contact details
- **Skills:** Modify the `skills` object
- **Projects:** Update the `projects` array
- **Experience:** Modify the `experience` array
- **Certifications:** Update the `certifications` array

### Components
The project uses shadcn/ui components. You can add more components by running:

```bash
npx shadcn@latest add [component-name]
```

## Deployment

The project can be deployed to any static hosting service:

- **Vercel:** Connect your GitHub repository
- **Netlify:** Drag and drop the `dist/` folder
- **GitHub Pages:** Use GitHub Actions
- **AWS S3:** Upload the `dist/` folder

## Development Notes

- The project uses TypeScript for type safety
- All components are properly typed
- The design is mobile-first and responsive
- Dark mode preference is stored in component state (can be enhanced with localStorage)
- The color palette follows accessibility guidelines for contrast ratios

## License

This project is for personal use. Feel free to use it as a template for your own portfolio.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

