import iklan1 from '../assets/iklan/iklan1.gif'
import iklan2 from '../assets/iklan/iklan2.jpg'
import iklan3 from '../assets/iklan/iklan3.gif'
import iklan4 from '../assets/iklan/iklan4.gif'
import iklan5 from '../assets/iklan/iklan5.gif'
import iklan6 from '../assets/iklan/iklan6.jpg'
import iklan7 from '../assets/iklan/iklan7.png'
import iklan8 from '../assets/iklan/iklan8.jpg'
import iklan9 from '../assets/iklan/iklan9.jpg'
import jujutsuKaisen from '../assets/anime/jujutsu_kaisen.jpg'
import attackOnTitan from '../assets/anime/attack_on_titan.jpg'
import fireForce from '../assets/anime/fire_force.jpg'
import haikyuu from '../assets/anime/haikyuu.jpg'
import narutoShippuden from '../assets/anime/naruto_shippuden.jpg'
import onePiece from '../assets/anime/one_piece.jpg'
import spyXFamily from '../assets/anime/spy_x_family.jpg'
import theSevenDeadlySins from '../assets/anime/the_seven_deadly_sins.jpg'
import chainsawMan from '../assets/anime/chainsaw_man.png'
import codeGeass from '../assets/anime/code_geass.jpg'
import deathNote from '../assets/anime/death_note.jpg'
import evangelion from '../assets/anime/evangelion.jpg'
import fullMetal from '../assets/anime/full_metal_alchemist_brotherhood.jpg'
import oshiNoKo from '../assets/anime/oshi_no_ko.jpg'
import monster from '../assets/anime/monster.jpg'
import violetEvergarden from '../assets/anime/violet_evergarden.jpg'

const iklan = () => ([
  { 
    id: 1,
    img: iklan1,
    isIllegal: true
  },
  {
    id: 2,
    img: iklan2,
    isIllegal: false
  },
  {
    id: 3,
    img: iklan3,
    isIllegal: true
  },
  {
    id: 4,
    img: iklan4,
    isIllegal: true
  },
  {
    id: 5,
    img: iklan5,
    isIllegal: true
  },
  {
    id: 6,
    img: iklan6,
    isIllegal: false
  },
  {
    id: 7,
    img: iklan7,
    isIllegal: false
  },
  {
    id: 8,
    img: iklan8,
    isIllegal: false
  },
  {
    id: 9,
    img: iklan9,
    isIllegal: false
  },
])

const anime = () => ([
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    img: jujutsuKaisen,
    episode: 24
  },
  {
    id: 2,
    title: 'Attack on Titan',
    img: attackOnTitan,
    episode: 24
  },
  {
    id: 3,
    title: 'Fire Force',
    img: fireForce,
    episode: 24
  },
  {
    id: 4,
    title: 'Haikyuu!!',
    img: haikyuu,
    episode: 24
  },
  {
    id: 5,
    title: 'Naruto Shippuden',
    img: narutoShippuden,
    episode: 24
  },
  {
    id: 6,
    title: 'One Piece',
    img: onePiece,
    episode: 24
  },
  {
    id: 7,
    title: 'Spy X Family',
    img: spyXFamily,
    episode: 24
  },
  {
    id: 8,
    title: 'The Seven Deadly Sins',
    img: theSevenDeadlySins,
    episode: 24
  },
  {
    id: 9,
    title: 'Chainsaw Man',
    img: chainsawMan,
    episode: 24
  },
  {
    id: 10,
    title: 'CodeGeass',
    img: codeGeass,
    episode: 24
  },
  {
    id: 11,
    title: 'Death Note',
    img: deathNote,
    episode: 24
  },
  {
    id: 12,
    title: 'Neon Genesis Evangelion',
    img: evangelion,
    episode: 24
  },
  {
    id: 13,
    title: 'Full Metal Alchemist: Brohtherhood',
    img: fullMetal,
    episode: 24
  },
  {
    id: 14,
    title: 'Oshi no Ko',
    img: oshiNoKo,
    episode: 24
  },
  {
    id: 15,
    title: 'Monster',
    img: monster,
    episode: 24
  },
  {
    id: 16,
    title: 'Violet Evergarden',
    img: violetEvergarden,
    episode: 24
  },
])

const winner = () => ([
  {
    telephone: 'xxxxx5238',
    country: 'Thailand',
    money: '13333.33 THB'
  },
  {
    telephone: 'xxxxxn888',
    country: 'Indonesia',
    money: '3000 IDR'
  },
  {
    telephone: 'xxxxxn555',
    country: 'Thailand',
    money: '5333.33 THB'
  },
  {
    telephone: '***1130',
    country: 'Thailand',
    money: '133.33 THB'
  },
  {
    telephone: '***2507',
    country: 'Indonesia',
    money: '50 IDR'
  },
  {
    telephone: '***8699',
    country: 'Vietnam',
    money: '100 VND'
  },
  {
    telephone: '***8535',
    country: 'Thailand',
    money: '133.33 THB'
  },
  {
    telephone: '***4009',
    country: 'Indonesia',
    money: '50 IDR'
  },
  {
    telephone: 'xxxxx5238',
    country: 'Thailand',
    money: '13333.33 THB'
  },
  {
    telephone: '***9735',
    country: 'Indonesia',
    money: '50 IDR'
  },
  {
    telephone: '***6195',
    country: 'Indonesia',
    money: '50 IDR'
  },
  {
    telephone: '***6195',
    country: 'Thailand',
    money: '133.33 THB'
  },
  {
    telephone: '***4402',
    country: 'Thailand',
    money: '133.33 THB'
  },
])

export { iklan, anime, winner };