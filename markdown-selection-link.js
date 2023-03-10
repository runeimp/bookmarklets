/*
M↓ Selection Link

Version: 1
Description: string concatenation within a JS template literal with-in an alert
Circa: 2005
*/

javascript:alert(`[${
	window.getSelection().toString() +
		' — ' +
		document.title
		.replace('[', '\\[')
		.replace(']', '\\]')
}]: ${location.href}`);