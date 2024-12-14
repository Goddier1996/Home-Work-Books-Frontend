import { BooksInfo } from "../../interface/info.model";
import DeleteBook from "../operationsDeleteEditAdd/delete/DeleteBook";
import EditBook from "../operationsDeleteEditAdd/edit/EditBook";
import { Card } from "react-bootstrap";


const CardBook: React.FC<{
  showInfoBook: BooksInfo;
}> = ({ showInfoBook }) => {


  return (
    <div className="cardsBook">
      <Card style={{background:"#D6BB87",borderRadius:"15% 0 0 0 / 30% 0 0 0",border:"none"}}>   
        <Card.Body>
          <Card.Title style={{fontSize:"17px"}}>Title Book: <span style={{fontWeight:"400"}}>{showInfoBook.title}</span></Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{fontSize:"25px"}}
          >
            ↓
          </Card.Subtitle>
          <Card.Text style={{fontSize:"14px"}}>
            <b>Author:</b> {showInfoBook.author}
            <br />
            <b>Available Copies:</b> {showInfoBook.availableCopies}
            <br />
            <b>Publish:</b> {showInfoBook.publishedDate}
            <br />
            <b>ID:</b> {showInfoBook.id}
          </Card.Text>

          <div className="buttonsEditDelete">
            {/* active delete component */}
            <DeleteBook idBook={showInfoBook._id} />

            {/* active edit component */}
            <EditBook idBook={showInfoBook._id} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


export default CardBook;