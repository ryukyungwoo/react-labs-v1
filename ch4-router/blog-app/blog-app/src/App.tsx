import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/Hompage";
import AboutPage from "./pages/AboutPage";
import PostListPage from "./pages/PostListPage";
import Navbar from "./components/Navbar";
import PostDetailPage from "./pages/PostDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
