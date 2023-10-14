import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "src/layouts/MainLayout";
import { MicroDemo } from "src/pages/micro-demo/MicroDemo";

const MicroDemoRoutes = () => {
  const routes = useMemo(
    () =>
      createBrowserRouter(
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
      ),
    [],
  );

  // it is separate navigation system
  return <RouterProvider router={routes} />;
};

export default MicroDemoRoutes;
