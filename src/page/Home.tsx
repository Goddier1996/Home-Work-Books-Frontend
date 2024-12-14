import CardBook from "../components/showDataBooks/CardBook";
import { FetchData } from "../customHooks/FetchData";
import { BooksInfo, ObjectCustomHookSearch } from "../interface/info.model";
import { Col, Row, Container } from "react-bootstrap";
import "../style/Home.css";
import SpinnerLoading from "../tools/SpinnerLoading";
import MainTitle from "../tools/MainTitle";
import SearchBooks from "../components/search/SearchBooks";
import { useEffect, useState } from "react";
import { FetchDataSearch } from "../customHooks/FetchDataSearch";
import CheckIfHaveBook from "../components/search/CheckIfHaveBook";


const Home = () => {


  const [
    saveOpjDataSendToCustomHookSearch,
    SetSaveOpjDataSendToCustomHookSearch,
  ] = useState<ObjectCustomHookSearch>({});


  // here use Custom Hook to fetch data all books
  const { data } = FetchData();

  // here use Custom Hook to search data all books
  const { dataSearch, loadingSearch } = FetchDataSearch(
    saveOpjDataSendToCustomHookSearch
  );


  // this function save to use state value input search and all data from data base
  const filterAnimalsSearch = (searchTerm: string) => {

    SetSaveOpjDataSendToCustomHookSearch({
      typeHowUse: "searchData",
      valueSearch: searchTerm,
      infoSearch: data,
    });
  };


  // why we use this function ?
  // if value was null we show all data(books)
  const LoadAllAnimals = () => {

    SetSaveOpjDataSendToCustomHookSearch({
      typeHowUse: "LoadingData",
      valueSearch: "",
      infoSearch: null,
    });
  };


  useEffect(() => {
    LoadAllAnimals();
  }, []);


  return (
    <>
      {/* show title and OPTION add new book */}
      <MainTitle countBooks={data.length} />

      {/* Search Book component */}
      <SearchBooks onChangeCallback={filterAnimalsSearch} />

      <div className="viewAllData">
        <div className="limitWidth">
          <Container fluid className="mt-5">
            <Row className="rowItems">
              {loadingSearch ? (
                <SpinnerLoading />
              ) : (
                <>
                  {dataSearch.map((book: BooksInfo) => (
                    <Col key={book._id} xs={12} md={6} lg={4}>
                      <div className="showBooks">

                        {/* active component card book and send prop */}
                        <CardBook showInfoBook={book} />
                      </div>
                    </Col>
                  ))}

                    {/* in this component check if have this book if not show message */}
                  <CheckIfHaveBook
                    checkIfHaveValueWhenSearch={dataSearch.length}
                  />
                </>
              )}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};


export default Home;