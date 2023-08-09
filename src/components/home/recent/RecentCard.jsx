import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      {/* <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div> */}



      
      <section className=" text-gray-100">
	<div className="container max-w-screen p-6 mx-auto space-y-2 sm:space-y-12">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (

			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group  bg-gray-50 drop-shadow-lg" key={index}>
				<img role="presentation" className="object-cover w-full rounded h-72 " src={cover} />
				<div className="p-6 space-y-2">
        <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}<i className='fa fa-heart ml-24'></i></span>
        
            
					<h3 className="text-2xl font-semibold  ">{name}</h3>
					<span className="text-xs ">January 21, 2021</span>
					<p>                  <i className='fa fa-location-dot'></i> {location}         </p>
           <button className="h- text-center ">{price}</button>   
          <span className="text-xs ml-8">{type}</span>

				</div>
			</a>
			  )
        })}
			
		</div>
		
	</div>
</section>
    </>
  )
}

export default RecentCard
