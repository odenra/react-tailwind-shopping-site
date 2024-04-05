import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL}
            className="w-[280px] h-[280px] cursor-pointer"
        />

        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star}
                width={24} height={24}
            />
            <p className="font-montserrat text-xl text-slate-gray ">4.5</p>
        </div>

        <h3 className="font-montserrat  font-semibold text-l mt-2 cursor-pointer">{name}</h3>
        <p className="text-l mt-2 text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard