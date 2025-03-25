const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'mydb'
});

db.connect(err => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공!');
});

// 테스트용 API
app.get('/api/hello', (req, res) => {
  res.json({ message: '안녕 from 백엔드!' });
});

app.listen(port, () => {
  console.log(`서버 실행 중 http://localhost:${port}`);
});