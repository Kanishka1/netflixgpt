import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
        path: "/error",
        element: <Error/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
