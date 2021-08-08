$(function () {
	startTitleAnimation();
	$('#page1-down-btn').click('#page2', goToPage);
	$('#nav-home-btn').click('#page1', goToPage);
	$('#nav-exp-btn').click('#page2', goToPage);
	$('#nav-project-btn').click('#page3', goToPage);
	$('#nav-techskill-btn').click('#page4', goToPage);
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
}

async function wait (ms, value) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}

function goToPage(pageSelector) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(pageSelector.handleObj.data).offset().top,
	}, 1000);
}