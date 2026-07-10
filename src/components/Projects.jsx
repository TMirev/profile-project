import Contacts from "../images/Contacts.jpg";
import Destinations from "../images/Destinations.jpg";
import NotesBoard from "../images/ProNotesMobile.jpg";
import Notes from "../images/ProNotesResponsive.jpg";
import TravelWeb from "../images/TravelWeb.jpg";
import Watch from "../images/Watch.jpg";
function Projects() {
    return (
        <section className="project-section">
            <h2>PROJECTS</h2>

              <div className="project-card">
                <h3>Pro Notes</h3>
                <a href="https://tmirev.github.io/ProNotes/" class="project-btn">Live Demo</a>
                <div class="image-line">
                    <img src={NotesBoard} alt="Notes Board" className="project-image" />
                    <img src={Notes} alt="Notes Board" className="project-image" />
                </div>

                <p>The Pro Notes is a responsive note-taking application built with HTML, CSS and JavaScript.
                    Designed for fast, distraction-free writing.
                    It allows users to create, edit and delete notes directly in the browser, with all changes saved automatically using localStorage, ensuring notes remain even after refreshing or closing the tab.
                    The interface is intentionally minimal, focusing on clarity, smooth interactions and ease of use.
                    JavaScript handles dynamic DOM manipulation to generate notes on the fly, while CSS provides a clean, modern layout that adapts seamlessly across devices.
                    The project demonstrates strong front-end fundamentals, including state persistence, event handling and responsive UI design without relying on frameworks.
                </p>


                <p>- Create, Edit, Delete, Archive</p>
                <p>- LocalStorage persistence (notes remain after refresh)</p>
                <p>- Responsive UI for desktop and mobile</p>
                <p>- Colour-coded notes for visual organisation</p>
                <p>- Smooth DOM based interactions</p>
                <p>- Minimal distraction free interface</p>
                <p>- Dark/Light toggle modern</p>
                <p>- Search filter notes</p>
                <p>- Archive notes storage</p>
                <p>- CSS layout, styling, responsoveness</p>
                <p>- Git and GitHub version control for deployment</p>
            </div >


            <div className="project-card">
                <h3>Destination Discovery</h3>
                <a href="https://tmirev.github.io/Travel-Destination-Web/" class="project-btn">Live Demo</a>
                <div class="image-row">
                    <img src={TravelWeb} alt="Travel Web" className="project-image-tall"></img>
                    <img src={Contacts} alt="Contact form" className="project-image-first"></img>
                    <img src={Destinations} alt="Destination form" className="project-image-second"></img>
                </div>

                <p>Developed a responsive travel-themed website built with HTML, CSS and JavaScript, designed to showcase destinations, travel packages, and smooth user navigation.
                    The site features a clean, modern UI with visually engaging destination sections, interactive elements powered by JavaScript and a layout that adapts seamlessly across mobile, tablet, and desktop screens.
                    Core functionality includes dynamic content sections, hover effects, animated transitions and intuitive navigation that enhances the browsing experience.
                    The project focuses on accessibility, performance and polished front-end design to create a professional, user-friendly travel experience.</p>

                <p>- Built a fully responsive travel-themed website using HTML, CSS and JavaScript, optimised for mobile, tablet and sektop</p>
                <p>- Designed a clean, modern UI with visually engaging destination sections and a consistent layout</p>
                <p>- Implemented interactive JavaScript features, invluding hover effects, animated transitions and dynamic contect rendering</p>
                <p>- Developed smooth, intuitive navigation to enhance user experience and browsing flow</p>
                <p>- Applied responsive design principles using Flexbox/Grid to ensure seamless adaptation across screen sizes</p>
                <p>- Focused on accessibility best practices, including semmantic HTML and readable colour contrast</p>
                <p>- Optimised front-end performance through efficient asset loading and clean, modular code</p>

            </div>


            <div className="project-card">
                <h3>Digital Watch</h3>
                <a href="https://tmirev.github.io/Watch-Project/" class="project-btn">Live Demo</a>
                <div class="image-line">
                    <img src={Watch} alt="Watch" className="project-image-watch" />
                </div>


                <p>- Developed a digital Watch interface using HTML, CSS, and JavaScript, designed to display the current time in a clean, modern layout</p>
                <p>- Utilised JavaScript`s Date() object to retrieve real-time hours, minutes, and seconds, updating the UI every second for accurate timekeeping</p>
                <p>- Applied CSS to create a sleek digital-screen aesthetic, including centred alignment, glowing effects, and a visually balanced layout</p>
                <p>- Structured the project with semantic, minimal HTML, keeping the codebase lightweight, readable, and easy to maintain</p>
                <p>- Focused on UI precision, ensuring consistent spacing, typography, and alignment to achieve a polished, professional appearance</p>
                <p>- Demonstrated strong understanding of DOM manipulation, real-time rendering, and front-end visual design principles</p>
            </div>


          



            


        </section >
    );
}


export default Projects;