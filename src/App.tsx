/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { CursorGlow } from './components/CursorGlow';
import { PageTransition } from './components/PageTransition';
import { SmoothScrollProvider } from './components/SmoothScroll';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollIndicatorHUD } from './components/ScrollIndicatorHUD';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { WorkWithMar } from './pages/WorkWithMar';
import { Works } from './pages/Works';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<NavRoute>('/');

  // Guarantee that on initial load or browser refresh, the app always lands on the Home page ('/')
  useEffect(() => {
    setCurrentRoute('/');

    // Clear any residual URL hash (e.g., #services or #/services) so refresh stays on Home
    if (window.location.hash) {
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch {
        window.location.hash = '';
      }
    }
  }, []);

  const handleRouteChange = (route: NavRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return <Home onRouteChange={handleRouteChange} />;
      case '/about':
        return <About onRouteChange={handleRouteChange} />;
      case '/services':
        return <Services onRouteChange={handleRouteChange} />;
      case '/work-with-mar':
        return <WorkWithMar onRouteChange={handleRouteChange} />;
      case '/works':
        return <Works onRouteChange={handleRouteChange} />;
      case '/resume':
        return <Resume onRouteChange={handleRouteChange} />;
      case '/contact':
        return <Contact />;
      default:
        return <Home onRouteChange={handleRouteChange} />;
    }
  };

  return (
    <SmoothScrollProvider currentRoute={currentRoute}>
      <div className="relative min-h-screen bg-[#080614] text-slate-100 selection:bg-purple-600 selection:text-white flex flex-col justify-between overflow-x-hidden">
        {/* Top Pinned Ambient Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Static Ambient Atmospheric Background */}
        <BackgroundOrbs />

        {/* Performant Desktop Cursor Spotlight */}
        <CursorGlow />

        {/* Fixed Sticky Header Navigation with Monogram Logo */}
        <Navbar currentRoute={currentRoute} onRouteChange={handleRouteChange} />

        {/* Main Content Area with Page Transitions */}
        <main className="flex-grow w-full z-10">
          <PageTransition currentRoute={currentRoute}>
            {renderCurrentPage()}
          </PageTransition>
        </main>

        {/* Interactive Floating Circular Scroll Progress & Back-to-Top HUD */}
        <ScrollIndicatorHUD />

        {/* Global Footer with Monogram & 2026 Copyright */}
        <Footer onRouteChange={handleRouteChange} />
      </div>
    </SmoothScrollProvider>
  );
}

