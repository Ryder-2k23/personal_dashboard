let img2 = document.getElementById("img2");
let img1 = document.getElementById("img1");
function hovering(){
    img1.style.display="none";
    img2.style.display="block";
}
function leaving(){
    img1.style.display="block";
    img2.style.display="none";
}