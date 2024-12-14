import { useEffect, useState } from "react";
import { BooksInfo, ObjectCustomHookSearch } from "../interface/info.model";
import { LoadAllBooks } from "../server/fetchData/LoadDataFromApi";


// here we fetch all data search (create custom hook)
export const FetchDataSearch = (funcFetchData: ObjectCustomHookSearch) => {


  const [dataSearch, setSearch] = useState<BooksInfo[]>([]);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);

  const fetchData = () => {
    
    setLoadingSearch(true);

    switch (funcFetchData.typeHowUse) {
        
      // loading all books again
      case "LoadingData":
        LoadAllBooks()
          .then((dataCategory) => setSearch(dataCategory))
          .then(() => setLoadingSearch(false))
          .catch((err) => setLoadingSearch(true));
        break;

      // Search books (title or author), when we input value in search box
      case "searchData":
        setSearch(
          funcFetchData.infoSearch.filter(
            (searchBook: BooksInfo) =>
              searchBook.title
                .toLowerCase()
                .includes(funcFetchData.valueSearch || "".toLowerCase()) ||
              searchBook.author
                .toLowerCase()
                .includes(funcFetchData.valueSearch || "".toLowerCase())
          )
        );
        setLoadingSearch(false);
        break;

      default:
        setLoadingSearch(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [funcFetchData]);

  return { dataSearch, loadingSearch };
};