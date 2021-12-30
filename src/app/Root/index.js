import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainView } from "../views/mainView";
import { FlightsView } from "../views/flightsView";
export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/flights" element={<FlightsView />} />
      </Routes>
    </BrowserRouter>
  );
};
