import React, {useState} from "react"
import {useFormik, FormikProps} from "formik"
import {TextField, Button} from "@material-ui/core"
import axios from "axios"
import { signIn } from "next-auth/client"

import SignInType from "../types/signin.type";
import {errorHelper} from "../utils/tools"
import {authSchema} from "../utils/validations";

const SignIn = () => {

    const [formType, setFormType] = useState(false)
    const [loading, setLoading] = useState(false)

    const initialValues: SignInType = {email: '', password: ''}

    const onSubmit = async (values: SignInType) => {
        if (formType) {
            axios.post("/api/auth", values)
                .then(response => {
                    console.log({response})
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        } else {
            const result = await signIn("credentials", {redirect: false, ...values })
        }
    }

    const formik: FormikProps<SignInType> = useFormik<SignInType>({
        initialValues,
        validationSchema: authSchema,
        onSubmit
    })

    const handleFormType = () => {
        setFormType(!formType)
    }

    return (
        <div>
            <h1>{formType ? 'Register' : 'Sign in'}</h1>
            {loading ?
                'Loading'
                :
                <form className="mt-3" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <TextField
                            style={{width: '100%'}}
                            label="Enter you email"
                            type="email"
                            variant="outlined"
                            {...formik.getFieldProps('email')}
                            {...errorHelper(formik, 'email')}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            style={{width: '100%'}}
                            label="Enter you password"
                            type="password"
                            variant="outlined"
                            {...formik.getFieldProps('password')}
                            {...errorHelper(formik, 'password')}
                        />
                    </div>
                    <div className="mb-3">
                        <Button variant="contained" color="primary" type="submit" size="small">
                            {formType ? 'Register' : 'Sign in'}
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary" size="small" onClick={handleFormType}>
                            {formType ? 'Need to Signed in ? click here' : 'Need to register ? click here'}
                        </Button>
                    </div>
                </form>
            }
        </div>
    )
}

export default SignIn;