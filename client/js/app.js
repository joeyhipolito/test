(function(doc) {
	var App;
	
	App = (function() {
		function App(doc) {}
		
		App.prototype.ajax = function(url, type, params, callback) {
	
			var xhr = new XMLHttpRequest();
			xhr.open(type, url);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = function() {
				if (xhr.status === 200) {
					callback(xhr);
				}
			}
			
			xhr.send(JSON.stringify(params));
			

		};
		
		App.prototype.init = function() {
		
			console.log('initialized');
			this.listPersons();
			this.bindEvents();
		};
		
		App.prototype.listPersons = function() {
			
			this.ajax('http://localhost:8080/joey/person', 'GET', {}, function(re) {
				var personList = document.querySelector('.l-person__list');
				personList.innerHTML = '';
				var people = JSON.parse(re.responseText);
				var i = 0, len = people.length;
				for(i = 0; i < len; i++) {
					var person = people[i];
					var personItem = document.createElement('p');
					var personItemDeleteAnchor = document.createElement('a');
					personItemDeleteAnchor.className = 'person__delete';
					personItemDeleteAnchor.innerHTML = ' | delete';
					personItemDeleteAnchor.setAttribute('data-id', person.id);
					personItem.innerHTML = person.first_name + ' ' + person.last_name + ' - ' + person.contact;
					personItem.appendChild(personItemDeleteAnchor);
					personList.appendChild(personItem);
				}
			
			});
		}
		
		App.prototype.bindEvents = function() {
			var createButton = document.querySelector('#createBtn');
			var _this = this;
			createButton.addEventListener('click', function(e) {
				var person = {
					first_name: document.querySelector('input[name="first_name"]').value,
					last_name: document.querySelector('input[name="last_name"]').value,
					contact: document.querySelector('input[name="contact"]').value,
				};
				
				_this.ajax('http://localhost:8080/joey/person', 'POST', person, function(re) {
					_this.listPersons();
				});
			});
			
			// hack .on of jquery
			document.addEventListener('click', function (e) {
				if (hasClass(e.target, 'person__delete')) {
					var id = e.target.getAttribute('data-id');
					_this.ajax('http://localhost:8080/joey/person/' +  id , 'DELETE', {}, function(re) {
						_this.listPersons();
					});
				}
			}, false);
			
			function hasClass(elem, className) {
				return elem.className.split(' ').indexOf(className) > -1;
			}
		};
		
		return App;
	})();
	
	var app = new App(doc);
	app.init();
	
})(document);




