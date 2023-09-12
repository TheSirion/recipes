// import React, { Component } from "react";
// import Slider from "react-slick";
// import "../index.css";

// const Images = {

// }

// export default class MultipleItems extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 1000,
//         };
//         return (
//             <>
//                 <div className="content">
//                     <h1 className="header">Popular Dishes</h1>
//                     <div className="container">
//                         <Slider {...settings}>
//                             {Images.map((item) => (
//                                 <div key={item.id}>
//                                     <img src={item.src} alt={item.alt} className="img" />
//                                     <h2 className="title">{item.title}</h2>
//                                     <p className="description">{item.description}</p>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }