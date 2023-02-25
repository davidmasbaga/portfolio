import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '@/Components/Home/weather.module.css'

function Weather() {

    const [data, setData] = useState({})
    
 
    const city = data.city_name
    const temperatureToday = data.data[0].app_temp
    const cloudState = data.data[0].weather.description

    const api = "944f9d6a4412e7c5e1a0210680754702"
    
    useEffect(() => {
        
        
        fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=41.388&lon=2.1589&units=metric&lang=es'
                `https://api.openweathermap.org/data/2.5/weather?lat=41.388&lon=2.1589&appid=${api}`       
        )
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => (err));
    
    
    }, [])
    
    
console.log(data)

  return (
    <div>
        {city === undefined || temperatureToday === undefined || cloudState === undefined ? ("Portfolio Personal"):(<p>{city} <span className={styles.lighter}>{temperatureToday}º</span><span className={styles.lighter}>{cloudState}</span></p>)}

        
    </div>
  )
}

export default Weather