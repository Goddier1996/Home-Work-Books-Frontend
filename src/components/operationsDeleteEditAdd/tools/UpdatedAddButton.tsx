import { Modal, Button } from "react-bootstrap";


const UpdatedAddButton: React.FC<{
  CheckInputValue: Function;
  handleClose: Function;
  typeOperations: string;
}> = ({ CheckInputValue, handleClose, typeOperations }) => {


  return (
    <div className="updatedButton">
      <Modal.Footer>
        <Button variant="success" onClick={() => CheckInputValue()}>
          {typeOperations === "Add" ? (
            <span>Add Book</span>
          ) : typeOperations === "Edit" ? (
            <span>Updated Book</span>
          ) : null}
        </Button>

        <Button variant="danger" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
};


export default UpdatedAddButton;