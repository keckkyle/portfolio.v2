import App from "./App";
import Bryan from "./Components/Bryan";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/20240810/letter/to-you/from-me/thoughts-on-us",
    element: <Bryan />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
