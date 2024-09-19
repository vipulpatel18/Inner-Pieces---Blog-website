import React from 'react'

export default function Contactform() {
  return (
    <>
    <div className="container mt-5 card contact-form p-4 mb-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={()=>{e.preventDefault()}} className="" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={4}
                required=""
                defaultValue={""}
              />
            </div>
            <button onClick={()=>{return false}} className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
