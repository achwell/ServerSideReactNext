import nc from 'next-connect';
import connectToDb from 'database/db';

import checkAuth from 'database/middleware/checkauth';
import {findUserById, updateUser} from 'database/services/user.service';

const handler = nc();

handler
    .use(checkAuth)
    .get(async (req, res) => {
        try {
            await connectToDb();
            const id = req.session.user._id;
            const user = await findUserById(id)
            res.status(200).json(user);
        } catch (error) {
            console.log({error})
            res.status(400).json({message: error.message});
        }
    })
    .patch(async (req, res) => {
        try {
            await connectToDb();
            const user = await updateUser(req.session.user._id, req.body)
            res.status(200).json(user);
        } catch (error) {
            console.log({error})
            res.status(400).json({message: error.message});
        }
    })
export default handler;