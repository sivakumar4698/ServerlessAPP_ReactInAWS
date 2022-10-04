import React from 'react'

const MainImage = () => {
  return (
    <div><Card >
    <Card.Img src= {HomeImage1} alt="Card image"/>
    <Card.ImgOverlay>
    <h2 className= 'font'>Welcome to my thoughts</h2>
      <h2 className= 'fontsub'>Human brain is superior than computer machines</h2>
    </Card.ImgOverlay>
  </Card></div>
  )
}

export default MainImage;
