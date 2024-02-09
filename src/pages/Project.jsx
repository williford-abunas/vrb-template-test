import React from 'react';

function Project() {
  return (
    <div className="masthead bg-info">
      <div className="row py-5 px-3">
        <div className="col col-lg-6 pb-4">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('../public/16x9.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-danger text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 1: Missing Teddy</h3>
            </div>
          </div>
        </div>

        <div className="col col-lg-6 pb-4">
          <div
            className="card h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: "url('../public/2.jpg')",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-danger text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 2: Coffee Bean</h3>
            </div>
          </div>
        </div>

        <div className="col col-lg-6">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('../public/3.png')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-danger text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project 3: Bean Bug</h3>
            </div>
          </div>
        </div>

        <div className="col col-lg-6">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: "url('../public/4.jpg')" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-danger text-shadow-1">
              <h3 className=" mt-5 mb-4 display-6 lh-1 fw-bold">Project 4: Mr. Bean Rides Again</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
