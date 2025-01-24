import * as fs from "fs/promises";

//creating directory/Folder
// try{
//     await fs.mkdir("c:\\nodejs");
//     console.log("Folder Created ...");
// }catch(err){
//     console.log(err);
// }

// try{
//     await fs.mkdir("c:\\nodejs\\course",{recursive:true});
//     console.log("Folder Created ...");
// }catch(err){
//     console.log(err);
// }

//Read  content

// try{
//     const f1 = await fs.readdir("c:\\nodejs")
//     for(const file of f1){
//         console.log(file);
//     }

// }catch(err){
//     console.log(err);
    
// }

//remove directory/Folder
// try{
//     await fs.rmdir("c:\\nodejs\\course");
//     console.log("Folder Del ...");
// }catch(err){
//     console.log(err);
// }

//Create and write files

// try{
//     await fs.writeFile("D:\\read.txt","Hello Node")
//     console.log("File Create");
// }catch(err){
//     console.log(err);
// }

//Read File

// try{
//     const data = await fs.readFile("D:\\read.txt","utf-8")
//     console.log(data);
    
// }catch(err){
//     console.log(err);
// }

//Append files

// try{
//     await fs.appendFile("D:\\read.txt","Next Express js")
   
// }catch(err){
//     console.log(err);
// }

//copy File
// try{
//     await fs.copyFile("D:\\read.txt","D:\\Read.md")
   
// }catch(err){
//     console.log(err);
// }

//Get File Information
// try{
//     const info = await fs.stat("D:\\Read.md")
//     //console.log(info);
//     console.log(info.isDirectory());
//     console.log(info.isFile());
    
// }catch(err){
//     console.log(err);
// }