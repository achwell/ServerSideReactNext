import {FC} from "react"
import {GetStaticProps, InferGetStaticPropsType} from "next"
import Image from 'next/image'
import {getJsonData} from '../../utils/tool'
import Drawing from "../../types/drawing.type"

interface Props {
    article: Drawing
}

const ArticlePage: FC<Props> = ({article}: InferGetStaticPropsType<typeof getStaticProps>) => (
    <div>
        <Image src={`/images/arts/${article.img}`} layout="responsive" width="1920" height="1080"/>
        <div className="article_container">
            <h1>{article.name}</h1>
            <div dangerouslySetInnerHTML={{__html: article.content}}></div>
        </div>
    </div>
)
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const data = await getJsonData();
    let article = data.articles.find(article => article.slug === params?.slug);
    return { props: {article} }
}

export const getStaticPaths = async () => {
    const data = await getJsonData();
    const paths = data.articles.map((article) => ( { params: {slug: article.slug} } ));
    return {paths, fallback: false}
}

export default ArticlePage