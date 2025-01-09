import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./app/Router/Router";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "utils/I18next/I18n";
import "styles/global.scss";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
