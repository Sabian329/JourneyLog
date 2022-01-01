import React from "react";
import { useState } from "react";
import { FlightsInfoHeader } from "../../components/common/FlightsInfoHeader";
import { FlightsTable } from "../../components/common/FlightsTable";
import { Modal } from "../../components/common/Modal";
import { PlaneDataForm } from "../../components/common/PlaneDataForm";
import { Button } from "../../components/ui/buttons/styled";
import { Wrapper } from "./styled";

export const FlightsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <FlightsTable />
    </Wrapper>
  );
};
