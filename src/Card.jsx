import profilePic from "./assets/image.jpg";
import Certification from "./components/Certification";
import Skills from "./components/Skills";

function Card({ children }) {
    return (



        <div className="section-box contacts-box">
            <div className="card">
                <div className="image-wrapper">
                    <img className="card-image" src={profilePic} alt="profile picture" />
                    <ul className="contact-list">
                        <h2>Tenko Mirev</h2>
                        <p>Front-End Developer</p>
                        <h1>Contacts</h1>
                        <p>t.d.mirev@gmail.com</p>
                        <p>https://www.linkedin.com/in/tenkomirev/</p>
                        <p>https://github.com/TMirev</p>
                        <p>London, UK</p>
                    </ul>


                    <h2>Front-End Software Developer</h2>

                    <p>Junior Front-End Developer focused on creating reponsive, and accesible, visually appealing web interfaces.</p>
                    <p>Skilled in HTML, CSS, JavaScript and React with eperience building real projects such as Notes Board, Travel Website and a Profile Page.</p>
                    <p>Passionate about clean code, UI/UX and continous learning by solving problems.</p>
                    <Skills />
                    <Certification />
                    <contactSection />

                </div>

            </div>



        </div>

    );
}

export default Card;