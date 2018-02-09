/*jshint browser: true, devel: true, esversion: 6 */

var Game = {};

Game.base = (function() {
	let canvas = document.getElementById("main-canvas"),
		ctx = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height,
		settings = {};
	
	function init() {
		loop();
	}
	
	function loop() {
		update();
		render();
		requestAnimationFrame(loop);
	}
	
	function update() {
		
	}
	
	function render() {
		
	}
	
	return {
		init: init	
	};
	
})();


