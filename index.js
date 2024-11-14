
var img = ["./assets/mainimg.jpg", "./assets/img1.jpg", "./assets/img2.jpg", "./assets/img3.jpg",
    "./assets/img4.jpg", "./assets/img5.jpg", "./assets/img6.jpg", "./assets/img7.jpg", "./assets/img8.jpg", "./assets/img9.jpg", "./assets/img10.jpg"]


var currentindex = 0;

function next(){

    var currentimage = document.getElementById("mainimg");
    if(currentindex === img.length-1){
      currentindex = 0;
    }
    else{
        currentindex++;
    }
    currentimage.src = img[currentindex];
}


function prev(){

    var currentimage = document.getElementById("mainimg");
    if(currentindex === 0){
        currentindex = img.length-1;
    }
    else{
       currentindex--;
    }
    currentimage.src = img[currentindex];
}

document.getElementById("mainimg").src = "./assets/mainimg.jpg";


function img1() {
    document.getElementById("mainimg").src = "./assets/img1.jpg";
}

function img2() {
    document.getElementById("mainimg").src = "./assets/img2.jpg";
}

function img3() {
    document.getElementById("mainimg").src = "./assets/img3.jpg";
}

function img4() {
    document.getElementById("mainimg").src = "./assets/img4.jpg";
}

function img5() {
    document.getElementById("mainimg").src = "./assets/img5.jpg";
}

function img6() {
    document.getElementById("mainimg").src = "./assets/img6.jpg";
}

function img7() {
    document.getElementById("mainimg").src = "./assets/img7.jpg";
}

function img8() {
    document.getElementById("mainimg").src = "./assets/img8.jpg";
}

function img9() {
    document.getElementById("mainimg").src = "./assets/img9.jpg";
}

function img10() {
    document.getElementById("mainimg").src = "./assets/img10.jpg";
}


























// function backtomainimg(){
//     document.getElementById("mainimg").src = "./assets/img1.jpg";
// }