import axios from "axios";
import { API } from "../API";
import { BooksInfoId } from "../../interface/info.model";

// USE Axios and fetch to show how can fetch data from database

export async function DeleteBookId(Id: string) {

  await axios.delete(`${API.BOOK.GET}/delete/${Id}`);
}


export async function UpdateBookId(updatesDataInfoBook: BooksInfoId, id: any) {

  try {
    await fetch(`${API.BOOK.GET}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatesDataInfoBook),
    });
  } catch (error) {
    console.log(error);
  }
}


export async function addNewBook(DataBook: BooksInfoId) {

  const headers = {
    "Content-Type": "application/json",
  };

  await axios.post(API.BOOK.ADD, DataBook, { headers: headers });
}
