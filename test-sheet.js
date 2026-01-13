const https = require('https');

const data = JSON.stringify({
  name: "Test User",
  email: "test@example.com",
  location: "Test City",
  mobile: "1234567890",
  bottleSize: "500ml",
  quantity: "100",
  consent: true
});

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
    'Content-Length': data.length
  }
};

const url = "https://script.google.com/macros/s/AKfycbwGgdiDTF5vCOl9328Ev2XN35swcrxIwukD3lbEjllSeAkY-C5MyX0fJujrQian-_A5/exec";

const req = https.request(url, options, (res) => {
  console.log(`StatusCode: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);

  let responseBody = '';

  res.on('data', (d) => {
    responseBody += d;
  });

  res.on('end', () => {
    console.log('Response:', responseBody);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data);
req.end();
