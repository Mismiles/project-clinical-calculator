//declare global variables
    var w = document.getElementById('weight');
    var a = window.document.getElementById('age');
    var h = window.document.getElementById('height');
    var c = window.document.getElementById('creatinine');
    var m = document.getElementById("male");
    var f = document.getElementById("female");
    
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
        var bmiText = document.getElementById('bmi_calc')
        
        if (abnormalWeight.checked) {
            heightbox.style.display = 'block';
            bmiText.style.display = 'block';
        } else if (normalweight.checked) {
            heightbox.style.display = 'none';
            bmiText.style.display = 'none';
        }
    }
    
    //indication statement
    function displayIndication() {
        var ind = document.getElementById('ind').value;
        return document.getElementById('indication').innerHTML = "The indication for treatment is " + "<b>" + ind + "<b>";
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
        
        
                // If overweight, calculate IBW
                var IBW;
        function idealBodyWeight () {
            
            var formula = 0.91 * (h.value - 152.4)
            if (bmi > 25 && m.checked) {
                IBW = 50 + formula;
            } 
            if (bmi > 25 && f.checked) {
                 IBW = 45 + formula;
            }
            document.getElementById("ibw_text").innerHTML = "The patient's Ideal body weight is  " + "<b>" + IBW.toFixed(2) + "kg<b>";
        }
        
        // Crcl without gender or creatinine adjustment
        var CrCl0;
        function creatClear() {
            var creatinine = c.value;
            //get age, weight, creatinie
            var weight = w.value;
            var age = a.value;
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
        
        //CrCl with gender adjustment
        var genderCalc;
        function kidneygender(){
        
        var male = m.checked;
        var female = f.checked;
            if (male){
                genderCalc = CrCl0 *1.23;
            } else{
                genderCalc = CrCl0 *1.04;
            }
            document.getElementById("result_g").innerHTML = "The CrCl =  " + "<b>" + (genderCalc/c.value).toFixed(2) + "</b>";
        }
        

        function runCalcs() {
            dose();
            calculateBmi();
            displayIndication();
            creatClear();
            kidneygender();
            idealBodyWeight();
        }