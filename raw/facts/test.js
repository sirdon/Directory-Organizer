let fs = require("fs");
let src = "G:\\src\\BRAHMA_SHAKTI_PUBLIC_SCHOOL.pdf";
let finalDest = "G:\\dest\\file.pdf";
fs.copyFileSync(src,finalDest);