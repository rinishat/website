// function success(){
//     console.log("Success")
// }
// function fail(){
//     console.log("Fail")
// }
// function error(){
//     console.log("Error")
// }
// function exec(data,callback){
//     if(data){
//         console.log(`balance:${data}`)
//     }
//     callback()
//     // setTimeout(callback,3000)
// }
// function trigger(data){
    
//     if(data>0){
//         exec(data,success)
//     }
//     else if(data<=0){
//         exec(data,fail)
//     }
//     else{
//         exec("error",error)
//     }
// }
// trigger(2)

async function API(){
    try{
        const response=await fetch('https://66e526d55cc7f9b6273c69cb.mockapi.io/users')
        const data=await response.json()
        console.table(data)
        return data;
        
    }catch(error){
        console.log(error)

    }
    
}
async function APIDATA(){
    const apidata=await API()
    console.log(apidata)
    const mockdata=[{
        "name":"hello"
    }]
    // const structuredatamap=apidata.map((data)=>{console.log(data)})
    const activeusers=apidata.filter(data=>data.isActive)
    console.log(activeusers)
    const structuredatamap=activeusers.map((data)=>{console.log(data)})
}
APIDATA()

// const Apidata=API()
// console.log(Apidata)