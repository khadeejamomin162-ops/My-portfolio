import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudyDetail from "./pages/CaseStudyDetail";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHash />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
