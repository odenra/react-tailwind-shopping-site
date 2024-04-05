import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../const"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text4xl font-bold">
        What Our 
        <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="info-text mt-4  m-auto max-w-lg text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, nam in!
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard  key={review.customerName}
                       imgURL={review.imgURL}
                       custumerName={review.customerName}
                       rating={review.rating}
                       feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews