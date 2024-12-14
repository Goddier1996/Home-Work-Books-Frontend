import { useEffect, useState } from "react";
import { BooksInfo } from "../interface/info.model";
import { LoadAllBooks } from "../server/fetchData/LoadDataFromApi";


// here we fetch all data (create custom hook)
export const FetchData = () => {

  const [data, setData] = useState<BooksInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = () => {

    setLoading(true);

    LoadAllBooks()
      .then((dataCategory) => setData(dataCategory))
      .then(() => setLoading(false))
      .catch((err) => setLoading(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};