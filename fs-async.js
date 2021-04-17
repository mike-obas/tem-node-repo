let {readFile, writeFile} = require("fs");

const readingFile = readFile('./content/firsttxt.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result;
    readFile('./content/secondtxt.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        // console.log(result)
        const second = result;
        const write = writeFile('./content/result-sync.txt',
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

//console.log(readingFile);

