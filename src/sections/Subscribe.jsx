import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex
                        justify-between items-center
                        max-lg:flex-col gap-10"
                        id="contact-us">
        
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span> 
        &Newsletter
      </h3>
  
    <div className="flex max-sm:justify-end items-center max-sm:w-[480px] gap-5 p-2.5 border border-slate-gray rounded-full">
      <input type="text" 
             placeholder="subscribe@nike.com"
             className="input"/>
             <div>
              <Button label="Sign Up" fullWidth/>
             </div>
    </div>
    </section >
  )
}

export default Subscribe