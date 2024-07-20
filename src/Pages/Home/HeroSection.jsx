export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Divyanshu Jain</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">B. Tech</span>{" "}
              <br />
              Student
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          {/* <button className="btn btn-primary">My Resume</button> */
            <a href="/Divyanshu_Jain_Resume.pdf" download className="btn btn-primary">
            My Resume
            </a>
          }
        </div>
        <div className="hero--section--img">
          { //<img src="./img/hero_img.png" alt="Hero Section" /> 
             <img src="./img/My_hero_3.png" alt="Hero Section" />
          }
        </div>
      </section>
    );
  }