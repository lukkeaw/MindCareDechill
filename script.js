document.getElementById("consultation-form").addEventListener("submit", function(e) {
    e.preventDefault();  // หยุดการรีเฟรชหน้า
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // ตรวจสอบข้อมูลที่กรอก
    if(name && email && message) {
        // แสดงป๊อปอัพ
        document.getElementById("popup").style.display = "flex";
    } else {
        alert("กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน");
    }
});

// ปิดป๊อปอัพ
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
