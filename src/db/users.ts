import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userid : { type: Number, required: true},
    usertype : { type: String, required: true},
    caregiversid : { type: String, required: true},
    loginlink: { type: String, required: true},
    ref_key : { type: String, required: true},
    email : { type: String, required: true,},
    authentication : { 
        password: { type: String, required: true, select : false },
        salt:  { type: String, required: true, select: false},
        sessionToken: { type: String, required: true, select: false}
    }
})

const USERMODEL = mongoose.model('User', userSchema)

//functions
//get functions
export const getUsers = () => USERMODEL.find();
export const getUsersByEmail = (email: string) => USERMODEL.findOne( {email} );
export const getUserBySessionToken = (token: string) => USERMODEL.findOne({
    'authentication.sessionToken' : token,
}) 
export const getUserByID = (userid : number) => USERMODEL.findById(userid);

//save functions
export const saveUser = (values : Record<string,any>) => new USERMODEL(values).save().then((user) => user.toObject())

//delete user by id 
export const deleteUser = (id: string) => USERMODEL.findOneAndDelete({userid:id})

//update by id
export const updateById = (id: string, values : Record<string,any>) => USERMODEL.findByIdAndUpdate(id, values)

