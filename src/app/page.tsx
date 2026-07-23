import BackgroundTexture from "@/components/BackgroundTexture";
import TechIconSprite from "@/components/TechIconSprite";
import CursorFX from "@/components/CursorFX";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  personalInfo,
  socialLinks,
  type Project,
  type ProjectSummary,
} from "@/data";
import { projects } from "@/data/projects";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: `Portafolio de ${SITE_NAME}`,
      description: SITE_DESCRIPTION,
      inLanguage: "es-PE",
      mainEntity: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#profile-photo` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: personalInfo.name,
      alternateName: personalInfo.shortName,
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#profile-photo`,
        url: absoluteUrl("/profile.jpeg"),
      },
      jobTitle: "Desarrollador Full Stack",
      description: personalInfo.about.es,
      email: personalInfo.email,
      telephone: personalInfo.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
        addressCountry: "PE",
      },
      sameAs: socialLinks
        .filter((link) => link.icon !== "mail")
        .map((link) => link.url),
      knowsAbout: [
        "Desarrollo backend",
        "Node.js",
        "TypeScript",
        "Next.js",
        "Flutter",
        "AWS",
        "Google Cloud",
        "SQL",
        "Analítica de datos",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `Portafolio de ${SITE_NAME}`,
      description: SITE_DESCRIPTION,
      inLanguage: "es-PE",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

const projectSummaries: ProjectSummary[] = projects.map(
  ({ fullDescription, features, images, ...summary }: Project) => {
    void fullDescription;
    void features;

    return {
      ...summary,
      imageCount: images?.length ?? 0,
    };
  },
);

export default function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <TechIconSprite />
      <BackgroundTexture />
      <CursorFX />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projectSummaries} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
