import PopularProductCard from '../Components/PopularProductCard';
import { products } from '../const';

const PopularProducts = () => {
  return (
    <section id='products'
             className='max-container
                        max-sm:mt-12
                        max-sm:ml-20'>
    
    <div className='flex justify-start flex-col gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, praesentium!
        </p>
    </div>                        
    
    <div className='mt-16 grid
                    lg:grid-cols-4 md:grid-cols-3
                    sm:grid-cols-2 grid-cols-1
                    sm:gap-4 gap-14'>


    {products.map((product) => (
      <PopularProductCard key= {product.name} {...product} />
    ))}                  

    </div>

    </section>
  )
}

export default PopularProducts