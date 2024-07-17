const d1 = new Date('2024-01-01');
const d2 = new Date();

const A = (d1, d2) => {
    // คำนวณความแตกต่างระหว่างวันที่ในหน่วยมิลลิวินาที
    const diffTime = Math.abs(d2 - d1);
    // แปลงจากมิลลิวินาทีเป็นจำนวนวัน
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

console.log(`จำนวนวันระหว่างวันที่ ${d1.toISOString().split('T')[0]} ถึง ${d2.toISOString().split('T')[0]} คือ ${A(d1, d2)} วัน`);

const B = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // ตรวจสอบเดือนและวัน ถ้ายังไม่ถึงวันเกิดในปีนี้ให้ลบอายุลง 1 ปี
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

console.log(`อายุ ${B(d1)} ปี`);

function taskOne() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log("this is task 1");
            resolve();
        }, 1500);
    });
}

function taskTwo() {
    console.log("this is task 2");
}

function taskThree() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log("this is task 3");
            resolve();
        }, 2000);
    });
}

// เรียกใช้ฟังก์ชันตามลำดับที่ต้องการ
taskOne().then(() => {
    taskTwo();
    return taskThree();
}).then(() => {
    console.log("All tasks completed.");
});