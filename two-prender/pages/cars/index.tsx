import {GetServerSideProps} from "next"
import Link from 'next/link'
import {FC} from "react";

interface Props {
    cars: string[]
}

const CarsMain: FC<Props> = ({cars}) => {

    console.log(cars)

    return(
        <>
            <h1>Cars</h1>
            { cars.map(item => (
                <div key={item}>
                    <Link href={`/cars/${item}`}>{item}</Link>
                </div>
            ))}
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({params, req, res}) => {
    return {
        props: {
            cars: ['nissan', 'ford', 'mazda', 'ferrari']
        }
    }
}

export default CarsMain