
# Project Title

The repository name "Vida-vedio-call-app" suggests this is a video calling application called "Vida". The name "Vida" (which means "life" in Spanish and Portuguese) combined with the video call functionality creates an appropriate project title that emphasizes bringing people together through video communication.


## Tech Stack

Frontend: React + Vite for fast development and build process

Backend: Node.js + Express for REST API and server logic

Database: MongoDB for user data and chat history

Real-time Features: WebRTC for peer-to-peer video calls and Stream API for enhanced communication features

Styling: DaisyUI (Tailwind CSS framework) for responsive UI components

Icons: Lucide React for consistent iconography

## Acknowledgements
Repository & Code
GitHub Repository: https://github.com/Samradh2024/Vida-vedio-call-app.git

Clone Command: git clone https://github.com/Samradh2024/Vida-vedio-call-app.git

Developer Profile
GitHub Profile: https://github.com/Samradh2024

Technology Stack Documentation
Backend Technologies
Node.js Documentation: https://nodejs.org/docs/

Express.js Documentation: https://expressjs.com/

Nodemon Documentation: https://nodemon.io/

MongoDB Documentation: https://www.mongodb.com/docs/

Frontend Technologies
React Documentation: https://react.dev/

Vite Documentation: https://vitejs.dev/

DaisyUI Documentation: https://daisyui.com/

Lucide React Icons: https://lucide.dev/guide/packages/lucide-react

Video Call & Communication
Stream API Documentation: https://getstream.io/video/docs/

Stream React SDK: https://getstream.io/video/docs/react/
MongoDB Atlas: https://www.mongodb.com/atlas (for cloud database)

Vercel: https://vercel.com/ (for frontend deployment)

Render: https://render.com/ (for backend deployment)

## Appendix

A. Technology Stack Details
Frontend Dependencies
json
{
  "react": "^18.2.0",
  "vite": "^4.4.0",
  "daisyui": "^3.5.0",
  "lucide-react": "^0.263.1",
  "@vitejs/plugin-react": "^4.0.0",
  "tailwindcss": "^3.3.0"
}
Backend Dependencies
json
{
  "express": "^4.18.2",
  "node": "^18.0.0",
  "nodemon": "^3.0.1",
  "mongodb": "^5.7.0",
  "mongoose": "^7.4.0",
  "stream-chat": "^8.0.0",
  "stream-video-node": "^0.2.0"
}
B. Project Structure
text
Vida-video-call-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VideoCall/
│   │   │   ├── Chat/
│   │   │   ├── UI/
│   │   │   └── Auth/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   ├── package.json
│   └── server.js
├── README.md
└── package.json
C. Environment Variables
Frontend (.env)
text
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_TITLE=Vida Video Call App
Backend (.env)
text
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vida
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_secret
JWT_SECRET=your_jwt_secret
NODE_ENV=development
D. Installation & Setup Guide
Prerequisites
Node.js (v18.0.0 or higher)

MongoDB (v5.0 or higher)

npm or yarn package manager

Stream.io account for video/chat API

Installation Steps
Clone Repository

bash
git clone https://github.com/Samradh2024/Vida-vedio-call-app.git
cd Vida-vedio-call-app
Backend Setup

bash
cd backend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
Frontend Setup

bash
cd frontend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
Database Setup

bash
# Start MongoDB service
mongod --dbpath /path/to/your/db

# Or use MongoDB Atlas cloud service
E. API Endpoints Summary
Authentication Routes
POST /api/auth/register - User registration

POST /api/auth/login - User login

POST /api/auth/logout - User logout

GET /api/auth/profile - Get user profile

Video Call Routes
GET /api/calls - Get all calls

POST /api/calls/create - Create new call

GET /api/calls/:id - Get call details

DELETE /api/calls/:id - End call

Chat Routes
GET /api/messages - Get messages

POST /api/messages - Send message

GET /api/messages/:id - Get specific message

User Routes
GET /api/users - Get all users

GET /api/users/:id - Get user by ID

PUT /api/users/:id - Update user

DELETE /api/users/:id - Delete user

F. Database Schema
User Collection
javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  avatar: String,
  isOnline: Boolean,
  lastSeen: Date,
  createdAt: Date,
  updatedAt: Date
}
Call Collection
javascript
{
  _id: ObjectId,
  callId: String,
  participants: [ObjectId],
  startTime: Date,
  endTime: Date,
  duration: Number,
  status: String,
  type: String, // 'video' | 'audio'
  createdAt: Date
}
Message Collection
javascript
{
  _id: ObjectId,
  sender: ObjectId,
  receiver: ObjectId,
  message: String,
  messageType: String, // 'text' | 'image' | 'file'
  timestamp: Date,
  isRead: Boolean,
  roomId: String
}
G. Deployment Instructions
Frontend Deployment (Vercel)
bash
npm run build
# Deploy to Vercel
vercel --prod
Backend Deployment (Render/Railway)
bash
# Build for production
npm run build
# Set environment variables in deployment platform
# Deploy using Git integration
Database Deployment (MongoDB Atlas)
Create MongoDB Atlas cluster

Configure network access

Update connection string in environment variables

H. Testing Configuration
Frontend Testing
json
{
  "jest": "^29.0.0",
  "@testing-library/react": "^13.0.0",
  "@testing-library/jest-dom": "^5.16.0",
  "vitest": "^0.34.0"
}
Backend Testing
json
{
  "jest": "^29.0.0",
  "supertest": "^6.3.0",
  "mongodb-memory-server": "^8.15.0"
}

## Color Reference

# Color References

## DaisyUI Color Palette

### **Primary Colors**
```css
:root {
  --p: 259 94% 51%;           /* primary */
  --pf: 259 94% 41%;          /* primary-focus */
  --pc: 0 0% 100%;            /* primary-content */
}
```

### **Secondary Colors**
```css
:root {
  --s: 314 100% 47%;          /* secondary */
  --sf: 314 100% 37%;         /* secondary-focus */
  --sc: 0 0% 100%;            /* secondary-content */
}
```

### **Accent Colors**
```css
:root {
  --a: 174 60% 51%;           /* accent */
  --af: 174 60% 41%;          /* accent-focus */
  --ac: 0 0% 100%;            /* accent-content */
}
```

### **Neutral Colors**
```css
:root {
  --n: 219 14% 28%;           /* neutral */
  --nf: 219 14% 23%;          /* neutral-focus */
  --nc: 0 0% 100%;            /* neutral-content */
}
```

## Video Call Interface Colors

### **Video Call Controls**
```css
.video-controls {
  --call-active: #10b981;     /* Green - Active call */
  --call-muted: #ef4444;      /* Red - Muted/Ended */
  --call-waiting: #f59e0b;    /* Amber - Waiting */
  --control-bg: rgba(0, 0, 0, 0.7);  /* Control overlay */
}
```

### **Chat Interface**
```css
.chat-colors {
  --message-sent: #3b82f6;    /* Blue - Sent messages */
  --message-received: #6b7280; /* Gray - Received messages */
  --chat-bg: #f9fafb;         /* Light gray - Chat background */
  --online-status: #10b981;   /* Green - Online indicator */
  --offline-status: #6b7280;  /* Gray - Offline indicator */
}
```

## Status & Notification Colors

### **Success States**
```css
:root {
  --su: 158 64% 52%;          /* success */
  --suf: 158 64% 42%;         /* success-focus */
  --suc: 0 0% 100%;           /* success-content */
}
```

### **Warning States**
```css
:root {
  --wa: 43 96% 56%;           /* warning */
  --waf: 43 96% 46%;          /* warning-focus */
  --wac: 0 0% 100%;           /* warning-content */
}
```

### **Error States**
```css
:root {
  --er: 0 91% 71%;            /* error */
  --erf: 0 91% 61%;           /* error-focus */
  --erc: 0 0% 100%;           /* error-content */
}
```

### **Info States**
```css
:root {
  --in: 198 93% 60%;          /* info */
  --inf: 198 93% 50%;         /* info-focus */
  --inc: 0 0% 100%;           /* info-content */
}
```

## Background & Base Colors

### **Base Colors**
```css
:root {
  --b1: 0 0% 100%;            /* base-100 - Main background */
  --b2: 0 0% 95%;             /* base-200 - Secondary background */
  --b3: 0 0% 90%;             /* base-300 - Tertiary background */
  --bc: 215 28% 17%;          /* base-content - Text color */
}
```

### **Glass Effect Colors**
```css
.glass-effects {
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: rgba(0, 0, 0, 0.1);
}
```

## Custom Application Colors

### **Vida Brand Colors**
```css
:root {
  --vida-primary: #6366f1;    /* Indigo - Main brand */
  --vida-secondary: #8b5cf6;  /* Purple - Secondary brand */
  --vida-accent: #06b6d4;     /* Cyan - Accent color */
  --vida-dark: #1e293b;       /* Slate - Dark theme */
  --vida-light: #f8fafc;      /* Slate - Light theme */
}
```

### **Video Interface Specific**
```css
.video-ui {
  --participant-border: #3b82f6;     /* Blue - Active participant */
  --screen-share-bg: #1f2937;        /* Gray - Screen share background */
  --recording-indicator: #dc2626;    /* Red - Recording indicator */
  --connection-good: #10b981;        /* Green - Good connection */
  --connection-poor: #f59e0b;        /* Amber - Poor connection */
  --connection-lost: #ef4444;        /* Red - Lost connection */
}
```

## Lucide React Icon Colors

### **Icon Color Classes**
```css
.icon-colors {
  --icon-primary: #6366f1;
  --icon-secondary: #6b7280;
  --icon-success: #10b981;
  --icon-warning: #f59e0b;
  --icon-error: #ef4444;
  --icon-muted: #9ca3af;
}
```

### **Common Icon States**
```jsx
// Video call icons
<Video className="text-green-500" />      /* Active video */
<VideoOff className="text-red-500" />     /* Video off */
<Mic className="text-blue-500" />         /* Active mic */
<MicOff className="text-red-500" />       /* Mic off */
<Phone className="text-green-500" />      /* Active call */
<PhoneOff className="text-red-500" />     /* End call */
```

## Dark Theme Colors

### **Dark Mode Variables**
```css
[data-theme="dark"] {
  --b1: 212 18% 10%;          /* Dark background */
  --b2: 212 18% 15%;          /* Dark secondary */
  --b3: 212 18% 20%;          /* Dark tertiary */
  --bc: 0 0% 90%;             /* Light text */
  --vida-dark-primary: #4f46e5;
  --vida-dark-bg: #0f172a;
  --vida-dark-surface: #1e293b;
}
```

## Responsive Color Usage

### **Mobile Interface**
```css
@media (max-width: 768px) {
  .mobile-colors {
    --touch-target: 44px;      /* Minimum touch target */
    --mobile-primary: #6366f1;
    --mobile-bg: #f8fafc;
  }
}
```

### **Tablet Interface**
```css
@media (min-width: 769px) and (max-width: 1024px) {
  .tablet-colors {
    --tablet-sidebar: #f1f5f9;
    --tablet-content: #ffffff;
  }
}
```

## Color Utility Classes

### **Background Colors**
```css
.bg-vida-primary { background-color: var(--vida-primary); }
.bg-vida-secondary { background-color: var(--vida-secondary); }
.bg-call-active { background-color: var(--call-active); }
.bg-call-muted { background-color: var(--call-muted); }
```

### **Text Colors**
```css
.text-vida-primary { color: var(--vida-primary); }
.text-vida-secondary { color: var(--vida-secondary); }
.text-success { color: var(--su); }
.text-error { color: var(--er); }
```

### **Border Colors**
```css
.border-vida-primary { border-color: var(--vida-primary); }
.border-call-active { border-color: var(--call-active); }
.border-neutral { border-color: var(--n); }
```

## Accessibility Colors

### **High Contrast Mode**
```css
@media (prefers-contrast: high) {
  :root {
    --high-contrast-bg: #000000;
    --high-contrast-text: #ffffff;
    --high-contrast-border: #ffffff;
  }
}
```

### **Color Blind Friendly**
```css
.colorblind-safe {
  --safe-success: #0073e6;    /* Blue instead of green */
  --safe-error: #d73027;      /* Strong red */
  --safe-warning: #fc8d02;    /* Orange */
}
```
## Demo

Insert gif or link to demo


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Documentation

Frontend Technologies
React Documentation: https://react.dev/

React Hooks: https://react.dev/reference/react

React Router: https://reactrouter.com/

Vite Documentation: https://vitejs.dev/

Vite Config: https://vitejs.dev/config/

Vite Plugins: https://vitejs.dev/plugins/

Backend Technologies
Node.js Documentation: https://nodejs.org/docs/

Node.js API Reference: https://nodejs.org/api/

Express.js Documentation: https://expressjs.com/

Express API Reference: https://expressjs.com/en/4x/api.html

Express Middleware: https://expressjs.com/en/guide/using-middleware.html

Nodemon Documentation: https://nodemon.io/

Database
MongoDB Documentation: https://www.mongodb.com/docs/

MongoDB Atlas: https://www.mongodb.com/docs/atlas/

Mongoose ODM: https://mongoosejs.com/docs/

MongoDB Compass: https://www.mongodb.com/docs/compass/

Video Call & Chat APIs
Stream.io Documentation
Stream Video API: https://getstream.io/video/docs/

Stream Chat API: https://getstream.io/chat/docs/

Stream React SDK: https://getstream.io/video/docs/react/

Stream Video React Components: https://getstream.io/video/docs/react/components/

Stream Chat React Components: https://getstream.io/chat/docs/sdk/react/

WebRTC Resources
WebRTC Documentation: https://webrtc.org/

MDN WebRTC Guide: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API

WebRTC Samples: https://webrtc.github.io/samples/

UI & Styling
DaisyUI Documentation
DaisyUI Components: https://daisyui.com/components/

DaisyUI Themes: https://daisyui.com/docs/themes/

DaisyUI Installation: https://daisyui.com/docs/install/

DaisyUI Config: https://daisyui.com/docs/config/

Tailwind CSS
Tailwind CSS Documentation: https://tailwindcss.com/docs

Tailwind UI Components: https://tailwindui.com/

Tailwind Play: https://play.tailwindcss.com/

Lucide React Icons
Lucide React Documentation: https://lucide.dev/guide/packages/lucide-react

Lucide Icon Library: https://lucide.dev/icons/

Lucide GitHub: https://github.com/lucide-icons/lucide

Development Tools
Package Managers
npm Documentation: https://docs.npmjs.com/

Yarn Documentation: https://yarnpkg.com/getting-started

pnpm Documentation: https://pnpm.io/

Version Control
Git Documentation: https://git-scm.com/doc

GitHub Docs: https://docs.github.com/

GitHub Actions: https://docs.github.com/en/actions

Testing & Quality
Testing Frameworks
Jest Documentation: https://jestjs.io/docs/getting-started

React Testing Library: https://testing-library.com/docs/react-testing-library/intro/

Vitest Documentation: https://vitest.dev/

Supertest: https://github.com/ladjs/supertest

Code Quality
ESLint Documentation: https://eslint.org/docs/latest/

Prettier Documentation: https://prettier.io/docs/en/index.html

Husky Git Hooks: https://typicode.github.io/husky/

Deployment & Hosting
Frontend Deployment
Vercel Documentation: https://vercel.com/docs

Netlify Documentation: https://docs.netlify.com/

GitHub Pages: https://docs.github.com/en/pages

Backend Deployment
Render Documentation: https://render.com/docs

Railway Documentation: https://docs.railway.app/

Heroku Documentation: https://devcenter.heroku.com/

AWS Documentation: https://docs.aws.amazon.com/

Database Hosting
MongoDB Atlas Documentation: https://www.mongodb.com/docs/atlas/

PlanetScale Documentation: https://planetscale.com/docs

Security & Authentication
Authentication Libraries
JWT Documentation: https://jwt.io/introduction

bcrypt Documentation: https://github.com/kelektiv/node.bcrypt.js

