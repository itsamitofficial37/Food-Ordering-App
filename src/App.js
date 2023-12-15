import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurentMenu from "./components/RestaurentMenu";
import Cart from "./components/Cart";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          name: "Amit",
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const creatingRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Amit",
              age: 22,
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={creatingRouter} />);
