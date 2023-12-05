import { useHistory } from "react-router-dom";
import { IAds } from "./Ads.interfaces";

const Ads = (props: IAds) => {
  const history = useHistory();
  const { img, variant, isIllegal } = props;
  const handleClick = () => {
    if (isIllegal) {
      history.push('/illegal');
    }
  }
  return (
    <div className="container mx-auto">
      <div className={`my-5 h-24 cursor-pointer ${variant}`} onClick={handleClick}>
        <img className='w-full h-full p-3' src={img} alt="" />
      </div>
    </div>
  )
}

export default Ads;