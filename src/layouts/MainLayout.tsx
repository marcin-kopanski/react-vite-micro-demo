import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  // const { user } = useSessionContext();

  return (
    <>
      <div>Hello From Micro Frontend!!!</div>
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
