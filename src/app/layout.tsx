import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { LanguageProvider } from "@/lib/i18n";
import { A11yProvider } from "@/lib/a11y";
import { LANG_COOKIE, A11Y_COOKIE, parseA11yCookie, a11yClasses } from "@/lib/prefs";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Lang } from "@/lib/types";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ARAM — Find your path | உங்கள் பாதையைக் கண்டறியுங்கள்",
    template: "%s | ARAM",
  },
  description:
    "Free bilingual careers guidance for Sri Lankan students: explore careers, compare pathways, find training providers, and get help — in Tamil and English.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Language and accessibility choices persist via cookies (spec 2.1, 2.3)
  // and are applied server-side so the first paint is already correct.
  const cookieStore = await cookies();
  const lang: Lang = cookieStore.get(LANG_COOKIE)?.value === "ta" ? "ta" : "en";
  const a11y = parseA11yCookie(cookieStore.get(A11Y_COOKIE)?.value);

  return (
    <html lang={lang} className={a11yClasses(a11y) || undefined}>
      <body>
        <LanguageProvider initial={lang}>
          <A11yProvider initial={a11y}>
            <NavBar />
            <main id="main">{children}</main>
            <Footer />
          </A11yProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
