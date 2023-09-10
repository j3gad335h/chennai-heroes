import "./globals.css";
import { Inter } from "next/font/google";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chennai Heroes | Clash Royale",
  description: "Clash royale team based on Tamilnadu, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050816] text-white`}>
        <Box component="main">
          <Toolbar />
          {children}
        </Box>
      </body>
    </html>
  );
}
