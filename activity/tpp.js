let input = process.argv.slice(2);
let untreefy = require("./commands/untreefy");
let treefy = require("./commands/treefy");
let cmd = input[0];
switch(cmd){
    case "untreefy":
        untreefy.untreefyFn(process.argv[3],process.argv[4]);
        // console.log("untreefy implementd");
        break;
    case "treefy":
        treefy.treefyFn(process.argv[3],process.argv[4]);
        // console.log("treefy implemented");
        break;
    default:
        console.log("invalid input");
}