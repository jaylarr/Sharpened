import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { BlogIndexPage } from "./pages/BlogIndexPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [hash, pathname]);

  return null;
}

export function App() {
  return (
    <Layout>
      <ScrollManager />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<BlogIndexPage />} path="/blog" />
        <Route element={<BlogArticlePage />} path="/blog/:slug" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Layout>
  );
}
