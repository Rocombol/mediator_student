'use strict';

var studentsList = new StudentsList(),
    listView = new ListView(studentsList),
    mediator = new Mediator(),
    infoView = new InfoView(),
    edit = new EditView();


document.addEventListener('DOMContentLoaded', function () {
	
    listView.renderList();
}, false);