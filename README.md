# Assignment 3

A Next.js project for DESN3035-Assignment 3 showcasing a modern website for a digital product. This project integrates **Supabase** for simple backend functionality (importing user reviews) and **Swiper** for interactive carousels.

## Table of Contents

- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Additional Instructions](#additional-instructions)

---

# Project Setup

### 1. Ensure you have the following installed:

- Node.js (version 18 or later)
- npm (comes with Node.js)


### 2.Clone this repository and install dependencies:

```bash 
git clone https://github.com/mashachitchyan/assignment-3.git

npm install
```

# Scripts

- **npm run dev** - Runs the development server.
- **npm run build** - Builds the production-ready application.
- **npm start** - Starts the production server.
- **npm run lint** - Runs linting for code quality checks.
- **npm run predeploy** - to build the app before deploying.
- **npm run deploy** - Deploys the app to GitHub Pages.

# Dependencies 
### Core Libraries 
- **Next.js:** Framework for React applications.
- **React/React-DOM:** Core libraries for building and rendering React components.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Swiper:** Library for creating interactive carousels.

### Backend 
- **Supabase:** Open-source backend as a service.

### Deployment 
- **gh-pages:** Deploys the project to GitHub Pages.


# Development Workflow

1. Start the development server:

```bash
npm run dev 
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

3.  Make changes to your code and see the changes reflected in the browser.


# Deployment 

This project is configured to deploy to GitHub Pages. To deploy:

1. Build the project for deployment:

```bash
npm run build
```

2. Deploy to GitHub Pages:

```bash
npm run deploy 
```

3. From the settings tab go to pages and select GitHub Actions as source for build and deployment. Configure through next.js.

# Additional Instructions
## Setting up Supabase
1. Install the Supabase client library (already included in the dependencies):
```bash
npm install @supabase/supabase-js
```
2. Set up your Supabase project:
- Go to the Supabase Dashboard.
- Create a new project and note your API keys and project URL.

3. Configure Supabase in your app:
```bash 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';
export const supabase = createClient(supabaseUrl, supabaseKey);
```

Find more about Supabase uses and methods at [Supabase Docs](https://supabase.com/docs).

## Installing and Using Swiper
1. Install the Swiper library (already included in the dependencies):
```bash
npm install swiper
```

2. Import Swiper styles in your project. Add this to your global CSS or the specific component:
```bash
@import 'swiper/css';

@import 'swiper/css/navigation';
@import 'swiper/css/pagination';
```

3. For more details, visit the [Swiper documentation](https://swiperjs.com).

###










