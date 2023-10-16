import { useContext } from "react";
import { SharedContext } from "react-vite-shared-library";

export const MicroDemo = () => {
  const { state } = useContext(SharedContext);

  return (
    state != undefined ?? (
      <>
        <div className="asdca">Micro Demo</div>
        <div>{state?.user.name}</div>
        <button
          onClick={() =>
            state?.setUser({ ...state?.user, name: "Marcin change" })
          }
        >
          Click
        </button>
      </>
    )
  );
};
