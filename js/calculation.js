//declare global variables
    var w = document.getElementById('weight');
    var a = window.document.getElementById('age');
    var h = window.document.getElementById('height');
    var c = window.document.getElementById('creatinine');
    var m = document.forms["vanc"]["male"];
    var f = document.forms["vanc"]["female"];
    
    
    console.log('connected');
    
    // this function displays the form when the checkbox is true
    function displayForm() {
        var checkbox = document.getElementById('showform');
        var vancform = document.getElementById('vancform');
        
        if (checkbox.checked) {
            vancform.style.display = 'block';
        } else {
            vancform.style.display = 'none';
        }
    }

    //this function displays the height box if abnormal weight is slected
    function displayHeight() {
        var abnormalWeight = document.getElementById('abnormalWeight');
        var heightbox = document.getElementById('heightbox')
        var normalweight = document.getElementById('normalweight')
        
        if (abnormalWeight.checked) {
            heightbox.style.display = 'block';
        } else if (normalweight.checked) {
            heightbox.style.display = 'none';
        }
    }

        
        // Initial dose calculation
        var vDose;
        
        function dose() {
            //get the input
            var weight = w.value;
            
            if (isNaN(weight)) {
                vDose = "<em>Weight</em>must be a number!";
            } else if (weight < 40) {
                vDose = "750"+"mg";
            } else if (weight >=40 && weight<= 59) {
                vDose = "1000"+"mg";
            } else if (weight >=60 && weight<= 90) {
                vDose = "1500"+"mg";
            } else if (weight >90) {
                vDose = "2000"+"mg";
            }
            document.getElementById("stat_dose").innerHTML = "Prescribe STAT dose of " + "<b>" + vDose + "<b>";
        }        
        
        
        // Weight must be within three months
        var dVerify;
        
        function verifyDate (){
        var datenear = document.getElementById("date");
        var timestamp = new Date().getTime() - (90 * 24 * 60 * 60 * 1000);
        
            if (timestamp < datenear) {
             dVerify = "Date must be within 3 months";
            } else {
             dVerify = "";
            }
            document.getElementById("datemessage").innerHTML = dVerify;
        }

        
        //Calculate BMI
        var bmi;
        function calculateBmi() {
            var weight = w.value;
            var height = h.value;
            var normalweight = document.getElementById('normalweight')
            
            if (isNaN(weight)) {
                bmi = "<em>Weight</em>must be a number!";
            }else if (isNaN(height)) {
                bmi = "<em>Height</em>must be a number!";
            }else if (normalweight.checked) {
                bmi = "The patient's BMI is normal";
            }else {
                bmi = weight/(height/100*height/100);
        }
        document.getElementById("bmi_calc").innerHTML = "The patient's BMI is  " + "<b>" + bmi.toFixed(2) + "<b>";
        }
        
        function runCalcs() {
            dose();
            calculateBmi();
        }
        
        // Crcl without gender or creatinine adjustment
        var CrCl0;
        
        function creatClear() {
            
            //get age, weight, creatinie
            var weight = w.value;
            var age = a.value;
            var creatinine = c.value;
            
            if (age < 18) {
                CrCl0 = "<em>Age</em> cannot equal less than 18!";
            } else if (isNaN(age)) {
                CrCl0 = "<em>Age</em> must be a number!";
            } else if (isNaN(weight)) {
                CrCl0 = "<em>Weight</em> must be a number!";
            } else if (isNaN(creatinine)) {
                CrCl0 = "<em>Creatinine</em> must be a number!";
            } else { 
                CrCl0 = ((140-age)*weight);
            }
        }
        
        // CrCl with gender adjustment
        
        function kidneygender(){
        var resultG;
        var male = m.checked;
            if (male){
                resultG = CrCl0 *1.23;
            } else{
                resultG = CrCl0 *1.04;
            }
        document.getElementById("result_g").innerHTML = "The CrCl =  " + "<b>" + resultG + "<b>";
        }
        
        