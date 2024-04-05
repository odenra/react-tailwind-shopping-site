import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between
                        items-center max-lg:flex-col
                        gap-10 w-full max-container"
    >

      <div className="flex flex-1 flex-col">
      
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You
          <br />
          <span className="text-coral-red">Super</span>
          <span className="text-coral-red mr-2">Quality</span>Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum.</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8}
        width={570}
        height={522}
        className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
