import Header from './components/Header';
import NotificationPopup from './components/NotificationPopup';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EnrollmentStats from './components/EnrollmentStats';
import ProgramsSection from './components/ProgramsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <NotificationPopup />
      <main>
        <Hero />
        <AboutSection />
        <EnrollmentStats />
        <ProgramsSection />
        <GallerySection />
        <Footer />
      </main>
    </div>
  );
}

export default App;