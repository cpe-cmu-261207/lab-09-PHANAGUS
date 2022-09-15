import Card from "../components/Card";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <>
          <p
            className="d-flex justify-content-center my-3 fs-1"
            style={{ fontFamily: "Staatliches", color: "rgb(52, 177, 235)" }}
          >
            My Profile
          </p>
          <img
            src="/profilepic.jpeg"
            className="mx-auto mb-3"
            style={{ width: "175px" }}
          />
          <p
            className="d-flex justify-content-center mb-1 fs-4"
            style={{ fontFamily: "Prompt", color: "black" }}
          >
            Phanarin Kiatsirithaworn
          </p>
          <p
            className="d-flex justify-content-center mb-1 fs-5"
            style={{ fontFamily: "Prompt", color: "black" }}
          >
            ภานรินทร์ เกียรติศิริถาวร
          </p>
          <div
            className="mx-auto mb-1 fs-5"
            style={{ width: "50%", textAlign: "center" }}
          >
            <hr />
            <p
              className="fs-0"
              style={{ fontFamily: "Prompt", color: "rgb(87, 87, 87)" }}
            >
              Hi. my name is Phanarin Kiatsirithaworn. I am studying at Faculty
              of Computer Engineering, Chiang Mai University. I love video
              editing. I am interested in making movies.
            </p>
            <hr />
          </div>
        </>
        <div className="mx-auto mb-5" style={{ width: "60%" }}>
          <p
            className="mb-1 fs-4"
            style={{ fontFamily: "Prompt", color: "black" }}
          >
            About me
          </p>
          <Card
            imgsrc="/cpp.jpg"
            title="C++"
            text="I have passed an intoductory C++ writing course."
          />
          <Card
            imgsrc="/videoediting.jpeg"
            title="Video Editing"
            text="I love video editing! It takes a lot of my energy. but I still
            love it!"
          />
          <Card
            imgsrc="/drawing.jpg"
            title="Drawing Cartoon"
            text="I like to draw cartoons in my free time. It's time for
            imagination!"
          />
        </div>
      </MainLayout>
    </div>
  );
}
