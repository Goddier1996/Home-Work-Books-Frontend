import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SpinnerLoading from "../../../tools/SpinnerLoading";
import { DeleteBookFunction } from "../function/functionOperations";


const DeleteBook: React.FC<{
  idBook: string;
}> = ({ idBook }) => {


  const [loadingCheckValueEdit, setLoadingCheckValueEdit] = useState<boolean>();

  return (
    <>
      {loadingCheckValueEdit ? (
        <SpinnerLoading />
      ) : (
          // active function to delete book
        <Button
          variant="danger"
          onClick={() => DeleteBookFunction(idBook, setLoadingCheckValueEdit)}
        >
          Delete
        </Button>
      )}
    </>
  );
};


export default DeleteBook;