import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import AuthorInfo from "./components/AuthorInfo/AuthorInfo";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Stats from "./components/Stats/Stats";

function App() {
  const routes = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/post/:id',
          element: <PostDetails />,
          children: [
            { path: 'authorInfo', element: <AuthorInfo /> }
          ]
        },
        { path: '/about', element: <About /> },
        { path: '/stats', element: <Stats /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;