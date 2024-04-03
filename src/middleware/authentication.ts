// import express from "express";

// import { getUsersByEmail, saveUser } from "../db/users";
// import { authentication, random } from "../helpers/helpers";

// export const register = async (req: express.Request, res:express.Response) => {
//     debugger;
//     console.log('req from register recieved')
//     try{
//         const {email, password, username} = req.body
//         if( !email || !password || !username)
//             return res.sendStatus(400)

//         const existingUser = await getUsersByEmail(email)
//         if(existingUser)
//             return res.sendStatus(400)

//         const salt = random();
//         const user = await saveUser({
//             username,
//             email,
//             authentication : {
//                 salt,
//                 password: authentication(salt, password)
//             }
//         })

//         return res.sendStatus(200).json(user).end();
//     }
//     catch(err){
//         console.log(err)
//         return res.sendStatus(400)
//     }
// }

// export const trial = async (req: express.Request, res:express.Response) => {
//     return res.sendStatus(200)
// }