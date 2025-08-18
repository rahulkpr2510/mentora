import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Seamless Onboarding",
    description:
      "Set up your profile by sharing your background and career goals for tailored guidance.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Build Career Documents",
    description:
      "Generate polished, ATS-friendly resumes and impactful cover letters with AI assistance.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Ace Your Interviews",
    description:
      "Practice through AI-driven mock sessions with role-specific questions and instant feedback.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Measure Your Growth",
    description:
      "Track progress over time with detailed analytics and personalized improvement insights.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
