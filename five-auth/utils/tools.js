import {compare, hash} from 'bcryptjs';

const passwordCheck = async (password, hashedPassword) => {
    const valid = await compare(password, hashedPassword)
    return valid
}

const passwordHash = async (password) => {
    const hashPassword = await hash(password, 10);
    return hashPassword;
}

const errorHelper = (formik, value) => ({
    error: !!(formik.errors[value] && formik.touched[value]),
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value] : null
})

export {passwordCheck, passwordHash, errorHelper}