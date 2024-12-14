import React from "react";


const CheckIfHaveBook: React.FC<{
  checkIfHaveValueWhenSearch: Number;
}> = ({ checkIfHaveValueWhenSearch }) => {


  return (
    <>
      {!checkIfHaveValueWhenSearch ? (
        <div className="dontHaveThisBook">
          <p>
            Sorry In Book Management System Don't Have This Book !
            <br />
            Try Again Please ☺️
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};


export default CheckIfHaveBook;