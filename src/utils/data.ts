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
    episode: 24,
    rating: "8,62",
    genre: "Action, Fantasy",
    description: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses."
  },
  {
    id: 2,
    title: 'Attack on Titan',
    img: attackOnTitan,
    episode: 25,
    rating: "8,54",
    genre: "Action, Drama",
    description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations."
  },
  {
    id: 3,
    title: 'Fire Force',
    img: fireForce,
    episode: 24,
    rating: "7,71",
    genre: "Action, Fantasy, Sci-Fi",
    description: "Spontaneous Human Combustion: a chaotic phenomenon that has plagued humanity for years, randomly transforming ordinary people into flaming, violent creatures known as Infernals. While Infernals make up the first-generation accounts of Human Combustion, the second and third generations became known as pyrokinetics—people gifted with the ability to manipulate and control their flames while remaining human. To combat the Infernal threat and discover the cause, the Tokyo Armed Forces, Fire Defense Agency, and Holy Church of Sol produced their answer: the Special Fire Force."
  },
  {
    id: 4,
    title: 'Haikyuu!!',
    img: haikyuu,
    episode: 25,
    rating: "8,44",
    genre: "School, Sports",
    description: "Ever since having witnessed the 'Little Giant' and his astonishing skills on the volleyball court, Shouyou Hinata has been bewitched by the dynamic nature of the sport. Even though his attempt to make his debut as a volleyball regular during a middle school tournament went up in flames, he longs to prove that his less-than-impressive height ceases to be a hindrance in the face of his sheer will and perseverance."
  },
  {
    id: 5,
    title: 'Naruto Shippuden',
    img: narutoShippuden,
    episode: 500,
    rating: "8,25",
    genre: "Action, Adventure, Fantasy",
    description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world."
  },
  {
    id: 6,
    title: 'One Piece',
    img: onePiece,
    episode: 1086,
    rating: "8,71",
    genre: "Action, Adventure, Fantasy",
    description: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it."
  },
  {
    id: 7,
    title: 'Spy X Family',
    img: spyXFamily,
    episode: 12,
    rating: "8,57",
    genre: "Action, Comedy",
    description: "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise 'Twilight' fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war."
  },
  {
    id: 8,
    title: 'The Seven Deadly Sins',
    img: theSevenDeadlySins,
    episode: 24,
    rating: "7,65",
    genre: "Action, Adventure, Fantasy",
    description: "In a world similar to the European Middle Ages, the feared yet revered Holy Knights of Britannia use immensely powerful magic to protect the region of Britannia and its kingdoms. However, a small subset of the Knights supposedly betrayed their homeland and turned their blades against their comrades in an attempt to overthrow the ruler of Liones. They were defeated by the Holy Knights, but rumors continued to persist that these legendary knights, called the 'Seven Deadly Sins,' were still alive. Ten years later, the Holy Knights themselves staged a coup d’état, and thus became the new, tyrannical rulers of the Kingdom of Liones."
  },
  {
    id: 9,
    title: 'Chainsaw Man',
    img: chainsawMan,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 10,
    title: 'CodeGeass',
    img: codeGeass,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 11,
    title: 'Death Note',
    img: deathNote,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 12,
    title: 'Neon Genesis Evangelion',
    img: evangelion,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 13,
    title: 'Full Metal Alchemist: Brohtherhood',
    img: fullMetal,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 14,
    title: 'Oshi no Ko',
    img: oshiNoKo,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 15,
    title: 'Monster',
    img: monster,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
  },
  {
    id: 16,
    title: 'Violet Evergarden',
    img: violetEvergarden,
    episode: 24,
    rating: "",
    genre: "",
    description: ""
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