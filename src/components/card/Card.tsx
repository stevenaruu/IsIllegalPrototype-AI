import { useHistory } from "react-router-dom";
import { IAnime } from "../../interfaces/anime.interfaces";

const Card = (props: IAnime) => {
  const history = useHistory()
  const { img, title, id, episode } = props;

  const handleClick = () => {
    history.push({pathname: '/detail', state: props})
    window.scrollTo(0, 0);
  }

  return (
    <div className='h-full w-72 cursor-pointer' onClick={handleClick}>
      <img src={img} alt="" className='max-h-full max-w-full rounded-t-sm' />
      <p className='h-12 flex items-center px-5 bg-blue-500 font-bold rounded-b-sm'>{title}</p>
    </div>
  )
}

export default Card;