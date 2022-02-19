import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {connectToDb} from '../../../utils/database/mongo-db'
import {passwordCheck} from '../../../utils/tools'
import SignInType from "../../../types/signin.type"


export default NextAuth({
    session:{
        jwt:true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials: SignInType){
                const mongoClient = await connectToDb()
                // valid

                /// user check
                const user = await mongoClient.db().collection('users').findOne({email: credentials.email})
                if (!user) {
                    mongoClient.close();
                    throw new Error('Not a valid user')
                }

                /// check password
                const vaidPass = await passwordCheck(credentials.password, user.password)
                if (!vaidPass) {
                    mongoClient.close()
                    throw new Error('Wrong password')
                }

                mongoClient.close()
                return {email: user.email}
            }
        })
    ]
})