let payButt = document.getElementById("calculate")

function payout() {
    let eNum = parseInt(document.getElementById("emp-number").value);
    let name = document.getElementById("emp-name").value;
    let depo = document.getElementById("department").value;
    let hours = parseInt(document.getElementById("hours").value);
    let type = document.getElementById("type").value;

    var hourlyPay;
    var allowance;

    var gross;//will get set depending
    
    var typeFull;

    //checking worker type
    if (type == "f" || type == "F") {  //faculty
        var code = prompt("Enter Qualification Code")
        if (code == "M" || code == "m") {  //if they have a masters degree
            hourlyPay = 175;
            allowance = 1500;
            gross = (hourlyPay * hours) + allowance; 
            typeFull = "Faculty: Masters"
            console.log(gross);
        } else if (code == "B" || code == "b") { // if they have ba bachlors degree
            hourlyPay = 100;
            allowance = 600;
            gross = (hourlyPay * hours) + allowance;
            typeFull = "Faculty: Batchlers"
            console.log(gross);
            
        } else {
            alert("invalid Code")
        }
        
    }else if (type == "r" || type == "R") { //regular
        var sally = prompt("Enter Salary")
        sally = parseInt(sally); //fixed sallary

        if(hours > 160) {
            let overtime = hours - 160;//calculates overtime
            hourlyPay = (sally/160) *2;//prorated double salary
            gross = (hourlyPay * overtime) + sally; // adds overtime worked with sallery
            console.log(gross,);

        } else if (hours < 160) { //prorates sallary 
            let hourlyPay = sally/160;
            gross = hourlyPay * hours;
            console.log(gross);
        }
        else{
            gross = sally;
            console.log(gross);
        }
        typeFull = "Regular"
        
    } else {
        alert("field missing: EMPLOYE TYPE")
    }

    //DEDUCTIONS
    //handeling the 2500 income free allowance
    var tax;
    if (gross <=2500){
        tax = 0;
    } else{
        tax = gross *0.25;
    }
    var health;
    if (gross > 3000) {
        health = 33.00;
    } else if (gross < 3000) {
        health = 19.20;
    }

    let deduction = tax + health;
    console.log(deduction);

    let netPay = gross - deduction;
    console.log(netPay);

    document.getElementById("slip").innerHTML =
        `<ul>
            <li>Employe Number: ${eNum}</li>
            <li>Name: ${name}</li>
            <li>Department: ${depo}</li>
            <li>Worker: ${typeFull}</li>
            <li>Gross Salary: $${gross.toFixed(2)}</li>
            <li>Deductions: $${deduction.toFixed(2)}</li>
            <li>Net Pay: $${netPay.toFixed(2)}</li>
        </ul>`
}

payButt.addEventListener("click", payout)