import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mentora - AI Career Coach",
  description:
    "Mentor AI is your smart, personalized career coach powered by AI. Get tailored industry insights, resume builder, cover letter writer, and interview preparation tools to help you achieve your career goals.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${spaceGrotesk.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen ">{children}</main>
            {/* footer */}
            <footer className="bg-muted/50 py-12 ">
              <div className="container px-4 text-neutral-200 text-center mx-auto">
                <p> © {new Date().getFullYear()} Mentora - AI Career Coach</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
