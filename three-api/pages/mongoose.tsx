import {NextPage} from 'next'
import {useFormik} from 'formik'
import axios from 'axios'

const Home: NextPage = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            body: ''
        },
        onSubmit: values => {
            axios.post("/api/mongoose_posts", values).then(response => console.log({response})).catch(error => console.error({error}))
        }
    })

    const getPosts = () => {
        axios.get("/api/mongoose_posts").then(response => console.log({response})).catch(error => console.error({error}))
    }

    return (
        <div>
            <button type="button" onClick={getPosts}>Load Posts</button>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                </div>

                <div>
                    <label htmlFor="title">Body</label><br/>
                    <input
                        id="body"
                        name="body"
                        onChange={formik.handleChange}
                        value={formik.values.body}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Home
