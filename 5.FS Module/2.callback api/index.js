import * as fs from "fs";

fs.mkdir("F:\\nodejs",(error) => {
    if(error) throw error;
    console.log("Directory Created ...");
    
})