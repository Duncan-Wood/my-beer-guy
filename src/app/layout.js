import { Inter } from "next/font/google";
import "./components/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Beer Guy",
  description: "Defenders of the draft",
};

export default function RootLayout(props) {
  const modal = props.modal;
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          {modal}
          {props.children}
      </body>
    </html>
  );
}
