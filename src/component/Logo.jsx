import React from 'react'
import img1 from '../assect/brand_logo.jpg'
import img2 from '../assect/amazon.jpg'
import img3 from '../assect/flipkart.jpg'

function Logo() {
  return <img src={img1} alt="NIKE"/>
  
}
function Logo2() {
    return <img src={img2} alt="Amazon"/>
    
  }function Logo3() {
    return <img src={img3} alt="flipkart"/>
    
  }
// console.log(img);

export {Logo,Logo2,Logo3}