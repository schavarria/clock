$(document).ready(function(){

	setInterval (function(){
		var time = new Date()

		var hours = time.getHours()
		   if (hours >12){
		   	hours = hours-12
		   }
		   if(hours<10){
		   	hours = "0" + hours
		   }

		var minutes =  time.getMinutes()
			if (minutes<10){
				minutes ="0" + minutes
			}


		var seconds = time.getSeconds()
			if (seconds<10){
				seconds ="0" + seconds
			}


		var displayTime = hours + ":" + minutes +":" + seconds

		$(".clockCon").html(displayTime)


	},1000)






	setInterval(function(){
		var time = new Date()

		var hours = time.getHours()
		   if (hours >12){
		   	hours = hours-12
		   }
		   if(hours<10){
		   	hours = "0" + hours
		   }

		var minutes =  time.getMinutes()
			if (minutes<10){
				minutes ="0" + minutes
			}


		var seconds = time.getSeconds()
			if (seconds<10){
				seconds ="0" + seconds
			}


		var colorTime = "#"+ hours.toString(16) + minutes.toString(16)  + seconds.toString(16)

		$(".colorCon").html(colorTime).css("background-color", `${colorTime}`)







	}, 1)






})