/* M↓ Page Ref - Version: 1.1.0 */
javascript:(function()%7Blet%20D%3Ddocument%2C%20E%3DencodeURIComponent%2C%20link%3D''%2C%20W%3Dwindow%3B%0A%09%09function%20padded(int)%20%7B%0A%09%09%09if%20(int%20%3D%3D%200)%20%7B%0A%09%09%09%09return%20'00'%3B%0A%09%09%09%7D%0A%09%09%09if%20(int%20%3C%2010)%20%7B%0A%09%09%09%09int%20%3D%20%600%24%7Bint%7D%60%3B%0A%09%09%09%7D%0A%09%09%09return%20int%0A%09%09%7D%0A%09%09if%20(D.URL.indexOf('youtube.com')%20!%3D%20-1)%20%7B%0A%0A%09%09%09let%20channel%20%3D%20D.querySelector('div%23owner%20%23text%20%3E%20a').innerText%3B%0A%09%09%09let%20duration%20%3D%20%22%22%3B%0A%09%09%09let%20posted%20%3D%20(new%20Date(D.querySelector('%23description%20%23tooltip').innerText.split('%E2%80%A2')%5B1%5D.trim())).toISOString().substr(0%2C%2010)%0A%09%09%09let%20durHours%20%3D%200%3B%0A%09%09%09let%20durMinutes%20%3D%200%3B%0A%09%09%09let%20durSeconds%20%3D%20ytplayer.config.args.length_seconds%3B%0A%0A%09%09%09%2F%2F%203600%20%3D%3D%20seconds%20in%20an%20hour%0A%09%09%09if%20(durSeconds%20%3E%3D%203600)%20%7B%0A%09%09%09%09durHours%20%3D%20Number.parseInt((durSeconds%20%2F%203600)%2C%2010)%3B%0A%09%09%09%09durSeconds%20-%3D%20durHours%20*%203600%3B%0A%09%09%09%7D%0A%0A%09%09%09if%20(durSeconds%20%3E%3D%2060)%20%7B%0A%09%09%09%09durMinutes%20%3D%20Number.parseInt((durSeconds%20%2F%2060)%2C%2010)%3B%0A%09%09%09%09durSeconds%20%3D%20durSeconds%20-%20(durMinutes%20*%2060)%3B%0A%09%09%09%7D%0A%0A%09%09%09if%20(durHours%20%3E%200)%20%7B%0A%09%09%09%09duration%20%2B%3D%20padded(durHours)%20%2B%20'%3A'%3B%0A%09%09%09%7D%0A%09%09%09duration%20%2B%3D%20padded(durMinutes)%20%2B%20'%3A'%3B%0A%09%09%09duration%20%2B%3D%20padded(durSeconds)%3B%0A%0A%09%09%09title%20%3D%20D.title.replace('YouTube'%2C%60%24%7Bchannel%7D%20-%20%24%7Bposted%7D%20-%20%24%7Bduration%7D%20-%20YouTube%60)%3B%0A%09%09%7D%20else%20%7B%0A%09%09%09title%3DD.title%3B%0A%09%09%7D%0A%09%09alert(%60%5B%24%7Btitle.replaceAll('%5B'%2C%20'%5C%5C%5B').replaceAll('%5D'%2C%20'%5C%5C%5D').replaceAll('%7C'%2C%20'%26vert%3B')%7D%5D%3A%20%24%7BD.URL%7D%60)%3B%7D)()%3B