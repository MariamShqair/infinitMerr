var fs=require("fs")
let list = fs.readFileSync('story.txt').toString().split(" ");
let stopwords = fs.readFileSync('stopwords.txt').toString().split(",");
let counts = [];
function frequency(list){

   if(list.length === 0){return 0}
   if(!stopwords.includes(list[0]))
    {
        if(counts.find(x => x.key === list[0]))
            counts.find(x => x.key === list[0]).count++
        else 
            counts.push({key:list[0],count:1});
    }
   list.shift()
   frequency(list)
}
frequency(list)
counts.sort((a,b) =>  b.count - a.count)
console.log(counts);