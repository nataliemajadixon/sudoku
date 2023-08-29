
var numPicked = null;

var tilePicked = null;

var incorrect = 0;

var game = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]


var answer = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function(){
    setGame();
}

function setGame(){


  //using for loop to get the numbers
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerHTML = i;
        number.classList.add("number");
        //appending number to numbers section
        document.getElementById("numbers").appendChild(number);
    }
    //using for loop for the game
    for (let g = 0; g < 9; g++){
        for( let k = 0; k < 9; k++){
            let tile = document.createElement("div");
            tile.id = g.toString() + "-" + k.toString();
            tile.classList.add("tile");
            document.getElementById("game").append(tile);

        }
    }


}