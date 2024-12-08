import { useParams } from "react-router";

function SingleMovie() {
  const {id} = useParams()
  console.log(id)
  return <div>SingleMovie</div>;
}

export default SingleMovie;
