import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FlightsView } from "./views/flightsView";
import { LoginView } from "./views/loginView";
import { MainView } from "./views/mainView";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/flights" element={<FlightsView />} />
      </Routes>
    </BrowserRouter>
  );
};
