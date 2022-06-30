const express = require("express");
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
  host: "localhost",
  user: "root", //mysql의 id
  password: "1234", //mysql의 password
  database: "portfolio", //사용할 데이터베이스sss
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("테스트~");
});

app.post("/idplz", (req, res) => {
  const test = req.body.test;
  // console.log(req.body);
  connection.query(
    "INSERT INTO portfolio_table (Project_title) values (?)",
    [test],
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        // console.log(err);
      } else {
        console.log("성공");
        // console.log(rows);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
