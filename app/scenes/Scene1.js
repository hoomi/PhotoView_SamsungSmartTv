alert('SceneScene1.js loaded');

function SceneScene1() {
	var imageIndex = 0;
};

SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#my_photo_image').sfImage({
		src:'images/(68).jpg'
	});
	$('#next_button').sfButton({
		text:'Next'
	});
	$('#previous_button').sfButton({
		text:'Previous'
	});
};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene1.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene1.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focused
	switch (keyCode) {
		case sf.key.LEFT:
			$('#my_photo_image').sfImage({src : 'images/(68).jpg'});
			$('#previous_button').sfButton("blur");
			$('#next_button').sfButton("focus");
			imageIndex = 0;
			break;
		case sf.key.RIGHT:
			$('#my_photo_image').sfImage({src : 'images/22_Bday.jpg'});
			$('#previous_button').sfButton("focus");
			$('#next_button').sfButton("blur");
			imageIndex = 0;
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			sf.scene.hide('Scene1');
			sf.scene.show('Scene2',imageIndex);
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
