import React from 'react'
import styles from '@/Components/Home/Hero.module.css'
// import { Inter } from '@next/font/google'
// import { Roboto } from '@next/font/google'
import Weather from "./Weather"
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
    <>
    
    <div className={styles.weather}>
        <Weather/>
    </div>
    
    <div className={styles.hero_center}>
        <h1>David Mas-Bagà</h1>
        <p>Full Stack <span>Developer</span></p>
    </div>
    </>
  )
}

export default Hero