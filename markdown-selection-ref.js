/*
M↓ Selection Ref

Version: 1.1.1
Description: YouTube Aware
Created: 2023-04-05
Updated: 2023-04-08
*/
javascript:(
	() => {
		let D=document, title=window.getSelection().toString()+' - ';

		switch(true) {
		case D.URL.indexOf('crates.io') !== -1:
			title += D.title.replace('crates.io: Rust Package Registry', 'Crates.io');
			break;
		case D.URL.indexOf('docs.rs') !== -1:
			title += D.title.replace('Rust', 'Docs.rs');
			break;
		case D.URL.indexOf('lib.rs') !== -1:
			title += D.title.replace(' // ', ' - ').replace('—', '-');
			break;
		case D.URL.indexOf('youtube.com/watch') !== -1:
			let channel = D.querySelector('div#owner #text > a').innerText;
			let duration = D.querySelector('#movie_player .ytp-time-duration').innerText;
			let posted = (new Date(D.querySelector('#description #tooltip').innerText.split('•')[1].trim())).toISOString().substr(0, 10)
			title += D.title.replace('YouTube',`${channel} - ${posted} - ${duration} - YouTube`);
			break;
		default:
			title += D.title;
			break;
		};

		alert(`[${title.replaceAll('[', "\\[").replaceAll(']', "\\]").replaceAll('|', '&vert;')}]: ${D.URL}`);
	}
)();