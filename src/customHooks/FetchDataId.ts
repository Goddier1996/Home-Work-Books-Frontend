import { useEffect, useState } from "react";
import { BooksInfoId } from "../interface/info.model";
import { LoadAllBookId } from "../server/fetchData/LoadDataFromApi";


// here we fetch book id data (create custom hook)
export const FetchDataId = (idBook: string) => {

  const [data, setData] = useState<BooksInfoId>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDataBookId = () => {
    
    setLoading(true);

    LoadAllBookId(idBook)
      .then((dataBook) => setData(dataBook))
      .then(() => setLoading(false))
      .catch((err) => setLoading(true));
  };

  useEffect(() => {
    fetchDataBookId();
  }, []);


  return { data, loading };
};