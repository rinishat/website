const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success")
    },1000);
})


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("failure")
    },500);
})
Promise.allSettled([p1,p2]).then(console.log).catch(console.log)