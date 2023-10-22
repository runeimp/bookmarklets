/*
M↓ Page Link

Version: 1.3.0
Description: YouTube and Rust community aware
Updated: 2023-10-21
*/
javascript:(
	() => {
		let D=document, title=D.title;

		function parseDate(date) {
			// console.log(`parseDate() | > input: "${date}" | test: ${checkDateRE.test(date)}`);
			const checkDateRE = /^([Pp]remiere (?<count>\d+) (?<unit>\w+) (ago)|(?<month>\w+) (?<day>\d+), (?<year>\d+))$/; // |^\d{4}
			let result = '';

			if (checkDateRE.test(date)) {
				let {count, unit, month, day, year} = checkDateRE.exec(date).groups;
				let newDate = new Date(Date.now());
				let transDay = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
				let transMonth = new Date(newDate.getFullYear(), newDate.getMonth());
				let transYear = new Date(newDate.getFullYear(), 0, 1);

				if (year != null && month != null && day != null) {
					console.log(`parseDate() | Input Date Normal | ${date}`);
					newDate = new Date(date);
					result = newDate.toISOString().substr(0, 10);
				} else if (count != null && unit != null) {
					let days = 0;

					console.log(`parseDate() | Input Type Relative | ${date}`);
					unit = unit.toLowerCase();
					console.log(`parseDate() |    unit: ${unit}`);
					switch (unit) {
					case 'second':
					case 'seconds':
						if (newDate.getTime() < transYear.getTime()) {
							newDate.setFullYear(newDate.getFullYear() - 1);
						}
						// break;
					case 'minute':
					case 'minutes':
					case 'hour':
					case 'hours':
						// Our job is done
						result = newDate.toISOString().substr(0, 10)
						break;
					case 'day':
					case 'days':
					case 'week':
					case 'weeks':
						newDate.setHours(0);
						newDate.setMinutes(0);
						newDate.setSeconds(0);
						if (unit === 'week' || unit === 'weeks') {
							count = count * 7;
						}
						// console.log(`parseDate() | 0 | newDate.toISOString().substr(0, 10): ${newDate.toISOString().substr(0, 10)}`);
						days = newDate.getDate();
						// console.log(`parseDate() | 0 | days: ${days} | count: ${count}`);
						if (count < days) {
							days -= count;
							// console.log(`parseDate() | 1 | days: ${days} | count: ${count}`);
							newDate.setDate(days);
							// console.log(`parseDate() | 2 | days: ${newDate.getDate()} | count: ${count}`);
						} else {
							let mon = newDate.getMonth();
							if (mon === 0) {
								newDate.setYear(newDate.getFullYear() - 1);
								newDate.setMonth(11);
							} else {
								newDate.setMonth(mon - 1);
							}
							// console.log(`parseDate() |     mon: ${mon}`);
						}
						if (unit === 'week' || unit === 'weeks') {
							result = newDate.toISOString().substr(0, 7)
						} else {
							result = newDate.toISOString().substr(0, 10)
						}
						// console.log(`parseDate() | 3 | days: ${newDate.getDate()} | result: ${result}`);
						break;
					case 'month':
					case 'months':
						newDate.setDate(1)
						newDate.setHours(0);
						newDate.setMinutes(0);
						newDate.setSeconds(0);

						let mon = newDate.getMonth();
						console.log(`parseDate() |     mon: ${mon} | count: ${count}`);
						if (count < mon) {
							newDate.setMonth(mon - count);
						} else {
							newDate.setFullYear(newDate.getFullYear() - 1);
							mon = 12 + (mon - count);
							// console.log(`parseDate() |     mon: ${mon}`);
							newDate.setMonth(mon);
						}
						result = newDate.toISOString().substr(0, 7)
						console.log(`parseDate() | month | result: ${result}`);
						break;
					case 'year':
					case 'years':
						result = newDate.getFullYear() - count;
						break;
					default:
						console.error(`parseDate() | unknown unit: '${unit}'`)
					}
				}
				// console.log(`parseDate() |   count: ${count} | unit: ${unit} | year: ${year} | month: ${month} | day: ${day}`);
				// console.log(`parseDate() | newDate: ${newDate.toISOString().substr(0, 10)}`);
				// console.log(`parseDate() |  result: ${result}`);
			}
			// console.log(`parseDate() | result: ${result} | input: "${date}" | test: ${checkDateRE.test(date)}`);
			return result
		}

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
			let posted = D.querySelector('#description #tooltip').innerText.split('•')[1].trim();
			// console.log(`document.querySelector(#description #tooltip).innerText.split('•')[1].trim() | posted: ${posted}`);
			posted = parseDate(posted);
			title = D.title.replace('YouTube',`${channel} - ${posted} - ${duration} - YouTube`);
			break;
		};

		alert(`[${title.replaceAll('[', "\\[").replaceAll(']', "\\]").replaceAll('|', '&vert;')}](${D.URL})`);
	}
)();