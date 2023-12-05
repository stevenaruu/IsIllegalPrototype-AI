import { useHistory } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const history = useHistory()
  const handleClick = () => {
    return (
      history.push('/')
    )
  }
  return (
    <div>
      <div className='container mx-auto font-semibold text-lg my-2 flex gap-5'>
        <p>Cara Download</p>
        <p>DMCA</p>
      </div>
      <div className='bg-gray-700 py-7'>
        <p className='container mx-auto font-bold text-3xl cursor-pointer' onClick={handleClick}>BeeNime</p>
      </div>
      <Navbar variant="" color="border-blue-500">
        <li className="cursor-pointer" onClick={handleClick}>Home</li>
        <li className="cursor-pointer">Anime List</li>
        <li className="cursor-pointer">Jadwal Rilis</li>
        <li className="cursor-pointer">Genre List</li>
      </Navbar>
    </div>
  )
}

export default Header;