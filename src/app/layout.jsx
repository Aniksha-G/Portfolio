import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aniksha G - BCA Student | Full Stack Developer</title>

        <meta
          name="description"
          content="Aniksha G is a BCA student and aspiring Full Stack Developer interested in web development, software development, and artificial intelligence."
        />

        <meta
          name="keywords"
          content="Aniksha G, BCA Student, Full Stack Developer, React, Next.js, Web Development, Portfolio"
        />

        <meta name="robots" content="index, follow" />
      </head>

      <body className="lg:mx-20 xl:mx-36 bg-PrimaryBgLight dark:bg-PrimaryBgDark">
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
        >
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}