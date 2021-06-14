// Assuming logo.png is in the same folder as JS file
import logo from '../Images/lighthouse.png';
import "../CSS/About.css"

const About = () => {
    return (
        <div id = "About" className = "fcontainer" >
            <div className="Banner">
                    <div className =  "">
                    <img src={logo} alt="logo" class="images"/>
                    </div>
            
            <div className="top-left">
            <p style = {{ "font-size": "1.5vw"}}> 
            An innovative, goal-oriented and self-directed professional with a M.S. in Computer Science and B.S. in Mechanical Engineering (Aerospace Concentration) with relative experience in Systems and Software Engineering. 
                Adept at collaborating with engineering team to conceptualize and deliver quality work. 
                Proficient in Python, Java, JavaScript, R, MySQL. 
                Superior work-ethic with outstanding analytical, project-management skills.
            </p>
            <p style = {{ "font-size": "1.5vw"}}><a href="https://www.linkedin.com/in/karansingh1218/">LinkedIn</a> : 
                <a href="https://github.com/karansingh1218"> Github</a></p>
            </div>
            </div>
            
        </div>
    )
}

export default About
