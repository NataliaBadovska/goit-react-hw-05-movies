import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Movies = lazy(() => import('../pages/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(()=> import('../pages/NotFound'));

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};

export default App;


