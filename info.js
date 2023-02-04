const http = require('http');
const url = require('url');
const nodemailer = require('nodemailer');
// const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 try {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('informasi penting\n');
  res.write(req.url + '\n');
  res.write('akhir\n');
  res.write('\n\n');
  var q = url.parse(req.url, true).query;
  var txt = `${q.year}`;
  res.write(txt);
  res.write('\n\n');

  // fs.readFile('anton.html', (err, data) => {
  //  console.log(`Err ${err}`);
  //   res.write(data);
  // });


  var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  q = url.parse(adr, true);
  res.write(q.host + '\n\n'); //returns 'localhost:8080'
  res.write(q.pathname + '\n\n'); //returns '/default.htm'
  res.write(q.search + '\n\n'); //returns '?year=2017&month=february'

  // var transporter = nodemailer.createTransport({
  //  service: 'gmail',
  //  auth: {
  //   user: 'heni.kurniyanto@kuncie.com',
  //   pass: 'xxxx'
  //  }
  // });
  //
  // var mailOptions = {
  //  from: 'heni.kurniyanto@kuncie.com',
  //  to: 'atnlie@gmail.com',
  //  subject: 'Sending Email using Node.js',
  //  text: 'That was easy!'
  // };
  //
  // transporter.sendMail(mailOptions, function(error, info){
  //  if (error) {
  //   console.log(error);
  //  } else {
  //   console.log('Email sent: ' + info.response);
  //  }
  // });

  // res.write('\n\n');
  res.end('DONE\n------\n');
 } catch (err) {
  console.log(`Error ${err}`);
 }
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});