import React, { useState } from "react";
import { useEffect } from "react";
import styles from "@/Components/Home/weather.module.css";
// import { Roboto } from "@next/font/google";

// const roboto = Roboto({ 
//   subsets: ['latin'],
  
//   weight: '400',
  
// })



function Weather() {
  const [data, setData] = useState({});

  

  

  useEffect(() => {
    const api_key = "0726da53b78cd50445d3deba22acb0e5";

    const lat = "41.388";

    const lon = "2.1589";

   

   



    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    )
      .then((response) => response.json())
      .then(res=> setData(res))
      .catch((err) => err);
  }, []);

  
    

  const temp = Math. trunc(data?.main?.temp) 
  const sky= data?.weather?.[0].main


  return (
    <div>
      <p >{`Barcelona `} <span className={styles.lighter}>{`${temp}º `} </span>{sky}</p>
      
    </div>
  );
}

export default Weather;
