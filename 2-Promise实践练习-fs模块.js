const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
// fs.readFile('./resource/content.txt', (err,data)=>{
//     //如果出错，则抛出错误
//     if(err) throw err;
//     //输出文件内容
//     console.log(data.toString())
// })

//promise形式
let p=new Promise((resolve,reject)=>{
    fs.readFile('./resource/content.txt', (err,data)=>{
        //如果出错，则抛出错误
        if(err) reject(err);
        //输出文件内容
        resolve(data)
    })
})

//调用then
p.then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})