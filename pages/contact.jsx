import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <div>
      <MainLayout>
        <p
          className="d-flex justify-content-center my-3 fs-1"
          style={{ fontFamily: "Staatliches", color: "rgb(52, 177, 235)" }}
        >
          Contact Me
        </p>
        <div className="d-flex mx-auto mb-5" style={{ width: "75%" }}>
          <img src="/profilepic.jpeg" style={{ width: "175px" }} />
          <div
            className="d-flex flex-column my-auto mx-3 fs-5"
            style={{ fontFamily: "Prompt", color: "rgb(87, 87, 87)" }}
          >
            <p className="d-flex gap-5 mb-1">
              <span className="fw-bold">Name</span>
              <span>Phanarin Kiatsirithaworn</span>
            </p>
            <p className="d-flex gap-2 mb-1">
              <span className="fw-bold">Nickname</span>
              <span>Focus</span>
            </p>
            <p className="d-flex gap-4 mb-1">
              <span className="fw-bold">Address</span>
              <span>
                32 Thung Tom Road, Nai Wiang Subdistrict, Mueang Phrae District,
                Phrae 54000
              </span>
            </p>
            <p className="d-flex gap-2 mb-1">
              <span className="fw-bold">Facebook</span>
              <a
                href="https://web.facebook.com/phanarin03072002"
                target="_blank"
                rel="noreferrer"
              >
                https://facebook.com/phanarin03072002
              </a>
            </p>
            <p className="d-flex gap-5 mb-1">
              <span className="fw-bold">Email</span>
              <a href="mailto:phanarin03072002@gmail.com">
                phanarin03072002@gmail.com
              </a>
            </p>
            <p className="d-flex gap-5 mb-1">
              <span className="fw-bold">Phone</span>
              <span>094-164-9865</span>
            </p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
