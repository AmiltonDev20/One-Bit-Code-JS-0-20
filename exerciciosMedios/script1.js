let name1 = prompt("Write your name: ");
let speed1 = parseFloat(prompt("Write your Velocity: "));

let name2 = prompt("Write your friend's name: ");
let speed2 = parseFloat(prompt("Write his Velocity: "));

if (speed1 > speed2){
    alert(`The Faster was ${name1}`);
}else if(speed2 > speed1){
    alert(`The Faster was ${name2}`);
}else if(speed1 == speed2){
    alert("Their speeds are the same!")
}else{
    alert("Velocity Wrong!")
}

