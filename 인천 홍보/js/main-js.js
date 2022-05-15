//이미지 show
let picture = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"]
let p_idx = 0;

showPicture(); 

function showPicture() {
    document.querySelector("#pic").src = picture[p_idx];
    p_idx++;
    if(p_idx === picture.length)
        p_idx = 0;
    setTimeout(showPicture, 3000); //콜백 함수
}

//디지털 시계
setInterval(function(){
    const date = new Date();
    let watch = date.toLocaleTimeString();
    document.getElementById("display").innerHTML = watch;
}, 1000);

