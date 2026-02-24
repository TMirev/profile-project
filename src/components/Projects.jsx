import NotesBoard from "../images/NotesBoard.jpg";
import TravelWeb from "../images/TravelWeb.jpg";

function Projects() {
    return (
        <section className="project-section">
            <h2>Projects</h2>

            <div className="project-section">

                <div className="project-card">


                    <h3>Notes Board</h3>
                    <img src={NotesBoard} alt="Notes Board" className="project-image" />

                    <p>The Notes Board is a responsive note-taking application built with HTML, CSS and JavaScript.
                        Designed for fast, distraction-free writing.
                        It allows users to create, edit and delete notes directly in the browser, with all changes saved automatically using localStorage, ensuring notes remain even after refreshing or closing the tab.
                        The interface is intentionally minimal, focusing on clarity, smooth interactions and ease of use.
                        JavaScript handles dynamic DOM manipulation to generate notes on the fly, while CSS provides a clean, modern layout that adapts seamlessly across devices.
                        The project demonstrates strong front-end fundamentals, including state persistence, event handling and responsive UI design without relying on frameworks.
                    </p>

                    <a href="https://tmirev.github.io/Notes-Board/" class="project-btn">Live Demo</a></div>
            </div>



            <div className="project-card">
                <h3>Travel Website</h3>
                <img src={TravelWeb} alt="Travel Web" className="project-image-tall"></img>

                <p>Developed a responsive travel-themed website built with HTML, CSS and JavaScript, designed to showcase destinations, travel packages, and smooth user navigation.
                    The site features a clean, modern UI with visually engaging destination sections, interactive elements powered by JavaScript and a layout that adapts seamlessly across mobile, tablet, and desktop screens.
                    Core functionality includes dynamic content sections, hover effects, animated transitions and intuitive navigation that enhances the browsing experience.
                    The project focuses on accessibility, performance and polished front-end design to create a professional, user-friendly travel experience.</p>

                <a href="https://tmirev.github.io/Travel-Website/" class="project-btn">Live Demo</a>

            </div>


        </section>
    );
}


export default Projects;