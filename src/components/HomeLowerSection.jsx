import React from 'react'

export default function HomeLowerSection() {
  return (
    <>
    <div className="container mb-3 card p-3">
        <div className="justify-content-center">
          <div
            className="col-md-8  row"
          >
            <div className="card-body col-6 p-5 d-flex">
              <blockquote className="blockquote card p-5 w-75 justify-contant-center align-self-center">
                <p>
                  "I always get to where I'm going by walking away from where I
                  have been."
                </p>
                <footer className="blockquote-footer">
                  Winnie the Pooh <cite title="Source Title">A.A. Milne</cite>
                </footer>
              </blockquote>
            </div>
            <div className="text-center col-5" role="button">
              <img
                src="assets/home img 3.webp"
                className="card-img-top"
                alt="Hand with rainbow"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
