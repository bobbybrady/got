const got = ["Theon Greyjoy", "The Night King", "Varys", "Jaime Lannister", "Cersei Lannister", "John Snow"]



const isNotAlive = (got) => {
    for (let i = 0; i < got.length; i++) {
        const element = got[i]
        if (element === got[0] || element === got[2] || element === got[4]){
            console.log(element)
        }
    }
    
    
}

// const isNotAlive = (array) => {
//     array.forEach(player => {
//        if (player != "John Snow") {
//            console.log(player)
//        } 
//     });
// }
isNotAlive(got)