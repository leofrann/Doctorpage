import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { CookiePolicy } from './pages/CookiePolicy';
import { Links } from './pages/Links';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos" element={<TermsOfUse />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}
