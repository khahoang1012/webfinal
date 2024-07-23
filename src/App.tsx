import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import AllPage from "./Page/All/AllPage";
import Card from "./Page/Card/Card";
import Layout from "./Layout";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<AllPage />} />
        <Route path="/card" element={<Card />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
