import React from "react"

const Modal = () => {
  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
      />
      <label
        htmlFor="my-modal-4"
        className="modal cursor-pointer"
      >
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">
            Congratualtions! It's a match!
          </h3>
          <p className="py-4">
            Let's ask the owner about something interesting,
            or you can just say "Hi!" for the initial
            e-meet.
          </p>
          <div className="flex justify-center">
            <label
              htmlFor="my-modal-4"
              className="btn border-0 bg-gradient-to-r from-purple-400 to-pink-400"
            >
              Say "Hi!"
            </label>
          </div>
        </label>
      </label>
    </div>
  )
}

export default Modal
