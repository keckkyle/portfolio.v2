import App from "./App";
import Bryan from "./Components/Bryan";
import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buchheister/text/20240810/something-i-wrote-to-you",
    element: <Bryan />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
