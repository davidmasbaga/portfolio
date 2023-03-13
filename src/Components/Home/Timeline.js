import React from 'react';
import { Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import styles from '@/Components/Home/Timeline.module.css'

const JobTimeline = () => (
  
  <div className={styles.body_timeline}>
    <div className={styles.timeline_left}><h3>Job Experience</h3></div>
    <Timeline className={styles.timeline_right}
    items={[
     {
        color: '#F2709C',
        children: (
          <>
            <h3> Bootcamp Nuclio Digital School <span className={styles.lighter}>October 2022 - March2023</span> </h3>
            <p>During the master I have acquired knowledge in different technologies for the creation of web applications in Full Stack with Mongo, Express, React and Node (MERN). The TFM has consisted in making a Linkedin replica in which I have worked as a team applying agile methodologies and we have managed to develop a functional tool.
In addition to MERN during the master I have worked with TypeScript, Next, WebSockets, Testing Unit and E2E with Cypress, Docker and SQL databases and deploy.</p>
            
          </>
        ),
      },
      {
        color: '#F2709C',
        children: (
          <>
            <h3> Growwer <span className={styles.lighter}>June 2021 - Nowadays</span> </h3>
            <p>Development of different functions, media and advertiser acquisition in an online visibility tool
and advertisers in an online visibility tool
Scrum Master in the managed department.
Development of QA Tester E2E functions, manual testing of new features.</p>
            
          </>
        ),
      },
      {
        color: '#F2709C',
        children: (
          <>
            <h3> Visual Foto & Twolittledraws <span className={styles.lighter}>December 2012 - May 2021</span> </h3>
            <p>In 2012, together with another partner, we founded Visual Foto. Our photographic agency.
Social and advertising photography. Some of our clients have been: Disney, Unilever, Moncho's, Marco de Comunicación, Netflix, Le Meridien Barcelona or EADA.

Thanks to the knowledge of graphic design, in 2015 I decided to undertake a second project parallel to Visual Foto. Two Little Draws is a small brand focused on graphic design.</p>
            
          </>
        ),
      },
      {
        color: '#F2709C',
        children: (
          <>
            <h3> The Fotoshop <span className={styles.lighter}> May 2001 - December 2012</span> </h3>
            <p>I worked for 11 years at The Fotoshop, a company specialized in social and advertising photography.</p>
            
          </>
        ),
      },
      
      
    ]}
  />

  </div>
 
);


export default JobTimeline


