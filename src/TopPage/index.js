import React, {Component} from 'react'
import './App.css';
import Slider from "react-slick";
import img from '../img/BackImage1.jpg'
import img2 from '../img/BackImage2.jpg'
import img3 from '../img/BackImage3.png'

class contentsN extends Component {


    constructor(props) {
        super(props);
        this.state = {
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true
            }
        }
    }

    render() {
        return (
            <>
                <Slider {...this.state.settings}>
                    <div>
                        <section>
                            <img src={img} alt={"マグロ丼"}/>
                        </section>
                    </div>
                    <div>
                        <section>
                            <img src={img2}/>
                        </section>
                    </div>
                    <div>
                        <section>
                            <img src={img3}/>
                        </section>
                    </div>
                </Slider>
            </>
        )
    }

}

export default contentsN
