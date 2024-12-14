import { Button, Modal } from "react-bootstrap";
import { ShowPopUpModel } from "../../../customHooks/ShowPopUpModel";
import ModelPopUpAddNewBook from "./ModelPopUpAddNewBook";


const ButtonAddNewBook = () => {

  //pop up add new book
  const { show, handleShow, handleClose } = ShowPopUpModel();

  return (
    <>
      <Button variant="primary" onClick={() => handleShow()}>
        Add New Book
      </Button>

      {/* active add new book PopUp */}
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        
        {/* component model add new book */}
        <ModelPopUpAddNewBook handleClose={() => handleClose()} />
      </Modal>
    </>
  );
};


export default ButtonAddNewBook;