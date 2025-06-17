import React from 'react'
import style from "./Home.module.css"
import Firstpage from '../Firstpage/Firstpage'
import PerimiumBrands from '../PerimiumBrands/PerimiumBrands'
import Recomended from './../Recomended/Recomended';
import Services from '../Services/Services';
import Download from './../Download/Download';

export default function Home() {
  return <>
  
  <Firstpage/>
  
<PerimiumBrands/>

<Recomended/>

<Services/>

<Download/>
  
  </>
}
