import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

export default function experience() {
  return (
    <div>
      <MainLayout>
        <p
          className="d-flex justify-content-center my-3 fs-1"
          style={{ fontFamily: "Staatliches", color: "rgb(52, 177, 235)" }}
        >
          My Experience
        </p>
        <div className="mx-auto mb-5" style={{ width: "60%" }}>
          <Card
            imgsrc="/algae.jpg"
            title="SMTE Inspiration Camp"
            text="A camp that distributes students to different provinces to learn local cultures to inspire projects."
          />
          <Card
            imgsrc="/project.png"
            title="SMTE Project Festival"
            text="The last SMTE program that SMTE students must make their projects and present in this festival."
          />
          <Card
            imgsrc="/math.jpg"
            title="Gifted Math Camp"
            text="A camp that Chiang Mai University organized for high school students to learn advanced mathematics together."
          />
        </div>
      </MainLayout>
    </div>
  );
}
