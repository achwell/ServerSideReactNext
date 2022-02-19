import type {GetStaticProps} from 'next'
import {getJsonData} from '../utils/tool'
import {FC} from "react"
import Db from "../types/db.type"
import CarrouselComp from '../components/ui/carrousel'
import Articles from '../components/home/articles'
import CarrouselItem from "../types/carrousel.item.type"
import Drawing from "../types/drawing.type"

interface Props {
    carrousel: CarrouselItem[]
    articles: Drawing[]
}

const Home: FC<Props> = ({carrousel, articles}: Props) => {
    return (
        <div>
            <CarrouselComp carrousel={carrousel}/>
            <Articles articles={articles}/>
        </div>
    )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
    const data: Db = await getJsonData();
    return {props:data}
}

export default Home
