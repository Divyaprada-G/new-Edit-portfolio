import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { PageTransition } from './components/PageTransition';

// Pages
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { SystemsPage } from './pages/Systems';
import { TitanTsdbCaseStudy } from './pages/TitanTsdbCaseStudy';
import { VectorInferenceCaseStudy } from './pages/VectorInferenceCaseStudy';
import { TrafficSystemCaseStudy } from './pages/TrafficSystemCaseStudy';
import { ArchitectureLab } from './pages/ArchitectureLab';
import { ExperiencePage } from './pages/Experience';
import { FieldLogPage } from './pages/FieldLog';
import { EventDetailPage } from './pages/EventDetail';
import { LabPage } from './pages/Lab';
import { SignalsPage } from './pages/Signals';
import { ResumePage } from './pages/Resume';
import { ContactPage } from './pages/Contact';

const AppContent: React.FC = () => {
  const { currentPath, eventId } = useRouter();
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && paletteOpen) {
        setPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paletteOpen]);

  // Update document title dynamically based on active page
  useEffect(() => {
    let title = 'Divyaprada G // Systems & AI Infrastructure Portfolio';

    if (currentPath === '/about') {
      title = 'Engineering Journey & Philosophy // Divyaprada G';
    } else if (currentPath === '/systems') {
      title = 'System Lab // Core Distributed Engines // Divyaprada G';
    } else if (currentPath === '/systems/titan-tsdb') {
      title = 'Titan TSDB // Time-Series Storage Engine // Divyaprada G';
    } else if (currentPath === '/systems/vector-inference') {
      title = 'Vector Search & LLM Inference Runtime // Divyaprada G';
    } else if (currentPath === '/systems/traffic-system') {
      title = 'Real-Time Traffic Telemetry Engine // Divyaprada G';
    } else if (currentPath === '/architecture') {
      title = 'Architecture Lab // Interactive Schematics // Divyaprada G';
    } else if (currentPath === '/experience') {
      title = 'Build History & Experience // Divyaprada G';
    } else if (currentPath === '/field-log') {
      title = 'Technical Field Log // Visual Archive // Divyaprada G';
    } else if (currentPath.startsWith('/field-log/')) {
      title = `Field Story // ${eventId || 'Event'} // Divyaprada G`;
    } else if (currentPath === '/lab') {
      title = 'Engineering Lab // Interactive Playground // Divyaprada G';
    } else if (currentPath === '/signals') {
      title = 'Engineering Signals & Systems Essays // Divyaprada G';
    } else if (currentPath === '/resume') {
      title = 'Resume // Divyaprada G // Software Engineer';
    } else if (currentPath === '/contact') {
      title = 'Establish Connection // Divyaprada G';
    }

    document.title = title;
  }, [currentPath, eventId]);

  // Route Dispatcher
  const renderCurrentPage = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/systems') {
      return <SystemsPage />;
    }
    if (currentPath === '/systems/titan-tsdb') {
      return <TitanTsdbCaseStudy />;
    }
    if (currentPath === '/systems/vector-inference') {
      return <VectorInferenceCaseStudy />;
    }
    if (currentPath === '/systems/traffic-system') {
      return <TrafficSystemCaseStudy />;
    }
    if (currentPath === '/architecture') {
      return <ArchitectureLab />;
    }
    if (currentPath === '/experience') {
      return <ExperiencePage />;
    }
    if (currentPath === '/field-log') {
      return <FieldLogPage />;
    }
    if (currentPath.startsWith('/field-log/') && eventId) {
      return <EventDetailPage eventId={eventId} />;
    }
    if (currentPath === '/lab') {
      return <LabPage />;
    }
    if (currentPath === '/signals') {
      return <SignalsPage />;
    }
    if (currentPath === '/resume') {
      return <ResumePage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Default fallback
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Top Navigation */}
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />

      {/* Main Page Stage with Animated Transition */}
      <main className="flex-1 w-full">
        <PageTransition pageKey={currentPath}>
          {renderCurrentPage()}
        </PageTransition>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Command Palette Overlay */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
