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
  const [currentPage, setCurrentPage] = useState(1);
  const data: IAnime = location.state as IAnime;
  const { id, img, title, episode, rating, genre, description } = data;

  const random = Math.floor(Math.random() * iklans.length);
  const page = Math.ceil(episode / 50);

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

  const renderEpisodes = () => {
    const episodesPerPage = 50;
    const start = (currentPage - 1) * episodesPerPage + 1;
    const end = Math.min(currentPage * episodesPerPage, episode);

    return Array(end - start + 1).fill(undefined).map((_, index) => {
      const background = (start + index) % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700';
      const eps = episode - (start + index) + 1;
      return (
        <div className={`${background} flex justify-start items-center p-2`} key={index}>
          <p className="font-semibold text-md text-white">{title} Episode {eps} Subtitle Indonesia</p>
        </div>
      );
    });
  };

  const handleNextPage = () => {
    if (currentPage < page) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0
      });
    }
  };

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
        <div className="mt-4 bg-blue-400 flex justify-start items-center p-2" id="anime-list">
          <p className="font-bold text-md text-black">{title} Episode List (Downlaod Link Episode + Streaming)</p>
        </div>
        {renderEpisodes()}
        {episode > 50 && (
          <div className="flex justify-center items-center space-x-4 my-4">
            <button onClick={handlePrevPage} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Previous
            </button>
            <p className="text-lg font-semibold">{`Page ${currentPage} of ${page}`}</p>
            <button onClick={handleNextPage} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Next
            </button>
          </div>
        )}
        <div className="bg-gray-400 my-2 flex justify-center items-center p-4">
          <p className="font-bold text-md text-black">Dont forget to share {title} to your friends!</p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;