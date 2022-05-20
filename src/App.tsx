import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";

import "./styles/reset.css";
import "./styles/app.css";
import Battles from "./pages/battles";
import Battle from "./pages/battle";
import StoryBattle from "./pages/storyBattles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/battles" element={<Battles />} />
        <Route path="/battles/:id" element={<Battle />} />
        <Route path="/StoryBattles" element={<StoryBattle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
