import Resume from './cv_chutiman Krataithong.pdf'
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey,I'm Kai</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Devloper
                    </h1>
                    <p className="hero--section-description">
                        I have successfully completed the Junior Software developer Generation Thailand
                        <br /> program and am eager to contribute to the organization by gaining practical experience through training and project development. 
                        I am proficient in HTML, CSS, and JavaScript frameworks. Additionally, I have experience working with React frameworks and both SQL and NoSQL databases. 
                        I possess the ability to collaborate effectively with cross-functional teams and excel in problem-solving, allowing me to analyze complex technical issues.
                    </p>
                </div>
                <div className='both-btn'>
                    <button className="btn btn-primary"><a
                    href={Resume}
                    download="Resume_Chutiman"
                    target="_blank"
                    >Resume
                    </a></button>
                    <br />
                    <div>
                    <a href="https://www.linkedin.com/in/chutiman-krataithong/" className='btn btn-primary' target="_blank">
                        Linkdin
                    </a>
                </div>
                </div>
                
                
            </div>
            <div className="hero--section--img">
                <img src="./img/mixdraftcut2.png" alt="" />
            </div>
        </section>       
    );
}