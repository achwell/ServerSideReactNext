import {useState} from 'react';
import LayoutAdmin from 'components/ui/layout.admin';
import connectToDb from 'database/db';
import {paginateShows} from 'database/services/show.service';
import {toJson} from 'helpers/functions';
import axios from 'axios';

import PaginateBlock from 'components/users/admin/paginate';
import {useDispatch} from "react-redux";
import {successDispatcher, errorDispatcher} from "../../../../store/actions/notifications.action";

const ShowsAdmin = ({shows}) => {

    const limit = 2;
    const dispatch = useDispatch();
    const [showsPage, setShowsPage] = useState(shows);
    const [currentPage, setCurrentPage] = useState(1);
    const [removeModal, setRemoveModal] = useState(false);
    const [toRemove, setToRemove] = useState(null);

    const gotoPage = (page) => {
        getShows({page, limit});
        setCurrentPage(page)
    }

    const getShows = (values) => {
        axios.post('/api/shows/paginate', values)
            .then(response => setShowsPage(response.data))
            .catch(error => {
                dispatch(errorDispatcher)
                console.log(error.response.data.message)
            })
    }

    const handleModal = (id) => {
        setToRemove(id)
        setRemoveModal(true)
    }

    const handleClose = () => {
        setToRemove(null)
        setRemoveModal(false)
    }

    const handleRemove = () => {
        axios
            .delete("/api/shows/remove", {data: { id: toRemove}})
            .then(response => {
                getShows({page: currentPage, limit})
                dispatch(successDispatcher("Removed " + response.data._id + " - " + response.data.title));
            })
            .catch(error => dispatch(errorDispatcher(error.response.data.message)))
            .finally(() => {
                handleClose()
            })
    }

    return (
        <LayoutAdmin title="Shows">
            <div className="shows_table">
                <PaginateBlock
                    shows={showsPage}
                    prev={(page) => gotoPage(page)}
                    next={(page) => gotoPage(page)}
                    removeModal={removeModal}
                    handleClose={() => handleClose()}
                    handleModal={(id) => handleModal(id)}
                    handleRemove={() => handleRemove()}
                />
            </div>
        </LayoutAdmin>
    )
}

export const getServerSideProps = async () => {
    await connectToDb();
    const shows = await paginateShows(2, 2);
    return !shows ? {props: {shows: []}} : {props: {shows: toJson(shows)}};
}
export default ShowsAdmin;