import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import oficeJpg from "../assets/ofice.jpg";
import roomJpg from "../assets/room.jpg";
import servroomJpg from "../assets/servroom.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src={oficeJpg} alt="Ofice" style={{height: "900px", width: "100%"}} />
          <Carousel.Caption>
            <h3>Ofice image</h3>
            <p>asdasd sgdfgd fg weqwe qwe asdasd hhfg fssfdsfsd.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={roomJpg} alt="Ofice" style={{height: "900px", width: "100%"}} />
          <Carousel.Caption>
            <h3>Room image</h3>
            <p>asdasd sgdfgd fg weqwe qwe asdasd hhfg fssfdsfsd.</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img className="d-block w-100" src={servroomJpg} alt="Ofice" style={{height: "900px", width: "100%"}} />
          <Carousel.Caption>
            <h3>Secrveroom image</h3>
            <p>asdasd sgdfgd fg weqwe qwe asdasd hhfg fssfdsfsd.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    );
  }
}
