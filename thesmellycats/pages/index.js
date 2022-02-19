import Featured from 'components/home/featured';
import Shows from 'components/home/shows';
import connectToDB from "database/db"
import {getAllShows} from "../database/services/show.service";
import {toJson} from "../helpers/functions";
import Newsletter from "../components/home/newsletter";

const Home = ({shows}) => {
    return (
        <>
            <Featured/>
            <Shows shows={shows}/>
            <Newsletter/>
        </>
    )
}

export const getServerSideProps = async () => {
    await connectToDB();
    try {
        const shows = await getAllShows('date', 'desc', 3, 0);
        return {props: {shows: toJson(shows)}}
    } catch (error) {
        return {props: {shows: []}}
    }
}


export default Home;