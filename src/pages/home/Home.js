import './Home.css'

import { useParams } from 'react-router-dom'

export default function Home() {
  const {id}=useParams();
  return (
    <div>Home: {id}</div>
  )
}
