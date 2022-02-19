import {FC} from "react"
import {Head} from "next/document";
import Image from "next/image"
import axios from "axios"

interface Props {
    bioData: string[]
}

const BioPage: FC<Props> = ({bioData}) => {
    return (
        <div className="row">
            <Head>
                <meta name="description" content="Biography of hokusai"/>
            </Head>
            <div className="col-lg-8">
                <article>
                    <div className="mb-4">
                        <h1 className="fw-bolder mb-1">Houkusai Bio</h1>
                    </div>
                    <section className="mb-5">
                        {bioData.map((bio, i) => <p key={i} className="fs-5 mb-4">{bio}</p>)}
                    </section>
                </article>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <Image
                        src={`/images/bio/bio.jpg`}
                        layout="responsive"
                        width="712"
                        height="1024"
                    />
                </div>
            </div>
        </div>
    )
}
export const getStaticProps = async () => {
    const bioData = await axios.get("https://baconipsum.com/api/?type=all-meat&paras=5")

    return !bioData.data ? {redirect: {destination: "/", permanent: false},} : {
        props: {bioData: bioData.data},
        revalidate: 21600,
    }

}
export default BioPage