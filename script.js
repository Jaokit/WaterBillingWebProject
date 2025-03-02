function generateBill() {
    let houseNumber = document.getElementById("houseNumber").value;
    let prevMeter = parseInt(document.getElementById("prevMeter").value);
    let currentMeter = parseInt(document.getElementById("currentMeter").value);
    let otherFeeInput = document.getElementById("otherFee").value;
    
    if (isNaN(prevMeter) || isNaN(currentMeter) || houseNumber.trim() === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    // ตรวจสอบค่าบริการอื่นๆ
    let otherFee = parseFloat(otherFeeInput);
    if (otherFeeInput.trim() === "") {
        let confirmNoFee = confirm("ยืนยันที่จะไม่ใส่ค่าบริการอื่นๆ ใช่หรือไม่?");
        if (!confirmNoFee) {
            return; // ถ้ายกเลิก ให้หยุดทำงาน
        }
        otherFee = 0; // ตั้งค่าเป็น 0 ถ้าไม่ได้ใส่
    } else if (isNaN(otherFee)) {
        alert("กรุณากรอกค่าบริการอื่นๆ ให้ถูกต้อง!");
        return;
    }

    let unitsUsed = currentMeter - prevMeter;
    let unitPrice = 6; // ค่าน้ำหน่วยละ 6 บาท
    let totalAmount = unitsUsed * unitPrice + otherFee;

    let billContent = `
        <h3>บิลค่าน้ำ</h3>
        <p>บ้านเลขที่: ${houseNumber}</p>
        <p>เลขมิเตอร์ครั้งก่อน: ${prevMeter}</p>
        <p>เลขมิเตอร์ครั้งนี้: ${currentMeter}</p>
        <p>ใช้น้ำ: ${unitsUsed} หน่วย</p>
        <p>หน่วยละ 6 บาท</p>
        <p>ค่าบริการอื่นๆ: ${otherFee} บาท</p>
        <p><strong>รวมเป็นเงิน: ${totalAmount} บาท</strong></p>
    `;

    document.getElementById("billOutput").innerHTML = billContent;
}

function printBill() {
    let billContent = document.getElementById("billOutput").innerHTML;
    let printWindow = window.open("", "", "width=600,height=400");
    printWindow.document.write(`<html><head><title>พิมพ์บิลค่าน้ำ</title></head><body>${billContent}</body></html>`);
    printWindow.document.close();
    printWindow.print();
}
