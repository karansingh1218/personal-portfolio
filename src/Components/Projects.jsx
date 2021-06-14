import { Card, Button } from 'react-bootstrap'
import "../CSS/Projects.css"
import abaqus from '../Images/simulia-abaqus.png';
import jupyter from '../Images/simulia-abaqus.png';
import starccm from '../Images/starccm.png';
import matlab  from '../Images/Matlab.png';
import  react   from '../Images/react.jpeg';
import eco     from '../Images/eco.png';
const Projects = () => {
    return (
        <div id = "Projects" className = "container" >
            <div className = "header">
            <h1 style = {{"font-size": "2rem"}}>PROJECTS</h1>
            </div>
            <div class="card">
            <Card style={{ width: '25rem', "font-size": "12px"}}>
                <Card.Img style = {{"margin-left": 100, height: 150 , width: 150 }} src= {abaqus} />
                <Card.Body>
                    <Card.Title>FEA K-Means Clustering </Card.Title>
                    <Card.Text style = {{height: 200 }}>
                    <ul>
                            <li>
                            U.S. Army Combat Capabilities Development Command – Armaments Center
                            </li>
                            <li>
                            Developed Python automation script, leverging the ABAQUS API to extract Contact Pressure from all elements at timesteps.
                            </li>
                            <li>
                            Performed data transformation techniques to implement Kmeans algorithim on specific surfaces in FEA Model using Jupyter Notebook
                            </li>
                            <li>
                            The K-Means Algorithim allowed clustering of nodes with similar contact pressures and was plotted using scikit learn packages.
                            </li>
                        </ul>
                       

                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card"> 
            <Card style={{ width: '25rem' , "font-size": "12px"}}>
                <Card.Img style = {{"margin-left": 100, height: 150 , width: 150}} src={starccm} />
                <Card.Body>
                    <Card.Title>Automation of CFD Analysis in HPC</Card.Title>
                    <Card.Text style = {{height: 200 }}>
                        <ul>
                            <li>
                            U.S. Army Combat Capabilities Development Command – Armaments Center
                            </li>
                            <li>
                            Developed Automation suite using Python, Jupyter Notebook and open source package to automate the process of sending/recieving simulations in the HPC environment.
                            </li>
                            
                            <li>
                            Reported 20-50% increase in efficency has been reported from the CFD Engineer
                            </li>
                            <li>
                            The interactive Jupyer notebook allowed selecting where the simulations are stored and for execution of simulations.
                            </li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">  
            <Card style={{ width: '25rem' , "font-size": "12px"}}>
                <Card.Img style = {{"margin-left": 100, height: 150 , width: 150}} src={matlab}/>
                <Card.Body>
                    <Card.Title >AltNav (Satellite Simulation)</Card.Title>
                    <Card.Text style = {{height: 200 }}>
                        <ul>
                            <li>
                            Developed Sequence Flow Diagrams and UML diagrams for the software architecture
                            </li>
                            <li>
                            Created documentation describing all functions/classes in the digital simulation software
                            </li>
                            <li>
                            Assisted lead engineer on programming effort, by developing Matlab scripts following Object Oriented Principles
                            </li>
                            <li>
                            Developed code to integrate different satellite systems into existing simulation software
                            </li>
                            <li>
                            Performed extensive simulation/testing in the High Performance Computing Environment  
                            </li>
                    </ul>
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">
            <Card style={{ width: '25rem' , "font-size": "11px"}}>
                <Card.Img style = {{"margin-left": 100, height: 150 , width: 150}}src={react}/>
                <Card.Body>
                    <Card.Title>Web Based Engineering Tool</Card.Title>
                    <Card.Text style = {{height: 200 }}>
                        <ul>
                            <li>
                            Lead on the Front-end development, using Web technologies such as: React, Node, Javascript, HTML, CSS.
                            </li>
                            <li>
                            The Dashboard will allow engineers to input data to run engineering analysis and see the visualization of data in real-time.
                            </li>
                            <li>
                            Currently engineers are using Excel to perform engineering analysis and our goal is to streamline and expedite that process by developing a Web Application. The backend consists of using Python to run the engineering analysis and the data will be stored in MongoDB.
                            </li>
                    </ul>
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">
            <Card style={{ width: '25rem' , "font-size": "11px"}}>
                <Card.Img style = {{"margin-left": 100, height: 150 , width: 150}}src={react}/>
                <Card.Body>
                    <Card.Title>In House Software Automation</Card.Title>
                    <Card.Text style = {{height: 200 }}>
                        <ul>
                            <li>
                            Regarded as the in house specialist on programming, automation, High Fidelity Physics Based Model Integration.
                            </li>
                            <li>
                            Extensively involved with automation of engineering software utilized by the CAE (Compter-Aided Engineering Community at Picatinny Arsenal). 
                            </li>
                            <li>
                            Sucessuly wrote scripts to automate Internal Ballistics , 6DOF Trajectory, and PRODAS software. The Programming languages utilized was Python or VBscript.
                            </li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">
            <Card style={{ width: '25rem' , "font-size": "10.5px"}}>
                <Card.Img style = {{"margin-left": 100, height: 150 , width: 150}}src={eco}/>
                <Card.Body>
                    <Card.Title>Eco-Enterprise</Card.Title>
                    <Card.Text style = {{height: 200 }}>
                        <ul>
                        <li>
                        A platform to monitor as well as manage energy and utility usage. Be able to implement eco-friendly alternatives to reduce carbon footprint and save money.
                        </li>
                        <li>
                        Developed Back-End in Node.js to integrate equipment in commercial buildings under the SNMP, BACnet and MQTT Protocol
                        </li>
                        <li>
                        AWS IoT SDK was utilized to send object values from devices to AWS IoT, where the data was stored in MongoDB
                        </li>
                        <li>
                        Debugged and discovered smart devices in a manufacturing facility network using Wireshark and YABE
                        </li>
                        <li>
                        Leverage JIRA, Confluence and BitBucket to collaborate with Integrated Product Team
                        </li>
                        </ul>
                
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Projects
