import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import WorkIcon from "@mui/icons-material/WorkHistory"
import SchoolIcon from "@mui/icons-material/School"
import StarIcon from "@mui/icons-material/Star"
import "../styles/exp.css"
const Experience = () => {
  return (
    <div className="exp">
      
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(235, 103, 52)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(235, 103, 52)' }}
    date="present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">RealPage.inc</h3>
    <h4 className="vertical-timeline-element-subtitle">Hyd, Ind</h4>
    <p>
      Internship
    </p>
  </VerticalTimelineElement>
  

  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2020 - 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">BTech in Information Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Keshav Memorial Institute of Technology</h4>
    <p>
      DSA, JAVA, MERN, ReactJS | 8.0CGPA
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate education</h3>
    <h4 className="vertical-timeline-element-subtitle">Page Jr college</h4>
    <p>
      Math, Phy, Chem | 81%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">High School</h3>
    <h4 className="vertical-timeline-element-subtitle">Pearson School</h4>
    <p>
      8.2 CGPA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>
  )

}

export default Experience