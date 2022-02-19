import {FC} from "react"
import Masonry from 'react-masonry-css'
import Card from '../ui/card'
import Drawing from "../../types/drawing.type"

interface Props {
    articles: Drawing[]
}

const breakpoints = {default: 3, 768: 2, 500: 1}

const Articles: FC<Props> = ({articles}: Props) => (
    <>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {articles.map(article => <Card key={article.id} article={article}/>)}
        </Masonry>
    </>
)

export default Articles