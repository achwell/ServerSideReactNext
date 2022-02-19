import {GetServerSideProps, InferGetServerSidePropsType} from "next"
import {FC} from "react";
import axios from "axios";

interface Car {
    id: number
    name: string
}

interface Props {
    car?: Car
}

const CarsByIdComp: FC<Props> = ({car}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
        {car && <h1>{car.name}</h1>}
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({params}) => {
    try {
        const request = await axios.post('https://jsonplaceholder.typicode.com/posts', {name: params?.id})
        if (!request.data) {
            return {notFound: true}
        }
        return { props: { car: request.data } }
    } catch (error) {
        return { notFound: true }
    }
}

export default CarsByIdComp