import { useParams } from "react-router"
import { useGetMovieByIdQuery } from "../../store/api/get-movie-by-id-api"
import { Movie, PeopleContext } from "../../utils"

function Actors() {
    const {id} = useParams()
    const {data:actors} = useGetMovieByIdQuery(id) as {data: PeopleContext}
    const {data:movie} = useGetMovieByIdQuery(id) as {data: Movie}
    console.log(movie)
  return (
    <section className="container">Actors</section>
  )
}

export default Actors