const Button = ({ label, iconURL, backgroundColor, borderColor }) => {
  return (
    <button className={`flex justify-center items-center 
                        gap-2 px-8 py-4 border font-montserrat
                        text-lg leading-none
                        
                        ${backgroundColor
                        ? `${backgroundColor} ${borderColor}`
                        : 'bg-coral-red rounded-full text-black border-coral-red'}

                        bg-coral-red
                        rounded-full text-black border-coral-red`}>
        {label}

        {iconURL && <img 
        src={iconURL}
        className="ml-2 rounded-full w-5 h-5"      
        />}

    </button>
  )
}

export default Button