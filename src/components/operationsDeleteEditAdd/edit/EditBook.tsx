import React from "react";
import { FetchDataId } from "../../../customHooks/FetchDataId";
import { ShowPopUpModel } from "../../../customHooks/ShowPopUpModel";
import ModelPopUpEditInfo from "./ModelPopUpEditInfo";
import { Modal, Button } from "react-bootstrap";


const EditBook: React.FC<{
  idBook: string;
}> = ({ idBook }) => {


  const { data, loading } = FetchDataId(idBook);

  //pop up show data book to edit
  const { show, handleShow, handleClose } = ShowPopUpModel();


  return (
    <>
      <Button variant="success" onClick={() => handleShow()}>
        Edit
      </Button>

      {/* active Edit PopUp */}
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <ModelPopUpEditInfo
          handleClose={() => handleClose()}
          IdBookEdit={data}
          loading={loading}
        />
      </Modal>
    </>
  );
};


export default EditBook;