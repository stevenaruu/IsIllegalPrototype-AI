import { useEffect, useState } from 'react';
import { iklan, anime } from '../../utils/data';
import Card from '../../components/card/Card';
import Ads from '../../components/ads/Ads';
import Header from '../../components/header/Header';
import { IAnime } from '../../interfaces/anime.interfaces';

const ITEMS_PER_PAGE = 8;

const HomePage = () => {
	const [iklans, setIklans] = useState(iklan);
	const [animes, setAnimes] = useState(anime);
	const [currentPage, setCurrentPage] = useState(1);

	const random = Math.floor(Math.random() * iklans.length);
	const random2 = Math.floor(Math.random() * iklans.length);
	const random3 = Math.floor(Math.random() * iklans.length);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0
		});
	};

	useEffect(() => {
		const Swal = require('sweetalert2');

		if (iklans[random].isIllegal || iklans[random2].isIllegal || iklans[random3].isIllegal) {
			Swal.fire({
				title: 'Caution',
				text: 'I advise caution when interacting with suspicious websites. Please navigate away from the site.',
				icon: 'warning',
				confirmButtonText: 'Understand'
			});
		}
	}, [iklans, random, random2, random3]);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	const currentAnimes = animes.slice(startIndex, endIndex);

	return (
		<div>
			<Header />
			<Ads variant={iklans[random].isIllegal ? 'is-illegal' : 'is-not-illegal'} img={iklans[random].img} isIllegal={iklans[random].isIllegal} />
			<Ads variant={iklans[random2].isIllegal ? 'is-illegal' : 'is-not-illegal'} img={iklans[random2].img} isIllegal={iklans[random2].isIllegal} />
			<div className='my-5 container mx-auto'>
				<div className='flex flex-wrap justify-center gap-5 items-center'>
					{currentAnimes.map((anime: IAnime, index: number) => (
						<Card
							key={index}
							id={anime.id}
							title={anime.title}
							img={anime.img}
							episode={anime.episode}
							rating={anime.rating}
							genre={anime.genre}
							description={anime.description}
						/>
					))}
				</div>
			</div>
			<div className='flex justify-center items-center gap-5'>
				{currentPage - 1 === 0 ? (
					''
				) : (
					<button
						className='flex justify-center items-center bg-gray-400 w-10 h-10 rounded-full'
						onClick={() => {
							setCurrentPage(currentPage - 1);
							scrollToTop();
						}}
						disabled={currentPage === 1}
					>
						{currentPage - 1}
					</button>
				)}
				<div className='flex justify-center items-center bg-blue-500 w-10 h-10 rounded-full'>{currentPage}</div>
				{endIndex >= animes.length ? (
					''
				) : (
					<button
						className='flex justify-center items-center bg-gray-400 w-10 h-10 rounded-full'
						onClick={() => {
							setCurrentPage(currentPage + 1);
							scrollToTop();
						}}
						disabled={endIndex >= animes.length}
					>
						{currentPage + 1}
					</button>
				)}
			</div>
			<Ads variant={iklans[random3].isIllegal ? 'is-illegal' : 'is-not-illegal'} img={iklans[random3].img} isIllegal={iklans[random3].isIllegal} />
		</div>
	);
};

export default HomePage;
