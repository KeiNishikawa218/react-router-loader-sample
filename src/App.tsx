import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loaderFuncNG, loaderFuncOK } from "./func";

import { ErrorComponent } from "./Error";
import { Sample } from "./Sample";
import { useMemo } from "react";

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "",
          element: <Sample />,
          loader: loaderFuncOK,
        },
        {
          path: "/ng",
          element: <Sample />,
          loader: loaderFuncNG,
          errorElement: <ErrorComponent />,
        },
        { path: "*", element: <div>else</div> },
      ]),
    []
  );
  return <RouterProvider router={router} />;
}

export default App;
