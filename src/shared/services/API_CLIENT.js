import axios from 'axios';
export const API_CLIENT = {
    get(URL){
        const promise = axios.get(URL,{timeout:7000});
        return promise;
    },
    post(){

    },
  
    put(){

    },
    delete(){

    }

}