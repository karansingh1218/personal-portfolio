// Assuming logo.png is in the same folder as JS file
import logo from '../Images/my-visual_54893015.png';
import "../CSS/About.css"

const About = () => {
    return (
        <div id = "About" className = "fcontainer" >
            <div className="Banner">
                    <div className =  "">
                    <img src={logo} alt="logo" class="images"/>
                    </div>
            
            <div className="top-left">
            <p>An innovative, goal-oriented and self-directed professional with a M.S. in Computer Science and B.S. in Mechanical Engineering (Aerospace Concentration) with relative experience in Systems and Software Engineering. 
                Adept at collaborating with engineering team to conceptualize and deliver quality work. 
                Proficient in Python, Java, JavaScript, R, MySQL, ReactJS and Python Flask. 
                Superior work-ethic with outstanding analytical, project-management skills.
            </p>
            </div>
            </div>
            
        </div>
    )
}

export default About
