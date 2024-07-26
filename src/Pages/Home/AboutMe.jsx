export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          {/* <img src="./img/about-me.png" alt="About Me" /> */
          <img src="./img/My_first_design.png" alt="About Me" />
          }
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            Hello! I am Divyanshu Jain, currently pursuing Computer Science from S.G.S.I.T.S, Indore. My mission is to continuously advance my technical skills, engage in impactful projects, and collaborate with like-minded professionals. By pushing the boundaries of technology, I aspire to solve numerous problems for the betterment of society. 
            </p>
            <p className="hero--section-description">
            My skills encompass a wide range of technical domains, including app development, web development, machine learning, and database management. I am adept at creating user-friendly and robust applications across various platforms. I excel at analyzing complex problems and devising efficient, technical solutions to address them. 
            </p>
          </div>
        </div>
      </section>
    );
  }