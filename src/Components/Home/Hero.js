import React from 'react'
import styles from '@/Components/Home/Hero.module.css'
// import { Inter } from '@next/font/google'
// import { Roboto } from '@next/font/google'
import Weather from "./Weather"
import Image from 'next/image'


// const inter = Inter({ 
//     subsets: ['latin'],
//     weight: '600',

// })

// const roboto = Roboto({ 
//   subsets: ['latin'],
//   weight: '400',

// })


function Hero() {
  return (
    <div className={styles.hero}>

      <div className={styles.weather}>
        <Weather />
      </div>

      <div className={styles.hero_center}>
        <div className={styles.hero_center_left}>
          <h1>David Mas-Bagà</h1>
          <p className={styles.p_hero}>I'm A Full Stack <span>Web Developer</span> </p>
          <p>As a junior developer, I am highly motivated to learn and focus on web and web application development. 
           I consider myself a creative, dynamic, and responsible person, with great potential for professional growth. 
           I have skills to work in a multidisciplinary environment and a high ability to develop proactive and organizational skills effectively.</p>
        </div>
        <div className={styles.hero_center_right}>
          <Image src='/portf.png' width={500} height={500}/>

        </div>
      </div>
    </div>
  )
}

export default Hero