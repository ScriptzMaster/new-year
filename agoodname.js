
let show = () => {
    let name = document.getElementById("name").value;
    document.getElementById("display").innerHTML="WE WISH YOU A HAPPY NEW YEAR"+name;
    document.getElementById("img").src="./Imageś/k.gif";
    document.getElementById("content").innerHTML="New year, new hopes and newer beginnings- all of us ardently wait for the clock to strike 12 and u";
    document.getElementById("dis").style.color=".#FFFFFFF";
}
document.getElementById("btn").addEventListener("click", show);
