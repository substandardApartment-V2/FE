import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/Error/NotFound";
import Layout from "./components/Layout";
import ApartInfoPage from "./pages/ApartInfoPage";
import News from "./pages/News";
import Report from "./pages/Report";
import WeakApartInfoPage from "./pages/WeakApartInfoPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <ApartInfoPage /> },
      { path: "/weak", element: <WeakApartInfoPage /> },
      { path: "/news", element: <News /> },
      { path: "/report", element: <Report /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
