import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PATHS } from "utils/constants/Constants";
import {
  Countries,
  CountryDetailed,
  DetailedUniversity,
  Form,
  Home,
  NotFound,
  Reviews,
  Students,
  Universities,
} from "pages/index";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: PATHS.home,
        element: <Home />,
      },
      {
        path: PATHS.services,
        element: <Home />,
      },
      {
        path: PATHS.reviews,
        element: <Reviews />,
      },
      {
        path: PATHS.form,
        element: <Form />,
      },
      {
        path: PATHS.students,
        element: <Students />,
      },
      {
        path: PATHS.universities,
        element: <Universities />,
      },
      {
        path: PATHS.detailedUniversity,
        element: <DetailedUniversity />,
      },
      {
        path: PATHS.countries,
        element: <Countries />,
      },
      {
        path: PATHS.detailedCountry,
        element: <CountryDetailed />,
      },
      {
        path: PATHS.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
