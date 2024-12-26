import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ApartInfo from "./pages/ApartInfo";
import News from "./pages/News";
import PoorApart from "./pages/PoorApart";
import Report from "./pages/Report";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <ApartInfo /> },
      { path: "/poor", element: <PoorApart /> },
      { path: "/news", element: <News /> },
      { path: "/report", element: <Report /> },
    ],
  },
]);

export default Router;
