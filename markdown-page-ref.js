/*
M↓ Page Ref

Version: 1
Description: JS Template Literal with-in an alert
Circa: 2005
*/

javascript: alert(
	`[${document.title.replace('[', '\\[').replace(']', '\\]')}]: ${location.href}`
);
