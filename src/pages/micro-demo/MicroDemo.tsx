import { useContext } from "react";
import { SharedContext } from "react-vite-shared-library";

export const MicroDemo = () => {
  const context = useContext(SharedContext);

  return (
    <>
      <div className="asdca">Micro Demo</div>
      <div>{context?.user.name}</div>
      <button
        onClick={() =>
          context?.setUser({ ...context?.user, name: "Marcin change" })
        }
      >
        Click
      </button>
    </>
  );
};
