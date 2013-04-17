//slight overhead checking and/or creating namespaces justified by removing dependency on script inclusion order

org = window.org || {};
org.anotherearth = window.org.anotherearth || {};
org.anotherearth.view = window.org.anotherearth.view || {};

org.anotherearth.view.RedoButtonUpdateStrategy = function() {}; //implements observer update strategy
org.anotherearth.view.RedoButtonUpdateStrategy.prototype = {
	execute: function(button) {
		//org.anotherearth.Interface.ensureImplements(button, org.anotherearth.GUIWidget);
		button.setIsEnabled(button.getModel().getNumberRemainingRedos());
	}
};
