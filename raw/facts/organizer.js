let fs =require("fs");
let path = require("path");
let utility = require("./utility");

function checkWhetherFileOrDir(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
return fs.readdirSync(src);
}
function getExtension(src){
    return src.split(".").pop();
}
function getCategory(extn){
    let types = utility.types;
    for(let category in types){
        for(let i=0;i<types[category].length;i++){
            if(extn==types[category][i]){
                console.log("inside get category"+category);
                return category;
            }
        }
    }
    return "others";
}
function sendFile(src,dest,category){
    let categoryPath = path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let cPath=path.join(categoryPath,path.basename(src));
    fs.copyFileSync(src,cPath);
}
function organizer(src,dest){
    if(checkWhetherFileOrDir(src)==true){
        let extn = getExtension(src);
        let category = getCategory(extn);
        console.log(category);
        sendFile(src,dest,category);
    }else{
       let childnames = getContent(src);
       for(let i=0;i<childnames.length;i++){
           if(childnames[i]=="organized_files"){
               continue;
           }
           let childPath = path.join(src,childnames[i]);
           organizer(childPath,dest);
       }
        }
}

let src = process.argv[2];
let dest = path.join(src,"organized_files");
if(fs.existsSync(dest)==false){
    fs.mkdirSync(dest);
}
organizer(src,dest);