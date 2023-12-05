import { useLocation } from "react-router-dom";
import { IAnime } from "../../interfaces/anime.interfaces";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Ads from "../../components/ads/Ads";
import { iklan } from "../../utils/data";
import List from "../../components/list/List";

const DetailPage = () => {
  const location = useLocation();
  const [iklans, setIklans] = useState(iklan);
  const data: IAnime = location.state as IAnime;
  const { id, img, title, episode, rating, genre, description } = data;

  const random = Math.floor(Math.random() * iklans.length);

  useEffect(() => {
    if (iklans[random].isIllegal) {
      const Swal = require('sweetalert2')

      Swal.fire({
        title: 'Caution',
        text: 'I advise caution when interacting with suspicious websites. Please navigate away from the site.',
        icon: 'warning',
        confirmButtonText: 'Understand'
      });
    }
  }, [iklans, random])

  return (
    <div>
      <Header />
      <Ads
        variant={iklans[random].isIllegal ? 'is-illegal' : 'is-not-illegal'}
        img={iklans[random].img}
        isIllegal={iklans[random].isIllegal}
      />
      <div className="container mx-auto">
        <p className="text-xl font-bold">{title}</p>
        <hr className="mt-5 mb-2 border-4 border-blue-500" />
        <div className="bg-gray-400 flex justify-center items-center p-4">
          <p className="font-bold text-md text-black">Streaming {title}</p>
        </div>
        <div className="my-2 flex gap-5">
          <img className="border border-white h-full w-72 max-h-full max-w-full rounded-sm" src={img} alt="" />
          <div className="flex flex-col gap-2 text-lg">
            <List title="Title">
              {title}
            </List>
            <List title="Rating">
              {rating}
            </List>
            <List title="Genre">
              {genre}
            </List>
            <p>{description}</p>
          </div>
        </div>
        <div className="bg-blue-400 flex justify-start items-center p-2">
          <p className="font-bold text-md text-black">{title} Batch</p>
        </div>
        <div className="mt-4 bg-blue-400 flex justify-start items-center p-2">
          <p className="font-bold text-md text-black">{title} Episode List (Downlaod Link Episode + Streaming)</p>
        </div>
        {Array(Math.min(episode, 50)).fill(undefined).map((_, index) => {
          const background = (index + 1) % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700';
          const eps = episode - index;
          return (
            <div className={`${background} flex justify-start items-center p-2`} key={index}>
              <p className="font-semibold text-md text-white">{title} Episode {eps} Subtitle Indonesia</p>
            </div>
          );
        })}
        <div className="bg-gray-400 my-2 flex justify-center items-center p-4">
          <p className="font-bold text-md text-black">Dont forget to share {title} to your friends!</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;