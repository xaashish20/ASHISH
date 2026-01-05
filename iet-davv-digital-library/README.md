# IET DAVV Digital Library

Official E-Library for the Institute of Engineering and Technology, Devi Ahilya Vishwavidyalaya. Specialized for B.Tech engineering students.

## Features

- Browse books by department
- AI-powered book recommendations
- Interactive dashboard for students
- Admin panel for managing library resources

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Google Generative AI

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Add your Google Generative AI API key
5. Run the development server: `npm run dev`

## Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be placed in the `dist/` directory.

To serve the production build locally:

```bash
npm run preview
```

## Deployment

This application is ready for deployment on platforms like Vercel, Netlify, or any static hosting service.

For Vercel deployment:
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally