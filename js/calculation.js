    //declare global variables
    var age = document.forms["vanc"]["age"].value;
    var weight = document.forms["vanc"]["weight"].value;
    var height = document.forms["vanc"]["height"].value;
    var creatinine = document.forms["vanc"]["creatine"].value;
    var male = document.forms["vanc"]["gender"].male;
    var female = document.forms["vanc"]["gender"].female;
    var bmi = weight/(height/100*height/100);


        
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
            underweight = CrCl*0.69;
        }
        
        
    // date picker
    
     $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    })
        
        
        
        function getAdvice () {
            
        }
        
        
        
        ///show height box
        
	$(document).ready(function(){
		$('.text_container').addClass("hidden");

		$('.text_container').click(function() {
			var $this = $(this);

			if ($this.hasClass("hidden")) {
				$(this).removeClass("hidden").addClass("visible");

			} else {
				$(this).removeClass("visible").addClass("hidden");
			}
		});
	});
