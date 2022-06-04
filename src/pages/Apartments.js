import { useParams } from "react-router-dom";

const Apartments = () => {
  const params = useParams();

  return (
    <>
      <h2>Our Apartments</h2>
      {params.apartmentsId}
    </>
  );
};

export default Apartments;
