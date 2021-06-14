import "../CSS/Experience.css"

const Experience = () => {
    return (
        <div id = "Experience" class="CV-grid">
        <div class="CV-grid-column">
          {/* <div class="CV-jobs"> */}
          {/* <h2 class="CV-secondaryHeading CV-jobs-heading">Experience</h2> */}
            <h2 class="CV-secondaryHeading">Experience</h2>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Systems Engineer </span>&#8211; <span class="CV-timeline-heading-location">U.S. Army Combat Capabilities Development Command – Armaments Center</span><small class="CV-timeline-heading-duration">June 2018 - Present</small></h3>
              <ul class="CV-timeline-details">
                <li class="CV-job-timeline-item">Pioneering the effort to develop automation & integration of high-fidelity physics-based modeling and engineering tools for Department of Defense, leveraging the software HEEDS/ModelCenter</li>
                <li class="CV-job-timeline-item">A 20-50% increase in efficiency in running simulation in the High-Performance Computing environment by developing an HPC automation tool in Python</li>
                <li class="CV-job-timeline-item">Modernizing tools in the division by creating a web application in ReactJS to expedite and reduce clerical error when performing tasks</li>
                <li class="CV-job-timeline-item">Developing scripts extensively to help facilitate the automation of custom and off the shelf software </li>
              </ul>
            </section>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Software Engineer Intern </span>&#8211; <span class="CV-timeline-heading-location">Eco-Enterprise</span><small class="CV-timeline-heading-duration">January 2020 - September 2020</small></h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">Team developing a dashboard to monitor along with manage energy and utility usage to implement eco-friendly solutions</li>
                <li class="CV-timeline-details-item">Developed Back-End in Node.js to integrate equipment in commercial buildings under the SNMP, BACnet and MQTT Protocol</li>
                <li class="CV-timeline-details-item">AWS IoT SDK was utilized to send object values from devices to AWS IoT, where the data was stored in MongoDB</li>
                <li class="CV-timeline-details-item">Debugged and discovered smart devices in a manufacturing facility network using Wireshark and YABE</li>
              </ul>
            </section>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Electrical Designer (Design Engineer) </span>&#8211; <span class="CV-timeline-heading-location">Engineering Driven Design PC</span><small class="CV-timeline-heading-duration">June 2017 - February 2018</small></h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">Facilitated design of electrical systems for commercial buildings using AutoCAD under the supervision of professional engineers </li>
                <li class="CV-timeline-details-item">Reviewed engineering proposals, specifications and drawings for adherence to drafting standards in coordination with other disciplines</li>
                <li class="CV-timeline-details-item">Established an Electrical Engineering Handbook to reduce training time and to create an effective learning environment</li>
              </ul>
            </section>
          </div>
        </div>
      // </div>
    )
}

export default Experience
