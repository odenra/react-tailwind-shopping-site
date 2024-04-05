import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, custumerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL}
             className="rounded-full
             object-cover w-[120px] h-[120px]"/>

        <p className="font-montserrat mt-5 max-w-sm text-center info-text">{feedback}</p>

        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star}
            width={24}
            height={24}
            className="object-contain m-0"/>

            <p className="text-xl font-montserrat">({rating})</p>
        </div>

        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{custumerName}</h3>
    </div>
  )
}

export default ReviewCard