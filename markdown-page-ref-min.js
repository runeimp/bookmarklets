/* M↓ Page Ref - Version: 1.2.0 */
javascript:(function()%7Bjavascript%3A(%0A%09()%20%3D%3E%20%7B%0A%09%09let%20D%3Ddocument%2C%20H%3Dlocation.hostname%2C%20title%3DD.title%3B%0A%0A%09%09switch(true)%20%7B%0A%09%09case%20H.indexOf('crates.io')%20!%3D%3D%20-1%3A%0A%09%09%09title%20%3D%20D.title.replace('crates.io%3A%20Rust%20Package%20Registry'%2C%20'Crates.io')%3B%0A%09%09%09break%3B%0A%09%09case%20H.indexOf('docs.rs')%20!%3D%3D%20-1%3A%0A%09%09%09title%20%3D%20D.title.replace('Rust'%2C%20'Docs.rs')%3B%0A%09%09%09break%3B%0A%09%09case%20H.indexOf('lib.rs')%20!%3D%3D%20-1%3A%0A%09%09%09title%20%3D%20D.title.replace('%20%2F%2F%20'%2C%20'%20-%20').replace('%E2%80%94'%2C%20'-')%3B%0A%09%09%09break%3B%0A%09%09case%20%20H.indexOf('youtube.com')%20!%3D%3D%20-1%3A%0A%09%09%09let%20channel%20%3D%20D.querySelector('div%23owner%20%23text%20%3E%20a').innerText%3B%0A%09%09%09let%20duration%20%3D%20D.querySelector('%23movie_player%20.ytp-time-duration').innerText%3B%0A%09%09%09let%20posted%20%3D%20(new%20Date(D.querySelector('%23description%20%23tooltip').innerText.split('%E2%80%A2')%5B1%5D.trim())).toISOString().substr(0%2C%2010)%0A%09%09%09title%20%3D%20D.title.replace('YouTube'%2C%60%24%7Bchannel%7D%20-%20%24%7Bposted%7D%20-%20%24%7Bduration%7D%20-%20YouTube%60)%3B%0A%09%09%09break%3B%0A%09%09%7D%3B%0A%0A%09%09alert(%60%5B%24%7Btitle.replaceAll('%5B'%2C%20%22%5C%5C%5B%22).replaceAll('%5D'%2C%20%22%5C%5C%5D%22).replaceAll('%7C'%2C%20'%26vert%3B')%7D%5D%3A%20%24%7BD.URL%7D%60)%3B%0A%09%7D%0A)()%3B%7D)()%3B