function generateBill() {
    let houseName = document.getElementById("houseName").value;
    let prevMeter = parseInt(document.getElementById("prevMeter").value);
    let currentMeter = parseInt(document.getElementById("currentMeter").value);
    
    if (isNaN(prevMeter) || isNaN(currentMeter) || houseName.trim() === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    let unitsUsed = currentMeter - prevMeter;
    let unitPrice = 6; // ค่าน้ำหน่วยละ 6 บาท
    let totalAmount = unitsUsed * unitPrice + 60; // ค่าน้ำ + ค่าบริการกลาง

    let billContent = `
        <h3>บิลค่าน้ำ</h3>
        <p>ชื่อบ้าน: ${houseName}</p>
        <p>เลขมิเตอร์ก่อน: ${prevMeter}</p>
        <p>เลขมิเตอร์หลัง: ${currentMeter}</p>
        <p>ใช้ไป: ${unitsUsed} หน่วย</p>
        <p>รวมเป็นเงิน: ${totalAmount} บาท</p>
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
