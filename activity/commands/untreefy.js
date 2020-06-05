/* let fs =require("fs");
let path = require("path");
module.exports.untreefyFn = function () {
    let src = arguments[0];
    let dest = arguments[1];
    console.log(`src = ${arguments[0]} dest= ${arguments}`);
    // untreefy(src,dest);
    
}

function checkWhetherFileOrDir(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
return fs.readdirSync(src);
}

function untreefy(src,dest){
    console.log(src);
    let childnames = getContent(src);
        console.log(childnames);
    // if(checkWhetherFileOrDir(src)==true){
       
    //     let oldName = path.basename(src);
    //     let ext = path.extname(src);
    //     let dest;
    //     if(ext in decuments){
    //         destPath = path.join(dest)
    //     }
    //     // let destPath = path.join(dest,newName);
    //     fs.copyFileSync(src,destPath);
    //     console.log(`File  ${oldName} from src copied to ${destPath}`);
    // }else{
    //     //directory
    //     // console.log(toprint);
        
    //     let childnames = getContent(src);
    //     console.log(childnames);
    //     // for(let i=0; i < childnames.length;i++){
    //     //     let childPath = path.join(src, childnames[i]);
    //     //     // let cToprint = path.join(toprint, childnames[i]);
    //     //     let chobj = {};
    //     //     untreefy(childPath,dest,chobj);
    //     //     obj.children.push(chobj);
    //     // }
    // } 
}

// function viewAsTree(src, indent){
//     if(checkWhetherFileOrDir(src)==true){
//         // console.log( src+" *");
//         console.log(indent +path.basename(src)+ " *");
//     }else{
//         //directory
//         console.log(indent + path.basename(src));
//         let childnames = getContent(src);
//         // console.log(childnames);
//         for(let i=0; i < childnames.length;i++){
//             let childPath = path.join(src, childnames[i]);
//             viewAsTree(childPath, indent + "__");
//         }
//     } 
// }
// //view()
// let src = process.argv[2];
// let dest = process.argv[3];
// let root = {};
// untreefy(src, dest,root);
// console.log(root);



// let flag = 0;
//     for (let key in formats) 
//     {   for(let k=0;k<formats[key].length;k++)
//         {    
//             if(extension == formats[key][k])
//             {   let destPath = path.join(dest,key,cElem.oldName);
//                 fs.copyFileSync(srcPath,destPath);
//                 console.log(`${cElem.oldName} copied to dest`);
//                 flag = 1;
//                 break;
//             }
//         }
//     }
//     if(!flag)
//     {
//             let destPath = path.join(dest,'Other',cElem.oldName);
//             fs.copyFileSync(srcPath,destPath);
//             console.log(`${cElem.oldName} copied to dest`);
//     } */

let uniqid = require("uniqid");
let fs =require("fs");
let path = require("path");

// module.exports.untreefyFn = function () {
//     let src = arguments[0];
//     let dest = arguments[1];
//     untreefy(src,dest);
//     //console.log(root);
    
// }



function checkWhetherFileOrDir(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
return fs.readdirSync(src);

}

function untreefy(src, dest) {
    // checkwhether file or directory
    if (checkWhetherFileOrDir(src) == true) {
        console.log(src+"uu");
        // copy with newname
        
        // let oldName = path.basename(src);
        // let newName = uniqid();
        // obj.newName = newName;
        // obj.oldName = oldName;
        // obj.isFile = true
        // let destPath = path.join(dest, newName);
        // fs.copyFileSync(src, destPath);
        // console.log(`File ${oldName} from src copied to ${destPath}`);
    } else {
       
        
        let childNames = getContent(src);
        console.log(childNames);
        // for (let i = 0; i < childNames.length; i++) {
        //     let childPath = path.join(src, childNames[i]);
        //     // let cToprint = path.join(toprint, childNames[i]);
        //     let chobj = {};
        //     untreefy(childPath, dest, chobj);
        //     obj.children.push(chobj);}
        
    }
}

let src = "C:\\Users\\AMIT\\Downloads\\Lecture_0_1_intro\\DirOrg\\activity";
let dest = 'C:\\Users\\AMIT\\Downloads\\Lecture_0_1_intro\DirOrg\\activity\\commands';
//  let dest = process.argv[3];
 //let root = {};
untreefy(src, dest);
//console.log(root);
