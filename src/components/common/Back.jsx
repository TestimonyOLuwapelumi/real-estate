import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span className="text-xs">{name}</span>
          {/* <h1 className="text-xs">{title}</h1> */}
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
