import ButtonAddNewBook from "../components/operationsDeleteEditAdd/addNewBook/ButtonAddNewBook";

  const MainTitle: React.FC<{
    countBooks: number;
  }> = ({ countBooks }) => {

  return (
    <div className="title">
      <p>Book Management System</p>
      <h6>Have {countBooks} Books in library !</h6>

      {/* add new book */}
      <ButtonAddNewBook/>
    </div>
  );
};

export default MainTitle;