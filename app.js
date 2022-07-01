function userWork(){
    let usersWorkout = prompt("what is your favorite workout"); 
if (usersWorkout == "bench") {
    console.log("STRENGTH IS FOR YOU!");
}
if (usersWorkout == "BENCH"){
    console.log("this site is for you");
}
if (usersWorkout == "BENCH"){
    document.write("THIS SITE IS FOR YOU!" );
}
if (usersWorkout.toLowerCase() == "bench"){
    document.write("STRENGTH IS FOR YOU!");
}
else if (usersWorkout !== "bench"){
    document.write("strength still might be for you");
}
}
function userTrue(){
    let answer = false;
    let work = 0;
    
    while (!answer){let response = prompt("yes or no, working out is good for you?");
        if (response === "yes"){
            alert("you're correct!");
            work += 4;
            break;
        } else if (response === "true"){
            alert("you're right!");
            work += 2;
            break;
        } else {
            alert("try again!")
        }

        }
    }


var img = document.createElement("img");
img.src = "turkey-420-320.jpg";

function userSon() {

    let output = '';
    let rating = prompt('how many servings of protein do you want?');
    for(let i = 0; i < rating; i++){
        output += "<img class='star' src='turkey-420-320.jpg'/>";
    }

    return document.write(output);
}

// function userTrue(){
//     let usersWorkout = prompt("yes or no  workingout good for you?"); 
// if (usersWorkout == "yes") {
//     console.log("thats correct");
// }
// if (usersWorkout == "no"){
//     console.log("wrong");
// }
// if (usersWorkout == "BENCH"){
//     document.write("THIS SITE IS FOR YOU!" );
// }
// if (usersWorkout.toLowerCase() == "bench"){
//     document.write("STRENGTH IS FOR YOU!");
// }
// else if (usersWorkout !== "bench"){
//     document.write("strength still might be for you");
// }

