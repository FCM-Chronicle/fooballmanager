const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000; // Render 기본 포트

// 정적 파일 제공
app.use(express.static(__dirname));

// 헬스체크 엔드포인트 (Render용)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 모든 경로에 대해 index.html 반환
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`📱 Render에서 배포 완료!`);
});
