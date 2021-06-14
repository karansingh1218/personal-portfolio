import "../CSS/Education.css"

const Education = () => {
    return (
        <div id = "Education" class="CV-grid">
        <div class="CV-grid-column">
          <div class="CV-jobs">
            <h2 class="CV-secondaryHeading CV-jobs-heading">Education</h2>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Bachelor of Science, Mechanical Engineering </span>&#8211; <span class="CV-timeline-heading-location">Rutgers University</span><small class="CV-timeline-heading-duration">Graduated: May 2017</small></h3>
              <ul class="CV-timeline-details">
                <li class="CV-job-timeline-item">GPA 3.12</li>
              </ul>
            </section>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Master of Science, Computer Science </span>&#8211; <span class="CV-timeline-heading-location">New Jersey Institute of Technology (NJIT)</span><small class="CV-timeline-heading-duration">Graduated: December 2020</small></h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">GPA 3.65</li>

              </ul>
            </section>
          </div>
        </div>
      </div>
    )
}

export default Education
