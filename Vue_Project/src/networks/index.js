import axios from 'axios'

export default function(options){
    return new Promise((resolve,reject)=>{
        const instance = axios.create({
            baseURL:"http://127.0.0.1:3000"
        });
        instance(options).then(res => {
            resolve(res);
        },error=>{
            reject(error);
        })  
    })
    
}