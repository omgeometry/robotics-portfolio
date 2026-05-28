import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Channing Tan | Robotics & Perception Engineer",
  description: "Portfolio of Channing Tan - Robotics software engineer specializing in autonomy, computer vision, ML systems, and controls. B.S. Electrical Engineering + B.A. Physics from University of Tennessee.",
  keywords: [
    "robotics",
    "computer vision",
    "machine learning",
    "autonomy",
    "perception",
    "controls",
    "ROS2",
    "embedded systems",
    "signal processing"
  ],
  authors: [{ name: "Channing Tan" }],
  openGraph: {
    title: "Channing Tan | Robotics & Perception Engineer",
    description: "Robotics software engineer specializing in autonomy, computer vision, and ML systems",
    url: "https://channingtan.com",
    siteName: "Channing Tan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Channing Tan | Robotics & Perception Engineer",
    description: "Robotics software engineer specializing in autonomy, computer vision, and ML systems",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
