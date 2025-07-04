import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/AvisoLegal";
import Login from "./pages/login";
import Home from "./pages/home";
import Carta from "./pages/carta";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/Aviso-Legal" element={<LegalNotice />} />
        <Route path="/menu-comida" element={<Carta />} />
      </Route>
      <Route path="admin/login" element={<Login />} />
    </>
  )
);
