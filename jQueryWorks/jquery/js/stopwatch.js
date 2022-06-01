let time = 0;
let sw = true;

$(document).ready(function(){
  buttonEvt();
});

function init(){
  document.getElementById("time").innerHTML = "00:00:00";
}

function buttonEvt(){
  let hour = 0, min = 0, sec = 0;
  let timer;

  // start btn
  $("#startbtn").click(function(){

    if(sw){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      sw = false;

      if(time == 0){
        init();
      }

      timer = setInterval(function(){
        time++;

        min = Math.floor(time/60);
        hour = Math.floor(min/60);
        sec = time % 60;
        min = min % 60;

        let th = hour;
        let tm = min;
        let ts = sec;

        if(th < 10){
          th = "0" + hour;
        }
        if(tm < 10){
          tm = "0" + min;
        }
        if(ts < 10){
          ts = "0" + sec;
        }

        document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
      }, 1000);
    }
  });

  // pause btn
  $("#pausebtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      sw = true;
    }
  });

  // stop btn
  $("#stopbtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      sw = true;
      time = 0;
      init();
    }
  });
}