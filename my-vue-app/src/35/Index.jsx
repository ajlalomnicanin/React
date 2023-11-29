import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <p>Page Not Found</p> },
]);

export const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
