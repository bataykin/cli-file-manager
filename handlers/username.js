import os from "os";

export const user = ()=>{
    console.log(os.userInfo().username)
}