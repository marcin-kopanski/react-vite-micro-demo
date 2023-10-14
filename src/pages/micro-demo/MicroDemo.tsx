import { Link, Outlet } from "react-router-dom";
import { useSharedContext } from "react-vite-shared-library";

export const MicroDemo = () => {
  const context = useSharedContext();
  return (
    <>
      <div>Micro Demo</div>
      <div>{context?.user}</div>
    </>
  );
};
