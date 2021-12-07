<template>
    <div id="app" class="unselectable">
        <div>

            <div id="userNewRanking" class="column2" style=" display:none;">
                <h3 class="smallerText">Your New Rankings</h3>

                <draggable id="items_list2"
                           :list="userNewList"
                           :animation="200"
                           :disabled="!enabled2"
                           ghost-class="moving-card"
                           group="userNewList"
                           tag="ol"
                           @start="dragging = true"
                           @end="dragging = false">

                    <li v-for=" (item, index) in userNewList" :key="item.id" :id="30+index" class="float-child" style="list-style-position: inside; font-size:1.8vmin;">
                        <div>
                            <img :src="item.avatar" alt="" style="width: 4vw; height: 4vw; display: block; margin: auto;">
                            <p style="display: block; font-size: 1.5vmin;">{{item.name}} </p>
                            <button :id=item.name2 :name="item.name3" style="width: 5.7vw; font-size: 1.5vmin; display: none; align-content: center; align-items: center; text-align: center; cursor: pointer;" v-on:click="placeItem($event)">Place here</button>
                        </div>
                    </li>

                    <!--<user-card v-for="item in userNewList"
            :key="item.id"
            :item="item"></user-card>-->

                </draggable>

            </div>

            <!--<div id="userNewRanking" class="column2" style=" display:none">
        <h3 class="smallerText">Your New Rankings</h3>
        <ol>
            <li class="float-child" style="list-style-position: inside; font-size:1.8vmin;" v-for="item in userNewList" :key="item.id">
                <div>
                    <img :src="item.avatar" alt="" style="width: 4vw; height: 4vw; display: block; margin: auto;">
                    <p style="display: block; font-size: 1.5vmin;">{{item.name}} </p>
                    <button :id=item.name2 :name="item.name3" class="button" style="display:none;align-content:center;align-items:center;text-align:center;" v-on:click="placeItem($event)">Place here</button>
                </div>
            </li>
        </ol>
    </div>-->


            <div id="headingColumn" class="column-heading">
                <h1 id="heading" class="LargerText" style="display:none"> Desert Survival Task </h1>
                <h3 id="intro" class="smallerText" style="max-width:70vw; display:none">
                </h3>
                <h2 id="introb" style="max-width:70vw; display:none" class="text"></h2>
                <br />
                <br />
                <button id="home" class="button" style="display:none" v-on:click="atHome">Continue</button>
                <br />
                <button id="start" class="button" style="display:none" v-on:click="startInitialRanking">See the items</button>

            </div>
            <div id="pick_btn" class="column5" style=" display: none; justify-content: center; text-align: center">
                <button id="chooseOneBtn" class="button" style=" width:10vw " v-on:click="chooseOne">Continue</button>
            </div>
            <div id="surveyElement" class="columnSurvey">
                <SurveyComponent />
            </div>
            <div id="surveyElement2" style="display:none">
                <div class="agent_image">
                    <img id="agent_img" src="kate.png" style="max-width:20vmin; max-height:20vmin" />
                    <h3 id="agent_name" style="text-align:center  "> Kate</h3>
                </div>
                <PostSurvey id="postSurvey" class="columnSurvey2" />
            </div>
            <div id="surveyElement4" style="display:none">
                <div class="agent_image">
                    <img id="agent_img_a2" src="elizabeth.png" style="max-width:10vw; max-height:10vw" />
                    <h3 id="agent_name_a2" style="text-align:center  "> Elizabeth</h3>
                </div>
                <PostSurveyA2 id="postSurveyA2" class="columnSurvey2" />
            </div>
            <!--<div id="surveyElement5" style="display:none;" class="columnSurvey2">
        <PostSurveyA2PreferredAgent id="PostSurveyA2-preferredAgent" />
    </div>-->
            <div id="surveyElement3" style="display:none;" class="columnSurvey3">
                <ThankYou id="thankyou" />
            </div>
            <div id="timer-clock" class="timer" style="display:none;">
            </div>
            <div id="emergencyTask" class="column4" style="display:none">
                <h2>Choose one of the emergency kits</h2>

                <div class="kit-right">
                    <button id="101" v-on:click="kitChoosen($event)"><img src="survival_kit.png" style=" width: 10vw; cursor: pointer;"> Pick</button>
                    <h3 id="kit-right" style="text-align:center  "> Elizabeth's kit'</h3>
                </div>

                <div class="kit-left">
                    <button id="102" v-on:click="kitChoosen($event)"><img src="survival_kit.png" style=" width: 10vw; cursor: pointer;"> Pick</button>
                    <h3 id="kit-left" style="text-align:center  "> Kate's kit'</h3>
                </div>

                <!--<input type="radio" id="radio-img-1" name="radio-btns-sprite">
            <label for="radio-img-1" class="male">Male</label>
        <input type="image" class="kit-left" src="survival_kit.png" />
            <input type="radio" id="radio-img-2" name="radio-btns-sprite">
            <label for="radio-img-2" class="female">Female</label>-->

            </div>
            <div id="agentSurvey" style="display: none; " class="column3">
                <h1 class="LargerText" id="agentForm"> </h1>
                <h3 class="smallerText" id="agentFormText"></h3>
                <br />
                <br />
                <button id="proceedA1" class="button"  v-on:click="surveyAgent(1)"> Proceed to Questionnaire</button>
                <br />
                <button id="proceedA2" class="button" style="display:none; " v-on:click="surveyAgent(2)">Proceed to Questionnaire</button>

            </div>
           
               
            <div id="centerColumn" style="display:none" class="column3">
                <br />
                <h3 class="smallerText" id="drag_inst" style="display:none; max-width:50vw;">The agent tries to convince the participant about next item</h3>
                <h3 class="smallerText" id="intro2" style="display:none; max-width:50vw;  ">
                </h3>
                <br />
                <h3 class="smallerText" id="intro3" style="display:none; max-width:50vw;  ">
                </h3>
                <button id="drag" class="button" style="display:none" v-on:click="makeDraggable">Rank this current item</button>
                <!--&emsp;&emsp;&emsp;&emsp;
        <button id="noDrag" class="button" style="display:none" width="100px" v-on:click="skipUpdating">Continue without updating</button>-->
                <br />
                <button id="begin" class="button" style="display:none;" v-on:click="doneInitialRanking"> Done Ranking? Continue</button>

                <button id="interact" class="button" style="display:none;" v-on:click="beginInteraction">Start Interaction</button>
                <button id="done_drag" class="button" style="display:none;" v-on:click="doneDragging">Done updating? Continue to next item</button>
                <button id="submit" class="button" style="display:none" v-on:click="submitRankings">Submit Final Rankings</button>

                <br />

            </div>

            <div id="arrow_left" class="dialog-1" style="display: none; text-align: center; align-items: center; align-content:center">
                <div id="arrow_point" class="left-point"></div>
                <h3 class="smallerText" id="agent_speech" style="max-width:40vw;text-align:center;align-content:center;padding:1vw;"></h3>

            </div>






            <div id="user_list" class="column2" style=" display:none;">
                <h3 class="smallerText">Your Initial Rankings</h3>

                <draggable id="items_list"
                           :list="users"
                           :animation="200"
                           :disabled="!enabled"
                           ghost-class="moving-card"
                           group="users"
                           tag="ol"
                           @start="dragging = true"
                           @end="dragging = false">


                    <user-card v-for="user in users"
                               :key="user.id"
                               :user="user"></user-card>

                </draggable>

            </div>


        </div>
    </div>

</template>

<script>
    // purple color shirt: 744B7E
    import { store } from './components/store';
    import draggable from "vuedraggable";
    import UserCard from "./components/UserCard";
    import * as THREE from 'three';
    import SurveyComponent from "./components/SurveyComponent";
    import PostSurvey from './components/PostSurvey';
    import PostSurveyA2 from './components/PostSurveyA2';
    //import PostSurveyA2PreferredAgent from './components/PostSurvey-preferredAgent';
    import ThankYou from './components/ThankYou';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    //import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    //import { degToRad } from 'three/src/math/MathUtils';
    //var url = 'https://script.google.com/macros/s/AKfycby4CgcVBKI471bkIYxrKr6GEY35345TXDlnWrH6-KyXhcZ7St9sAyLKbHumTPQXaME9cQ/exec';
    //var url = 'https://script.google.com/macros/s/AKfycbz3ZbzO8lZOt0wForWERwXwp-ruN0wv-b581FQqHnID9H29NsZAADp4eaT5YAJWyKgpsw/exec';
    var user_initial_rankings;
    var avatar_rankings, avatar_left_rankings;
    //import $ from 'jquery';
    class item_state {
        constructor(item_placed_at = 99, rankings = "") {
            this.item_placed_at = item_placed_at;
            this.rankings = rankings;
        }
    }
    let items = [];
    for (var i = 0; i < 9; i++) {
        items.push(new item_state());
    }
    //alert(items.length);
    
    var user_final_rankings;
    let gen;
    let counter = 0; // which item on its list will the agent talk about
    var item_order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var avatar_order = [1, 4, 5, 0, 7, 2, 3, 6, 8];
    var avatar_order_left = [0, 2, 3, 8, 6, 1, 4, 5, 7];
    let camera, camera_left, scene, renderer, renderer_left, scene2, scene_left, scene2_left;
    let agentName, agentName2;
    let avatarReady = false, avatarReady_left = false;
    let actions = [];
    let actions_left =[];
    const clock = new THREE.Clock();
    //const clock_left = new THREE.Clock();
    let activeAction, lastAction, activeAction_left, lastAction_left;
    let mixer, mixer_left;
    var condition = 0;
    var index = 0, index2 = 1;
    var random_actions_order = [0, 1, 2, 3, 4, 5];
    var idle_action = 2;
    var wave_action = 9;
    var random_actions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 7 is to be excluded. 9 is wave
    var idle_action_left = 2;
    var wave_action_left = 8;
    var random_actions_left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var agent_turn = 1;
    var agent_turn_reverse = 2;
    var agent_voice = 1;
    var agent_voice_left = 2;
    var agent1_script = [false, true, false, false, true, true, false, true, false]; // True for positive false for negative
    var goes_first = [1, 2, 1, 2, 1, 1, 2, 2, 1];
    //var agent2_script = [true, false, true, true, false, false, true, false, true];
    //var goes_first2 =    [2,     1,     2,      1,    2,    2,     1,   1,    2  ];
    var agent_picked_in_emergency = "none";
    //const emergency_sound = new Audio();
    //emergency_sound.src = "emergency.mp3";
    //emergency_sound.volume = 0.5;
    var time_picking_agent = 11;
    //emergency_sound.appendChild("emergency.mp3");
    //emergency_sound.appendChild("emergency.mp3");


    // For timer!!!


    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 5;
    const ALERT_THRESHOLD = 2;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };

    const TIME_LIMIT = 10;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;

    // SCripts

    const script1 = ["Map will be useful to start a fire with. It can be used as toilet paper. You can also use it as a shade for your head to avoid exposure to direct sunlight.",
        "If you are stuck beyond day 3, you will need to find food and water. The book - Edible Animals of the Desert may be useful. Additionally, you will be able to use the pages of book as toilet paper and as a fire starter. ",
        "The intense sunlight of desert may cause Photokeratitis due to sun reflection from sand. It is like having sunburned eyes. This will be prevented by wearing a pair of sunglasses.",
        "You may use gauze from the first aid kit as rope or for protecting your exposed body parts against dehydration and sunlight. In case of injury, it will be useful to have a first aid kit.",
        "Cosmetic mirror is one of the most powerful tools to communicate your presence because reflected sunbeam can be seen from a far-off distance. It gives you higher chance of being spotted within 24 hours. Speedy discovery is crucial to survival of your group.",
        "Flashlight is the only quick reliable device for signaling your presence at night. It will help you see at night and stay safer. Additionally, if you remove the batteries, it can be used as a container for digging or collecting water. The reflector and lens can be used as auxiliary signaling device and as a fire starter.",
        "The reflective surface of the magnetic compass can be used as an auxiliary signaling device. In later days, if no help arrives, it will help you navigate.",
        "Since 180-proof vodka is flammable, you can use it to start a fire. Moreover, the empty bottle may be used to collect water. Even if you do not drink vodka to avoid dehydration, it can be used otherwise. ",
        "Ironically, coats are one of the best ways to avoid hot dry air from circulating next to your skin. Hence, preventing perspiration. This will help you prevent dehydration through moisture loss. Therefore, increasing your survival time. Plastic raincoat can also be used to gather dew at night for drinking purposes. You will also be able create a solar still using raincoat to extract some water from ground."];

    const script2 = ["Map is not as useful as you would think because it will encourage you and others to try and walk out. It is potentially dangerous to leave the site of crash since rescue party will most likely arrive there.",
        "The book - Edible Animals of the Desert will be of little use since the main problem you confront for first few days is dehydration, not starvation. Also, you should be thinking about conserving energy and hunting is counterproductive.",
        "Sunglasses will prevent sunburned eyes, but its usefulness is limited to daytime. Additionally, it is replaceable by any piece of clothing that you are wearing to keep your eyes safe from exposure to sunlight.",
        "Since no one was injured in the plane, a first aid kit is not as important as you would think. Because of low humidity of the desert, it is considered one of the least infectious places in the world. Also, because the blood thickens due to dehydration, there is little danger of bleeding. However, gauze can be used for secondary purposes.",
        "You may use cosmetic mirror to communicate your presence during daylight. Apart from that it has no secondary use for your survival.",
        "You will use flashlight to communicate your presence at night. However, its range will be limited, and it may attract dangerous animals wandering in the dark.",
        "Aside from the possibility of using the reflective surface of the magnetic compass as an auxiliary signaling device, it is of little use. It will tempt you to walk in search of food or water which is not good.",
        "Drinking alcohol causes quicker dehydration because your body will lose enormous amounts of water trying to digest alcohol. 2 to 3 ounces of water is required to digest one ounce of alcohol approximately. Even though it may have secondary uses such as starting a fire and using empty bottle as container, drinking vodka will be lethal in this situation.",
        "By digging a hole and placing the raincoat over it, a solar still can be constructed to obtain water. However, this will give you very little water compared to the effort you put in digging the hole. Hence, it will not significantly increase your chances of survival."

    ];
    const script3 = ["Map can be used to start a fire, Ummm, ..... as a toilet paper I think and to cover head.",
        "The book - Edible Animals of the Desert may be used to search for food, to start a fire And, And. like..... a toilet paper.",
        "People may avoid Ummm, sunlight by wearing sunglasses..... I guess. So that eyes don't burn",
        "People may use gauze as rope, I suppose And, And as ..... sun protection or may be in case they get hurt.",
        "People may use cosmetic mirror to reflect sunlight to far-off distance to seek help. Ummm, ..... That's it.",
        "People may use flashlight to seek help at night and see in the dark.  What else? What else? ..... Oh, it may be used as a container, signaling device and fire starter.",
        "The shiny surface of the magnetic compass may be used to signal for help. Later if no help comes, hmmm, I don't know..... people can navigate with it.",
        "Vodka can catch fire. Ummm, People can put water in empty bottle. Yeah. That's all.",
        "You know coats stop dry air to prevent sweating. That means less dehydration. Ummm, ..... Like people can gather dew at night to drink and they can suck water out of ground by making solar still with the coat."

    ];

    const script4 = ["Map is not as good as people think, Ummm, ..... because I think it may make people want to leave that place.",
        "The book - Edible Animals of the Desert is not useful because people should save their energy by not hunting And, And like..... people do not even need food really.",
        "People may avoid Ummm, sunlight by wearing sunglasses..... but only during the day I guess. No use at night.",
        "No body is hurt so no need of first aid thing. There is little chance of getting hurt in the desert. And, And ..... people can use gauze for other reasons, I suppose.",
        "Cosmetic mirror can reflect sunlight but only in the daylight..... Ummm, that's it. No other use.",
        "People may use flashlight to seek help at night, what else what else? but oh, it may bring dangerous animals out too.",
        "Apart from using the shiny surface of the magnetic compass to signal, no use. Hmmm. I don't know..... People will go to look for food and water with that compass. That isn't a good idea",
        "Ummm, I mean drinking alcohol feels good, but it will make people lose water in their body. Not good. I guess people could use it for starting a fire or storing water. Yeah. That's all.",
        "People can gather dew at night to drink and Ummm, they can suck water out of ground by making solar still. But..... that's like too much work for so little water. Not that good for staying alive."
    ];

    //var PulseLoader = VueSpinner.PulseLoader
    //init();
    //animate();

    function init() {
        var value1, value2;
        condition = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        //alert(condition);
       // condition = 2;
        //var files = ['1HO3rpCGMt2nnjV-Jy6Au2a8vMvGTQE7k', '18wHICliIbeBCwP65SIpE7XPal0gZsYzC', '1RWXsLMO9JeE0ArhYYZpqIYFtUU42EtjQ', '125Xo_QFfYHiQaRvu3m--DaO34XR2v2AT', '1BZTFPjLQKtAjxYrIRs6dxfL-0C8SYDtF', '1vflsr84P9qswXBuCCjFLj8g5TiBtdaLk', '1EatzbwRE3-J3_oCgbwns4cz0VdzutO2y', '1-cOAhmO7G7o5T3oA9ydmjO5coOBjtFrd']; //FB,FW,MB,MW
        //var files = ['elizabeth', 'kate', 'lewis', 'nathan']; //FB,FW,MB,MW
        //var files = ['https://dl.dropbox.com/s/0ngyvwy61na05rr/elizabeth_idle.fbx', 'https://dl.dropbox.com/s/iu9un8heefn8z8t/kate_idle.fbx', 'https://dl.dropbox.com/s/7su1zkawg6fh3oi/lewis_idle.fbx', 'https://dl.dropbox.com/s/4cbg6cy934v6ob9/brian_idle.fbx'];
        //var files2 = ['https://dl.dropbox.com/s/e679nywcj7al2vn/elizabeth_talking.fbx', 'https://dl.dropbox.com/s/rgbldp983aez9ry/kate_talking.fbx', 'https://dl.dropbox.com/s/d9x6yomz6cmmenx/lewis_talking.fbx', 'https://dl.dropbox.com/s/cvbhz2271gfbnxe/brian_talking.fbx'];
        //var files = ['https://dl.dropbox.com/s/wyllqrsahvwmx2x/idle_elizabeth.fbx', 'https://dl.dropbox.com/s/lxuv7a5idh89o5o/idle_jody.fbx', 'https://dl.dropbox.com/s/qf75d8qzr5t9v0m/idle_david.fbx', 'https://dl.dropbox.com/s/hdtasouo7f68wzb/idle_adam.fbx'];
        //var files2 = ['https://dl.dropbox.com/s/e679nywcj7al2vn/elizabeth_talking.fbx', 'https://dl.dropbox.com/s/f9fl7o7wmzcib6d/talking_jody.fbx', 'https://dl.dropbox.com/s/n0vbzfvfwyevksh/talking_david.fbx', 'https://dl.dropbox.com/s/rf9vo2ywao3s0yx/talking_adam.fbx'];

        agent_voice = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        let temp_voice = [1, 2];
        agent_voice_left = temp_voice[agent_voice % 2];
        //alert(agent_voice);
        //alert(agent_voice_left);
        switch (Number(store.getters.getGender)) {
            case 1:
                //selectedVoice = 1;
                value1 = 0;
                value2 = 1;
                //index = Math.random() < 0.5 ? value1 : value2;
                break;
            case 2:
                value1 = 2;
                value2 = 3;
                //index = Math.random() < 0.5 ? value1 : value2;
                break;
            case 3:
            case 4:
                //selectedVoice = 1;
                value1 = 0;
                value2 = 3;
                break;

        }
        var fileLoad, fileLoad_left;
        index = Math.floor(Math.random() * (value2 - value1 + 1)) + value1; //**************uncomment
       
        //alert(index);
        switch (index) {
            case 0:
                agentName = "Elizabeth";
                agentName2 = "Kate";
                fileLoad = "https://dl.dropbox.com/s/xsl6ugphov60mn8/elizabeth_multiple.glb"; 
                fileLoad_left = "https://dl.dropbox.com/s/knusjnqe1rg7j5k/jody_multiple.glb";
                gen = "f";
                index2 = 1;
                //selectedVoice = 1;
                break;
            case 1:
                agentName = "Kate";
                agentName2 = "Elizabeth";
                fileLoad_left = "https://dl.dropbox.com/s/xsl6ugphov60mn8/elizabeth_multiple.glb";
                fileLoad = "https://dl.dropbox.com/s/knusjnqe1rg7j5k/jody_multiple.glb";
                //selectedVoice = 1;
                gen = "f";
                index2 = 0;
                break;
            case 2:
                agentName = "Lewis";
                agentName2 = "Brian";
                fileLoad = "https://dl.dropbox.com/s/wd3n7o6egjikqts/david_multiple.glb";
                fileLoad_left = "https://dl.dropbox.com/s/5g71bagaw8v5vv3/shanon_multiple.glb";
                //selectedVoice = 0;
                gen = "m";
                index2 = 3;
                break;
            case 3:
                agentName = "Brian";
                agentName2 = "Lewis";
                fileLoad_left = "https://dl.dropbox.com/s/wd3n7o6egjikqts/david_multiple.glb";
                fileLoad = "https://dl.dropbox.com/s/5g71bagaw8v5vv3/shanon_multiple.glb";
                //selectedVoice = 0;
                gen = "m";
                index2 = 2;
                break;
        }
        store.commit('storeAgentName2', agentName2);
        var container = document.createElement('div');
        //var avatar = document.getElementById('avatar');
        container.classList.add("columnAvatar");

        container.id = "avatardiv";

        document.body.appendChild(container);

        //For agent 2

        var container_left = document.createElement('div');
        //var avatar = document.getElementById('avatar');
        container_left.classList.add("columnAvatar-left");

        container_left.id = "avatardiv_left";

        document.body.appendChild(container_left);

        // for agent 2 ended

        //var cont = document.getElementById('avatardiv');
        //cont.style.display = "none";
        camera_left = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
        camera_left.position.set(0, 250, 380);
        camera_left.zoom = 1.5;
        camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
        camera.position.set(0,250,380);
        camera.zoom = 1.5;
        //camera.position.set(0, -1.2, 2.5);
        
        //camera.rotation.set(90 * Math.PI /180, 0, 0);
        //alert(camera.rotation.x);
        //camera.rotation.x = 270 * Math.PI / 180;
        //
        //camera.up = new THREE.Vector3(0, 0, 1);
        //camera.lookAt(new THREE.Vector3(0, 0, 1.5));
        //alert(camera.rotation.x);
        //alert(JSON.stringify(camera.projectionMatrix));
        //camera.translateY(-50);
        //const xAxis = new THREE.Vector3(1, 0, 0);
        //camera.rotateOnWorldAxis(xAxis, THREE.Math.degToRad(90));
        //camera.updateProjectionMatrix();
        
        //alert(camera.rotation.x);
        //alert(JSON.stringify(camera.projectionMatrix));
        //alert(camera.projectionMatrix);
        //alert(camera.rotation.x);
        
        //const fullWidth = container.clientWidth * 3;
        //const fullHeight = container.clientHeight * 2;
        //camera.setViewOffset(fullWidth, fullHeight, container.clientWidth * 1, container.clientHeight * 0, container.clientWidth, container.clientHeight);
        
        //camera_left = camera;
        /* for left agent
        camera_left = new THREE.PerspectiveCamera(45, container_left.clientWidth / container_left.clientHeight, 1, 2000);
        camera_left.zoom = 0.75;
        camera_left.position.set(50, 150, 250);*/
        //const fullWidth_left = container_left.clientWidth * 3;
        //const fullHeight_left = container_left.clientHeight * 2;
        //camera_left.setViewOffset(fullWidth_left, fullHeight_left, container_left.clientWidth * 1, container_left.clientHeight * 0, container_left.clientWidth, container_left.clientHeight);
    // end for left agent

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        scene2 = new THREE.Scene();
        scene2.background = new THREE.Color(0xffffff);
        //scene.fog = new THREE.Fog(0xffffff, 200, 1000);
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 300, 300);
        scene.add(hemiLight);
        const hemiLight3 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8);
        hemiLight3.position.set(0, 500, 0);
        scene.add(hemiLight3);
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        /*const light1 = new THREE.PointLight(0x444444, 1);
        light1.position.set(50, 400, 200);
        scene.add(light1);

        const light2 = new THREE.PointLight(0x444444, 1);
        light2.position.set(-50, 400, 200);
        scene.add(light2);*/


        //var directionalLight = new THREE.DirectionalLight(0xffffff);
        //directionalLight.position.set(0, 1, 1).normalize();
        //scene.add(directionalLight);

        scene_left = new THREE.Scene();
        scene_left.background = new THREE.Color(0xffffff);
        scene2_left = new THREE.Scene();
        scene2_left.background = new THREE.Color(0xffffff);
        //scene_left.fog = new THREE.Fog(0xffffff, 200, 1000);
        const hemiLight2 = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight2.position.set(0, 300, 300);
        scene_left.add(hemiLight2);
        const hemiLight4 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8);
        hemiLight4.position.set(0, 500, 0);
        scene_left.add(hemiLight4);
        const ambientLight2 = new THREE.AmbientLight(0xffffff, 0.8);
        scene_left.add(ambientLight2);
        //scene_left.add(hemiLight2);
        /*index == 1;  // get rid of this later ///****************
        if (index == 0 || index == 2) {*/
        const light = new THREE.AmbientLight(0x808080); // soft white light
        scene.add(light);
        const light_left = new THREE.AmbientLight(0x808080); // soft white light
        scene_left.add(light_left);
        const lights = new THREE.DirectionalLight(0x808080, 0.1, 0);
        lights.position.set(0, 600, 0);
        scene.add(lights);
        const lights_left = new THREE.DirectionalLight(0x808080, 0.1, 0);
        lights_left.position.set(0, 600, 0);
        scene_left.add(lights_left);
        
        /*}
        else {
            const light2 = new THREE.AmbientLight(0xffffff); // soft white light
            scene.add(light2);
            const light2_left = new THREE.AmbientLight(0x808080); // soft white light
            scene_left.add(light2_left);
            const lights_left = new THREE.DirectionalLight(0xfffacd, 1, 0);
            lights_left.position.set(0, 50, 0);
            scene_left.add(lights_left);
            //const lights = new THREE.DirectionalLight(0xfffacd, 1, 0);
            //lights.position.set(0, 100, 0);
            //scene.add(lights);
        }*/


        /*const dirLight = new THREE.DirectionalLight(0x808080, 0.8);
        dirLight.position.set(0, 300, 50);
        dirLight.target.position.set(0, 50, 50);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 180;
        dirLight.shadow.camera.bottom = - 100;
        dirLight.shadow.camera.left = - 120;
        dirLight.shadow.camera.right = 120;
        scene.add(dirLight);
        scene.add(dirLight.target);
        //scene_left.add(dirLight);
        // adding to test
        const dirLight2 = new THREE.DirectionalLight(0x808080, 0.8);
        dirLight2.position.set(0, 300, 50);
        dirLight2.target.position.set(0, 50, 50);
        dirLight2.castShadow = true;
        dirLight2.shadow.camera.top = 180;
        dirLight2.shadow.camera.bottom = - 100;
        dirLight2.shadow.camera.left = - 120;
        dirLight2.shadow.camera.right = 120;
        //scene.add(dirLight2);
        scene_left.add(dirLight2);
        scene.add(dirLight2.target);*/
        // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

        // ground
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        //mesh.receiveShadow = true;
        scene.add(mesh);
        const mesh2 = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh2.rotation.x = - Math.PI / 2;
        //mesh2.receiveShadow = true;
        scene_left.add(mesh2);
        //const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
        //grid.material.opacity = 0.2;
        // grid.material.transparent = true;
        //scene.add(grid);

        // model
        /*if (avatarState == "talking") {
            fileLoad = 'david_talking.fbx';
        }
        else if (avatarState == "idle") {
            fileLoad = 'david_idle.fbx';
        }*/

        /*var fileLoad = files[index];
        var fileLoad2 = files2[index];
        
        const texture = new THREE.TextureLoader().load('https://previews.123rf.com/images/fotoslaz/fotoslaz1801/fotoslaz180100044/94024038-blonde-hair-for-background-and-texture-material.jpg');
        const m1 = new THREE.MeshPhongMaterial({ color: 0x021227, shininess: 10 }); // 0x002167 in blender
        const m2 = new THREE.MeshBasicMaterial({ color: 0x000001, shininess: 30, opacity:0.2, map:texture});
        let obj_name, find_index;*/
        //let object1 = new THREE.Material();
        //const loader = new FBXLoader();
        
        let model;

        const loader = new GLTFLoader();
        // Shannon(white male) https://dl.dropbox.com/s/5g71bagaw8v5vv3/shanon_multiple.glb
        //Elizabeth: https://dl.dropbox.com/s/xsl6ugphov60mn8/elizabeth_multiple.glb (0.6)
        // david : https://dl.dropbox.com/s/wd3n7o6egjikqts/david_multiple.glb
        loader.load(fileLoad, function (object) {
            //object.scene.scale.set(2, 2, 2);
            //alert(object.scene.scale.x);
            //alert("gltf camera");
            //alert(JSON.stringify(object.cameras[0].projectionMatrix));
            //camera = object.cameras[0];
            //camera.projectionMatrix = object.cameras[0].projectionMatrix;
            //camera.updateProjectionMatrix();
            //alert(JSON.stringify(camera.projectionMatrix));
            //let blenderCamera = object.cameras[0];
            //camera.position.x = blenderCamera.parent.position.x;
            //camera.position.y = blenderCamera.parent.position.y;
            //camera.position.z = blenderCamera.parent.position.z;
            
            //camera.aspect = blenderCamera.aspect;
            //camera.fov = blenderCamera.fov;
            //camera.far = blenderCamera.far;
            //camera.near = blenderCamera.near;
            //camera.position.copy(object.cameras[0].parent.position);
            //camera.quaternion.copy(object.cameras[0].parent.quaternion);
            //camera.scale.copy(object.cameras[0].parent.scale);
            //alert(object.scene.rotation.x);
            //Make an object

            //Create a matrix
            //var matrix = new THREE.Matrix4();
            //Rotate the matrix
            //matrix.makeRotationX(Math.PI / 2);

            //rotate the object using the matrix
            //object.scene.position.applyMatrix4(matrix);
            //alert(JSON.stringify(object.scene));
            object.scene.rotation.x = 70 * Math.PI / 180;
            //alert(object.scene.position.x);				    //Position (x = right+ left-)
            //object.scene.position.y = 0;				   // moving back+  //Position (y = up+, down-)
            //object.scene.position.z = 0;
            //object.scene.scale.set(0.01, 0.01, 0.01);
            //object.scene.rotation.y = 180 * Math.PI / 180;
            //object.scene.rotation.z = 180 * Math.PI / 180;
            //alert(object.scene.rotation.x);
            //alert(camera.position.y);
            //alert(camera.rotation.x);
            model = object.scene;
            scene.add(model);
            const fullWidth = container.clientWidth * 3;
            const fullHeight = container.clientHeight * 2;
            camera.setViewOffset(fullWidth, fullHeight, container.clientWidth * 1, container.clientHeight * 0, container.clientWidth, container.clientHeight);
            //alert(model.position.x);
            /*model.traverse(function (object2) {

                if (object2.isMesh) object2.castShadow = true;

            });*/
            //skeleton = new THREE.SkeletonHelper(model);
            //skeleton.visible = false;
            //scene.add(skeleton);
            const animations = object.animations;
            mixer = new THREE.AnimationMixer(model);

            let numAnimations = animations.length;
            //alert(numAnimations);
            //alert(JSON.stringify(animations));
            var reject = 10;
            var reject2 = 10;
            for (let i = 0; i < numAnimations; i++) {

                let clip = animations[i];
                const name = clip.name;
                //alert(name);
                if (name == 'idle') { idle_action = i; }
                else if (name == 'wave' || name == 'waving') { wave_action = i; }
                else if (name == 'question') { reject = i; }
                else if (name == 'thinking') { reject2 = i; }
                const action = mixer.clipAction(clip);
                action.timeScale = 0.65;
                action.weight = 0.6;
                actions.push(action);
            }
            //alert(random_actions);
            random_actions = random_actions.filter(function (value) {
                return (value != idle_action && value != wave_action && value != reject && value != reject2);
            });
            //alert(random_actions);
            //alert(JSON.stringify(actions));
            //avatarReady = true;
            //alert(actions[3].name);
            //actions[idle_action].timeScale = 0.8;
            actions[idle_action].play();
            activeAction = actions[idle_action];
            lastAction = actions[idle_action];
            
            //setAction(actions[5]);

        });

        // for left agent
        let model_left;
        const loader_left = new GLTFLoader();
        loader_left.load(fileLoad_left, function (object_left) {
            //jody: https://dl.dropbox.com/s/knusjnqe1rg7j5k/jody_multiple.glb
            // david: https://dl.dropbox.com/s/2uvvq3h0brh4606/david3.glb 
            // shanon: https://dl.dropbox.com/s/720dr791zfiseux/Shanon.glb
            // elizabeth_darker: https://dl.dropbox.com/s/hxm354mbjvo49cm/elizabeth_darker.glb
            object_left.scene.rotation.x = 70 * Math.PI / 180;
            
            model_left = object_left.scene;
            scene_left.add(model_left);
            const fullWidth2 = container_left.clientWidth * 3;
            const fullHeight2 = container_left.clientHeight * 2;
            camera_left.setViewOffset(fullWidth2, fullHeight2, container_left.clientWidth * 1, container_left.clientHeight * 0, container_left.clientWidth, container_left.clientHeight);
            //alert(model.position.x);
           /* model_left.traverse(function (object2_left) {

                if (object2_left.isMesh) object2_left.castShadow = true;
                //object2_left.material.tranparent = 0;
                //object2_left.material.opacity = 1;

            });*/
           
            const animations_left = object_left.animations;
            mixer_left = new THREE.AnimationMixer(model_left);

            let numAnimations_left = animations_left.length;
            //alert(numAnimations);
            //alert(JSON.stringify(animations));
            var reject_left = 10;
            var reject2_left = 10;
            for (let i = 0; i < numAnimations_left; i++) {

                let clip_left = animations_left[i];
                const name_left = clip_left.name;
                //alert(name_left);
                if (name_left == 'idle') { idle_action_left = i; }
                else if (name_left == 'wave' || name_left == 'waving') { wave_action_left = i; }
                else if (name_left == 'question') { reject_left = i; }
                else if (name_left == 'thinking') { reject2_left = i; }
                const action_left = mixer_left.clipAction(clip_left);
                action_left.timeScale = 0.7;
                action_left.weight = 1;
                actions_left.push(action_left);
            }
            //alert(random_actions);
            random_actions_left = random_actions_left.filter(function (value) {
                return (value != idle_action_left && value != wave_action_left && value != reject_left && value != reject2_left);
            });
            //alert(random_actions);
            //alert(JSON.stringify(actions));
            //avatarReady_left = true;
            //alert(actions[3].name);
            //actions_left[idle_action_left].timeScale = 1;
            actions_left[idle_action_left].play();
            activeAction_left = actions_left[idle_action_left];
            lastAction_left = actions_left[idle_action_left];

            //setAction(actions[5]);

        });

        /*loader.load(fileLoad, function (object) {
            obj_name = object.children[2].name.slice(0, 5);
            //alert(obj_name);
            let obj_name2 = obj_name + "Shirt";
            find_index = object.children.findIndex(x => x.name === obj_name2 || x.name === obj_name + "Cloth" || x.name === obj_name + "Hoodie" || x.name === obj_name + "Hoody");
            object.children[find_index].material = m1;
            //alert(object.children[find_index].name);
            //object.children[find_index].material = object.children[find_index].material.clone();
            //object.children[find_index].material.emissive.setHex(0x981E30);
            //object.children[find_index].material.opacity = 0;
            //object1.copy(object.children[find_index].material);
            if (index == 2) {
                let obj_name3 = obj_name + "Hair";
                find_index = object.children.findIndex(x => x.name === obj_name3);
                //object.children[find_index].material = object.children[find_index].material.clone();
                object.children[find_index].material = m2;
            }
            
            //object.children[find_index].material.fog = false;
            //object.children[find_index].material.transparency = false;
            //object.children[find_index].material.opacity = 1;
            //object.children[find_index].material.depthWrite = false;
            find_index = object.children.findIndex(x => x.name === obj_name + "Beard");
            if (find_index) {
                object.remove(object.children[find_index]);
            }
            


            mixer = new THREE.AnimationMixer(object);
            const loader2 = new FBXLoader();


            loader2.load(fileLoad2, function (object2) {
                object.animations.push(object2.animations[0]);
                //alert("Length of object" + object.animations.length)
                object.traverse(function (child) {

                    if (child.isMesh) {

                        child.castShadow = true;
                        child.receiveShadow = true;

                    }

                });

                if (object.animations.length == 3) {
                    //alert("All files loaded");
                    scene.add(object);
                    avatarReady = true;
                    //let object = scene.getObjectByName("avatar_animation");
                    //alert("Size of object after pushing is" + object.animations.length)
                    actions = [mixer.clipAction(object.animations[0]), mixer.clipAction(object.animations[2])];
                    //alert(actions);
                    actions[0].timeScale = 0.75;
                    //actions[1].timeScale = 0.75;
                    //alert(actions[0].timeScale);
                    actions[0].play();
                    activeAction = actions[0];
                    lastAction = actions[0];
                    //alert(actions);
                }


            });

        });*/

        // for agent on left

        /*var fileLoad_left = files[index2];
        var fileLoad2_left = files2[index2];
        const loader_left = new FBXLoader();
        

        loader_left.load(fileLoad_left, function (object_left) {
            //alert(object_left.scale.x);
            //alert(object_left.scale.y);
            //alert(object_left.scale.z);
            //alert(object_left.rotation.x);
            //alert(object_left.rotation.y);
            //alert(object_left.rotation.z);
            var obj_name_left = object_left.children[2].name.slice(0, 5);
            //alert(obj_name_left);
            let obj_name2_left = obj_name_left + "Shirt";
            var find_index_left = object_left.children.findIndex(x => x.name === obj_name2_left || x.name === obj_name_left + "Cloth" || x.name === obj_name_left + "Hoodie" || x.name === obj_name_left + "Hoody");
            object_left.children[find_index_left].material = m1;
            //alert(object1);
            //object_left.children[find_index_left].material = object_left.children[find_index_left].material.clone();
            //object_left.children[find_index_left].material.emissive.setHex(0x981E30);
            //object_left.children[find_index_left].material.opacity = 0;
            if (index2 == 2) {
                let obj_name3_left = obj_name_left + "Hair";
                find_index_left = object_left.children.findIndex(x => x.name === obj_name3_left);
                //object_left.children[find_index_left].material = object_left.children[find_index_left].material.clone();
                object_left.children[find_index_left].material = m2;
            }
            
            //object_left.children[find_index_left].material.fog = false;
            //object_left.children[find_index_left].material.opacity = 1;
            //object_left.children[find_index_left].material.transparency = false;
            //object_left.children[find_index_left].material.depthWrite = false;
            find_index_left = object_left.children.findIndex(x => x.name === obj_name_left + "Beard");
            if (find_index_left) {
                object_left.remove(object_left.children[find_index_left]);
            }
            mixer_left = new THREE.AnimationMixer(object_left);
            const loader2_left = new FBXLoader();


            loader2_left.load(fileLoad2_left, function (object2_left) {
                object_left.animations.push(object2_left.animations[0]);
                //alert("Length of object" + object.animations.length)
                object_left.traverse(function (child_left) {

                    if (child_left.isMesh) {

                        child_left.castShadow = true;
                        child_left.receiveShadow = true;

                    }

                });

                if (object_left.animations.length == 3) {
                    //alert("All files loaded");
                    scene_left.add(object_left);
                    avatarReady_left = true;
                    //let object = scene.getObjectByName("avatar_animation");
                    //alert("Size of object after pushing is" + object.animations.length)
                    actions_left = [mixer_left.clipAction(object_left.animations[0]), mixer_left.clipAction(object_left.animations[2])];
                    //alert(actions);
                    actions_left[0].timeScale = 1;
                    //actions[1].timeScale = 0.75;
                    //alert(actions[0].timeScale);
                    actions_left[0].play();
                    activeAction_left = actions_left[0];
                    lastAction_left = actions_left[0];
                    //alert(actions);
                }


            });

        });*/


        // end for agent on left

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.setClearColor(0xffffff, 0);
        // renderer.domElement.id = "avatardivelement";
        renderer.render(scene2, camera);

        renderer_left = new THREE.WebGLRenderer({ antialias: true });
        renderer_left.setPixelRatio(window.devicePixelRatio);
        renderer_left.setSize(container_left.clientWidth, container_left.clientHeight);
        renderer_left.shadowMap.enabled = true;
        renderer_left.setClearColor(0xffffff, 0);
        // renderer.domElement.id = "avatardivelement";
        renderer_left.render(scene2_left, camera_left);

        container.appendChild(renderer.domElement);
        container_left.appendChild(renderer_left.domElement);
        const controls = new OrbitControls(camera, renderer.domElement);
        //alert(controls.target.x);
        //alert(controls.target.y);
        //alert(controls.target.z);
        controls.target.set(0,100,0);
        //const xAxis = new THREE.Vector3(1, 0,0);
        //camera.rotateOnWorldAxis(xAxis, degToRad(90));
        controls.enabled = false;
        controls.update();
        const controls_left = new OrbitControls(camera_left, renderer_left.domElement);
        controls_left.target.set(0, 100, 0);
        controls_left.enabled = false;
        controls_left.update();

        window.addEventListener('resize', onWindowResize);

        // stats
        //stats = new Stats();
        //container.appendChild(stats.dom);

    }

    function onWindowResize() {
        var container = document.getElementById("avatardiv")
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(container.clientWidth, container.clientHeight);

         var container_left = document.getElementById("avatardiv_left");
         camera_left.aspect = container_left.clientWidth / container_left.clientHeight;
         camera_left.updateProjectionMatrix();
        // for agent on left

        renderer_left.setSize(container_left.clientWidth, container_left.clientHeight);
    }

    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer) mixer.update(delta);
        
        renderer.render(scene, camera);
        if (mixer_left) mixer_left.update(delta);
        renderer_left.render(scene_left, camera_left);

    }
    /*function animate_left() {

        requestAnimationFrame(animate_left);
        var delta_left = clock_left.getDelta();
        //alert(delta + "   " + delta_left);
        if (mixer_left) mixer_left.update(delta_left);
        renderer_left.render(scene_left, camera_left);

        //stats.update();

    }*/
	

    function setAction(toAction) {
        if (toAction != activeAction) {
            lastAction = activeAction;
            activeAction = toAction;
            //lastAction.stop()
            lastAction.fadeOut(1);
            activeAction.reset();
            //activeAction.timeScale = 0.7;
           // activeAction.weight = 0.7;
            activeAction.fadeIn(1);
            //activeAction.timeScale = 0.7;
            //activeAction.weight = 0.7;
            activeAction.play();
        }
    }

    function setAction_left(toAction_left) {
        if (toAction_left != activeAction_left) {
            lastAction_left = activeAction_left;
            activeAction_left = toAction_left;
            //lastAction.stop()
            lastAction_left.fadeOut(1);
            activeAction_left.reset();
            //activeAction_left.timeScale = 1;
            //activeAction_left.weight = 1;
            activeAction_left.fadeIn(1);
            //activeAction_left.timeScale = 1;
            //activeAction_left.weight = 1;
            activeAction_left.play();
        }
    }
    function randomize_goes_first() {

        //var agent1_script = [false, true, false, false, true, true, false, true, false]; // True for positive false for negative
        //var goes_first = [    1,      2,      1,      2,   1,   1,    2,      2,     1];
        
        //var goes_first2 = [   2,      1,  2,      1,      2,  2,      1,      1,    2];
        //var agent2_script = [true, false, true, true, false, false, true, false, true];
        var goes_first_true = [1,2,1,2];
        var goes_first_false = [1,2,1,2];
        var acc_order = [0, 1, 2, 3];
        var con_order = [0, 1, 2, 3];
        acc_order.sort(() => Math.random() - 0.5);
        goes_first_true = acc_order.map(i => goes_first_true[i]);
        con_order.sort(() => Math.random() - 0.5);
        goes_first_false = con_order.map(i => goes_first_false[i]);
        //alert(acc_order + con_order);
        var j = 0;
        var k = 0;
        goes_first[0] = Math.floor(Math.random() * (2 - 1 + 1)) + 1; //Math.floor(Math.random() * (value2 - value1 + 1)) + value1;
        for (i = 1; i < goes_first.length ; i++) {
            if (agent1_script[i]) {
                goes_first[i] = goes_first_true[j];
                j++;
            }
            else if (!agent1_script[i]) {
                goes_first[i] = goes_first_false[k];
                k++;
            }
        }
        //alert(goes_first_true + goes_first_false);
        //alert(goes_first);
    }
    randomize_goes_first();
    function decide_agent_turn() {
        agent_turn = goes_first[counter];
        let temp = [1, 2];
        agent_turn_reverse = temp[agent_turn % 2];
        //alert(agent_turn);
        //alert(agent_turn_reverse);
    }

    function random_actionList(whichAgent) {
        random_actions_order.sort(() => Math.random() - 0.5);
        if (whichAgent == 1) {
            random_actions = random_actions_order.map(i => random_actions[i]);
        }
        else if (whichAgent == 2){
            random_actions_left = random_actions_order.map(i => random_actions_left[i]);
        }
    }

    function actuate_agent_talking(which_agent, intro = false) { // 1 right - 2 left
        avatarReady_left = false;
        avatarReady = false;
       // var arrow1 = document.getElementById("arrow_right");
        //arrow1.style.display = "none";
        if (!intro) {
            var box_item = document.getElementById("4" + user_initial_rankings[counter].toString());
        //alert("4" + user_initial_rankings[counter].toString());
            box_item.style.borderColor = "red";
            box_item.style.borderWidth = "0.3vw";
            box_item.style.backgroundColor = "red";

        }
        var arrow = document.getElementById("arrow_left");
        arrow.style.display = "none";
        var point = document.getElementById("arrow_point");
        if (which_agent == 1) {
            var index_item = avatar_order.findIndex(x => x === counter);
            //alert(index_item);
            arrow.style.display = "block";
            arrow.style.backgroundColor = "#ade6d8";
            point.className = "right-point";
            random_actionList(1);
            avatarReady = true;
            setAction_left(actions_left[idle_action_left]);
            if (intro) {
                setAction(actions[wave_action]);
            }
            else {
                setAction(actions[random_actions[0]]);
               
                var box = document.getElementById("3" + index_item.toString());
                box.style.borderWidth = "0.3vw";
                box.style.borderColor = "#4bc8a9";
                box.style.backgroundColor = "#4bc8a9";
            }
            setTimeout(function () {
                /*if (intro) {
                    var box = document.getElementById("3" + index_item.toString());
                    box.style.borderWidth = "0.3vw";
                    box.style.borderColor = "#4bc8a9";
                }*/
                
                if (avatarReady) { setAction(actions[random_actions[1]]); }
                setTimeout(function () {
                    if (avatarReady) { setAction(actions[random_actions[2]]); }
                    setTimeout(function () {
                        if (avatarReady) { setAction(actions[random_actions[3]]); }
                        setTimeout(function () {
                            if (avatarReady) { setAction(actions[random_actions[4]]); }
                            setTimeout(function () {
                                if (avatarReady) { setAction(actions[random_actions[5]]); }
                            }, 5000);
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }
        else if (which_agent == 2) {
            arrow.style.display = "block";
            arrow.style.backgroundColor = "#e6d8ad";
            point.className = "left-point";
            var index_item2 = avatar_order_left.findIndex(x => x === counter);
            random_actionList(2);
            avatarReady_left = true;
            setAction(actions[idle_action]);
            if (intro) {
                setAction(actions_left[wave_action_left]);
            }
            else {
                var box2 = document.getElementById("3" + index_item2.toString());
                box2.style.borderColor = "#bfb43a";
                box2.style.borderWidth = "0.3vw";
                box2.style.backgroundColor = "#bfb43a";
                setAction(actions_left[random_actions_left[0]]);
            }
            setTimeout(function () {
                
                
                if (avatarReady_left) {
                    /*if (intro) {
                        var box = document.getElementById("3" + index_item.toString());
                        box.style.borderColor = "#bfb43a";
                        box.style.borderWidth = "0.3vw";
                    }*/
                    setAction(actions_left[random_actions_left[1]]);
                }
                setTimeout(function () {
                    if (avatarReady_left) { setAction(actions_left[random_actions_left[2]]); }
                    setTimeout(function () {
                        if (avatarReady_left) { setAction(actions_left[random_actions_left[3]]); }
                        setTimeout(function () {
                            if (avatarReady_left) { setAction(actions_left[random_actions_left[4]]); }
                            setTimeout(function () {
                                if (avatarReady_left) { setAction(actions_left[random_actions_left[5]]); }
                            }, 5000);
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }
        else {
            setAction_left(actions_left[idle_action_left]);
            setAction(actions[idle_action]);
            

        }
        

    }


    // for Timer

   

    function onTimesUp() {
        clearInterval(timerInterval);
        //alert(timesUp);
        var temp = document.getElementById("emergencyTask");
        temp.style.display = "none";
       // emergency_sound.pause();
        temp = document.getElementById("timer-clock");
        temp.style.display = "none";
        //temp = document.getElementById("avatardiv");
        //temp.style.display = "none";
        temp = document.getElementById("avatardiv_left");
        temp.style.display = "none";
        temp = document.getElementById("agentSurvey");
        temp.style.display = "block";
        temp = document.getElementById("agentForm");
        temp.textContent = "Post-Study Questionnaire for " + agentName;
        temp = document.getElementById("agentFormText");
        temp.textContent = "Please take some time to answer few questions about " + agentName + " on the next few pages";
        temp = document.getElementById("proceedA1");
        temp.style.display = "inline-block";
        var user_data = store.getters.getUserData;
        var state = JSON.stringify(items);
        //time_picking_agent = 11;
        //alert("user_data " + JSON.stringify(user_data));
        var json_obj = {
            user_initial_rankings: JSON.stringify(user_initial_rankings),
            agent1_rankings: JSON.stringify(avatar_rankings),
            agent2_rankings: JSON.stringify(avatar_left_rankings),
            user_final_rankings: JSON.stringify(user_final_rankings),
            state: state,
            condition: condition,
            agent_index: index,
            goes_first: JSON.stringify(goes_first),
            agent_voice: agent_voice,
            agent_picked_in_emergency: agent_picked_in_emergency,
            time_picking_agent: time_picking_agent
        };
        //alert("json_obj " + JSON.stringify(json_obj));
        //json_obj.putAll(JSON.parse(user_data));
        let store_data = {
            ...user_data,
            ...json_obj
        };

        store.commit('storeUserData', store_data);

    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }


    export default {
        name: "App",
        components: {
            draggable,
            UserCard,
            SurveyComponent,
            PostSurvey,
            PostSurveyA2,
            ThankYou
            //modelFbx
        },
        metaInfo: {
            title: 'Desert Survival Task'
        },



        data() {
            return {
                enabled: false,
                enabled2: false,
                userNewList: [
                    {
                        id: 11,
                        name2: 1,
                        name3: 21,
                        name: " ",
                        name4: 30,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 12,
                        name2: 2,
                        name3: 22,
                        name: " ",
                        name4: 31,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 13,
                        name2: 3,
                        name3: 23,
                        name: " ",
                        name4: 32,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 14,
                        name2: 4,
                        name3: 24,
                        name: " ",
                        name4: 33,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 15,
                        name2: 5,
                        name3: 25,
                        name: " ",
                        name4: 34,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 16,
                        name2: 6,
                        name3: 26,
                        name: " ",
                        name4: 35,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 17,
                        name2: 7,
                        name3: 27,
                        name: " ",
                        name4: 36,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 18,
                        name2: 8,
                        name3: 28,
                        name: " ",
                        name4: 37,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 19,
                        name2: 9,
                        name3: 29,
                        name: " ",
                        name4: 38,
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    }
                ],
                users: [
                    {
                        id: 1,
                        name4: 41,
                        name: "a map of New Mexico",
                        avatar: "https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"
                    },
                    {
                        id: 2,
                        name4: 42,
                        name: "the book- Edible Animals of the Desert",
                        avatar: "https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"
                    },
                    {
                        id: 3,
                        name4: 43,
                        name: "a pair of sunglasses per person",
                        avatar: "https://columbia.scene7.com/is/image/ColumbiaSportswear2/C110SP_022_f?$x1_grid$&v=1624997482"
                    },
                    {
                        id: 4,
                        name4: 44,
                        name: "first aid kit",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"
                    },
                    {
                        id: 5,
                        name4: 45,
                        name: "cosmetic mirror",
                        avatar:
                            "https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"
                    },
                    {
                        id: 6,
                        name4: 46,
                        name: "flashlight (four-battery size)",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"
                    },
                    {
                        id: 7,
                        name4: 47,
                        name: "magnetic compass",
                        avatar:
                            "https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"
                    },
                    {
                        id: 8,
                        name4: 48,
                        name: "vodka 180-proof 2 quart flask per person",
                        avatar:
                            "https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"
                    },
                    {
                        id: 9,
                        name4: 49,
                        name: "a plastic raincoat per person",
                        avatar:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"
                    }
                ],
                avatarList: [
                    {
                        id: 1,
                        name: "a map of New Mexico",
                    },
                    {
                        id: 2,
                        name: "the book- Edible Animals of the Desert",
                    },
                    {
                        id: 3,
                        name: "a pair of sunglasses per person",
                    },
                    {
                        id: 4,
                        name: "first aid kit",
                    },
                    {
                        id: 5,
                        name: "cosmetic mirror",
                    },
                    {
                        id: 6,
                        name: "flashlight (four-battery size)",
                    },
                    {
                        id: 7,
                        name: "magnetic compass",
                    },
                    {
                        id: 8,
                        name: "vodka 180-proof 2 quart flask per person",
                    },
                    {
                        id: 9,
                        name: "a plastic raincoat per person",
                    }
                ],
                avatarList_left: [
                    {
                        id: 1,
                        name: "a map of New Mexico",
                    },
                    {
                        id: 2,
                        name: "the book- Edible Animals of the Desert",
                    },
                    {
                        id: 3,
                        name: "a pair of sunglasses per person",
                    },
                    {
                        id: 4,
                        name: "first aid kit",
                    },
                    {
                        id: 5,
                        name: "cosmetic mirror",
                    },
                    {
                        id: 6,
                        name: "flashlight (four-battery size)",
                    },
                    {
                        id: 7,
                        name: "magnetic compass",
                    },
                    {
                        id: 8,
                        name: "vodka 180-proof 2 quart flask per person",
                    },
                    {
                        id: 9,
                        name: "a plastic raincoat per person",
                    }
                ]

            };
        },
        methods: {
            atHome: function () {
                init();
                var sect = document.getElementById("intro");
                sect.style.display = "inline-block";
                sect.textContent = "It is approximately 10 a.m. in mid-August and you have just crash landed in a desert in New Mexico, US.  Only 10 of you were able to survive. The plane, containing the bodies of the pilots and rest of the crew, has completely burned.  Only the air frame remains.  None of the rest of you are injured. Before the plane caught fire, your group was able to salvage 9 items in good condition. The pilot was unable to notify anyone of your position before the crash, however, he had indicated that you were 70 miles S/SW from a mining camp which is the nearest known habitation, and that you were approximately 65 miles off course. The last weather report indicated that the temp would reach 110 that day, which means that at ground level it will be almost 130.  You are dressed in light weight clothing: short sleeved shirts, pants, socks and street shoes. ";
                sect = document.getElementById("introb");
                sect.style.display = "inline-block";
                sect.textContent = "Before the plane caught fire, your group was able to salvage 9 items in good condition.  Your task is to rank these items according to their importance to your survival, with 1 being the most important and 9 being the least important.";
                btn = document.getElementById("home");
                btn.style.display = "none";
                var btn = document.getElementById("start");
                btn.style.display = "inline-block";
                btn.disabled = true;
                setTimeout(function () {
                    btn.disabled = false;
                }, 10000);
            },
            random_userList: function () {
                item_order.sort(() => Math.random() - 0.5);
                this.users = item_order.map(i => this.users[i]);
                //alert(JSON.stringify(this.users));
            },

            reorder_avatarList: function () {
                this.avatarList = avatar_order.map(i => this.users[i]);
                avatar_rankings = this.returnRankings('avatar');

                this.avatarList_left = avatar_order_left.map(i => this.users[i]);
                avatar_left_rankings = this.returnRankings('avatar_left');
                //alert(avatar_rankings);
                //alert(JSON.stringify(this.avatarList));

            },
            

            

            disable() {
                this.enabled = false;
            },
            enable() {
                this.enabled = true;
            },
            disableNew() {
                this.enabled2 = false;
            },
            enableNew() {
                this.enabled2 = true;
            },
            returnText: function (condition) {
                var tempStr, tempStr_left, continuer, continuer_left;
                //var avatarIndex = counter;
                let audio_src, audio_src_left, continuer_src, continuer_src_left;
                let index_script = this.users[counter].id;
                if (agent1_script[counter]) { // + represents A1 and - represents A2 which are randomly black or white
                    continuer_src = "move_up" + "_" + gen + "_" + agent_voice + ".mp3";
                    continuer_src_left = "move_down" + "_" + gen + "_" + agent_voice_left + ".mp3";
                    continuer = "You should move this item up in the ranking. ";
                    continuer_left = "You should move this item down in the ranking. ";
                    if (counter == 0) {
                        continuer_left= "You should not move this item in the ranking. ";
                        continuer_src_left = "move_no" + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (counter == 8) {
                        continuer = "You should not move this item in the ranking. ";
                        continuer_src = "move_no" + "_" + gen + "_" + agent_voice + ".mp3";
                    }
                    if (condition == 1) {// +Expert -expert
                        tempStr = script1[index_script - 1];
                        audio_src = "audio1_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script2[index_script - 1];
                        audio_src_left = "audio2_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (condition == 2) { // +novice -novice
                        tempStr = script3[index_script - 1];
                        audio_src = "audio3_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script4[index_script - 1];
                        audio_src_left = "audio4_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (condition == 3) { // +Expert -novice
                        tempStr = script1[index_script - 1];
                        audio_src = "audio1_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script4[index_script - 1];
                        audio_src_left = "audio4_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (condition == 4) { // +novice -expert
                        tempStr = script3[index_script - 1];
                        audio_src = "audio3_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script2[index_script - 1];
                        audio_src_left = "audio2_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                }
                else {
                    continuer_src = "move_down" + "_" + gen + "_" + agent_voice + ".mp3";
                    continuer_src_left = "move_up" + "_" + gen + "_" + agent_voice_left + ".mp3";
                    continuer = "You should move this item down in the ranking. ";
                    continuer_left = "You should move this item up in the ranking. ";
                    if (counter == 0) {
                        continuer_left = "You should not move this item in the ranking. ";
                        continuer_src_left = "move_no" + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (counter == 8) {
                        continuer = "You should not move this item in the ranking. ";
                        continuer_src = "move_no" + "_" + gen + "_" + agent_voice + ".mp3";
                    }
                    if (condition == 1) {// -Expert + expert
                        tempStr = script2[index_script - 1];
                        audio_src = "audio2_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script1[index_script - 1];
                        audio_src_left = "audio1_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";

                    }
                    else if (condition == 2) { // -novice +novice
                        tempStr = script4[index_script - 1];
                        audio_src = "audio4_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script3[index_script - 1];
                        audio_src_left = "audio3_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (condition == 3) { // -expert + novice
                        tempStr = script2[index_script - 1];
                        audio_src = "audio2_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script3[index_script - 1];
                        audio_src_left = "audio3_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                    else if (condition == 4) { // -novice + expert
                        tempStr = script4[index_script - 1];
                        audio_src = "audio4_" + index_script + "_" + gen + "_" + agent_voice + ".mp3";
                        tempStr_left = script1[index_script - 1];
                        audio_src_left = "audio1_" + index_script + "_" + gen + "_" + agent_voice_left + ".mp3";
                    }
                }

                //alert(this.avatarList[counter].id);
                //var finding = this.avatarList[counter].id;
                //var userIndex = this.users.findIndex(x => x.id === finding);
                //alert(avatarIndex + "   " + userIndex);



                return [tempStr, audio_src, continuer, continuer_src, tempStr_left, audio_src_left, continuer_left, continuer_src_left];
            },
            returnRankings: function (userAvatar = 'user') {
                var ranking = [];
                if (userAvatar == 'user') {
                    for (let i = 0; i < this.userNewList.length; i++) {
                        ranking.push(this.userNewList[i].id);
                    }
                }
                else if (userAvatar == 'userInitial') {
                    for (let i = 0; i < this.users.length; i++) {
                        ranking.push(this.users[i].id);
                    }
                }
                else if (userAvatar == 'avatar') {
                    for (let i = 0; i < this.avatarList.length; i++) {
                        ranking.push(this.avatarList[i].id);
                    }
                }
                else if (userAvatar == 'avatar_left') {
                    for (let i = 0; i < this.avatarList_left.length; i++) {
                        ranking.push(this.avatarList_left[i].id);
                    }
                }
                return ranking;
            },
            startInitialRanking: function (event) {
                //init();

                this.enable();
                this.random_userList();
                var sect = document.getElementById("user_list");
                sect.style.display = "block";
                event.target.style.display = "none";
                sect = document.getElementById("intro");
                sect.style.display = "none";
                sect = document.getElementById("introb");
                sect.style.display = "none";
                sect = document.getElementById("intro2");
                sect.style.display = "none";
                sect = document.getElementById("centerColumn");
                sect.style.display = "block";
                sect = document.getElementById("headingColumn");
                sect.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block";
                inst.textContent = "Drag and drop the items to order the list";
                //sect = document.getElementById("avatar");
                //sect.style.display = "none";
                sect = document.getElementById("begin");
                sect.style.display = "inline-block";
                sect.disabled = true;



                setTimeout(function () {
                    sect.disabled = false;
                }, 10000);

            },
            doneInitialRanking: function (event) {
                user_initial_rankings = this.returnRankings('userInitial');
                //alert(user_initial_rankings);
                //alert(avatar_rankings);
                this.disable();
                event.target.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.style.display = "none";
                var sect = document.getElementById("intro2");
                sect.style.display = "inline-block";
                sect.textContent = "Now you'll have a chance to interact two Virtual AI agents. The agents will present you with their reasoning for placement of these items. You will create a new ranking list based on the interaction. Please review your initial list while the agents analyze it as well to talk to you about it. The ranking of both agents for the item under discussion will be highlighted for your consideration. ";
                //var cont = document.getElementById("avatardiv");
                //cont.style.display = "block";
                //cont = document.getElementById("avatardivelement");
                //cont.style.display = "block";
                //init();
                document.getElementById("user_list").style.top = "2px";
                sect = document.getElementById("heading");
                sect.style.display = "none";
                var btn = document.getElementById("interact");
                btn.disabled = true;
				var inst2 = document.getElementById("intro3");
				inst2.style.display = "inline-block";
				inst2.textContent = "The agents are analyzing your list!!!";
                setTimeout(function () {
					inst2.textContent = "The agents are ready!!!";
                    animate();
                    //animate_left();
					btn.style.display = "inline-block";
					btn.disabled = false;
                }, 100);



            },
            placeItem: function (event) {
                avatarReady = false;
                avatarReady_left = false;
                var button_name = event.currentTarget.id;
                var set_index = this.userNewList.findIndex(x => x.name2 === parseInt(button_name));
                this.userNewList[set_index].id = this.users[counter].id;
                this.userNewList[set_index].name = this.users[counter].name;
                this.userNewList[set_index].avatar = this.users[counter].avatar;
                items[counter].item_placed_at = set_index+1;
                //alert(items[counter].item_placed_at);
                //alert(this.userNewList[button_name - 1].id);
                //alert(this.userNewList.name);
                let sect;
                for (let i = 1; i < 10; i++) {
                    sect = document.getElementById(i);
                    sect.disabled = true;
                    sect.style.display = "none";
                }
                //this.userNewList[button_name - 1].name2 = 99;
                this.userNewList[set_index].name3 = 99;
                var btn = document.getElementById("done_drag");
                btn.style.display = "inline-block";
                this.enableNew();
                var inst = document.getElementById("drag_inst");
                inst.textContent = "Drag the items in new list if you want to change their position. Then continue!";
                //this.userNewList[button_name - 1].id = 99;
                var index_item = avatar_order_left.findIndex(x => x === counter);
                var box = document.getElementById("3" + index_item.toString());
                box.style.borderColor = "black";
                box.style.borderWidth = "0.1vw";
                box.style.backgroundColor = "#aaa";
                index_item = avatar_order.findIndex(x => x === counter);
                box = document.getElementById("3" + index_item.toString());
                box.style.borderColor = "black";
                box.style.borderWidth = "0.1vw";
                box.style.backgroundColor = "#aaa";
                box = document.getElementById("4" + user_initial_rankings[counter].toString());
                box.style.borderColor = "black";
                box.style.borderWidth = "0.1vw";
                box.style.backgroundColor = "#aaa";
            },
            beginInteraction: function (event) {
				var inst2 = document.getElementById("intro3");
				inst2.style.display = "none";
                this.reorder_avatarList();
                event.target.style.display = "none";
                
                var sect = document.getElementById("intro2");
                sect.style.display = "none";
                sect = document.getElementById("userNewRanking");
                sect.style.display = "block";
                decide_agent_turn();
                //agent_turn = 2;
                //agent_turn_reverse = 1;
                
                // actuate agent right and idle agent left
                
                var inst = document.getElementById("drag_inst");
                //changing here
                inst.style.display = "none";
                inst = document.getElementById("agent_speech");
                //inst.style.display = "inline-block";
                let say,say_left;
                let say2, audio_src, say2_left, audio_src_left, continuer, continuer_src, continuer_left, continuer_src_left;
                if (agent_turn == 1) {
                    say = "Hi. I am " + agentName;// + ". Here is my list. I'll discuss my rankings with you item by item... Let's start with the first item on the list.";
                    say_left = "Hi. I am " + agentName2;
                    [say2, audio_src, continuer, continuer_src, say2_left, audio_src_left, continuer_left, continuer_src_left] = this.returnText(condition);
                }
                else if (agent_turn == 2){
                    say = "Hi. I am " + agentName2;// + ". Here is my list. I'll discuss my rankings with you item by item... Let's start with the first item on the list.";
                    say_left = "Hi. I am " + agentName;
                    [say2_left, audio_src_left, continuer_left, continuer_src_left, say2, audio_src, continuer, continuer_src] = this.returnText(condition);
                }
               
                //alert(JSON.stringify(say2));
                inst.textContent = say;
                actuate_agent_talking(agent_turn, true);

                const sound = new Audio();
                sound.src = "intro" + "_" + index + "_" + agent_voice + ".mp3";
                sound.play();
                sound.addEventListener('ended', function () {
                    actuate_agent_talking(agent_turn_reverse, true);
                    const sound2 = new Audio();
                    inst.textContent = say_left;
                    sound2.src = "intro" +"_"+ index2 + "_" + agent_voice_left + ".mp3";
                    sound2.play();
                    sound2.addEventListener('ended', function () {
                        actuate_agent_talking(agent_turn);

                        inst.textContent = continuer + say2;
                        const greetingSpeech2a = new Audio();
                        greetingSpeech2a.src = continuer_src;
                        greetingSpeech2a.play();
                        greetingSpeech2a.addEventListener('ended', function () {
                        //inst.textContent = say2;
                            const greetingSpeech2 = new Audio();
                            greetingSpeech2.src = audio_src;
                            greetingSpeech2.play();
                            greetingSpeech2.addEventListener('ended', function () {
                                // actuate agent left and idle agent right
                                actuate_agent_talking(agent_turn_reverse);
                                inst.textContent = continuer_left + say2_left;
                                const greetingSpeech3a = new Audio();
                                greetingSpeech3a.src = continuer_src_left;
                                greetingSpeech3a.play();
                                greetingSpeech3a.addEventListener('ended', function () {
                                    const greetingSpeech3 = new Audio();
                                    greetingSpeech3.src = audio_src_left;
                                    greetingSpeech3.play();
                                    greetingSpeech3.addEventListener('ended', function () {
                                        var btn = document.getElementById("drag");
                                        btn.style.display = "inline-block";
                                        //avatarReady_left = false;
                                        //alert("I am here");
                                        //setAction_left(actions_left[idle_action_left]);
                                        actuate_agent_talking(3);
                                    });
                                });
                            });
                        });

                    });
                });


            },
            makeDraggable: function (event) {
                avatarReady = false;
                avatarReady_left = false;
                //items[counter].updates = 1;
                //total_updates += 1;
                //alert(total_updates);
                //inst = document.getElementById("agent_speech");
                //inst.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block"
                inst.innerHTML = "Place " + this.users[counter].name + " in one of the place holders in the new list below. <br /> After placing the current item you can re-arrange your list before proceeding.";
                event.target.style.display = "none";
                //var btn = document.getElementById("noDrag");
                //btn.style.display = "none";
                let sect;
                for (let i = 1; i < 10; i++) {
                    sect = document.getElementById(i);
                    if (sect.name != 99) {
                        sect.disabled = false;
                        sect.style.display = "block";

                    }

                }

                //this.enable(); // for enabling user initial list


            },
            /*skipUpdating: function (event) {
                event.target.style.display = "none";
                var btn = document.getElementById("drag");
                btn.style.display = "none";
                this.doneDragging();
                avatarReady = false;
                avatarReady_left = false;
            },*/
            doneDragging: function () {
                avatarReady = false;
                avatarReady_left = false;
                let say, say_left, tempStr, tempStr_left, continuer, continuer_src, continuer_left, continuer_src_left;
                let audio_src, audio_src_left;
                items[counter].rankings = this.returnRankings();
                //alert(counter + "printing item "+ JSON.stringify(items[counter]));
                this.disableNew()
                var btn = document.getElementById("done_drag");
                btn.style.display = "none";
                counter += 1;
                var inst;
                //alert("In dragging" + counter);
                //alert(counter);
                if (counter >= 9) {
                    this.enableNew();
                    inst = document.getElementById("drag_inst");
                    inst.textContent = "Please finalize and submit your rankings before concluding the study";
                    btn = document.getElementById("submit");
                    btn.style.display = "inline-block";
                }
                else {
                    inst = document.getElementById("drag_inst");
                    inst.style.display = "none";
                    inst = document.getElementById("agent_speech");
                    
                    this.disable();

                    if (counter < 9) {
                        decide_agent_turn();
                        //agent_turn = 2;
                        //agent_turn_reverse = 1;
                        
                        // actuate right agent and idle left
                        actuate_agent_talking(agent_turn);
                        
                        const greetingSpeech = new Audio();
                        if (agent_turn == 1) {
                            [tempStr, audio_src, continuer, continuer_src, tempStr_left, audio_src_left, continuer_left, continuer_src_left] = this.returnText(condition);
                            say = continuer + tempStr;
                            say_left = continuer_left + tempStr_left;
                            
                            
                        }
                        else if (agent_turn == 2) {
                            [tempStr_left, audio_src_left, continuer_left, continuer_src_left, tempStr, audio_src, continuer, continuer_src] = this.returnText(condition);
                            say = continuer + tempStr;
                            say_left = continuer_left + tempStr_left;
                        }
                        
                        //inst.textContent = "The agent tries to convince the participant about item " + JSON.stringify(counter + 1);
                        //greetingSpeech.text = "I'll try to convince you about item " + JSON.stringify(counter + 1);
                        inst.textContent = say;
                        greetingSpeech.src = continuer_src;
                        greetingSpeech.play();
                        const greetingSpeech2 = new Audio();
                        greetingSpeech2.src = audio_src;
                        greetingSpeech.addEventListener('ended', function () {
                            greetingSpeech2.play();
                            const greetingSpeech2b = new Audio();
                            greetingSpeech2b.src = continuer_src_left;
                            greetingSpeech2.addEventListener('ended', function () {
                                actuate_agent_talking(agent_turn_reverse);
                                inst.textContent = say_left;
                                greetingSpeech2b.play();
                                const greetingSpeech3 = new Audio();
                                greetingSpeech3.src = audio_src_left;
                                greetingSpeech2b.addEventListener('ended', function () {
                                    // actuate agent left and idle agent right
                                    greetingSpeech3.play();
                                    greetingSpeech3.addEventListener('ended', function () {
                                        btn = document.getElementById("drag");
                                        btn.style.display = "inline-block";
                                        //btn = document.getElementById("noDrag");
                                        //btn.style.display = "inline-block";
                                        //alert("I am here");
                                        //avatarReady_left = false;
                                        //setAction_left(actions_left[idle_action_left]);
                                        actuate_agent_talking(3);

                                    });
                                });
                            });
                        });

                        //}, 100);

                    }
                    else {
                        this.enableNew();
                        avatarReady = false;
                        setAction(actions[idle_action]);
                        avatarReady_left = false;
                        setAction_left(actions_left[idle_action_left]);
                        //inst = document.getElementById("agent_speech");
                        //inst.style.display = "none";
                        inst = document.getElementById("drag_inst");
                        inst.style.display = "inline-block";
                        inst.textContent = "Please finalize and submit your rankings before concluding the study";
                        btn = document.getElementById("submit");
                        btn.style.display = "inline-block";
                    }





                }



            },
            submitRankings: function (event) {
                user_final_rankings = this.returnRankings();
                event.target.style.display = "none";
                this.disable();
                var inst = document.getElementById("drag_inst");
                inst.textContent = "Thank you for taking the time to complete the study. Please proceed to post-study questionnaires";
                //this.actual_match();
                
                document.body.style.paddingLeft = '0vw';
                var temp = document.getElementById("centerColumn");
                temp.style.display = "none";
                temp = document.getElementById("userNewRanking");
                temp.style.display = "none";
                temp = document.getElementById("user_list");
                temp.style.display = "none";
               // temp = document.getElementById("avatar");
                //temp.style.display = "none";
                temp = document.getElementById("headingColumn");
                temp.style.display = "block";
                temp.style.paddingLeft = "25vw";
                //temp = document.getElementById("avatardiv");
                //temp.style.display = "none";
                //temp = document.getElementById("avatardiv_left");
                //temp.style.display = "none";

                //adding time pressure task
                temp = document.getElementById("heading");
                temp.style.display = "block";
                temp.style.maxWidth = "50vw";
                temp.textContent = "Alert!!!";
                temp.style.color = "red";
                temp = document.getElementById("intro");
                temp.style.display = "block";
                temp.style.maxWidth = "50vw";
                temp.textContent = "There has been an emergency. The malfunctioned engine is about to blast. You have less than a minute to escape the site of crash. Each agent has selected 3 of the 9 items to make a survival kit for you. "
                temp = document.getElementById("introb");
                temp.style.display = "block";
                temp.style.maxWidth = "50vw";
                temp.textContent = "You do not have the time to look at the contents the survival kits. You have to pick ONE of the 2 kits in 10 seconds. The timer will start as soon as you click Continue."
                temp = document.getElementById("pick_btn");
                temp.style.display = "block";
                
                
                
                /*emergency_sound.play();
                emergency_sound.addEventListener('ended', function () {
                    emergency_sound.play();

                });*/

                temp = document.getElementById("agent_img");
                temp.src = agentName + ".png";
                temp = document.getElementById("agent_name");
                temp.textContent = agentName;
                temp = document.getElementById("agent_img_a2");
                temp.src = agentName2 + ".png";
                temp = document.getElementById("agent_name_a2");
                temp.textContent = agentName2;

                

            },
            chooseOne: function () {

                var temp = document.getElementById("emergencyTask");
                temp.style.display = "block";
                temp = document.getElementById("headingColumn");
                temp.style.display = "none";
                temp = document.getElementById("chooseOneBtn");
                temp.style.display = "none";
                temp = document.getElementById("pick_btn");
                temp.style.display = "none";
                temp = document.getElementById("kit-left");
                temp.textContent =  agentName2 + "'s kit";
                temp = document.getElementById("kit-right");
                temp.textContent =  agentName + "'s kit";
                temp = document.getElementById("timer-clock");
                temp.style.display = "block";
                temp.innerHTML = `<div class="base-timer">
                      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                          <path
                            id="base-timer-path-remaining"
                            stroke-dasharray="283"
                            class="base-timer__path-remaining ${remainingPathColor}"
                            d="
                              M 50, 50
                              m -45, 0
                              a 45,45 0 1,0 90,0
                              a 45,45 0 1,0 -90,0
                            "
                          ></path>
                        </g>
                      </svg>
                      <span id="base-timer-label" class="base-timer__label">${formatTime(
                                        timeLeft
                                    )}</span>
                    </div>
                    `;
                startTimer();
                

            },
            kitChoosen: function (event) {
                //alert(event.currentTarget.id);

                var temp = document.getElementById("agentSurvey");
                temp.style.display = "block";
                temp = document.getElementById("agentForm");
                temp.textContent = "Post Study Questionnaire for " + agentName;
                temp = document.getElementById("agentFormText");
                temp.textContent = "Next, please take some time to rate your perceptions of " + agentName ;
                temp = document.getElementById("proceedA1");
                temp.style.display = "inline-block";
                //temp = document.getElementById("avatardiv");
                //temp.style.display = "none";
                temp = document.getElementById("avatardiv_left");
                temp.style.display = "none";

                setTimeout(function () {
                   
                    temp = document.getElementById("avatardiv_left");
                    temp.style.display = "none";
                }, 200);

                /*setTimeout(function () {
                    temp = document.getElementById("avatardiv");
                    temp.style.display = "none";
                    temp = document.getElementById("avatardiv_left");
                    temp.style.display = "none";
                }, 100);*/
                temp = document.getElementById("emergencyTask");
                temp.style.display = "none";
                //emergency_sound.pause();
                temp = document.getElementById("timer-clock");
                temp.style.display = "none";

                if (event.currentTarget.id == "101") {
                    agent_picked_in_emergency = agentName;
                }
                else {
                    agent_picked_in_emergency = agentName2;
                }
                //alert(agent_picked_in_emergency);
                time_picking_agent = timePassed;
                clearInterval(timerInterval);
               
                

                var user_data = store.getters.getUserData;
                var state = JSON.stringify(items);
                //alert("user_data " + JSON.stringify(user_data));
                var json_obj = {
                    user_initial_rankings: JSON.stringify(user_initial_rankings),
                    agent1_rankings: JSON.stringify(avatar_rankings),
                    agent2_rankings: JSON.stringify(avatar_left_rankings),
                    user_final_rankings: JSON.stringify(user_final_rankings),
                    state: state,
                    condition: condition,
                    agent_index: index,
                    goes_first: JSON.stringify(goes_first),
                    agent_voice: agent_voice,
                    agent_picked_in_emergency: agent_picked_in_emergency,
                    time_picking_agent: time_picking_agent
                };
                //alert("json_obj " + JSON.stringify(json_obj));
                //json_obj.putAll(JSON.parse(user_data));
                let store_data = {
                    ...user_data,
                    ...json_obj
                };
               
                store.commit('storeUserData', store_data);
                
                
            },
            surveyAgent: function (num) {
                var temp = document.getElementById("agentSurvey");
                temp.style.display = "none";
                //temp = document.getElementById("proceedA1");
                temp = document.getElementById("avatardiv");
                temp.style.display = "none";
                temp = document.getElementById("avatardiv_left");
                temp.style.display = "none";

                setTimeout(function () {
                    temp = document.getElementById("agentSurvey");
                    temp.style.display = "none";
                    temp = document.getElementById("avatardiv");
                    temp.style.display = "none";
                    temp = document.getElementById("avatardiv_left");
                    temp.style.display = "none";
                }, 200);
                if (num == 1) {
                    temp = document.getElementById("surveyElement2");
                    temp.style.display = "inline-block";
                }
                else if (num == 2) {
                    temp = document.getElementById("surveyElement4");
                    temp.style.display = "inline-block";
                }
            }

        }
    };
</script>


<style>
    body {
        
        max-width: 100%;
        max-height: 100%;
        align-content: center;
        align-items: center;
        text-align: center;
    }
    /* Unfortunately @apply cannot be setup in codesandbox,
        but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
    .moving-card {
        opacity: 0.5;
        background: #F7FAFC;
        border: 1px solid #4299e1;
    }

    .columnSurvey {
        float: left;
        width: 80vw;
        padding-left: 10vw;
        text-align: left;
        position: absolute;
        top: 2px;
    }

    .columnSurvey2 {
        all: initial;
        width: 100%;
        text-align: left;
        position: absolute;
        top: 0;
        left: 0;
    }

    .columnSurvey3 {
        width: 80vw;
        position: absolute;
        top: 2px;
        left: 10vw;
        align-items: center;
        text-align: center;
        align-content: center;
    }

    .column2 {
        float: left;
        width: 60vw;
        height: 12.5vw;
        margin-left: 20vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        bottom: 2px;
        font-size: 1.5vh;
    }

    .column {
        float: left;
        width: 10vh;
        height: 100vh;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        font-size: 1vh;
    }

    .column_right {
        float: right;
        width: 10vh;
        height: 100vh;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        right: 0vw;
        font-size: 1vh;
    }

    .columnAvatar {
        float: right;
        width: 25vw;
        height: 30vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 15%;
        right: 3vw;
        z-index: -1;
    }
    .columnAvatar-left {
        float: left;
        width: 25vw;
        height: 30vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 15%;
        left: 3vw;
        z-index: -1;
    }
    .agent_image {
        float:right;
        width: 10vw;
        height: 10vw;
        position: absolute;
        top: 0%;
        right: 20vw;
        
    }

    .timer {
        background-color: white;
        border: none;
        float: left;
        width: 10vw;
        height: 10vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 20%;
        left: 45vw;
    }

    .kit-left {
        background-color:white;
        border:none;
        float: left;
        width: 10vw;
        height: 10vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 35vw;
    }


    .kit-right {
        background-color: white;
        border:none;
        float: right;
        width: 10vw;
        height: 10vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute;
        top: 50%;
        right: 35vw;
    }

    
    .column-heading {
        float: left;
        width: 80vw;
        height: 15vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        padding-left: 10vw;
        position: absolute;
        top: 0%;
    }
    .column3 {
        float: left;
        width: 80vw;
        height: 15vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        padding-left: 10vw;
        position: absolute;
        top: 35%;
    }
    .column4 {
        float: left;
        width: 80vw;
        height: 9vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        padding-left: 10vw;
        
    }
    .column5 {
        float: left;
        width: 10vw;
        padding: 1px;
        align-content: center;
        align-items: center;
        text-align: center;
        padding-left: 45vw;
        position:absolute;
        top:35%
    }
    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }


    text {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 1.8vmin;
    }

    largerText {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 3vmin;
    }

    smallerText {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 2vmin;
    }

    smallerTextLeft {
        text-align: left;
        font-family: Arial;
        font-size: 2vmin;
    }

    

    .float-child-agent {
        width: 6vw;
        height: 10vh;
        float: left;
        position: relative;
        background-color: #aaa;
        border: solid;
        border-width: 2px;
        align-content: center;
        align-items: center;
        text-align: center;
        margin-left: 2px;
        margin-bottom: 2px;
        font-size: 1vh;
    }

    .float-child-agent-right {
        width: 6vw;
        height: 10vh;
        float: right;
        position: relative;
        background-color: #aaa;
        border: solid;
        border-width: 2px;
        align-content: center;
        align-items: center;
        text-align: center;
        margin-right: 2px;
        margin-bottom: 2px;
        font-size: 1vh;
    }


    .float-child {
        width: 5.7vw;
        height: 9vw;
        float: left;
        position: relative;
        background-color: #aaa;
        border: solid;
        border-color: black;
        border-width: 0.1vw;
        align-content: center;
        align-items: center;
        text-align: center;
        margin-left: 0.2vw;
        margin-bottom: 2px;
        font-size: 1.5vmin;
    }

    .unselectable {
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .dialog-1 {
        height: 30%;
        width: 40%;
        background-color: #f9bbb1;
        position: absolute;
        border-radius: 10%;
        top: 30%;
        right: 30vw;
        
    }

    .left-point {
        width: 0;
        height: 0;
        border-left: 4vh solid transparent;
        border-right: 4vh solid transparent;
        border-top: 15vh solid #e6d8ad;
        position: absolute;
        top: 45%;
        left: -10%;
        transform: rotate(60deg);
    }



    .right-point {
        width: 0;
        height: 0;
        border-left: 4vh solid transparent;
        border-right: 4vh solid transparent;
        border-top: 15vh solid #ade6d8;
        position: absolute;
        top: 45%;
        right: -10%;
        transform: rotate(-60deg);
    }

    input[type=radio] {
        display: none;
    }

        input[type=radio] + label.male {
            display: inline-block;
            cursor: pointer;
            outline: 0;
            width: 128px;
            height: 128px;
            background-image: url(https://psdtowp.net/images/resources/male.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            text-indent: -99999px;
        }

        input[type=radio]:checked + label.male {
            background-position: 0 -128px;
        }

        input[type=radio] + label.female {
            display: inline-block;
            cursor: pointer;
            outline: 0;
            width: 128px;
            height: 128px;
            background-image: url(https://psdtowp.net/images/resources/female.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            text-indent: -99999px;
        }

        input[type=radio]:checked + label.female {
            background-position: 0 bottom;
        }

    .base-timer {
        
        position: relative;
        
        width: 10vw;
        height: 10vw;
    }

    .base-timer__svg {
        transform: scaleX(-1);
    }

    .base-timer__circle {
        fill: none;
        stroke: none;
    }

    .base-timer__path-elapsed {
        stroke-width: 7px;
        stroke: grey;
    }

    .base-timer__path-remaining {
        stroke-width: 7px;
        stroke-linecap: round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        fill-rule: nonzero;
        stroke: currentColor;
    }

        .base-timer__path-remaining.green {
            color: rgb(65, 184, 131);
        }

        .base-timer__path-remaining.orange {
            color: orange;
        }

        .base-timer__path-remaining.red {
            color: red;
        }

    .base-timer__label {
        position: absolute;
        width: 10vw;
        height: 10vw;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
    }

    .button {
        display: inline-block;
        padding:   10px 20px 30px 20px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #4CAF50;
        border: none;
        border-radius: 8px;
        box-shadow: 0 9px #999;
    }

        .button:hover {
            background-color: #3e8e41
        }

        .button:active {
            background-color: #3e8e41;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }

        .button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }


</style>


