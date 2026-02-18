import profilePic from "./assets/image.jpg";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import "./App.css"


function Card({ children }) {
    return (



        <div className="card">

            <div className="image-wrapper">
                <img className="card-image" src={profilePic} alt="profile picture" />
            </div>


            <div className="contacts-summary-box">

                <ul className="contact-list">
                    <h1>Tenko Mirev</h1>
                    <p>Front-End Developer</p>
                    <h2>Contacts</h2>
                    <p>t.d.mirev@gmail.com</p>
                    <p>https://www.linkedin.com/in/tenkomirev/</p>
                    <p>https://github.com/TMirev</p>
                    <p>London, UK</p>
                </ul>
            </div>


            <div className="contacts-summary-box">
                <h2>Front-End Developer</h2>

                <p>Junior Front-End Developer focused on creating reponsive, and accesible, visually appealing web interfaces.</p>
                <p>Skilled in HTML, CSS, JavaScript and React with eperience building real projects such as Notes Board, Travel Website and a Profile Page.</p>
                <p>Passionate about clean code, UI/UX and continous learning by solving problems.</p>
            </div>


            <div className="contacts-summary-box">
                <Skills />
            </div>

            <div className="contacts-summary-box">
                <Certification />
            </div>


        </div>

    );
}

export default Card;