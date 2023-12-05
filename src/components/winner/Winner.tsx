import { IWinner } from "./Winner.interfaces";

const Winner = (props: IWinner) => {
  const { telephone, country, money, variant } = props
  return (
    <div className={`flex ${variant} px-4 py-2 justify-between items-center`}>
      <div className="text-black">
        <p className="font-bold">{telephone}</p>
        <p>{country}</p>
      </div>
      <p className="text-black">
        {money}
      </p>
    </div>
  )
}

export default Winner;