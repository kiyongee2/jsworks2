//이벤트 구현
var img = document.querySelector("#pic");

//마우스를 올려 놓으면 이미지 변경
img.addEventListener("mouseover", function(){
    img.src = "images/easys-2.jpg";
});

//마우스가 이미지를 벗어났을때 원래 이미지로 변경
img.addEventListener("mouseout", function(){
    img.src = "images/easys-1.jpg";
});

/*img.addEventListener("mouseover", changePic);

img.addEventListener("mouseout", originPic);

function changePic(){
    img.src="images/easys-2.jpg";
}

function originPic(){
    img.src="images/easys-1.jpg";
}*/
