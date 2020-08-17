import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = (props) => {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" 
                        src="https://repository-images.githubusercontent.com/134285701/635de980-586d-11ea-9220-1a3211239c30"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p>The structure of websites</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" 
                        src="https://cdn-media-1.freecodecamp.org/images/1*H0IBb9kvGI3eIuL1sGmWug.jpeg"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p>What beautifies websites</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" 
                        src="https://dudelisdev.com/wp-content/uploads/2018/12/Find-controls-with-Javascript.jpg"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p>The magic of websites</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;