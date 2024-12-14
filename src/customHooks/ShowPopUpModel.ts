import { useState } from "react";

// here open pop up models (Add new book and Edit book)
export const ShowPopUpModel = () => {

  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return {
    show,
    handleClose,
    handleShow,
  };
};
