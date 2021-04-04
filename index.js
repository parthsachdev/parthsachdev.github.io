$(function () {
	startTitleAnimation();
});

async function startTitleAnimation () {
	var title = $('.hero h1')[0];
	var fullTitle = title.innerHTML;
	title.innerHTML = '';
	for (var i=0; i<fullTitle.length; i++) {
		title.innerHTML += fullTitle[i];
		await wait(200);
	}
}

async function wait (ms, value) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}