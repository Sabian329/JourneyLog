import React from "react";
import { MainView } from "../views/mainView";
import { FlightsView } from "../views/flightsView";
import { useSelector } from "react-redux";
import { selectInfo } from "../Redux/selectors";
export const Root = () => {
  const infoState = useSelector(selectInfo);
  return <>{!infoState.validate.isValidate ? <MainView /> : <FlightsView />}</>;
};
