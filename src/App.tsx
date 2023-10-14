import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  FC,
  lazy,
  PropsWithChildren,
  Suspense,
  useEffect,
  useState,
} from "react";
import { SessionContextProvider } from "src/contexts/SessionContext";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
  // @ts-ignore
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

export const App: FC<PropsWithChildren> = ({ children }) => {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider>{children}</SessionContextProvider>

      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};
