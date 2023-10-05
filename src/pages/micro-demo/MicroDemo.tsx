import { Link, Outlet } from "react-router-dom";

export const MicroDemo = () => {
  return (
    <>
      <div>Hello From Micro Frontend!!! test test</div>
      <div>
        <ul>
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
