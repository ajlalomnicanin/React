import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./HomePage";
// import Register from "./Register";
// import Login from "./Login";
// import UserContextProvider from "./UserContextProvider";
// // LocalStorage
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <UserContextProvider>
//         <HomePage />
//       </UserContextProvider>
//     ),
//   },
//   { path: "/register", element: <Register /> },
//   { path: "/login", element: <Login /> },
//   { path: "*", element: <p>Page Not Found</p> },
// ]);

// export const Class31 = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UserContextProvider from "./UserContextProvider";
// pravimo register, login, home page
// da napravite rute za to i napravite komponenete za svaku rutu
// / => home; /register => register; /login => login

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
