import { Route, Routes } from "react-router-dom";
import { Analytics } from "./components/Analytics";
import { Seo } from "./components/Seo";
import { BenchmarkPage } from "./pages/benchmark";
import { DocsPage } from "./pages/Docs";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <>
      <Seo />
      <Analytics />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="benchmark" element={<BenchmarkPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
