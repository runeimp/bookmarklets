/*
M↓ Page Ref

Version: 1.1.1
Description: YouTube Aware
Updated: 2023-03-09
*/
javascript:(
	() => {
		let D=document, E=encodeURIComponent, link='', W=window;
		title = D.title;
		if (D.URL.indexOf('youtube.com') != -1) {
			let channel = D.querySelector('div#owner #text > a').innerText;
			let duration = D.querySelector('#movie_player .ytp-time-duration').innerText;
			let posted = (new Date(D.querySelector('#description #tooltip').innerText.split('•')[1].trim())).toISOString().substr(0, 10)
			title = D.title.replace('YouTube',`${channel} - ${posted} - ${duration} - YouTube`);
		}
		alert(`[${title.replaceAll('[', "\\[").replaceAll(']', "\\]").replaceAll('|', '&vert;')}]: ${D.URL}`);
	}
)();