import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
// import "./style.css"

const Location = () => {
  return (
    <>
     


      <div className=" container max-w-screen p-6 mx-auto space-y-2 sm:space-y-12">
      <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

	<div className="justify-center grid grid-cols-2 gap-5 lg:grid-cols-3 sm:grid-cols-2">


  {location.map((item, index) => (         
		<div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-72 " style={{backgroundImage: `url(${item.cover})`}} key={index}>
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b "></div>
			<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				<a rel="noopener noreferrer" className="px-3 py-2 text-xs font-semibold tracki uppercase   bgundefined"></a>
				<div className="flex flex-col justify-start text-center  ">
					<span className="text-3xl font-semibold leadi tracki">{item.Villas}</span>
					<span className="leadi uppercase"></span>
				</div>
			</div>
			<h2 className="z-10  mt-44">
				<a rel="noopener noreferrer"  className="font-medium text-md  text-gray-50"> {item.name}</a>
        <span>{item.Apartments}</span>
        <span>{item.Offices}</span>
        <span></span>
			</h2>
		</div>
     ))}

		

	</div>
</div>
    </>
  )
}

export default Location
