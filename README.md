Vancomycin initiation tool

The project aims to make a complex intravenous drug caulation safer, simpler and more effecient. 
Vancoymcyin is an antibiotic used to treat severe infections. This project aims to build a calculation 
tool to make the drug safer to prescribe via the intravenous route.
There have been many errors as a result of intravenous vancomycin prescribing. These have occurred due 
to the complexity of the caulations involved in prescribing the drug, the monitoring required and the 
complexity in the type of patients' who will have this drug prescribed. 
The aim is to build a form and combine it with javascript to output safe recommendations. 
 
## UX

The wedbsite has two main target audiences. The first is doctors who will prescribe the drug for use on patients.
The second is pharamcists who will use this tool to check the appropriateness of the prescribed medication. 

In practice, prescribing vancomycin involves reffering to a guidline. Using this, a doctor will have to then 
obtain some parameters. 
These include; the patient's gender, age, weight, height, serum creatinine (from a blood test).
If the pateint is on renal replacement therapy, only their weight will need to be obtained.
Using these parameters, the pateint's BMI will need to be calculated to determine whether they are underweight, 
of normal weight or overweight. 
If they are not of normal weight, their ideal bodyweight will have to be calculated.
Using this information, their kidney function will have to be calculated.
From this kidney function value, their dose, frequency of administraetion and monitoring times are calculated.

Before starting the project, an observation was undertakin to seee how an expereinced doctor undertook this process. 
It seemed a lot of screen switching was undertakin to obtain data about the pateint. Then, many websites were accessed
to help calculate the BMI, ideal bodyweight and also their creatinine clearence (kidney function).
The doctor would then have to refer back to the guideline using these value to determine the first dose, the next doses
and how to monitor the drug.
Whist this was being undertaken, the doctor was interrupted several times. This increased the time taken to obtain the
correct dose and also increased the likelhood of error. 
The process took around 10-15 minutes to complete.

The project aims to reduce error, time and duplication of work by providing an interactive form that doctors will fill 
out.

As a doctor prescribing vancomycin, I want to have the ability to effeciently prescribe the correct dose of vancomycin, 
the correct frequency and monitor the drug safely. 

As a pharmacist, I want to be able to check a doctor's prescription of vancomycin and ensure it is safely monitored. 

As a medical student, I want to be able to appreciate complexity of varaibles required to presecribe vancomycin 
correctly.

>>>>>>>>>>><<<<<<<<<<

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the 
design process. These files should themselves either be included in the project itself (in an separate directory), or just 
hosted elsewhere online and can be in any format that is viewable inside the browser.

>>>>>>>>>>><<<<<<<<<<

## Features

Once loading the page, a disclaimer appears. This is to ensure that the user cannot use the tool to calculate doses 
for patient's outside of this creteria.

If the user wishes to view the hospital guideline (on desktop only), they can have it adjacent to the form by clicking 
"click to display guideline on right of page."

The user can then click "none of the above apply (click to use tool)" as a safety button which then brings up the tool.

The indication is placed to force the user to specify why vancomycin is being used.

The "on renal replacement therapy?" question is placed to specify if the patient is on dialysis.

The pateint's gender, age, weight, the date their weight was taken, their
height and serum creatinine will need to be entered in order to allow the tool to calculate the pateint's renal
function, the correct dose and how often to monitor the patient.

There is a 30 day limit on the calendar to prompt the user to obtain a recent weight.

The "I confirm that this tool takes no clinical responsibility for outcomes and I will use this tool only 
to aid my ultimate clinical decision" button is placed to prompt the user that ultimately the prescribing decision is theirs
and that this tool will only aid that decision.

The "click to display dose and monitoring advice" takes into account all inputted factors to give a dose. It does this
by calculating the patient's body mass index (BMI), ideal bodyweight, their renal function (CrCl) and uses their weight 
to advise on the initial (STAT) dose.

The next feature "click to show dosing rationale" explains to the usuer why the outputs were generate and also shows 
(by highlighting dosing and monitoring tables) where the dosing and monitoring advice is obtianed from. 


### Existing Features
The first feature (the guideline) allows the user to reference the guidleine for prescribing advice.

The next feature (the form) prompts the user to collect all data required to process the form safely and effectively.

The calendar has a safety limit of 30 days to prompt the user to input a recent weight so that an old weight is not used.

The dosing advice section then takes all the information and displays the appropriate dose and monitoring to undertake.

The explain rationale section then breaks down why the dose and monitoring advise was chosen.

### Features Left to Implement
Another feature idea for the future could be to obtain all the input values and email them to an email address. This could then
be used to audit prescribing.

Additionally, this could be used to prompt a pharamcist who has access to this email to contact colleagues looking after the patient
that they have a pateint who is on vancomycin.

A form validation function can be added to prompt the user to fill fields that have been missed.


## Technologies Used

The technologies used include:

- [Html]

- [CSS]

- [Bootstrap] (https://getbootstrap.com/)

- [Vanilla Javascript] 
    - This project uses javascript to add functionally. Additionally it uses Javascript to calculate 
    ideal body weight, body mass index, creatinine clearence (kidney function), the initial dose of vancomycin, 
    the maintenace dose of vancomycin and the frequency of monitoring of the drug.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing




In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works 
well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as 
intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the
test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly 
useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't 
addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- My colleague and consultant antimicrobial pharamcist Ai-Nee Lim who was pivotal in the design of
the vancomycin antimicrobial guideline.
- My colleague Dr Nitzan Lindenberg who took his time to aid in the initiation step of building this tool
and providing contructive feedback throughout.
