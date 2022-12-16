import RestaurantIndex from "./restaurants/RestaurantIndex"
import { Carousel } from "react-bootstrap"
import FoodImages from "./shared/FoodImages"

const Home = ({ msgAlert }) => {

  return (
    <>
      <Carousel className='carousel-text' fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={FoodImages.Fusion}
            alt="Avocados"
          />
          <Carousel.Caption>
            <h3>It's all about the avocado!</h3>
            <p>
              Like a good avocado, a good restaurant can be hard to find.
            </p>
          </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Table of people eating"
          />
          <Carousel.Caption>
            <h3>Looking for amazing food?</h3>
            <p>We've got tons of restaurants and reviews for you!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={FoodImages.Seafood}
            alt="Lobster"
          />

          <Carousel.Caption>
            <h3>Find great seafood restaurants and more!</h3>
            <p>Trust us, we understand seafood.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={FoodImages.Italian}
            alt="Pasta"
          />

          <Carousel.Caption>
            <h3>Leave reviews for your favorite restaurants.</h3>
            <p>Great place to show off your food pictures, too!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={FoodImages.Japanese}
            alt="Sushi"
          />

          <Carousel.Caption>
            <h3>Food anywhere, anytime!</h3>
            <p>Get the full restaurant experience regardless of where you are.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <RestaurantIndex msgAlert={msgAlert} />
    </>
  )
}

export default Home
