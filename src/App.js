import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FlightsView } from "./views/flightsView";
import { MainView } from "./views/mainView";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/flights" element={<FlightsView />} />
      </Routes>
    </BrowserRouter>
  );
};
