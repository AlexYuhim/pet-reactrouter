import { Route, Routes } from 'react-router-dom';
import './App.css';
import { API } from './api/index';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Characters } from './pages/Characters/Characters';
import { Episodes } from './pages/Episode/Episodes';
import { HeroDetail } from './pages/Characters/HeroDetail';
import { Locations } from './pages/Location/Locations';
import { EpisodeDetail } from './pages/Episode/EpisodeDetail';
import { LocationDetail } from './pages/Location/LocationDetail';
import { MainMenu } from './layout/MainMenu';
import { MenuCategoryi } from './layout/MenuCategoryi';
import { Categories } from './pages/Categiries/Categories';

const { characters, episodes, locations } = API;

const App = () => {
  return (
    <>
      <MainMenu></MainMenu>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<MenuCategoryi />}>
          <Route path="/categories/" element={<Categories />} />

          <Route path="/categories/characters">
            <Route index element={<Characters characters={characters} />} />
            <Route
              path=":id"
              element={<HeroDetail characters={characters} />}
            />
          </Route>
          <Route path="/categories/locations">
            <Route index element={<Locations locations={locations} />} />
            <Route
              path=":id"
              element={<LocationDetail locations={locations} />}
            />
          </Route>
          <Route path="/categories/episodes">
            <Route index element={<Episodes episodes={episodes} />} />
            <Route path=":id" element={<EpisodeDetail episodes={episodes} />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
