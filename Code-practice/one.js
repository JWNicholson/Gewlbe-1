//////////one 
//Reverse only words, leaving them and any punction in same place
////
// assign sentence to a variable

const phrase ="He walked into the basement, and it was dark."

function reverseWords(str){
    // split into array on empty spaces
    return str.split(" ")
    //map over each word using regex to only get characters - returns a matrix (an arry of arrays)
    .map(word => word.split(/([a-zA-Z]+)/)
        //map over each word - split characters and reverse
        .map(word => word.split("").reverse()
            // join characters
            .join(""))

        //join on results from second map
        .join("")
    )
  //join results of main map into sentence  
.join(" ")
}



//

x = reverseWords(phrase)

console.log(x)

document.getElementById('solution-1').innerHTML = x ;

/////////end one