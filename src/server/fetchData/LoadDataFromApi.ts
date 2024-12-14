import axios from "axios";
import { API } from "../API";

// USE AXIOS

export async function LoadAllBooks() {
  const response = await axios.get(API.BOOK.GET);
  return response.data;
}


export async function LoadAllBookId(id: string) {
  const response = await axios.get(`${API.BOOK.GET}/${id}`);
  return response.data;
}
