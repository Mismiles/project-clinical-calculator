        
        // Stat dose calculation
        var abw; 
        var vDose;
        
        function dose() {
            //get the input
            abw = document.forms["vanc"]["weight"].value;
        
            if (abw < 40) {
                vDose = 750;
            } else if (abw >=40 && abw<= 59) {
                vDose = 1000;
            } else if (abw >=60 && abw<= 90) {
                vDose = 1500;
            } else if (abw >59) {
                vDose = 2000;
            }
            document.getElementById("output_text").innerHTML = vDose;
        }        
        
        
        // Crcl without gender or creatinine adjustment
        var age, weight;
        var outputText;
        
        function CrCl0() {
        
            // get the input
            age = document.forms["vanc"]["age"].value;
            creatinine = document.forms["vanc"]["creatine"].value;
            weight = document.forms["vanc"]["weight"].value;
            // male = document.getElementById("gender").value = "M";
            // female = document.getElementById("gender").value = "F";
            
            // validate age, weight, creatinie
            if (age < 18) {
                outputText = "<em>Age</em> cannot equal less than 18!";
            } else if (isNaN(age)) {
                outputText = "<em>Age</em> must be a number!";
            } else if (isNaN(weight)) {
                outputText = "<em>Weight</em> must be a number!";
            } else if (isNaN(creatinine)) {
                outputText = "<em>Creatinine</em> must be a number!";
            } else { 
                var CrCl0 = ((140-age)*weight);
            }
            
            // output the result (or errors)
            document.getElementById("output_text").innerHTML = outputText;
        }
        
        // CrCl with gender adjustment
        function kidneygender(){
        var gender = document.forms["vanc"]["creatine"].value;
        var resultG;
            if (gender === M){
                resultG = CrCl0 *1.23;
            } else{
                resultG = CrCl0 *1.04;
            }
            
            
        // CrCl with creatinine
        function CrCl(){
        creatinine = document.forms["vanc"]["creatine"].value;
        var CrCl = resultG/creatine;
        }
        
        
        //Calculate of BMI
        function bmi() {
            var weight = document.forms["vanc"]["weight"].value;
            var height = document.forms["vanc"]["height"].value;
            var bmi = weight/(height/100*height/100)
            
        }
        
        //If overweight 
        function overweight () {
            var bmi = document.getElementById(bmi);
            
            if (bmi > 25) {
                outputText = "The patient is obese";
            } 
            else if (isNaN(age)) {
                outputText = "<em>Age</em> must be a number!";
            } else if (isNaN(weight)) {
                outputText = "<em>Weight</em> must be a number!";
            } else if (isNaN(creatinine)) {
                outputText = "<em>Creatinine</em> must be a number!";
            } else { 
                var CrCl0 = ((140-age)*weight);
            }
        }
        

        
        
        
        
        function getAdvice () {
            
        }