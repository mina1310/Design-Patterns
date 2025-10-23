function CreateTv=()=>{
    let on=false;
    let volume=50;
    return {
isEnable:()=>on,
enable :()=> on=true,
disable: ()=> on=false,
getVolume :()=> volume,
setVolume :(number)=>volume=number
    }

    
}