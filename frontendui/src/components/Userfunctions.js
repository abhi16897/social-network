import axios from 'axios'

export const register= newUser=>{
    return axios.post('users/register',{

        firstname:newUser.firstname,
        lastname:newUser.lastname,
        username:newUser.username,
        password:newUser.password
    }).then(res=>{
        console.log('registered')
    })
}

export const login=newUser=>{
    return axios.post('users/login',{
        username:newUser.username,
        password:newUser.password
    }).then(res=>{
        localStorage.setItem('userToken',res.data)
        return res.data
    }).catch(err=>{
        console.log(err)
    })
}