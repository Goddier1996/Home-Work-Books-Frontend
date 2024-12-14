import { BooksInfoId } from "../../../interface/info.model";
import Swal from "sweetalert2";
import {
  addNewBook,
  DeleteBookId,
  UpdateBookId,
} from "../../../server/deleteEditUpdateData/DeleteEditUpdateBook";



export async function CheckInputValue(
  bookCheckInput: BooksInfoId,
  setLoadingCheckValueEdit: any,
  IdBook: BooksInfoId
) {

  setLoadingCheckValueEdit(true);

  if (
    !bookCheckInput.title ||
    !bookCheckInput.author ||
    !bookCheckInput.id ||
    !bookCheckInput.publishedDate ||
    !bookCheckInput.availableCopies ||
    bookCheckInput.availableCopies < 0
  ) {
    Swal.fire({
      position: "center",
      toast: true,
      confirmButtonColor: "green",
      icon: "error",
      title: "Oops...",
      html: '<p class="popUpTextP1">you need input all value please</p>',
    }).then(() => setLoadingCheckValueEdit(false));
  }
  else {
    await updateDateBook(bookCheckInput, IdBook)
      .then(() =>
        Swal.fire({
          position: "center",
          toast: true,
          icon: "success",
          title: "Updated successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => setLoadingCheckValueEdit(false))
      .then(() => window.location.reload())
      .catch((err) => setLoadingCheckValueEdit(true));
  }
}



export async function updateDateBook(
  bookCheckInput: BooksInfoId,
  IdBook: BooksInfoId
) {

  let book: BooksInfoId = {
    title: bookCheckInput.title,
    author: bookCheckInput.author,
    id: bookCheckInput.id,
    publishedDate: bookCheckInput.publishedDate,
    availableCopies: bookCheckInput.availableCopies,
  };

  await UpdateBookId(book, IdBook._id);
}



export async function CheckInputValueAddNewAnimal(bookCheckInput: BooksInfoId) {

  if (
    !bookCheckInput.title ||
    !bookCheckInput.author ||
    !bookCheckInput.id ||
    !bookCheckInput.publishedDate ||
    !bookCheckInput.availableCopies ||
    bookCheckInput.availableCopies < 0
  ) {
    Swal.fire({
      position: "center",
      confirmButtonColor: "green",
      icon: "error",
      title: "Oops...",
      html: '<p class="popUpTextP1">you need input all value please</p>',
    });
  }
  
  else {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    await addNewBook(bookCheckInput)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  }
}



export async function DeleteBookFunction(
  IdBook: string,
  setLoadingCheckValueEdit: any
) {

  await DeleteBookId(IdBook)
    .then(() => setLoadingCheckValueEdit(true))
    .then(() =>
      Swal.fire({
        position: "center",
        toast: true,
        icon: "success",
        title: "Delete Book successfully",
        showConfirmButton: false,
        timer: 1500,
      })
    )
    .then(() => setLoadingCheckValueEdit(false))
    .then(() => window.location.reload())
    .catch((err) => setLoadingCheckValueEdit(true));
}
