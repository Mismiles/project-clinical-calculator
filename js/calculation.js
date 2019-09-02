
        var gender, age, weight, creatinine;
        var outputText;
        
        function validate() {
        
            // get the input
            gender = document.forms["vanc"]["gender"].value;
            age = document.forms["vanc"]["age"].value;
            weight = document.forms["vanc"]["weight"].value;
            creatinine = document.forms["vanc"]["creatinine"].value;
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
                var CrCl1 = ((140-age)*weight);
            }
            
            // output the result (or errors)
            document.getElementById("output_text").innerHTML = outputText;
        }
        
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
        
        
        
        function getAdvice () {
            
        }