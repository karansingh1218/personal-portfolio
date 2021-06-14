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
                <Card.Img style = {{margin: 0, height: 300 , width: 300 }} src= {abaqus} />
                <Card.Body>
                    <Card.Title>Contact Pressure at Region of Interest</Card.Title>
                    <Card.Text style = {{height: 150 }}>
                        U.S. Army Project.
                        Developed Python automation script, leverging the ABAQUS API to extract Contact Pressure from all elements at timesteps.
                        asdf
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card"> 
            <Card style={{ width: '25rem' , "font-size": "12px"}}>
                <Card.Img style = {{margin: 0, height: 300 , width: 300}} src={starccm} />
                <Card.Body>
                    <Card.Title>Automation of CFD Analysis in HPC</Card.Title>
                    <Card.Text style = {{height: 150 }}>
                        - U.S. Army Science and Technology 
                        - Developed Automation suite using Python, Jupyter Notebook and open source package to automate the process of sending/recieving simulations in the HPC environment.
                        - Reported 20-50% increase in effeicency has been reported from the CFD Aero Balltitician
                        - The interactive Jupyer notebook allowed for easy simulation runs
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">  
            <Card style={{ width: '25rem' , "font-size": "12px"}}>
                <Card.Img style = {{margin: 0, height: 300 , width: 300}} src={matlab}/>
                <Card.Body>
                    <Card.Title >AltNav (Satellite Simulation)</Card.Title>
                    <Card.Text style = {{height: 150 }}>
                    - Developed Sequence Flow Diagrams and UML diagrams for the software architecture
                    - Created documentation describing all functions/classes in the digital simulation software
                    - Assisted lead engineer on programming effort, by developing Matlab scripts following Object Oriented Principles
                    - Developed code to integrate different satellite systems into existing simulation software
                    - Performed extensive simulation/testing in the High Performance Computing Environment  
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">
            <Card style={{ width: '25rem' , "font-size": "11px"}}>
                <Card.Img style = {{margin: 0, height: 300 , width: 300}}src={react}/>
                <Card.Body>
                    <Card.Title>Web Based Engineering Tool</Card.Title>
                    <Card.Text style = {{height: 150 }}>
                    - Lead on the Front-end development, using Web technologies such as: React, Node, Javascript, HTML, CSS.
                    - The Dashboard will allow engineers to input data to run engineering analysis and see the visualization of data in real-time.
                    - Currently engineers are using Excel to perform engineering analysis and our goal is to streamline and expedite that process by developing a Web Application. The backend consists of using Python to run the engineering analysis and the data will be stored in MongoDB.
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">
            <Card style={{ width: '25rem' , "font-size": "11px"}}>
                <Card.Img style = {{margin: 0, height: 300 , width: 300}}src={react}/>
                <Card.Body>
                    <Card.Title>In House Software Automation</Card.Title>
                    <Card.Text style = {{height: 150 }}>
                        - Regarded as the in house specialist on programming, automation, High Fidelity Physics Based Model Integration.
                        - Extensively involved with automation of engineering software utilized by the CAE (Compter-Aided Engineering Community at Picatinny Arsenal). Sucessuly wrote scripts to automate Internal Ballistics , 6DOF Trajectory, and PRODAS software. The Programming languages utilized was Python or VBscript.
                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
            <div class="card">
            <Card style={{ width: '25rem' , "font-size": "10px"}}>
                <Card.Img style = {{margin: 0, height: 300 , width: 300}}src={eco}/>
                <Card.Body>
                    <Card.Title>Eco-Enterprise</Card.Title>
                    <Card.Text style = {{height: 150 }}>
                    - Companies spend thousands every month on energy and utilities, and in most cases are not energy efficient.A platform to monitor as well as manage energy and utility usage. Be able to implement eco-friendly alternatives to reduce carbon footprint and save money.
                    Developed Back-End in Node.js to integrate equipment in commercial buildings under the SNMP, BACnet and MQTT Protocol
                    - AWS IoT SDK was utilized to send object values from devices to AWS IoT, where the data was stored in MongoDB
                    - Debugged and discovered smart devices in a manufacturing facility network using Wireshark and YABE
                    - Leverage JIRA, Confluence and BitBucket to collaborate with Integrated Product Team



                    </Card.Text>
                    <Button variant="primary">Proprietary</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Projects
