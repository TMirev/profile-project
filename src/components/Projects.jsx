import Contacts from "../images/Contacts.jpg";
import Destinations from "../images/Destinations.jpg";
import Notes from "../images/Notes.jpg";
import NotesBoard from "../images/NotesBoard.jpg";
import TravelWeb from "../images/TravelWeb.jpg";
import Watch from "../images/Watch.jpg";
function Projects() {
    return (
        <section className="project-section">
            <h2>Technical Projects</h2>

            <div className="project-card">
                <h3>Digital Watch</h3>
                <div class="image-line">
                    <img src={Watch} alt="Watch" className="project-image-watch" />
                </div>

                <p>
                    A digital Watch built with HTML, CSS and JavaScript that displays the current time in clean, modern interface.
                    The project uses JavaScript`s Date object to retrieve real-time hours, minutes and seconds, updating the display every second to keep the clock accurate.
                    CSS handles the visual styling, giving the watch a sleek layout, centered alignment and a glowing digital-screen effect.
                    The structure is kept simple with semantic HTML, making project lightweight and easy to understand.
                </p>

                <a href="https://tmirev.github.io/Watch-Project/" class="project-btn">Live Demo</a>
            </div>


            <div className="project-card">
                <h3>Notes Board</h3>
                <div class="image-line">
                    <img src={NotesBoard} alt="Notes Board" className="project-image" />
                    <img src={Notes} alt="Notes Board" className="project-image" />
                </div>

                <p>The Notes Board is a responsive note-taking application built with HTML, CSS and JavaScript.
                    Designed for fast, distraction-free writing.
                    It allows users to create, edit and delete notes directly in the browser, with all changes saved automatically using localStorage, ensuring notes remain even after refreshing or closing the tab.
                    The interface is intentionally minimal, focusing on clarity, smooth interactions and ease of use.
                    JavaScript handles dynamic DOM manipulation to generate notes on the fly, while CSS provides a clean, modern layout that adapts seamlessly across devices.
                    The project demonstrates strong front-end fundamentals, including state persistence, event handling and responsive UI design without relying on frameworks.
                </p>

                <a href="https://tmirev.github.io/Notes-Board/" class="project-btn">Live Demo</a>
            </div >



            <div className="project-card">
                <h3>Travel Website</h3>
                <div class="image-row">
                    <img src={TravelWeb} alt="Travel Web" className="project-image-tall"></img>
                    <img src={Contacts} alt="Contact form" className="project-image-first"></img>
                    <img src={Destinations} alt="Destination form" className="project-image-second"></img>
                </div>

                <p>Developed a responsive travel-themed website built with HTML, CSS and JavaScript, designed to showcase destinations, travel packages, and smooth user navigation.
                    The site features a clean, modern UI with visually engaging destination sections, interactive elements powered by JavaScript and a layout that adapts seamlessly across mobile, tablet, and desktop screens.
                    Core functionality includes dynamic content sections, hover effects, animated transitions and intuitive navigation that enhances the browsing experience.
                    The project focuses on accessibility, performance and polished front-end design to create a professional, user-friendly travel experience.</p>

                <a href="https://tmirev.github.io/Travel-Website/" class="project-btn">Live Demo</a>

            </div>


        </section >
    );
}


export default Projects;