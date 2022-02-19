import {Table, Pagination, Modal, Button} from 'react-bootstrap';
import {useRouter} from 'next/router'

const PaginateBlock = ({shows, prev, next, removeModal, handleClose, handleModal, handleRemove}) => {
    const router = useRouter();
    const goToPrevPage = (page) => prev(page)
    const goToNextPage = (page) => next(page)

    const {docs, hasPrevPage, hasNextPage, page, prevPage, nextPage} = shows;

    const goToEdit = (slug) => {
        router.push(`/users/dashboard/shows/${slug}`)
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Venue</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {docs.map((show) => (
                    <tr key={show._id}>
                        <td>{show.title}</td>
                        <td>{show.venue}</td>
                        <td>{show.date}</td>
                        <td className="action_btn remove_btn" onClick={() => handleModal(show._id)}>Remove</td>
                        <td className="action_btn edit_btn" onClick={() => goToEdit(show.slug)}>Edit</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {hasPrevPage ? (
                    <>
                        <Pagination.Prev onClick={() => goToPrevPage(prevPage)}/>
                        <Pagination.Item onClick={() => goToPrevPage(prevPage)}>{prevPage}</Pagination.Item>
                    </>
                ) : null}
                <Pagination.Item active>{page}</Pagination.Item>
                {hasNextPage ? (
                    <>
                        <Pagination.Item onClick={() => goToNextPage(nextPage)}>{nextPage}</Pagination.Item>
                        <Pagination.Next onClick={() => goToNextPage(nextPage)}/>
                    </>
                ) : null}
            </Pagination>
            <Modal show={removeModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you realy sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    There is no going back!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={() => handleRemove()}>Delete it!</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PaginateBlock;