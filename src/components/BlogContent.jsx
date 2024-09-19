import React from "react";
import { CiHeart } from "react-icons/ci";

export default function BlogContent({ blogData }) {
    return(
        <>
      {blogData.map((d, i) => {
        return (
          <div key={i} className=" blog-box">
            <div className="card">
               
              <div
                className="p-2 blog-img"
                //  style={
                // width:"358px",
                // height:"268px"
                // }
              >
                <img
                  src={d.img}
                  role="button"
                  className="card-img-top"
                  alt="Converse All Star High Top"
                />
              </div>
              <div className="d-flex justify-content-between px-3">
                <p className="card-text">
                  <small className="text-muted">Admin</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{d.time}</small>
                </p>
              </div>
              <div className="card-body">
                <h5 className="card-title">{d.title}</h5>
                <p className="card-text">{d.des}</p>

                <div className="d-flex justify-content-between">
                  <div>
                    <p className="card-text">
                      <small className="text-muted">
                        {d.views} views
                      </small>
                    </p>
                  </div>
                  <div className="d-flex align-self-center justify-content-center">
                    <CiHeart className="fs-5 pt-1" />
                    <p className="card-text">
                      <small className="text-muted ">
                        {d.like} <i className="far fa-heart"></i>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </>
    );
}
