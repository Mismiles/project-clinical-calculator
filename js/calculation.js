//declare global variables
    var w = document.getElementById('weight');
    var a = window.document.getElementById('age');
    var h = window.document.getElementById('height');
    var c = window.document.getElementById('creatinine');
    var m = document.getElementById("male");
    var f = document.getElementById("female");
    var normalweight = document.getElementById('normalweight');
    var abnormalWeight = document.getElementById('abnormalWeight');
    
    console.log('connected');
    
    // this function displays the form when the checkbox is true
    var checkbox = document.getElementById('showform');
    function displayForm() {
        var vancform = document.getElementById('vancform');
        
        if (checkbox.checked) {
            vancform.style.display = 'block';
        } else {
            vancform.style.display = 'none';
        }
    }
    
    //this function hides the parameters to make more space for the form if slected
    function hideParameters() {
        var parameters = document.getElementById('parameters');
        
         if (checkbox.checked) {
            parameters.style.display = 'none';
        } else {
            parameters.style.display = 'block';
        }
    }

    //this function displays the height box if abnormal weight is slected
    function displayHeight() {
        var heightbox = document.getElementById('heightbox')
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
            document.getElementById("stat_dose").innerHTML = "Prescribe STAT dose of " + "<b>" + vDose + "<b>" ;
        }        
        
    
        //Calculate BMI
        var bmi;
        function calculateBmi() {
            var weight = w.value;
            var height = h.value;
            
            if (isNaN(weight)) {
                bmi = "<em>Weight</em>must be a number!";
            }else if (isNaN(height)) {
                bmi = "<em>Height</em>must be a number!";
            }else if (normalweight.checked) {
                bmi = "normal";
            }else {
                bmi = (weight/(height/100*height/100)).toFixed(2);
        }
            document.getElementById("bmi_calc").innerHTML = "The patient's BMI is  " + "<b>" + bmi +  "<b>";
        }
        
        
    //     function toggleIBW() {
    //     var ibwtext = document.getElementById('ibw_text');
        
    //      if (normalweight.checked) {
            
    //     } else if (bmi >25) {
    //         ibwtext.style.display = 'block';
    //     }
    // }
        
        // If overweight, calculate IBW
                var IBW;
        function idealBodyWeight () {
            var ibwText = document.getElementById("ibw_text")
            var formula = 0.91 * (h.value - 152.4)
            
            if (normalweight.checked) {
                 ibwText.style.display = 'none';
            }else if (bmi > 25 && m.checked) {
                IBW = (50 + formula).toFixed(2);
                ibwText.style.display = 'block';
            } 
            else if (bmi > 25 && f.checked) {
                 IBW = (45 + formula).toFixed(2);
                 ibwText.style.display = 'block';
            }
            else if (bmi < 25) {
                ibwText.style.display = 'none';
            }
                ibwText.innerHTML = "The patient's Ideal body weight is  " + "<b>" + IBW + "kg" + "</b>";
        }
        
        
        
        
        // Crcl without gender or creatinine adjustment
        // var CrCl0;
        // var weight = w.value;
        // var age = a.value;
        // function creatClear() {
        //     var creatinine = c.value;
        //     //get age, weight, creatinie
            
        //     if (age < 18) {
        //         CrCl0 = "<em>Age</em> cannot equal less than 18!";
        //     } else if (isNaN(age)) {
        //         CrCl0 = "<em>Age</em> must be a number!";
        //     } else if (isNaN(weight)) {
        //         CrCl0 = "<em>Weight</em> must be a number!";
        //     } else if (isNaN(creatinine)) {
        //         CrCl0 = "<em>Creatinine</em> must be a number!";
        //     } else { 
        //         CrCl0 = ((140-age)*weight);
        //     }
        // }
        
        // //CrCl with gender adjustment
        // var genderCalc;
        // function kidneygender(){
        
        // var male = m.checked;
        // var female = f.checked;
        //     if (male){
        //         genderCalc = CrCl0 *1.23;
        //     } else{
        //         genderCalc = CrCl0 *1.04;
        //     }
        //     document.getElementById("result_g").innerHTML = "The CrCl =  " + "<b>" + (genderCalc/c.value).toFixed(2) + "</b>";
        // }
        
        var vancRenal;
        function vancCrcl() {
        var male = m.checked;
        var female = f.checked;
        var creatinine = c.value;
        var weight = w.value;
        var age = a.value;
        
            if (bmi >25 && male){
                vancRenal = ((140-age)* IBW * 1.23)/creatinine;
            }else if (bmi >25 && female){
                vancRenal = ((140-age)* IBW * 1.04)/creatinine;
            }else if  (bmi <18.5 && male){
                vancRenal = (((140-age)* weight * 1.23)/creatinine)*0.69;
            }else if (bmi <18.5 && female){
                vancRenal = (((140-age)* weight * 1.04)/creatinine)*0.69;
            }else if (male && normalweight.checked){
                vancRenal = ((140-age)* weight * 1.23)/creatinine;
            }else if (female && normalweight.checked){
                vancRenal = ((140-age)* weight * 1.04/creatinine);
            }else if (male && abnormalWeight.checked && bmi <25 && bmi >18.5){
                vancRenal = ((140-age)* weight * 1.23)/creatinine;
            }else if (female && abnormalWeight.checked && bmi <25 && bmi >18.5){
                vancRenal = ((140-age)* weight * 1.04/creatinine);
            }
            document.getElementById("result_g").innerHTML = "The CrCl =  " + "<b>" + vancRenal.toFixed(2) + "ml" +"/min" + "</b>";
        }
        
        
           var mDose;
    function maintDose() {
            //get the input
         
            
             if (isNaN(vancRenal)) {
                mDose = "fill out form properly";
            } else if (vancRenal> 110.01) {
                mDose = "1500"+"mg"+" every 12 hours," + " request a drug level on ICE and JAC before the 4th dose. This includes the STAT dose";
            } else if (vancRenal >90 && vancRenal<= 110) {
                mDose = "1250"+"mg"+" every 12 hours," + " request a drug level on ICE and JAC before the 4th dose. This includes the STAT dose";
            } else if (vancRenal >=75 && vancRenal<= 89.99) {
                mDose = "1000"+"mg"+" every 12 hours," + " request a drug level on ICE and JAC before the 4th dose. This includes the STAT dose";
            } else if (vancRenal >=55 && vancRenal<= 74.99) {
                mDose = "750"+"mg"+" every 12 hours," + " request a drug level on ICE and JAC before the 4th dose. This includes the STAT dose";
            } else if (vancRenal >40 && vancRenal<= 54.99) {
                mDose = "500"+"mg"+" every 12 hours," + " request a drug level on ICE and JAC before the 4th dose. This includes the STAT dose";
            } else if (vancRenal >30 && vancRenal<= 39.99) {
                mDose = "750"+"mg"+" every 24 hours," + " request a drug level on ICE and JAC before the 3rd dose. This includes the STAT dose";
            } else if (vancRenal >20 && vancRenal<= 29.99) {
                mDose = "500"+"mg"+" every 48 hours," + " request a drug level on ICE and JAC before the 3rd dose. This includes the STAT dose";
            } else if (vancRenal >=10 && vancRenal<= 20) {
                mDose = "500"+"mg"+" every 48 hours," + " request a drug level on ICE and JAC before the 2nd dose. This includes the STAT dose";
            } else if (vancRenal <=10) {
                mDose = "500"+"mg"+" every 48 hours," + " request a drug level on ICE every 24 hours. This includes the STAT dose";
            }
            
            
            document.getElementById("main_dose").innerHTML = "Prescribe maintenance dose of " + "<b>" + mDose + "<b>";
        }
        
        
        //Display dosing advice when calculate button clicked//
           function dosing_Advice() {
        var dAdvice = document.getElementById('dosingAdvice');
        {
          dAdvice.style.display = 'block';
        }
    }
        
        
        
        //This function shows the calculate button to add a layer of safety//
    function safety() {
        var disclaimer = document.getElementById('calc');
        
         if (checkbox.checked) {
            disclaimer.style.display = 'block';
        } else if (checkbox.unchecked){
            disclaimer.style.display = 'none';
        }
    }

        //Used to scroll form down//
    function scrollWin() {
     window.scrollBy(0, 300);
        }
        
    // this function displays the dosing table and calualtions when the "show dosing rationale" button is clicked//
 
    function explain() {
        var explainRationale = document.getElementById('explainDosing');
        
        if (checkbox.checked) {
            explainRationale.style.display = 'block';
        } else {
            explainRationale.style.display = 'none';
        }
    }
        
    //This funtion explains the calculation to the user//
    function displayReasoning() {
        var showFormulas = document.getElementById("showFormulas");
        var gender;
        var weightStatus;
        var CrClCalc;
        var bmiFormula = "weight/(height in m)²"

        if (m.checked) {
            gender = "male"
        } else if (f.checked) {
            gender = "female"
        }
        
        if (bmi >25) {
            weightStatus = "overweight, therefore their ideal body weight has been calculated as " + IBW + "kg" + " and used in the CrCl formula"
        } else if (bmi <18.5) {
            weightStatus = "underweight, therefore their creatinine clearence has been adjusted by multiplying the result by 0.69."
        } else {
            weightStatus ="of normal weight, therefore no adjustment to creatinine clearence is required."
        }
        
        if (bmi >25 && m.checked){
                CrClCalc = "((140-age)* IBW * 1.23)/creatinine";
            }else if (bmi >25 && f.checked){
                CrClCalc = "((140-age)* IBW * 1.04)/creatinine";
            }else if  (bmi <18.5 && m.checked){
                CrClCalc = "(((140-age) * weight * 1.23)/creatinine) * 0.69";
            }else if (bmi <18.5 && f.checked){
                CrClCalc = "(((140-age) * weight * 1.04)/creatinine) * 0.69";
            }else if  (bmi >18.5 && bmi <25 && m.checked){
                CrClCalc = "(((140-age) * weight * 1.23)/creatinine)";
            }else if (bmi >18.5 && bmi <25 && f.checked){
                CrClCalc = "(((140-age) * weight * 1.04)/creatinine)";
            }else if (normalweight.checked && m.checked){
                CrClCalc = "(((140-age) * weight * 1.23)/creatinine)";
            }else if (normalweight.checked && f.checked){
                CrClCalc = "(((140-age) * weight * 1.04)/creatinine)";
        }
        

        showFormulas.innerHTML = "The patient is a " + "<b>" + a.value + " year old " + gender + "." + "</b>" + " Their weight is " + "<b>" + w.value + "kg." + "</b>"
        + "<br>" + "They are " + "<b>" + weightStatus + "</b>" + "<br>" + "You have entered a creatinine value of " + "<b>" + c.value + "µmol/L" + "</b>" + "<br>" + "The CrCl has been calculated as follows " + "<b>" + CrClCalc + "</b>";
    }
    
    var classChange; 
    //This function highlihghts the appropriate vDose from the table//
    function highlightWtable() {
        
        if (w.value < 40) {
                classChange = document.getElementById("under40").style.backgroundColor= 'red';  
            } else if (w.value >=40 && w.value<= 59) {
                classChange = document.getElementById("w40to59").style.backgroundColor= 'red';  
            } else if (w.value >=60 && w.value<= 90) {
                classChange = document.getElementById("w60to90").style.backgroundColor= 'red'; 
            } else if (w.value >90) {
                classChange = document.getElementById("over90").style.backgroundColor= 'red'; 
            }
    }
    
    var classRenal;
    //This function highlihghts the appropriate vDose from the table//
    function highlightRtable() {
        
        ///HAVE to add CRRT//
        
        if (isNaN(vancRenal) ) {
                classRenal = document.getElementById("CRRT").style.backgroundColor= 'red';  
            } else if (vancRenal >=0 && vancRenal <= 10) {
                classRenal = document.getElementById("r0to10").style.backgroundColor= 'red';  
            } else if (vancRenal >10 && vancRenal<= 19.5) {
                classRenal = document.getElementById("r10to19").style.backgroundColor= 'red'; 
            } else if (vancRenal >19.5 && vancRenal<= 29.5) {
                classRenal = document.getElementById("r20to29").style.backgroundColor= 'red'; 
            } else if (vancRenal >29.5 && vancRenal<= 39.5) {
                classRenal = document.getElementById("r30to39").style.backgroundColor= 'red';  
            } else if (vancRenal >39.5 && vancRenal<= 54.5) {
                classRenal = document.getElementById("r40to54").style.backgroundColor= 'red'; 
            } else if (vancRenal >54.5 && vancRenal<= 74.5) {
                classRenal = document.getElementById("r55to74").style.backgroundColor= 'red'; 
            } else if (vancRenal >74.5 && vancRenal<= 89.5) {
                classRenal = document.getElementById("r75to89").style.backgroundColor= 'red';  
            } else if (vancRenal >89.5 && vancRenal<= 110) {
                classRenal = document.getElementById("r90to110").style.backgroundColor= 'red'; 
            } else if (vancRenal >110) {
                classRenal = document.getElementById("rOver110").style.backgroundColor= 'red'; 
    }
    
    }
    
    //Reset the tables once input changed//
        function resetTable() {
    document.getElementsByTagName("TR").style.backgroundColor = "red";
}
    


        function runCalcs() {
            dose();
            calculateBmi();
            displayIndication();
            idealBodyWeight();
            vancCrcl();
            maintDose();
            dosing_Advice();
            scrollWin();
            resetTable();
        }
        
        
        ///Vancomycin initiation dosing tool (all in bold)
        ///put not suitable for those ALREADY ON VANCOMYCIN
        /// Make calendar obvious