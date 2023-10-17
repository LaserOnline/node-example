
## Node Package Manager


คำสั่งนี้ใช้สร้างไฟล์ package.json สำหรับโปรเจ็กต์ Node.js
```bash
  npm init
```
    
ใช้ติดตั้งแพ็คเกจ Node.js โดยระบุชื่อแพ็คเกจใน <package-name>. npm จะดาวน์โหลดแพ็คเกจนี้จากที่เก็บข้อมูล (repository) ของ npm
```bash
  npm install <package-name>
```

ใช้ติดตั้งแพ็คเกจ Node.js โดยระบุชื่อแพ็คเกจใน <package-name> แบบ global. นี่คือวิธีการติดตั้งแพ็คเกจเพื่อใช้งานระดับระบบ (system-wide) แทนที่จะติดตั้งในโปรเจ็กต์แต่ละตัว
```bash
  npm install -g <package-name>
```

ใช้ติดตั้งแพ็คเกจ Node.js และเพิ่มรายการของแพ็คเกจนี้ใน dependencies ของไฟล์ package.json ของโปรเจ็กต์
```bash
  npm install --save <package-name>
```

ใช้ติดตั้งแพ็คเกจ Node.js และเพิ่มรายการของแพ็คเกจนี้ใน devDependencies ของไฟล์ package.json ของโปรเจ็กต์. แพ็คเกจที่ติดตั้งด้วย --save-dev จะถูกใช้ในการพัฒนาและทดสอบเท่านั้น และไม่ถูกนำไปใช้ในการทำงานจริงของโปรเจ็กต์
```bash
  npm install --save-dev <package-name>
```

ใช้ถอนการติดตั้งแพ็คเกจ Node.js โดยระบุชื่อแพ็คเกจใน <package-name>
```bash
  npm uninstall <package-name>
```

ใช้อัพเดทแพ็คเกจ Node.js โดยระบุชื่อแพ็คเกจใน <package-name> ไปยังเวอร์ชันล่าสุด
```bash
  npm update <package-name>
```

แสดงรายการของแพ็คเกจที่ถูกติดตั้งในโปรเจ็กต์ของคุณพร้อมกับรายละเอียดเวอร์ชันของแต่ละแพ็คเกจ
```bash
  npm list
```

ใช้เริ่มต้นการรันแอพพลิเคชัน Node.js โดยใช้สคริปต์ "start" ที่กำหนดใน package.json
```bash
  npm start
```

ใช้รันการทดสอบ (unit tests) ที่กำหนดใน package.json
```bash
  npm test
```

ใช้รันสคริปต์ที่กำหนดใน scripts ของไฟล์ package.json โดยระบุชื่อสคริปต์ใน <script-name>
```bash
  npm run <script-name>
```
