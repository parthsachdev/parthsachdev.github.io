$(function () {
	startTitleAnimation();
});

async function startTitleAnimation () {
	var title = $('.hero h1')[0];
	var fullTitle = title.innerHTML;
	title.innerHTML = '';
	for (var i=0; i<fullTitle.length; i++) {
		title.innerHTML += fullTitle[i];
		await wait(150);
	}
	var subtitle = $('.hero .title h3');
	subtitle.css('opacity', 1);
	// works if display is none in css
	// subtitle.fadeIn('slow');
}

async function wait (ms, value) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}