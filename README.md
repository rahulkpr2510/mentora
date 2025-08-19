<div align="center">
  <h1 align="center">💼 Mentora – AI Career Coach</h1>
  <p align="center">
    An <b>AI-powered career coaching platform</b> designed to guide professionals in their career journey with personalized insights, tools, and strategies for success.
  </p>
  <br />
  <img src="public/banner.jpeg" alt="Mentora Banner" width="100%" />

<br /><br />

  <!-- Tech Badges -->
  <img src="https://img.shields.io/badge/-Next.js_15-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/-React_19-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=white&color=336791" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white&color=1C1C1C" alt="Clerk" />
  <img src="https://img.shields.io/badge/-Google_Gemini-black?style=for-the-badge&logo=googlegemini&logoColor=white&color=4285F4" alt="Gemini AI" />
  <img src="https://img.shields.io/badge/-Radix_UI-black?style=for-the-badge&logo=radixui&logoColor=white&color=0F172A" alt="Radix UI" />
  <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logo=inngest&logoColor=white&color=3C82F6" alt="Inngest" />
  <img src="https://img.shields.io/badge/-Vercel_Deployment-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/-MIT_License-black?style=for-the-badge&logoColor=white&color=yellow" alt="License" />
</div>

---

## 📋 Table of Contents

- [🌟 Features](#features)
- [⚙️ Tech Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
- [📚 Project Structure](#project-structure)
- [🔄 Data Flow](#data-flow)
- [🚢 Deployment](#deployment)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

---

<a name="features"></a>

## 🌟 Features

### 🧠 AI-Powered Career Guidance

- Personalized career strategies and actionable insights
- Tailored recommendations based on skills, experience, and goals
- Continuously adapts to career progress

### 📊 Real-Time Industry Insights

- Live industry trends & salary benchmarks
- Growth rate & demand indicators for roles
- Skill recommendations for career advancement

### 📝 AI-Optimized Resume Builder

- ATS-friendly, polished resumes
- Markdown editor with **live preview**
- One-click **Export to PDF**
- AI suggestions to improve content

### ✉️ Intelligent Cover Letter Generator

- Tailored cover letters per job description
- Auto-highlights relevant skills & experiences
- Professional formatting with business-ready tone

### 🎓 Interview Preparation

- Role-specific interview practice questions
- Real-time AI-powered feedback
- Performance analytics & improvement tips
- Technical quizzes with explanations

### 📈 Progress Tracking

- Career progress dashboard
- Interview performance monitoring
- Skill development analytics
- Personalized improvement insights

---

<a name="tech-stack"></a>

## ⚙️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **AI Integration**: Google Gemini (Generative AI)
- **Styling**: Tailwind CSS + Radix UI components
- **Form Handling**: React Hook Form, Zod validation
- **Background Jobs**: Inngest
- **Deployment**: Vercel

---

<a name="getting-started"></a>

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn
- PostgreSQL

### **Clone the Repository**

```bash
git clone https://github.com/rahulkpr2510/mentora.git
cd mentora
```

### Install Dependencies

```
npm install
# or
yarn install
```

### Set Environment Variables

Create a .env.local file:

```
DATABASE_URL="postgresql://username:password@localhost:5432/mentora"
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
GEMINI_API_KEY=your_gemini_api_key
```

### Run Migrations

```
npx prisma migrate dev
```

### Start Development Server

```
npm run dev
# or
yarn dev
```

Open 👉 http://localhost:3000

## 📚 Project Structure

/actions → Server actions for data ops
/app → Next.js routes & components
/components → Reusable UI components
/data → Static app data
/lib → Utils & database client
/prisma → DB schema & migrations
/public → Static assets

## 🔄 Data Flow

    1.	User Authentication → Clerk
    2.	Profile & Preferences → PostgreSQL
    3.	AI Content Generation → Google Gemini
    4.	Industry Insights → Periodic jobs via Inngest
    5.	Resumes & Cover Letters → Stored in database

## 🚢 Deployment

Mentora is optimized for Vercel ⚡ 1. Connect repo → Vercel 2. Add environment variables 3. Deploy with defaults

### 📖 For alternatives → Next.js Deployment Docs

## 🤝 Contributing

Contributions are welcome! 1. Fork repo 2. Create branch → git checkout -b feature/awesome-feature 3. Commit → git commit -m "Add feature" 4. Push → git push origin feature/awesome-feature 5. Open PR 🚀

## 📄 License

This project is licensed under MIT License – free to use, modify, and distribute with attribution.

<div align="center">
  🚀 Built with ❤️  by Rahul — using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>AI-powered tech</strong>.
</div>
