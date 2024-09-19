import React from 'react'
import { Link } from "react-router-dom";


export default function HomeUpperSection() {
  return (
    <>
     <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 home-main">
            <img
              src="assets/first img.webp"
              className="img-fluid home-main-img"
              role="button"
              alt=""
            />
            <img src="assets/blog-2.webp" role="button" className="w-50" alt="" />
            <img src="assets/blog-7.webp" role="button" className="w-50" alt="" />
          </div>
          <div className="col-md-6 card p-2">
            <h3 className="text-center mb-4">My Thoughts</h3>
            <div className="card border-0 ">
              <img
                src="assets/home img 2.webp"
                role="button"
                className="card-img-top home-second-img align-self-center"
                alt="Flowers"
              />
              <div className="card-body">
                <h5 className="card-title">Detoxing my social media feed</h5>
                <p className="card-text">
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and entices your audience to continue
                  reading....
                </p>
                <div className="text-center">
                  <Link to="/blog" className="btn btn-outline-dark">
                    All Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
