const fs = require('fs');

const fileName = 'text.txt';

const fileContent = 'สวัสดี, นี่คือเนื้อหาของไฟล์ text.txt';

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('มีข้อผิดพลาดในการสร้างไฟล์:', err);
  } else {
    console.log('ไฟล์ถูกสร้างเรียบร้อยและมีข้อมูลถูกเขียนลงไป');
  }
});


const os = require('os');

// ใช้ os.hostname() เพื่อดึงชื่อคอมพิวเตอร์
const computerName = os.hostname();

console.log('ชื่อคอมพิวเตอร์:', computerName);
