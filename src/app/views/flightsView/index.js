import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FlightsInfoHeader } from "../../components/common/FlightsInfoHeader";
import { FlightsTable } from "../../components/common/FlightsTable";
import { Modal } from "../../components/common/Modal";
import { PlaneDataForm } from "../../components/common/PlaneDataForm";
import { Button } from "../../components/ui/buttons/styled";
import { selectTable } from "../../Redux/selectors";
import { Wrapper } from "./styled";

export const FlightsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const infoState = useSelector(selectTable);
  console.log(infoState.table);
  return (
    <Wrapper>
      <FlightsInfoHeader />
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>Edit Info</Button>
      {isModalOpen && (
        <Modal
          children={
            <PlaneDataForm btnName="SAVE" setIsModalOpen={setIsModalOpen} />
          }
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {Object.keys(infoState).map((item) => (
        <FlightsTable {...infoState[item]} />
      ))}
    </Wrapper>
  );
};
