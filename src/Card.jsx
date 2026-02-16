import profilePic from "./assets/image.jpg";
import Skills from "./components/Skills";
import Certification from "./components/Certification";

function Card({ children }) {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2>Front-End Software Developer</h2>

            <p>Junior Front-End Developer focused on creating reponsive, and accesible, visually appealing web interfaces.</p>
            <p>Skilled in HTML, CSS, JavaScript and React with eperience building real projects such as Notes Board, Travel Website and a Profile Page.</p>
            <p>Passionate about clean code, UI/UX and continous learning by solving problems.</p>
            <Skills />
            <Certification />

        </div>

    );
}

export default Card;