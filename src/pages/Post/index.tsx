import { useParams } from "react-router-dom"

export const Posts = () => {
  const {id} = useParams()
  return (
    <div>Posts {id}</div>
  )
}
