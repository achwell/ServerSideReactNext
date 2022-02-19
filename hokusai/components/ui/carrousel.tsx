import {FC} from "react"
import CarrouselItem from "../../types/carrousel.item.type"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

interface Props {
    carrousel: CarrouselItem[]
}

const CarrouselComp: FC<Props> = ({carrousel}: Props) => (
    <div>
        {carrousel && <Slider {...settings}>
            {carrousel.map(slide => (
                <div key={slide.id}>
                    <div className="carrousel_wrapper"
                         style={{background: `url(/images/arts/${slide.name}) no-repeat`}}>
                        <div>{slide.title}</div>
                    </div>
                </div>
            ))}
        </Slider>}
    </div>
)
export default CarrouselComp