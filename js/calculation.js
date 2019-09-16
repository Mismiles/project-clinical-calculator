    //declare global variables
    var age = document.forms["vanc"]["age"].value;
    var weight = document.forms["vanc"]["weight"].value;
    var height = document.forms["vanc"]["height"].value;
    var creatinine = document.forms["vanc"]["creatinine"].value;
    // var male = document.forms["vanc"]["gender"].male;
    // var female = document.forms["vanc"]["gender"].female;
    var bmi = weight/(height/100*height/100);
    
    console.log('connected');
    
    // this function displays the form when the checkbox is true
    function myFunction() {
        var checkbox = document.getElementById('showform');
        var vancform = document.getElementById('vancform');
        if (checkbox.checked) {
            vancform.style.display = 'block';
        } else {
            vancform.style.display = 'none';
        }
    }
    
        
        // Initial dose calculation
        var vDose;
        
        function dose() {
            //get the input
            
            if (isNaN(weight)) {
                outputText = "<em>Weight</em>must be a number!";
            } else if (weight < 40) {
                vDose = 750;
            } else if (weight >=40 && weight<= 59) {
                vDose = 1000;
            } else if (weight >=60 && weight<= 90) {
                vDose = 1500;
            } else if (weight >59) {
                vDose = 2000;
            }
            document.getElementById("output_text").innerHTML = vDose;
        }        
        
        
        // Crcl without gender or creatinine adjustment
        var outputText;
        
        function CrCl0() {
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
        var resultG;
            if (male){
                resultG = CrCl0 *1.23;
            } else{
                resultG = CrCl0 *1.04;
            }
            
            
        // CrCl with creatinine
        function CrCl(){
        var creatinine = document.forms["vanc"]["creatine"].value;
        var CrCl = resultG/creatinine;
        }
        
        
        //Calculate of BMI
        function bmi() {
            var bmi = weight/(height/100*height/100)
        }
        
        //If overweight, calculate IBW
        function overWeight () {
            if (bmi > 25 && male) {
                 50+(0.91*(height-152.4));
            } 
            else if (bmi > 25) {
                 45+(0.91*(height-152.4));
            }
        }
        
        //
        
        //If Underweight, adjust CrCl
        function underweight(){
            var underweight;
            underweight = CrCl*0.69;
        }
    }
