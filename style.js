// document.getElementById("baploy").addEventListener("click", function(){
//     document.getElementById("audio").play();
// });

var playing = false;
function action1(){
    var audio = document.getElementById("audio1");
    if(playing === false){
        audio.play();
        playing = true;
    }else{
        audio.pause();
        playing = false;
    }
}

function action2(){
    var audio = document.getElementById("audio2");
    if(playing === false){
        audio.play();
        playing = true;
    }else{
        audio.pause();
        playing = false;
    }
}

function action3(){
    var audio = document.getElementById("audio3");
    if(playing === false){
        audio.play();
        playing = true;
    }else{
        audio.pause();
        playing = false;
    }
}

function action4(){
    var audio = document.getElementById("audio4");
    if(playing === false){
        audio.play();
        playing = true;
    }else{
        audio.pause();
        playing = false;
    }
}