let fs = require("fs");
let path = require("path");

let src = process.argv[2];
let dest = process.argv[3];
copyFileFn(src,dest);
function getContent(src){
    return fs.readdirSync(src);
    }

function checkWhetherFileOrDir(src){
    return fs.lstatSync(src).isFile();
}

function copyFileFn(src,dest){
    let finalDest= "";
    let documents = ['.pdf','.doc','.txt','.xlx','.xlsx','.docx'];
let media = ['.mp4','.mp3','.jpg','.jpeg','.mkv'];
let archive = ['.zip','.7z','.rar'];
    if(checkWhetherFileOrDir(src)==true){
        let extn = path.extname(src);
        for(let i=0;i<documents.length;i++){
        if(extn == documents[i]){
            //copy file in documents folder
            finalDest = path.join(dest,"Documents");
            console.log(`copying file in documents`);
        }
        } for(let i=0;i<media.length;i++){
             if(extn ==media[i]){
            //copy file in media folder
            finalDest = path.join(dest,"Media");
            console.log(`copying file in media`);
             }
        } for(let i=0;i<archive.length;i++){
             if(extn == archive[i]){
            //copy file in media folder
            finalDest = path.join(dest,"Archive");
            console.log(`copying file in archive`);
             }
        }if(finalDest==""){
            //copy file others folder
            finalDest = path.join(dest,"Others");
            console.log(`copying file in others`);
        }
        let file = path.basename(src);
        finalDest = path.join(finalDest,file+extn);
        fs.copyFileSync(src,finalDest);
    }else{
        let childnames = getContent(src);
        for(let i=0;i<childnames.length;i++){
            let childPath = path.join(src,childnames[i]);
            copyFileFn(childPath,dest);
        }
    }
}
