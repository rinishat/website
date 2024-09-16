async function myfn(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        },1000))
    }

async function awaitfn(){
    myfn().then(console.log);
}
awaitfn()
// console.log(myfn())