import axios from 'axios';

export function getUsers () {
    console.log("anoinf");
    return axios.request({
        method : "GET",
        url : "https://randomuser.me/api/?results=50"
    })
    //set url in env
}