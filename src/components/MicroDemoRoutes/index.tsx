import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MicroDemo } from "src/pages/micro-demo/MicroDemo";

const MicroDemoRoutes = () => {
  const routes = useMemo(
    () =>
      createBrowserRouter(
        [
          {
            path: "/",
            element: <MicroDemo />,
            children: [
              {
                index: true,
                element: <>Home</>,
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
