"use strict";

$(document).ready(function() {
	let projects = [];

	projects[0] = {};
	projects[0].link = 'https://www.dropbox.com/s/tvt4ut9pappkk9r/hackNYTimes.png?dl=0';
	projects[0].img = 'images/nytimesSmall.png';
	projects[0].title = 'NY Times Hack!';

	projects[1] = {};
	projects[1].link = 'https://carly-williams.github.io/landing-page-clone/';
	projects[1].img = 'images/karmaSmall.png';
	projects[1].title = 'Karma Clone';

	projects[2] = {};
	projects[2].link = 'http://codepen.io/carly-williams/pen/obXVWz';
	projects[2].img = 'images/aboutMeSmall.png';
	projects[2].title = 'About Me';

	projects[3] = {};
	projects[3].link = 'https://carly-williams.github.io/jquery-streetfighter/main.html';
	projects[3].img = 'images/streetFighterArmsOutSmall.png';
	projects[3].title = 'Street Fighter';

	projects[4] = {};
	projects[4].link = 'http://carly-williams.github.io/my-shopping-list/';
	projects[4].img = 'images/groceriesSmall.png';
	projects[4].title = 'Shopping List';

	projects[5] = {};
	projects[5].link = 'https://carly-williams.github.io/fizz-buzz-refactor';
	projects[5].img = 'images/fizzBuzzSmall.gif';
	projects[5].title = 'FizzBuzz';

	projects[6] = {};
	projects[6].link = 'https://carly-williams.github.io/javascript-hot-or-cold/';
	projects[6].img = 'images/hotColdSmall.jpg';
	projects[6].title = 'Hot or Cold';

	projects[7] = {};
	projects[7].link = 'http://carly-williams.github.io/quiz-app/';
	projects[7].img = 'images/hopperSmall.jpg';
	projects[7].title = 'Quiz App';

	projects[8] = {};
	projects[8].link = 'https://carly-williams.github.io/ajax-omdb/';
	projects[8].img = 'images/omdbSmall.jpg';
	projects[8].title = 'AJAX OMDB';

	projects[9] = {};
	projects[9].link = 'https://carly-williams.github.io/ajax-youtube/';
	projects[9].img = 'images/youTubeSmall.png';
	projects[9].title = 'AJAX YouTube';

	projects[10] = {};
	projects[10].link = 'https://carly-williams.github.io/stackerAJAX/';
	projects[10].img = 'images/stackOverflowSmall.png';
	projects[10].title = 'Reputation Builder';

	projects[11] = {};
	projects[11].link = 'http://carly-williams.github.io/movie-recommendation/';
	projects[11].img = 'images/matrixSmall.jpg';
	projects[11].title = 'Movie Night';

	$.each(projects, function(i, project) {
		// clone our piece template code
		var result = $('.templates .piece').clone();
	
		var link = result.find('.project--link');
		link.attr("href", project.link);
		var img = result.find('.project--img');
		img.attr("src", project.img);
		var title = result.find('.project--title');
		title.text(project.title);
		$(".content--projects").append(result);
	});

});