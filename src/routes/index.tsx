import { useRoutes } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { SuspenseComponent as Suspense } from "../utils";
import {
  Home,
  Movies,
  NowPlaying,
  Popular,
  SingleMovie,
  TopRated,
  UpComing,
} from "../pages";

function CustomRoutes() {
  return (
    <main className="h-screen">
      <Header />
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: (
            <Suspense>
              <Movies />
            </Suspense>
          ),
          children: [
            {
              path: ":id",
              element: (
                <Suspense>
                  <SingleMovie />
                </Suspense>
              ),
            },
            {
              path: "now-playing",
              element: (
                <Suspense>
                  <NowPlaying />
                </Suspense>
              ),
            },
            {
              path: "popular",
              element: (
                <Suspense>
                  <Popular />
                </Suspense>
              ),
            },
            {
              path: "top-rated",
              element: (
                <Suspense>
                  <TopRated />
                </Suspense>
              ),
            },
            {
              path: "up-coming",
              element: (
                <Suspense>
                  <UpComing />
                </Suspense>
              ),
            },
          ],
        },
      ])}
      <Footer />
    </main>
  );
}

export default CustomRoutes;
