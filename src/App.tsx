import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryShopPage } from './pages/GalleryShopPage';
import { VisitPage } from './pages/VisitPage';
import { SupportPage } from './pages/SupportPage';
import { BlogPage } from './pages/BlogPage';
export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery-shop" element={<GalleryShopPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Layout>
    </HashRouter>);

}