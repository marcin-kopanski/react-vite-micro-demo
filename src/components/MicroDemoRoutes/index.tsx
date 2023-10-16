import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const MicroDemoRoutes = () => {
  // it is separate, from host app, navigation system
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default MicroDemoRoutes;
