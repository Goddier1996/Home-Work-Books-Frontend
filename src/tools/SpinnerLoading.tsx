import { Spinner } from "react-bootstrap";

const SpinnerLoading = () => {
  return (
    <div className="spinner">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default SpinnerLoading;
