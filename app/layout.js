import ThemeRegistry from "./theme/ThemeRegistry";

export const metadata = {
  title: "Awesome App Great Job",
  description: "Do great things with great app",
  keywords: "Great, Awesome",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <main>{children}</main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
