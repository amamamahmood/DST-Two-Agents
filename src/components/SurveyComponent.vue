<template>
    <survey :survey="survey" />
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>


    import * as Survey from "survey-vue";
    //import { store } from "./App.vue";
    import { store } from './store';
    import "survey-vue/modern.css";
    //import "./index.css";
    const { v4: uuidv4 } = require('uuid');
    //var url = 'https://script.google.com/macros/s/AKfycby4CgcVBKI471bkIYxrKr6GEY35345TXDlnWrH6-KyXhcZ7St9sAyLKbHumTPQXaME9cQ/exec';
    Survey.StylesManager.applyTheme("modern");

    export default {
        name: "surveyjs-component",
        data() {
            




            //var json = { title: "Demographics", pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "gender", title: "What is your gender?", isRequired: true, choices: [{ value: "1", text: "Female" }, { value: "2", text: "Male" }, { value: "3", text: "Non-binary" }], hasOther: true }, { type: "radiogroup", name: "education", title: "What is your highest level of education completed? ", isRequired: true, choices: [{ value: "1", text: "Some high school, no diploma" }, { value: "2", text: "High school graduate, diploma or the equivalent (for example: GED)" }, { value: "3", text: "Some college, no degree" }, { value: "4", text: "Trade/technical/vocational training" }, { value: "5", text: "Bachelor's degree" }, { value: "6", text: "Advanced degree (for example: Master's, Professional, or Doctorate degree)" }] }, { type: "text", name: "major", title: "What is your current industry/discipline/major?  ", isRequired: true }] }] }
            //var surveyJSON = { title: " ", logo: "https://api.surveyjs.io/private/Surveys/files?name=42be078a-ab79-4764-9c8a-bf69110314c9", logoPosition: "top", pages: [{ name: "Home", elements: [{ type: "html", name: "welcome", html: "    <style>\n        \n         #wrapper {\n             margin: 0 auto;\n             width: 1000px;\n             text-align: center;\n             font-family: \"Times New Roman\", Times, serif;            }\n        .text {\n\n            font-size: 25px;\n        }\n    </style>\n<body>\n    <form id=\"form2\" runat=\"server\">\n    <div id= \"wrapper\">\n        <h1 style=\"color:#18a689\">      \n            Greetings\n        </h1>    \n        <hr  />\n        \n        <p class=\"text\" >\n            We are a research group at Johns Hopkins University called the <a href=\"http://intuitivecomputing.jhu.edu//\" target=\"_blank\">Intuitive Computing Lab</a>&nbsp;interested in understanding how people perceive and interact with an Artificial intelligence (AI) agent. During this study, you will do the \"Desert Survival Task\" with assistance of an AI agent. <br /><br />\n           Your participation is voluntary and your responses will be completely anonymous. We will ask only for your name and email address to send you a $5 Amazon gift card upon completion of the study (your personal information will not be associated with your responses). This study will take about 20 minutes to complete. \n            </p>\n        <p class=\"text\" >\n            By continuing, you consent to participate in this study and understand that your input will only be used for research purposes. Detailed consent information is provided\n           <a href=\"https://drive.google.com/file/d/1BGxHarjSZJMSI_Bl9SX8pslxBomtrGjj/view?usp=sharing\" target = \"_blank\" >here</a>.\n           </p>\n\n         <p class=\"text\" >\n            Please use <strong>Google Chrome</strong> on a laptop or desktop computer to complete this study. Please <strong>turn up your volume</strong> to listen to what the agent has to say!\n            <br/>\n            </p>\n      </div>\n     \n    </form>\n</body>" }] }, { name: "survey", elements: [{ type: "radiogroup", name: "gender", title: "What is your gender?", hideNumber: true, isRequired: true, choices: [{ value: "1", text: "Female" }, { value: "2", text: "Male" }, { value: "3", text: "Non-binary" }, { value: "4", text: "Other" }] }, { type: "radiogroup", name: "race", title: "What is your race?", hideNumber: true, isRequired: true, choices: [{ value: "1", text: "Hispanic or Latino or Spanish Origin of any race" }, { value: "2", text: "American Indian or Alskan Native" }, { value: "3", text: "Asian" }, { value: "4", text: "Native Hawaiian or Other Pacific Islander" }, { value: "5", text: "Black or African American" }, { value: "6", text: "Caucasian" }] }, { type: "radiogroup", name: "education", title: "What is your highest level of education completed? ", hideNumber: true, isRequired: true, choices: [{ value: "1", text: "Some high school, no diploma" }, { value: "2", text: "High school graduate, diploma or the equivalent (for example: GED)" }, { value: "3", text: "Some college, no degree" }, { value: "4", text: "Trade/technical/vocational training" }, { value: "5", text: "Bachelor's degree" }, { value: "6", text: "Advanced degree (for example: Master's, Professional, or Doctorate degree)" }] }, { type: "text", name: "major", title: "What is your current industry/discipline/major?  ", hideNumber: true, isRequired: true }, { type: "text", name: "age", title: "What is your age (years)?", hideNumber: true, isRequired: true, inputType: "number", autoComplete: "cc-number", min: "18", max: "100", step: 1 }, { type: "text", name: "country", title: "What is your current country of residence?", description: "Which country are you currently living in ?", hideNumber: true, isRequired: true, autoComplete: "country-name" }], title: "Please fill the following demographics survey before proceeding" }], showPrevButton: false }
            var surveyJSON = { title: " ", logo: "https://api.surveyjs.io/private/Surveys/files?name=42be078a-ab79-4764-9c8a-bf69110314c9", logoPosition: "top", pages: [{ name: "Home", elements: [{ type: "html", name: "welcome", html: "    <style>\n        \n         #wrapper {\n             margin: 0 auto;\n             width: 1000px;\n             text-align: center;\n             font-family: \"Times New Roman\", Times, serif;            }\n        .text {\n\n            font-size: 25px;\n        }\n    </style>\n<body>\n    <form id=\"form2\" runat=\"server\">\n    <div id= \"wrapper\">\n        <h1 style=\"color:#18a689\">      \n            Greetings\n        </h1>    \n        <hr  />\n        \n        <p class=\"text\" >\n            We are a research group at Johns Hopkins University called the <a href=\"http://intuitivecomputing.jhu.edu//\" target=\"_blank\">Intuitive Computing Lab</a>&nbsp;interested in understanding how people perceive and interact with an Artificial intelligence (AI) agent. During this study, you will do the \"Desert Survival Task\" with assistance of an AI agent. <br /><br />\n           Your participation is voluntary and your responses will be completely anonymous. We will ask only for your name and email address to send you a $5 Amazon gift card upon completion of the study (your personal information will not be associated with your responses). This study will take about 20 minutes to complete. \n<br/>\n            </p>\n        <p class=\"text\" >\n            By continuing, you consent to participate in this study and understand that your input will only be used for research purposes. Detailed consent information is provided\n           <a href=\"https://drive.google.com/file/d/1BGxHarjSZJMSI_Bl9SX8pslxBomtrGjj/view?usp=sharing\" target = \"_blank\" >here</a>.\n           </p>\n<br/><br/>\n         <p class=\"text\" >\n            Please use <strong>Google Chrome</strong> on a laptop or desktop computer to complete this study. Do not use reload or back button of the browser during the study. <strong>Turn up your volume</strong> to listen to what the agent has to say!\n          \n            </p>\n      </div>\n     \n    </form>\n</body>" }] }, { name: "survey", elements: [{ type: "radiogroup", name: "gender", title: "What is your gender?", hideNumber: true, isRequired: true, choices: [{ value: "1", text: "Female" }, { value: "2", text: "Male" }, { value: "3", text: "Non-binary" }, { value: "4", text: "Other" }] }, { type: "radiogroup", name: "race", title: "What is your race?", hideNumber: true, isRequired: true, choices: [{ value: "1", text: "Hispanic or Latino or Spanish Origin of any race" }, { value: "2", text: "American Indian or Alskan Native" }, { value: "3", text: "Asian" }, { value: "4", text: "Native Hawaiian or Other Pacific Islander" }, { value: "5", text: "Black or African American" }, { value: "6", text: "Caucasian" }] }, { type: "radiogroup", name: "education", title: "What is your highest level of education completed? ", hideNumber: true, isRequired: true, choices: [{ value: "1", text: "Some high school, no diploma" }, { value: "2", text: "High school graduate, diploma or the equivalent (for example: GED)" }, { value: "3", text: "Some college, no degree" }, { value: "4", text: "Trade/technical/vocational training" }, { value: "5", text: "Bachelor's degree" }, { value: "6", text: "Advanced degree (for example: Master's, Professional, or Doctorate degree)" }] }, { type: "text", name: "major", title: "What is your current industry/discipline/major?  ", hideNumber: true, isRequired: true }, { type: "text", name: "age", title: "What is your age (years)?", hideNumber: true, isRequired: true, inputType: "number", autoComplete: "cc-number", min: "18", max: "100", step: 1 }, { type: "text", name: "country", title: "What is your current country of residence?", description: "Which country are you currently living in ?", hideNumber: true, isRequired: true, autoComplete: "country-name" }], title: "Please fill the following demographics survey before proceeding" }], showPrevButton: false }

            var survey = new Survey.Model(surveyJSON);
            function sendDataToServer(survey) {
                var u_id = uuidv4();
                store.commit('storeUid', u_id);
                var user_id = {
                    uid: u_id,
                };
                
                let user_data = {
                    ...user_id,
                    ...survey.data,
                    
                };
                store.commit('storeUserData', user_data);
                //survey.data["uid"] = u_id;
               
                store.commit('storeGender', survey.data['gender']);
                
                var sect = document.getElementById("intro");
                sect.style.display = "inline-block";
                sect.textContent = "Continue to see the description of the task";
                sect = document.getElementById("surveyElement");
                sect.style.display = "none";
                sect = document.getElementById("heading");
                sect.style.display = "block";
                var btn = document.getElementById("home");
                btn.style.display = "inline-block";
                //    survey.sendResult('27fc25d9-e5bb-45f8-9388-54a834bb67ce');
                //alert("The results are:" + JSON.stringify(survey.data));

                //alert(JSON.stringify(user_data));
                /*$.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: user_data //$form.serializeObject()
                });*/
                //alert(jqxhr);

                //alert("modified gender: " + store.getters.getGender);

            }

            survey.onComplete.add(sendDataToServer);




            return {
                survey: survey
            };
        }
    };
</script>


<style scoped>

</style>
