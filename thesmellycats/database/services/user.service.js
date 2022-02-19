import User from 'database/models/user.model';


export const userExists = async (email) => {
    const checkUser = await User.findOne({email: email})
    return !!checkUser;
}

export const findUserByEmail = async (email) => {
    return await User.findOne({email: email});
}

export const findUserById = async (id) => {
    const user = await User.findById(id).select({"password": 0})
    if (!user) throw new Error('No user found');
    return user;
}

export const updateUser = async (_id, body) => {
    try {
        if(body.email){
            const user = await userExists(body.email);
            if(user){
                throw new Error('Email taken');
            }
        }
        const user = await User.findOneAndUpdate(
            {_id},
            {"$set": body},
            {new: true}
        ).select({"password": 0})
        if (!user) throw new Error('No user found');
        return user
    } catch (e) {
        throw new Error("Oops! Try again later")
    }
}