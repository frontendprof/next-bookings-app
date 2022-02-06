import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { rooms } = useSelector((state) => state.allRooms);
  // console.log(rooms);
  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {' '}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-2">
            <img className="card-img-top mx-auto" src="/assets/img-1.jpg" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">Charming Studio 10 Miles to Wells Beaches!</a>
              </h5>

              <div className="ratings mt-auto mb-3">
                <p className="card-text">
                  <b>$12</b> / night
                </p>

                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>

              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-2">
            <img className="card-img-top mx-auto" src="/assets/img-2.jpg" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">Picturesque 2-Story Farmhouse w/Private Hot Tub</a>
              </h5>

              <div className="ratings mt-auto mb-3">
                <p className="card-text">
                  <b>$12</b> / night
                </p>

                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>

              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-2">
            <img className="card-img-top mx-auto" src="/assets/img-3.jpg" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">Downtown Portsmouth Private Getaway! Hot Tub</a>
              </h5>

              <div className="ratings mt-auto mb-3">
                <p className="card-text">
                  <b>$12</b> / night
                </p>

                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>

              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-2">
            <img className="card-img-top mx-auto" src="/assets/img-4.jpg" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">Spacious Suite in a quiet Boston neighborhood.</a>
              </h5>

              <div className="ratings mt-auto mb-3">
                <p className="card-text">
                  <b>$12</b> / night
                </p>

                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>

              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
