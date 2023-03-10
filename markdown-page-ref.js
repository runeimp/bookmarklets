/*
M↓ Page Ref

Version: 1.1.0
Description: YouTube Aware
Updated: 2023-02-21
*/
javascript:(
	() => {
		let D=document, E=encodeURIComponent, link='', W=window;
		function padded(int) {
			if (int == 0) {
				return '00';
			}
			if (int < 10) {
				int = `0${int}`;
			}
			return int
		}
		if (D.URL.indexOf('youtube.com') != -1) {

			let channel = D.querySelector('div#owner #text > a').innerText;
			let duration = "";
			let posted = (new Date(D.querySelector('#description #tooltip').innerText.split('•')[1].trim())).toISOString().substr(0, 10)
			let durHours = 0;
			let durMinutes = 0;
			let durSeconds = ytplayer.config.args.length_seconds;

			// 3600 == seconds in an hour
			if (durSeconds >= 3600) {
				durHours = Number.parseInt((durSeconds / 3600), 10);
				durSeconds -= durHours * 3600;
			}

			if (durSeconds >= 60) {
				durMinutes = Number.parseInt((durSeconds / 60), 10);
				durSeconds = durSeconds - (durMinutes * 60);
			}

			if (durHours > 0) {
				duration += padded(durHours) + ':';
			}
			duration += padded(durMinutes) + ':';
			duration += padded(durSeconds);

			title = D.title.replace('YouTube',`${channel} - ${posted} - ${duration} - YouTube`);
		} else {
			title = D.title;
		}
		alert(`[${title.replaceAll('[', '\\[').replaceAll(']', '\\]').replaceAll('|', '&vert;')}]: ${D.URL}`);
	}
)();
