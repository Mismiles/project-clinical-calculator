
        var gender, age, weight, creatinine;
        var outputText;
        
        function validate() {
        
            // get the input
            gender = document.forms["vanc"]["gender"].value;
            age = document.forms["vanc"]["age"].value;
            weight = document.forms["vanc"]["weight"].value;
            creatinine = document.forms["vanc"]["creatinine"].value;
            
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
                // calculate the result using ((140-age)*weight)/creatinine 
                var CrCl = ((140-age)*weight)/creatinine;
                outputText = "The creatinine clearence = CrCl;
            }
            
            // output the result (or errors)
            document.getElementById("output_text").innerHTML = outputText;
        }
