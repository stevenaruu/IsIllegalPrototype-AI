import { useState } from "react";
import { winner, iklan } from '../../utils/data';
import Navbar from "../../components/navbar/Navbar";
import Winner from "../../components/winner/Winner";
import Ads from "../../components/ads/Ads";
import Input from "../../components/input/Input";
import { useHistory } from "react-router-dom";


const IllegalPage = () => {
  const Swal = require('sweetalert2')
  const history = useHistory();
  const [winners, setWinners] = useState(winner)
  const [iklans, setIklans] = useState(iklan)

  Swal.fire({
    title: 'Caution',
    text: 'I advise caution when interacting with suspicious websites. Please navigate away from the site.',
    icon: 'warning',
    confirmButtonText: 'Understand'
  })

  return (
    <div className="relative">
      <Navbar variant="justify-center" color="border-violet-600">
        <li className="cursor-pointer">Slot</li>
        <li className="cursor-pointer">Sport</li>
        <li className="cursor-pointer">Casino</li>
        <li className="cursor-pointer">Tembak Iklan</li>
        <li className="cursor-pointer">Lottery</li>
        <li className="cursor-pointer">Poker</li>
        <li className="cursor-pointer">Promo</li>
        <li className="cursor-pointer">VIP</li>
        <li className="cursor-pointer">Referral</li>
        <li className="cursor-pointer">QQPOOL</li>
      </Navbar>
      <div className="flex">
        <div className="bg-gray-200 w-3/6 p-40">
          <Input
            type="text"
            placeholder="Nama Pengguna"
            label="Nama Pengguna"
          />
          <Input
            type="email"
            placeholder="Alamat Email"
            label="Alamat Email"
          />
          <Input
            type="password"
            placeholder="Kata Sandi"
            label="Kata Sandi"
          />
          <Input
            type="password"
            placeholder="Konfirmasi Sandi"
            label="Konfirmasi Sandi"
          />
          <div className="flex justify-center">
            <button className="font-bold mt-5 px-10 py-2 bg-violet-500 rounded-md">Register</button>
          </div>
        </div>
        <div className="w-3/6 flex justify-center">
          <div className="mt-5 bg-slate-100 w-96">
            <div className="border-b-4 border-violet-800 p-4">
              <p className="font-bold text-xl text-violet-800">Pemenang Teratas</p>
            </div>
            {winners.map((winner, index) => (
              <Winner
                key={index}
                telephone={winner.telephone}
                country={winner.country}
                money={winner.money}
                variant={index % 2 === 0 ? 'bg-slate-200' : ''}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="fixed z-10 bottom-0 left-14">
        <Ads
          variant={iklans[0].isIllegal ? 'is-illegal' : 'is-not-illegal'}
          img={iklans[0].img}
          isIllegal={iklans[0].isIllegal}
        />
      </div>
      <div className="fixed z-10 bottom-0 right-14">
        <Ads
          variant={iklans[2].isIllegal ? 'is-illegal' : 'is-not-illegal'}
          img={iklans[2].img}
          isIllegal={iklans[2].isIllegal}
        />
      </div>
    </div>
  )
}

export default IllegalPage;