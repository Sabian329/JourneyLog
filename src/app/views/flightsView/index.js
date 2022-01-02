import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FlightsInfoHeader } from "../../components/common/FlightsInfoHeader";
import { FlightsTable } from "../../components/common/FlightsTable";
import { Modal } from "../../components/common/Modal";
import { PlaneInfoForm } from "../../components/common/PlaneInfoForm";
import { TableForm } from "../../components/common/TableForm";
import { Button } from "../../components/ui/buttons/styled";
import { selectTable } from "../../Redux/selectors";
import { Wrapper } from "./styled";

export const FlightsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableModalOpen, setTableIsModalOpen] = useState(true);
  const infoState = useSelector(selectTable);
  console.log(infoState.table);
  return (
    <Wrapper>
      <FlightsInfoHeader />
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>Edit Info</Button>
      {isModalOpen && (
        <Modal
          name="edit"
          children={
            <PlaneInfoForm btnName="SAVE" setIsModalOpen={setIsModalOpen} />
          }
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {Object.keys(infoState.tables).map((item) => (
        <FlightsTable {...infoState.tables[item]} key={item} />
      ))}
      {isTableModalOpen && (
        <Modal
          name="add"
          children={<TableForm />}
          setIsTableModalOpen={setTableIsModalOpen}
        />
      )}
      <Button onClick={() => setTableIsModalOpen(!isTableModalOpen)}>
        addTable
      </Button>
    </Wrapper>
  );
};
