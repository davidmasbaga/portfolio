import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from "../Components/Home/Hero"
import Description from '@/Components/Home/description'
import Timeline from '@/Components/Home/Timeline'
import CardMap from '@/Components/Home/CarTecno/CardMap'
import Projects from '@/Components/Home/Projects'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        
        
      </Head>
      
      <Hero/>
      <Timeline/>
      <CardMap/>
      <Projects/>
      
      

      
    </>
  )
}
