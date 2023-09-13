import React, { Component } from "react";
import Slider from "react-slick";
import "../index.css";

function getPopularDishes() {
    let requestURL = `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=04e92dacf91c47bf9f6fb150b4da316c`;
    fetch(requestURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        getPopularDishes(data);
      });
  }

  const getData = async () => {
    const Images = [];
  
    const dish1_data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=04e92dacf91c47bf9f6fb150b4da316c`)
      .then((res) => res.json());
    data.push(dish1_data.name);
  
    const dish2_data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=04e92dacf91c47bf9f6fb150b4da316c`)
      .then((res) => res.json());
    data.push(dish2_data.name);
    
    console.log(Images);
  };

// const Images = [
//     {
//         id: getPopularDishes(),
//         src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//         alt: "Image 1",
//         title: "Lamborghini Huracan Performante",
//         description:
//           "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
//       },
//       {
//         id: 2,
//         src: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//         alt: "Image 2 ",
//         title: "Porsche 911 Turbo S",
//         description:
//           "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
//       }
//     ]

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        };
        return (
            <>
                <div className="content">
                    <h1 className="header">Popular Dishes</h1>
                    <div className="container">
                        <Slider {...settings}>
                            {Images.map((item) => (
                                <div key={item.id}>
                                    <img src={item.src} alt={item.alt} className="img" />
                                    <h2 className="title">{item.title}</h2>
                                    <p className="description">{item.description}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </>
        );
    }
}