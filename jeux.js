 let date, hr, min, sec, dg

 function  holg(){
    date = new Date();
    hr = date.getHours()
    min = date.getMinutes()
    sec= date.getSeconds()
     
   document.getElementById("hr").style.transform= `translate(-50%, -100%) rotate(${hr*360/12+ min*30/60}deg)`
   document.getElementById("mn").style.transform= `translate(-50%, -100%) rotate(${min*360/60+ sec*6/60}deg)`
   document.getElementById("sc").style.transform= `translate(-50%, -100%) rotate(${sec*360/60}deg)`

}



holg()

 window.setInterval(holg, 1000)