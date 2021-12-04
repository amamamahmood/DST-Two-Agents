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
    //const { v4: uuidv4 } = require('uuid');
    //var url = 'https://script.google.com/macros/s/AKfycby4CgcVBKI471bkIYxrKr6GEY35345TXDlnWrH6-KyXhcZ7St9sAyLKbHumTPQXaME9cQ/exec';
    var url = 'https://script.google.com/macros/s/AKfycbz3ZbzO8lZOt0wForWERwXwp-ruN0wv-b581FQqHnID9H29NsZAADp4eaT5YAJWyKgpsw/exec';
    Survey.StylesManager.applyTheme("modern");

    export default {
        name: "post-survey-a2-preferred-agent",
        data() {


            var surveyJSON = { title: "Questionnaire", logo: "https://api.surveyjs.io/private/Surveys/files?name=947d1001-ea66-4d46-9f59-0973297525eb", logoPosition: "top", pages: [{ name: "preference", elements: [{ type: "imagepicker", name: "preferred_agent", title: "Identify which agent you would prefer to seek advice from", isRequired: true, choices: [{ value: "1", text: "      Elizabeth", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=06c3aba5-d69b-43ca-9eac-154bf174a4b1" }, { value: "2", text: "       Kate", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=ace4ecde-f4b7-41fc-9cf7-3259a403f7e7" }, { value: "3", text: "        Lewis", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=62e44bd6-296c-4399-bb5f-9d1ca4b4dfed" }, { value: "4", text: "         Brian", imageLink: "https://api.surveyjs.io/private/Surveys/files?name=a08140b0-7217-4e7b-b537-38230c1fec06" }], choicesOrder: "random", imageHeight: 200, imageWidth: 300, showLabel: true }] }], showPrevButton: false, showQuestionNumbers: "off", questionErrorLocation: "bottom" };
            //var surveyJSON = { surveyId: 'b74486b1-b513-4f36-bd8e-c6afdf7b312a', surveyPostId: 'fe30052a-417d-4dd7-9638-f65dc25d30dc' };
            var survey = new Survey.Model(surveyJSON);
            function sendDataToServer(survey) {
                
                var sect = document.getElementById("surveyElement5");
                sect.style.display = "none";
                
                var user_data = store.getters.getUserData;
                let store_data = {
                    ...user_data,
                    ...survey.data,
                };
                //alert(JSON.stringify(store_data));
               $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: store_data //$form.serializeObject()
                });
                alert(jqxhr);
                sect = document.getElementById("surveyElement3");
                sect.style.display = "block";
                

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
