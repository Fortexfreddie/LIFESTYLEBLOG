import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Manage from "./pages/admin/Manage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArticleDetail/:id" element={<ArticleDetail />} />
        <Route path="/admin/Manage" element={<Manage />} />
      </Routes>
    </>    
  )
}

export default App
