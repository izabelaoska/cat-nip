import React, { useEffect, useState } from "react"
import { GrFavorite } from "react-icons/gr"
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im"
import data from "../data"
import Card from "./Card"

const Cats = () => {
  const [cats, setCats] = useState(data)
  const [currentCatIndex, setCurrentCatIndex] = useState(0)

  const currentCat = cats[currentCatIndex]

  const nextCat = () => {
    setCurrentCatIndex(currentCatIndex + 1)
  }
  const prevCat = () => {
    if (currentCatIndex === 0) {
      setCurrentCatIndex(cats.length - 1)
    } else setCurrentCatIndex(currentCatIndex - 1)
  }

  useEffect(() => {
    if (!currentCat) setCurrentCatIndex(0)
  }, [currentCat])

  if (cats.length === 0) {
    return (
      <div>
        <h2 className="text-xl">No more cats!</h2>
        <button
          className="refresh-button"
          onClick={() => {
            setCats(data)
          }}
        >
          Refresh
        </button>
      </div>
    )
  }

  if (!currentCat) return null

  const { name, age, breed, image, text, id } = currentCat

  const removeCat = (id) => {
    const newCatsArray = cats.filter((cat) => cat.id !== id)
    setCats(newCatsArray)
  }

  return (
    <>
      <div>
        <Card imgSrc={image}>
          <div className="grid grid-cols-3 justify-items-center">
            <button
              className="prev-button -mt-10 mb-auto"
              onClick={prevCat}
            >
              <ImArrowLeft2
                size={20}
                className="prevIcon"
              />
            </button>
            <label
              htmlFor="my-modal-4"
              className="like-button -mt-10 mb-auto"
            >
              <GrFavorite size={20} className="favIcon" />
            </label>

            <button
              className="next-button -mt-10 mb-auto"
              onClick={nextCat}
            >
              <ImArrowRight2
                size={20}
                className="nextIcon"
              />
            </button>
          </div>
          <h4 className="mt-[15px] mb-0 text-lg">{name}</h4>
          <div>
            <p className="mt-0  text-sm">{breed}</p>
            <p className="mt-0 mb-[15px] text-sm">
              {age} years old
            </p>
          </div>
          <p className="mt-[5px] text-xs min-h-[96px]">
            {text}
          </p>
          <div>
            <button
              className="remove-button text-slate-700 text-xs"
              onClick={() => removeCat(id)}
            >
              Not interested!
            </button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Cats
