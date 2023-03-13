import React from 'react'
import Card from '@/Components/Home/CarTecno/card'
import styles from '@/Components/Home/CarTecno/CardMap.module.css'
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
 import { SiMongodb} from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { AiOutlineHtml5} from 'react-icons/ai';
 import {DiCss3Full} from 'react-icons/di';
 import {IoLogoJavascript} from 'react-icons/io';
 import {SiAstro} from 'react-icons/si';
 import {DiWordpress} from 'react-icons/di';
import { StyleRegistry } from 'styled-jsx';


function CardMap() {
  return (
    <div className={styles.body_cardMap}>
    <h2>Technologies</h2>
    <div className={styles.cardMap}>
        <Card title='React' icon={<FaReact size={50} color='#E876CE'/>}/>
        <Card title='NextJs' icon={<TbBrandNextjs size={50} color='#E876CE'/>}/>
        <Card title='Node' icon={<FaNodeJs size={50} color='#E876CE'/>}/>
        <Card title='Mongo' icon={<SiMongodb size={50} color='#E876CE'/>}/>
        <Card title='Express' icon={<SiExpress size={50} color='#E876CE'/>}/>
        <Card title='Html' icon={<AiOutlineHtml5 size={50} color='#E876CE'/>}/>
        <Card title='CSS' icon={<DiCss3Full size={50} color='#E876CE'/>}/>
        <Card title='JS' icon={<IoLogoJavascript size={50} color='#E876CE'/>}/>
        <Card title='Astro' icon={<SiAstro size={50} color='#E876CE'/>}/>
        <Card title='Wordpress' icon={<DiWordpress size={50} color='#E876CE'/>}/>
        
    </div>
    </div>
  )
}

export default CardMap