import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { BooksInfoId } from "../../../interface/info.model";
import SpinnerLoading from "../../../tools/SpinnerLoading";
import { CheckInputValue } from "../function/functionOperations";
import UpdatedAddButton from "../tools/UpdatedAddButton";



const ModelPopUpEditInfo: React.FC<{
  handleClose: Function;
  IdBookEdit: BooksInfoId;
  loading: boolean;
}> = ({ handleClose, IdBookEdit, loading }) => {


  // here we save all value data book
  const [title, setTitle] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [id, setId] = useState<string>();
  const [publishedDate, setPublishedDate] = useState<string>();
  const [availableCopies, setAvailableCopies] = useState<number | undefined>();

  const [loadingCheckValueEdit, setLoadingCheckValueEdit] = useState<boolean>();

  const CheckInput = () => {
    let bookCheckInput: BooksInfoId = {
      title: title,
      author: author,
      id: id,
      publishedDate: publishedDate,
      availableCopies: availableCopies,
    };

    CheckInputValue(bookCheckInput, setLoadingCheckValueEdit, IdBookEdit);
  };


  // here use useEffect to see all data in input form
  useEffect(() => {
    setTitle(IdBookEdit.title);
    setAuthor(IdBookEdit.author);
    setId(IdBookEdit.id);
    setPublishedDate(IdBookEdit.publishedDate);
    setAvailableCopies(IdBookEdit.availableCopies);
  }, [IdBookEdit._id]);

  
  return (
    <div>
      <Modal.Body>
        {loading ? (
          <SpinnerLoading />
        ) : (
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Edit Book - {IdBookEdit.title}</Modal.Title>
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

            {/* active UpdatedButton component, show Button Updated or close*/}
            {loadingCheckValueEdit ? (
              <SpinnerLoading />
            ) : (
              <UpdatedAddButton
                CheckInputValue={CheckInput}
                handleClose={handleClose}
                typeOperations={"Edit"}
              />
            )}
          </div>
        )}
      </Modal.Body>
    </div>
  );
};


export default ModelPopUpEditInfo;