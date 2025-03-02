function generateBill() {
    let houseName = document.getElementById("houseName").value;
    let prevMeter = parseInt(document.getElementById("prevMeter").value);
    let currentMeter = parseInt(document.getElementById("currentMeter").value);

    if (isNaN(prevMeter) || isNaN(currentMeter) || houseName.trim() === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    let unitsUsed = currentMeter - prevMeter;
    let unitPrice = 6; // ค่าหน่วยละ 6 บาท
    let totalAmount = unitsUsed * unitPrice + 60; // ค่าน้ำ + ค่าส่วนกลาง 60 บาท

    let billContent = `
        <h3>บิลค่าน้ำ</h3>
        <p>ชื่อบ้าน: ${houseName}</p>
        <p>เลขมิเตอร์ครั้งก่อน: ${prevMeter}</p>
        <p>เลขมิเตอร์ครั้งหลัง: ${currentMeter}</p>
        <p>ใช้น้ำ: ${unitsUsed} หน่วย</p>
        <p>หน่วยละ 6 บาท</p>
        <p>หักค่าส่วนกลาง 60 บาท</p>
        <p><strong>รวมเป็นเงิน: ${totalAmount} บาท</strong></p>
    `;

    document.getElementById("billOutput").innerHTML = billContent;
}

function printBill() {
    let billContent = document.getElementById("billOutput").innerHTML;
    let printWindow = window.open("", "", "width=600,height=400");
    printWindow.document.write(`<html><head><title>พิมพ์บิล</title></head><body>${billContent}</body></html>`);
    printWindow.document.close();
    printWindow.print();
}
