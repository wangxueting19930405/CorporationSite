var EventUtil={
	addHandler:function(element,type,handler) {
		if (element.addEventListener) {element.addEventListener(type,handler,false)} 
			else if(element.attachEvent){element.attachEvent("on"+type,handler)}
			else{
				element["on"+type]=handler;
			}
	},
	getElement:function(event) {
		return event?event:window.event;
	},
	preventDefault:function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	getTarget:function(event) {
		return event.getTarget||event.srcElement;
	}
};

EventUtil.addHandler(window,"load",function() {
	var images = document.getElementById("carousel").getElementsByTagName("a");
	var backButton = document.getElementById("back");
	var nextButton = document.getElementById("next");
	var carousel = document.getElementById("carousel");
	var changeOpacity = document.getElementById("changeOpacity");
	var setNumber;

	setup();
	setTimeout(change,5000);
	
function changeIndexMinusOne(){
	for(var i = 0,len=images.length;i<len;i++){
			var index = images[i].getAttribute("index");
			 if(--index<0){
			 	images[i].setAttribute("index","4");
			 }
			 else{
			 	images[i].setAttribute("index",index);
			 }
		}
}
function changeIndexPlusOne() {
	for(var i = 0,len=images.length;i<len;i++){
			var index = images[i].getAttribute("index");
			 if(++index>4){
			 	images[i].setAttribute("index","0");
			 }else{
			 	images[i].setAttribute("index",index);
			 }
		}
}
	function setup() {
		var height= window.getComputedStyle(carousel,null).getPropertyValue("height");
		//index plus 1
		for(var i = 0,len=images.length;i<len;i++){
			var index = images[i].getAttribute("index");
			 images[i].style.top=parseInt(height)*index+"px";
		}

	}
	function change() {
		 console.log("change start...");
		//index-1
		changeIndexMinusOne();
		setup();
			setNumber = setTimeout(change,5000);		
	}

	//次の画像を表示する
	function goToNext() {
		 console.log("goToNext start...");
		//index-1
		changeIndexMinusOne();
		setup();
				
	}
	function goToBack() {
		//index+1
		changeIndexPlusOne();
		setup();
			
	}

var text = document.getElementById("textShow").getElementsByTagName("p");
//text fadein
var x = 0;
var length=text.length;
function textFadeIn() {
		text[x].style.visibility = "visible";
		setTimeout(
			function() {text[x].style.visibility ="hidden";
		},3000);
		
		// if (x>length) {
		// 	x=0;
		// }else{
		// 	x++;
		// }
	 // 	setTimeout(textFadeIn,2000);
	 }
setTimeout(textFadeIn,2000);

});