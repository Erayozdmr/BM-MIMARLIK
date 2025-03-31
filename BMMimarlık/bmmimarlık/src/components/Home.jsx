import React, { lazy, Suspense } from "react";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";

// Lazy Load (Bileşenleri gerektiğinde yükler)
const HomeBanner = lazy(() => import("./Banner"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const Works = lazy(() => import("./Works"));
const Contact = lazy(() => import("./Contact"));

// Yükleme Animasyonu
const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
  </div>
);

const Home = () => {
  return (
    <main>
      {/* ✅ Banner (Ana Başlık) */}
      <Suspense fallback={<LoadingScreen />}>
        <HomeBanner />
      </Suspense>

      {/* ✅ Projeler */}
      <section
        id="projects"
        className="relative mt-10"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" className="sr-only">
          Projelerimiz
        </h2>
        <Suspense fallback={<LoadingScreen />}>
          <Projects />
        </Suspense>
      </section>

      {/* ✅ Hakkımızda */}
      <section id="about" className="mt-10" aria-labelledby="about-title">
        <h2 id="about-title" className="sr-only">
          Hakkımızda
        </h2>
        <Suspense fallback={<LoadingScreen />}>
          <About />
        </Suspense>
      </section>

      {/* ✅ Çalışmalarımız */}
      <section id="works" className="mt-10" aria-labelledby="works-title">
        <h2 id="works-title" className="sr-only">
          Çalışmalarımız
        </h2>
        <Suspense fallback={<LoadingScreen />}>
          <Works />
        </Suspense>
      </section>

      {/* ✅ İletişim */}
      <section id="contact" className="mt-10" aria-labelledby="contact-title">
        <h2 id="contact-title" className="sr-only">
          İletişim
        </h2>
        <Suspense fallback={<LoadingScreen />}>
          <Contact />
        </Suspense>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
};

export default Home;
