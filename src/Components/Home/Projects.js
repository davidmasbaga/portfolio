import React from 'react'
import styles from '@/Components/Home/Projects.module.css'
import ProjectCard from './ProjectCard'


function Projects() {
  return (
    <div className={styles.body_Projects}>


    <h2>Projects</h2>

    <div className={styles.body_projects_cards}>
    <ProjectCard tech='React' name="JobLink" image='https://res.cloudinary.com/dkxlwv844/image/upload/v1678808482/PortFolio/Joblink_ocvtyw.jpg' url='https://job-link.netlify.app/' gitHub="https://github.com/davidmasbaga/jobLink"/>
    <ProjectCard tech='NextJs' name= "Notes to Notion" image="https://res.cloudinary.com/dkxlwv844/image/upload/v1682345100/Notes_to_Notion_en0znz.jpg" url="https://notion-quick-qj2j.vercel.app/" gitHub="https://github.com/davidmasbaga/notion_quick"/>
    <ProjectCard tech='Wordpress' name="TwoLittleDraws" image='https://res.cloudinary.com/dkxlwv844/image/upload/v1678809004/PortFolio/twolittledraws_etc3sm.jpg' url='https://twolittledraws.com/'/>
    </div>
    


    </div>
  )
}

export default Projects