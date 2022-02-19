import Drawing from "./drawing.type";
import CarrouselItem from "./carrousel.item.type";

export default interface Db {
    carrousel: CarrouselItem[]
    articles: Drawing[]
}