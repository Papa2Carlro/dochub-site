import { Route, Routes } from "react-router-dom";
import { BenchmarkPage } from "./pages/BenchmarkPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="benchmark" element={<BenchmarkPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
