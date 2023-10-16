import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "src/layouts/MainLayout";
import { MicroDemo } from "src/pages/micro-demo/MicroDemo";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <MicroDemo />,
        },
        { path: "sub-1", element: <>Subpage 1</> },
        { path: "sub-2", element: <>Subpage 2</> },
      ],
    },
  ],
  {
    basename: "/micro-demo",
  },
);
