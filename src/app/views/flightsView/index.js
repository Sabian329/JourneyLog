import React from "react";
import { useState } from "react";
import { AddFlightModal } from "../../components/common/AddFlightModal";
import { FlightsInfoHeader } from "../../components/common/FlightsInfoHeader";
import { PlaneDataForm } from "../../components/common/PlaneDataForm";
import { Button } from "../../components/ui/buttons/styled";
import { Wrapper } from "./styled";

export const FlightsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Wrapper>
      <FlightsInfoHeader />
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>Add</Button>
      {isModalOpen && (
        <AddFlightModal
          children={<PlaneDataForm />}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Wrapper>
  );
};
