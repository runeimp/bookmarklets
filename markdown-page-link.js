/*
M↓ Page Link

Version: 1.2.0
Description: YouTube and Rust Aware
Updated: 2023-04-05
*/
javascript:(
	() => {
		let D=document, H=location.hostname, title=D.title;

		switch(true) {
		case H.indexOf('crates.io') !== -1:
			title = D.title.replace('crates.io: Rust Package Registry', 'Crates.io');
			break;
		case H.indexOf('docs.rs') !== -1:
			title = D.title.replace('Rust', 'Docs.rs');
			break;
		case H.indexOf('lib.rs') !== -1:
			title = D.title.replace(' // ', ' - ').replace('—', '-');
			break;
		case  H.indexOf('youtube.com') !== -1:
			let channel = D.querySelector('div#owner #text > a').innerText;
			let duration = D.querySelector('#movie_player .ytp-time-duration').innerText;
			let posted = (new Date(D.querySelector('#description #tooltip').innerText.split('•')[1].trim())).toISOString().substr(0, 10)
			title = D.title.replace('YouTube',`${channel} - ${posted} - ${duration} - YouTube`);
			break;
		};

		alert(`[${title.replaceAll('[', "\\[").replaceAll(']', "\\]").replaceAll('|', '&vert;')}](${D.URL})`);
	}
)();