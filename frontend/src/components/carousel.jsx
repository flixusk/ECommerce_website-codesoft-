import React from 'react'
import '../components/carousel_style.css'

const Carousel = () => {
  return (
    
    <div className='slider' reverse="true" style={{ "--width": "500px", "--height": "500px", "--quantity": "10",  }}>
        <div className='list'>
            <div className="item" style={{"--position": "1"}}><img src="/assets/sliders/1.jpeg" alt="" /></div>
            <div className="item" style={{"--position": "2"}}><img src="/assets/sliders/2.jpg" alt="" /></div>
            <div className="item" style={{"--position": "3"}}><img src="/assets/sliders/3.jpeg" alt="" /></div>
            <div className="item" style={{"--position": "4"}}><img src="/assets/sliders/4.jpeg" alt="" /></div>
            <div className="item" style={{"--position": "5"}}><img src="/assets/sliders/5.jpg" alt="" /></div>
            <div className="item" style={{"--position": "6"}}><img src="/assets/sliders/6.jpg" alt="" /></div>
            <div className="item" style={{"--position": "7"}}><img src="/assets/sliders/7.jpeg" alt="" /></div>
            <div className="item" style={{"--position": "8"}}><img src="/assets/sliders/8.jpg" alt="" /></div>
            <div className="item" style={{"--position": "9"}}><img src="/assets/sliders/9.jpg" alt="" /></div>
            <div className="item" style={{"--position": "10"}}><img src="/assets/sliders/10.jpg" alt="" /></div>
        </div>
    </div>
  )
}

export default Carousel;