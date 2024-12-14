import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { BooksInfoId } from "../../../interface/info.model";
import { CheckInputValueAddNewAnimal } from "../function/functionOperations";
import UpdatedAddButton from "../tools/UpdatedAddButton";


const ModelPopUpAddNewBook: React.FC<{
  handleClose: Function;
}> = ({ handleClose }) => {


  // here we save all value data book
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [id, setId] = useState<string>();
  const [publishedDate, setPublishedDate] = useState<string>();
  const [availableCopies, setAvailableCopies] = useState<number>();


  const CheckInput = () => {

    let bookCheckInput: BooksInfoId = {
      title: title,
      author: author,
      id: id,
      publishedDate: publishedDate,
      availableCopies: availableCopies,
    };

    // move to function check value input and send data if good to server and save
    CheckInputValueAddNewAnimal(bookCheckInput);
  };


  return (
    <div>
      <Modal.Body>
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <br />

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title Book</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Authors</Form.Label>
            <Form.Control
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ID Book</Form.Label>
            <Form.Control
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Published Date</Form.Label>
            <Form.Control
              type="date"
              placeholder={publishedDate}
              value={publishedDate}
              onChange={(event) => setPublishedDate(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Available Copies</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={availableCopies}
              onChange={(e) => setAvailableCopies(Number(e.target.value))}
            />
          </Form.Group>

          {/* active UpdatedButton component, show Button Updated or Close*/}
          <UpdatedAddButton
            CheckInputValue={CheckInput}
            handleClose={handleClose}
            typeOperations={"Add"}
          />
        </div>
      </Modal.Body>
    </div>
  );
};


export default ModelPopUpAddNewBook;