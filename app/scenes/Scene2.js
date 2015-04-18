alert('SceneScene2.js loaded');

function SceneScene2() {

};

SceneScene2.prototype.initialize = function() {
	alert("SceneScene2.initialize()");
	// this function will be called only once when the scene manager show this
	// scene first time
	// initialize the scene controls and styles, and initialize your variables
	// here
	// scene HTML and CSS will be loaded before this function is called
	$('#big_image').sfImage({
		src : 'images/(68).jpg'
	});
	$('#picture_label').sfLabel({
		text : 'Sexy Photo'
	});
};

SceneScene2.prototype.handleShow = function(data) {
	alert("SceneScene2.handleShow()");
	if (data == 0) {
		$('#big_image').sfImage({
			src : 'images/(68).jpg'
		});
		$('#picture_label').sfLabel({
			text : 'Namzadi'
		});
	} else {
		$('#picture_label').sfLabel({
			text : 'Tavalod'
		});
		$('#big_image').sfImage({
			src : 'images/22_Bday.jpg'
		});
	}
	// this function will be called when the scene manager show this scene
};

SceneScene2.prototype.handleHide = function() {
	alert("SceneScene2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene2.prototype.handleFocus = function() {
	alert("SceneScene2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene2.prototype.handleBlur = function() {
	alert("SceneScene2.handleBlur()");
	// this function will be called when the scene manager move focus to another
	// scene from this scene
};

SceneScene2.prototype.handleKeyDown = function(keyCode) {
	alert("SceneScene2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focused
	switch (keyCode) {
	case sf.key.LEFT:
		break;
	case sf.key.RIGHT:
		break;
	case sf.key.UP:
		break;
	case sf.key.DOWN:
		break;
	case sf.key.ENTER:
		break;
	case sf.key.RETURN:
		sf.scene.show('Scene1');
		sf.scene.focus('Scene1');
		sf.scene.hide('Scene2');
		break;
	default:
		alert("handle default key event, key code(" + keyCode + ")");
		break;
	}
};