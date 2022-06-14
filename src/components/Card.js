import React from "react"

const Card = ({ children, imgSrc, name }) => {
  return (
    <div className="rounded-xl bg-white overflow-hidden shadow-xl">
      <div className="card-header px-4 pt-5">
        <div
          className="rounded-lg shadow-xl h-[200px] bg-gray-50"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export default Card
