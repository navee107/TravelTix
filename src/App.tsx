/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PackageDetails from './pages/PackageDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900 dark:bg-[#0a0a0a] dark:text-slate-200 transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<PackageDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
