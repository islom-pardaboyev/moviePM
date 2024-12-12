import { useRoutes } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { SuspenseComponent as Suspense } from "../utils";
import {
  Actors,
  Home,
  NowPlaying,
  Person,
  Popular,
  SingleMovie,
  TopRated,
  UpComing,
  Watchlist,
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
        {
          path: "/actors",
          children: [
            {
              path: ":id",
              element: (
                <Suspense>
                  <Actors />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "/watchlist",
          element: (
            <Suspense>
              <Watchlist />
            </Suspense>
          ),
        },
        {
          path: "/person",
          children: [
            {
              path: ":id",
              element: (
                <Suspense>
                  <Person />
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
