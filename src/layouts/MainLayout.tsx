import { Link, Outlet } from "react-router-dom";
import { useSharedContext } from "react-vite-shared-library";

export const MainLayout = () => {
  const { state } = useSharedContext();

  return (
    <>
      <div>Hello {state?.user.name} From Micro Frontend!!!</div>
      <div>
        <ul>
          <li>
            <Link to={"../"}>Back</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"sub-1"}>Subpage 1</Link>
          </li>
          <li>
            <Link to={"sub-2"}>Subpage 2</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
