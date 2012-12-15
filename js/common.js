function InheretFrom(context, obj, arguments){
	context.__proto__ = new obj(arguments);
	context.prototype = context.__proto__;
	return true;
}

// Request animation frame gist for canvas 
requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
		window.setTimeout(callback, 1000/60);
	};
})();