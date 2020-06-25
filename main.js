<!DOCTYPE html>
<html lang="en" >
	<head>
  		<meta charset="UTF-8">
  			<title>SIMP - My Angel ❤️</title>
  		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
		<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);
html, body {
        background: black;
        width: 100%;
        height: 100vh;
}

body {
  font-family: 'Press Start 2P', cursive;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #000000;
}
.tengah {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
/* unvisited link */
a:link {
  color: #FFF;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #FFF;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: #FF00F0;
  text-decoration: none;
}

/* selected link */
a:active {
  color: #000000;
  text-decoration: none;
}

.center {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  height: 100%;
  width: 100%;
}

h1 {
  display: block;
  font-size: 3em;
  margin: 0.6em 0;
  font-weight: bold;
}
h2 {
  display: block;
  font-size: 2em;
  margin: 0.6em 0;
  font-weight: bold;
}

.glitch {
  position: relative;
  margin: 0 auto;
  background: #000000;
}

.glitch::before,
.glitch::after {
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  animation-direction: alternate-reverse;
  overflow: hidden;
  position: absolute;
  top: 10;
  clip: rect(0, 900px, 0, 0);
  content: attr(data-text);
}

.glitch::after {
  -webkit-animation-name: glitch-animation;
          animation-name: glitch-animation;
  -webkit-animation-duration: 4s;
          animation-duration: 4s;
  left: 4px;
  text-shadow: -1px 0 #ffa800;
  background: #000000;
}

.glitch::before {
  -webkit-animation-name: glitch-animation-2;
          animation-name: glitch-animation-2;
  -webkit-animation-duration: 6s;
          animation-duration: 6s;
  left: -4px;
  text-shadow: 1px 0 #00d8ff;
  background: #000000;
}

/* Expanded Animations */
@-webkit-keyframes glitch-animation {
  0% {
    clip: rect(42px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(12px, 9999px, 59px, 0);
  }
  10% {
    clip: rect(48px, 9999px, 29px, 0);
  }
  15.0% {
    clip: rect(42px, 9999px, 73px, 0);
  }
  20% {
    clip: rect(63px, 9999px, 27px, 0);
  }
  25% {
    clip: rect(34px, 9999px, 55px, 0);
  }
  30.0% {
    clip: rect(86px, 9999px, 73px, 0);
  }
  35% {
    clip: rect(20px, 9999px, 20px, 0);
  }
  40% {
    clip: rect(26px, 9999px, 60px, 0);
  }
  45% {
    clip: rect(25px, 9999px, 66px, 0);
  }
  50% {
    clip: rect(57px, 9999px, 98px, 0);
  }
  55.0% {
    clip: rect(5px, 9999px, 46px, 0);
  }
  60.0% {
    clip: rect(82px, 9999px, 31px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 27px, 0);
  }
  70% {
    clip: rect(28px, 9999px, 99px, 0);
  }
  75% {
    clip: rect(45px, 9999px, 69px, 0);
  }
  80% {
    clip: rect(23px, 9999px, 85px, 0);
  }
  85.0% {
    clip: rect(54px, 9999px, 84px, 0);
  }
  90% {
    clip: rect(45px, 9999px, 47px, 0);
  }
  95% {
    clip: rect(37px, 9999px, 20px, 0);
  }
  100% {
    clip: rect(40px, 9999px, 91px, 0);
  }
}
@keyframes glitch-animation {
  0% {
    clip: rect(42px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(12px, 9999px, 59px, 0);
  }
  10% {
    clip: rect(48px, 9999px, 29px, 0);
  }
  15.0% {
    clip: rect(42px, 9999px, 73px, 0);
  }
  20% {
    clip: rect(63px, 9999px, 27px, 0);
  }
  25% {
    clip: rect(34px, 9999px, 55px, 0);
  }
  30.0% {
    clip: rect(86px, 9999px, 73px, 0);
  }
  35% {
    clip: rect(20px, 9999px, 20px, 0);
  }
  40% {
    clip: rect(26px, 9999px, 60px, 0);
  }
  45% {
    clip: rect(25px, 9999px, 66px, 0);
  }
  50% {
    clip: rect(57px, 9999px, 98px, 0);
  }
  55.0% {
    clip: rect(5px, 9999px, 46px, 0);
  }
  60.0% {
    clip: rect(82px, 9999px, 31px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 27px, 0);
  }
  70% {
    clip: rect(28px, 9999px, 99px, 0);
  }
  75% {
    clip: rect(45px, 9999px, 69px, 0);
  }
  80% {
    clip: rect(23px, 9999px, 85px, 0);
  }
  85.0% {
    clip: rect(54px, 9999px, 84px, 0);
  }
  90% {
    clip: rect(45px, 9999px, 47px, 0);
  }
  95% {
    clip: rect(37px, 9999px, 20px, 0);
  }
  100% {
    clip: rect(4px, 9999px, 91px, 0);
  }
}
@-webkit-keyframes glitch-animation-2 {
  0% {
    clip: rect(65px, 9999px, 100px, 0);
  }
  5% {
    clip: rect(52px, 9999px, 74px, 0);
  }
  10% {
    clip: rect(79px, 9999px, 85px, 0);
  }
  15.0% {
    clip: rect(75px, 9999px, 5px, 0);
  }
  20% {
    clip: rect(67px, 9999px, 61px, 0);
  }
  25% {
    clip: rect(14px, 9999px, 79px, 0);
  }
  30.0% {
    clip: rect(1px, 9999px, 66px, 0);
  }
  35% {
    clip: rect(86px, 9999px, 30px, 0);
  }
  40% {
    clip: rect(23px, 9999px, 98px, 0);
  }
  45% {
    clip: rect(85px, 9999px, 72px, 0);
  }
  50% {
    clip: rect(71px, 9999px, 75px, 0);
  }
  55.0% {
    clip: rect(2px, 9999px, 48px, 0);
  }
  60.0% {
    clip: rect(30px, 9999px, 16px, 0);
  }
  65% {
    clip: rect(59px, 9999px, 50px, 0);
  }
  70% {
    clip: rect(41px, 9999px, 62px, 0);
  }
  75% {
    clip: rect(2px, 9999px, 82px, 0);
  }
  80% {
    clip: rect(47px, 9999px, 73px, 0);
  }
  85.0% {
    clip: rect(3px, 9999px, 27px, 0);
  }
  90% {
    clip: rect(26px, 9999px, 55px, 0);
  }
  95% {
    clip: rect(42px, 9999px, 97px, 0);
  }
  100% {
    clip: rect(38px, 9999px, 49px, 0);
  }
}
@keyframes glitch-animation-2 {
  0% {
    clip: rect(65px, 9999px, 100px, 0);
  }
  5% {
    clip: rect(52px, 9999px, 74px, 0);
  }
  10% {
    clip: rect(79px, 9999px, 85px, 0);
  }
  15.0% {
    clip: rect(75px, 9999px, 5px, 0);
  }
  20% {
    clip: rect(67px, 9999px, 61px, 0);
  }
  25% {
    clip: rect(14px, 9999px, 79px, 0);
  }
  30.0% {
    clip: rect(1px, 9999px, 66px, 0);
  }
  35% {
    clip: rect(86px, 9999px, 30px, 0);
  }
  40% {
    clip: rect(23px, 9999px, 98px, 0);
  }
  45% {
    clip: rect(85px, 9999px, 72px, 0);
  }
  50% {
    clip: rect(71px, 9999px, 75px, 0);
  }
  55.0% {
    clip: rect(2px, 9999px, 48px, 0);
  }
  60.0% {
    clip: rect(30px, 9999px, 16px, 0);
  }
  65% {
    clip: rect(59px, 9999px, 50px, 0);
  }
  70% {
    clip: rect(41px, 9999px, 62px, 0);
  }
  75% {
    clip: rect(2px, 9999px, 82px, 0);
  }
  80% {
    clip: rect(47px, 9999px, 73px, 0);
  }
  85.0% {
    clip: rect(3px, 9999px, 27px, 0);
  }
  90% {
    clip: rect(26px, 9999px, 55px, 0);
  }
  95% {
    clip: rect(42px, 9999px, 97px, 0);
  }
  100% {
    clip: rect(38px, 9999px, 49px, 0);
  }
}
.bg_heart{position:relative;top:0;left:0;width:100%;height:100%;overflow:hidden}

.heart{position:absolute;top:-50%;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-m-transform:rotate(-45deg);transform:rotate(-45deg)}
.heart:before{position:absolute;top:-50%;left:0;display:block;content:"";width:100%;height:100%;background:inherit;border-radius:100%;}
.heart:after{position:absolute;top:0;right:-50%;display:block;content:"";width:100%;height:100%;background:inherit;border-radius:100%;}

@-webkit-keyframes love {
  0%{top:110%}
}
@-moz-keyframes love {
  0%{top:110%}
}
@-ms-keyframes love {
  0%{top:110%}
}
@keyframes love {
  0%{top:110%}
}

		</style>
	</head>
<body>	
<!-- partial:index.partial.html -->
<div class="bg_heart">
<div class="tengah">
	<center>
  <h1>
  	<div id="watch"></div></h1>
   <h2> <span class="glitch" data-text="Hi Sayang">
     I LOVE YOU
    </span>, ADISTI ❤️
<font size="2px"><br/>
  Redirecting to SIMP after <span id="countdown">0</span> seconds
</font>
<!-- JavaScript part -->
<script type="text/javascript">
    // Total seconds to wait
    var seconds = 20;
    function countdown() {
        seconds = seconds - 1;
        if (seconds < 0) {
            // Chnage your redirection link here
            window.location = "https://vermint.vercel.app/";
        } else {
            // Update remaining seconds
            document.getElementById("countdown").innerHTML = seconds;
            // Count down using javascript
            window.setTimeout("countdown()", 1000);
        }
    }
    // Run countdown function
    countdown();
</script>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        function clock() {
          var now = new Date();
          var secs = ('0' + now.getSeconds()).slice(-2);
          var mins = ('0' + now.getMinutes()).slice(-2);
          var hr = now.getHours();
          var Time = hr + ":" + mins + ":" + secs;
          document.getElementById("watch").innerHTML = Time;
          requestAnimationFrame(clock);
        }
        requestAnimationFrame(clock);
    });
</script>
<script type="text/javascript">
  var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 60) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 10) + 10;
  
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  $('.heart').each(function(){
    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    var width = $(this).css("width").replace(/[^-\d\.]/g, '');
    if(top <= -100 || width >= 150){
      $(this).detach();
    }
  });
},800);

</script>
<script type='text/javascript'>
//<![CDATA[
!function(e,t,a){function n(){c(".heart2{width: 25px;height: 25px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart2:after,.heart2:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart2:after{top: -15px;}.heart2:before{left: -15px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart2",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
//]]>
</script> 
<!-- partial -->
<script src="https://cdn.rawgit.com/bungfrangki/efeksalju/2a7805c7/efek-salju.js" type="text/javascript"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
</body>
</html>
