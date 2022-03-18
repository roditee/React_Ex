const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function() {
    console.log('listening on 8080');
});

app.use(express.static(path.join(__dirname, 'pjt-test/build')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/pjt-test/build/index.html'));
});


// 라우터 사용 시 : url에 직접 입력해도 되도록
app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '/pjt-test/build/index.html'));
});
