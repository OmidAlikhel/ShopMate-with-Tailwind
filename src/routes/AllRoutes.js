import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "../pages/Index";

export const AllRoutes = () => {
  return (
    <>
      <main className="min-h-svh max-w-7xl m-auto mt-12">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
    </>
  );
};
