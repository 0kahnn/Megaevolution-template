import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function FeaturedCarousel() {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  
  return (
      <div>
        <h2 className="section-title">Featured Mints</h2>

        <Carousel 
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
        infiniteLoop={true}
        interval={4000}
        
        >
            <div className="carousel-custom-image">
                <img className="carousel-custom-image"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg" alt=""/>
                <div className="carousel-custom-caption">
                    <h2>Lorem Ipsum</h2>
                    <span className="carousel-custom-caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </div>
            <div>
                <img className="carousel-custom-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg" alt=""/>
                <div className="carousel-custom-caption">
                    <h2>Lorem Ipsum</h2>
                    <span className="carousel-custom-caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </div>
            <div>
                <img className="carousel-custom-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg" alt=""/>
                <div className="carousel-custom-caption">
                    <h2>Lorem Ipsum</h2>
                    <span className="carousel-custom-caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </div>
            <div>
                <img className="carousel-custom-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg" alt=""/>
                <div className="carousel-custom-caption">
                    <h2>Lorem Ipsum</h2>
                    <span className="carousel-custom-caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </div>
           
        </Carousel>
      </div>    
  );
}

export default FeaturedCarousel;