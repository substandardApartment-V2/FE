import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ApartInfoPage from "./pages/ApartInfoPage";
import News from "./pages/News";
import WeakApartInfoPage from "./pages/WeakApartInfoPage";
import Report from "./pages/Report";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <ApartInfoPage /> },
      { path: "/poor", element: <WeakApartInfoPage /> },
      { path: "/news", element: <News /> },
      { path: "/report", element: <Report /> },
    ],
  },
]);

export default Router;
