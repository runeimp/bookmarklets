/*
M↓ Page Link

Version: 1.2.1
Description: YouTube and Rust Aware
Updated: 2023-04-09
*/
javascript:(
	() => {
		let D=document, title=D.title;

		switch(true) {
		case D.URL.indexOf('crates.io') !== -1:
			title = D.title.replace('crates.io: Rust Package Registry', 'Crates.io');
			break;
		case D.URL.indexOf('docs.rs') !== -1:
			title = D.title.replace('Rust', 'Docs.rs');
			break;
		case D.URL.indexOf('lib.rs') !== -1:
			title = D.title.replace(' // ', ' - ').replace('—', '-');
			break;
		case D.URL.indexOf('youtube.com/watch') !== -1:
			let channel = D.querySelector('div#owner #text > a').innerText;
			let duration = D.querySelector('#movie_player .ytp-time-duration').innerText;
			let posted = (new Date(D.querySelector('#description #tooltip').innerText.split('•')[1].trim())).toISOString().substr(0, 10)
			title = D.title.replace('YouTube',`${channel} - ${posted} - ${duration} - YouTube`);
			break;
		};

		alert(`[${title.replaceAll('[', "\\[").replaceAll(']', "\\]").replaceAll('|', '&vert;')}](${D.URL})`);
	}
)();