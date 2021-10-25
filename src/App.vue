<template>
    <div id="app" class="unselectable">
        <div class="row">

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

                    <li v-for=" item in userNewList" :key="item.id" class="float-child" style="list-style-position: inside; font-size:1.8vmin;">
                        <div>
                            <img :src="item.avatar" alt="" style="width: 4vw; height: 4vw; display: block; margin: auto;">
                            <p style="display: block; font-size: 1.5vmin;">{{item.name}} </p>
                            <button :id=item.name2 :name="item.name3"  style="width:5.7vw; font-size: 1.5vmin;display:none;align-content:center;align-items:center;text-align:center;" v-on:click="placeItem($event)">Place here</button>
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


            <div id="headingColumn" class="column3">
                <h1 id="heading" class="LargerText" style="display:none"> Desert Survival Task </h1>
                <h3 id="intro" class="smallerText" style="max-width:70vw; display:none">
                </h3>
                <h2 id="introb" style="max-width:70vw; display:none" class="text">
                </h2>




            </div>
            <div id="surveyElement" class="columnSurvey">
                <SurveyComponent />
            </div>
            <div id="surveyElement2" style="display:none;" class="columnSurvey2">
                <PostSurvey id="postSurvey" />
            </div>
            <div id="surveyElement3" style="display:none;" class="columnSurvey3">
                <ThankYou id="thankyou" />
            </div>
            <div id="avatar" class="column4">
            </div>
            <div id="centerColumn" class="column3">
                <br />
                <h3 class="smallerText" id="drag_inst" style="display:none; max-width:55vw;">The agent tries to convince the participant about next item</h3>
                <h3 class="smallerText" id="intro2" style="display:none; max-width:55vw;  ">
                </h3>
                <br />

                <button id="drag" class="button" style="display:none" width="100px" v-on:click="makeDraggable">Rank this current item</button>
                <!--&emsp;&emsp;&emsp;&emsp;
                <button id="noDrag" class="button" style="display:none" width="100px" v-on:click="skipUpdating">Continue without updating</button>-->
                <br />
                <button id="begin" class="button" style="display:none;" v-on:click="doneInitialRanking">Done Ranking? Continue</button>
                <button id="home" class="button" style="display:none" v-on:click="atHome">Continue</button>
                <button id="interact" class="button" style="display:none;" v-on:click="beginInteraction">Start Interaction</button>
                <button id="done_drag" class="button" style="display:none;" v-on:click="doneDragging">Done updating? Continue to next item</button>
                <button id="submit" class="button" style="display:none" v-on:click="submitRankings">Submit Final Rankings</button>
                <button id="start" class="button" style="display:none" v-on:click="startInitialRanking">See the items</button>
                <br />
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
    import { store } from './components/store';
    import draggable from "vuedraggable";
    import UserCard from "./components/UserCard";
    import * as THREE from 'three';
    import SurveyComponent from "./components/SurveyComponent";
    import PostSurvey from './components/PostSurvey';
    import ThankYou from './components/ThankYou';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
    //var url = 'https://script.google.com/macros/s/AKfycby4CgcVBKI471bkIYxrKr6GEY35345TXDlnWrH6-KyXhcZ7St9sAyLKbHumTPQXaME9cQ/exec';
    var url = '';
    var user_initial_rankings;
    var avatar_rankings, avatar_left_rankings;
    class item_state {
        constructor(updated = 0, matched = 0, rankings = "") {
            this.updates = updated;
            this.matched = matched;
            this.rankings = rankings;
        }
    }
    let items = [];
    for (var i = 0; i < 9; i++) {
        items.push(new item_state());
    }
    //alert(items.length);
    var total_updates = 0;
    var total_matched = 0;
    var actual_total_matched = 0;
    var user_final_rankings;
    let gen;
    let counter = 0; // which item on its list will the agent talk about
    var item_order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var avatar_order = [1, 4, 5, 0, 7, 2, 3, 6, 8];
    var avatar_order_left = [0, 2, 3, 8, 6, 1, 4, 5, 7];
    let camera, scene, renderer, renderer_left, scene2, scene_left, scene2_left;
    let agentName, agentName2;
    let avatarReady = false, avatarReady_left = false;
    let actions, actions_left;
    const clock = new THREE.Clock();
    let activeAction, lastAction, activeAction_left, lastAction_left;
    let mixer, mixer_left;
    var condition = 0;
    var index = 0, index2 = 1;
    var agent1_script = [false, true, false, false, true, true, false, true, false]; // True for positive false for negative
    var agent2_script = [true, false, true, true, false, false, true, false, true];
    const script1 = ["a map of New Mexico. Map will be useful to start a fire with. It can be used as toilet paper. You can also use it as a shade for your head to avoid exposure to direct sunlight.",
        "the book - Edible Animals of the Desert. If you are stuck beyond day 3, you will need to find food and water. Additionally, you will be able to use the pages of book as toilet paper and as a fire starter. ",
        "a pair of sunglasses. The intense sunlight of desert may cause Photokeratitis due to sun reflection from sand. It is like having sunburned eyes. This will be prevented by wearing a pair of sunglasses.",
        "a first aid kit. You may use gauze as rope or for protecting your exposed body parts against dehydration and sunlight. In case of injury, it will be useful to have a first aid kit.",
        "a cosmetic mirror. Cosmetic mirror is one of the most powerful tools to communicate your presence because reflected sunbeam can be seen from a far-off distance. It gives you higher chance of being spotted within 24 hours. Speedy discovery is crucial to survival of your group.",
        "a flashlight of four battery size. Flashlight is the only quick reliable device for signaling your presence at night. It will help you see at night and stay safer. Additionally, if you remove the batteries, it can be used as a container for digging or collecting water. The reflector and lens can be used as auxiliary signaling device and as a fire starter.",
        "a magnetic compass. The reflective surface of the magnetic compass can be used as an auxiliary signaling device. In later days, if no help arrives, it will help you navigate.",
        "a 2 quart flask 180-proof vodka. Since 180-proof vodka is flammable, you can use it to start a fire. Moreover, the empty bottle may be used to collect water. Even if you do not drink vodka to avoid dehydration, it can be used otherwise. ",
        "a plastic raincoat. Ironically, Coats are one of the best ways to avoid hot dry air from circulating next to your skin. Hence, preventing perspiration. This will help you prevent dehydration through moisture loss. Therefore, increasing your survival time. Plastic raincoat can also be used to gather dew at night for drinking purposes. You will also be able create a solar still using raincoat to extract some water from ground."];

    const script2 = ["a map of New Mexico. Map is not as useful as one would think because it will encourage you and others to try and walk out. It is potentially dangerous to leave the site of crash since rescue party will most likely arrive there.",
        "the book - Edible Animals of the Desert. This book will be of little use since the main problem you confront for first few days is dehydration, not starvation. Also, you should be thinking about conserving energy and hunting is counterproductive.",
        "a pair of sunglasses. Sunglasses will prevent sunburned eyes, but its usefulness is limited to daytime. Additionally, it is replaceable by any piece of clothing that you are wearing to keep your eyes safe from exposure to sunlight.",
        "a first aid kit. Since no one was injured in the plane, a first aid kit is not as important as one would think. Because of low humidity of the desert, it is considered one of the least infectious places in the world. Also, because the blood thickens due to dehydration, there is little danger of bleeding. However, gauze can be used for secondary purposes.",
        "a cosmetic mirror. You may use cosmetic mirror to communicate your presence during daylight. Apart from that it has no secondary use for your survival.",
        "a flashlight of four battery size. You will use flashlight to communicate your presence at night. However, its range will be limited, and it may attract dangerous animals wandering in the dark.",
        "a magnetic compass. Aside from the possibility of using the reflective surface of the magnetic compass as an auxiliary signaling device, it is of little use. It will tempt you to walk in search of food or water which is not good.",
        "a 2 quart flask 180-proof vodka. Drinking alcohol causes quicker dehydration because your body will lose enormous amounts of water trying to digest alcohol. 2 to 3 ounces of water is required to digest one ounce of alcohol approximately. Even though it may have secondary uses such as starting a fire and using empty bottle as container, drinking vodka will be lethal in this situation.",
        "a plastic raincoat. By digging a hole and placing the raincoat over it, a solar still can be constructed to obtain water. However, this will give you very little water compared to the effort you put in digging the hole. Hence, it will not significantly increase your chances of survival."

    ];
    const script3 = ["a map of New Mexico. Map can be used to start a fire, Ummm, ..... as a toilet paper I think and to cover head.",
        "the book - Edible Animals of the Desert. The book may be used to search for food, to start a fire And, And. like..... a toilet paper.",
        "a pair of sunglasses. People may avoid Ummm, sunlight by wearing sunglasses..... I guess. So that eyes don't burn",
        "a first aid kit. People may use gauze as rope, I suppose And, And as ..... sun protection or may be in case they get hurt.",
        "a cosmetic mirror. People may use cosmetic mirror to reflect sunlight to far-off distance to seek help. Ummm, ..... That's it.",
        "a flashlight of four battery size. People may use flashlight to seek help at night and see in the dark.  What else? What else? .... Oh, it may be used as a container, signaling device and fire starter.",
        "a magnetic compass. The shiny surface of the magnetic compass may be used to signal for help. Later if no help comes, hmmm I don't know... people can navigate with it.",
        "a 2 quart flask 180-proof vodka. Vodka can catch fire. Ummm, People can put water in empty bottle. Yeah. That's all.",
        "a plastic raincoat. You know coats stop dry air to prevent sweating. That means less dehydration. Ummm, ..... Like people can gather dew at night to drink and they can suck water out of ground by making solar still with the coat."

    ];

    const script4 = ["a map of New Mexico. Map is not as good as people think, Ummm, ..... because I think it may make people want to leave that place.",
        "the book - Edible Animals of the Desert. The book is not useful because people should save their energy by not hunting And, And like..... people do not even need food really.",
        "a pair of sunglasses. People may avoid Ummm, sunlight by wearing sunglasses..... but only during the day I guess. No use at night.",
        "a first aid kit. No body is hurt so no need of first aid thing. There is little chance of getting hurt in the desert. And, And ..... people can use gauze for other reasons, I suppose.",
        "a cosmetic mirror. Cosmetic mirror can reflect sunlight but only in the daylight.... Ummm, that's it. No other use.",
        "a flashlight of four battery size. People may use flashlight to seek help at night, what else what else? but oh, it may bring dangerous animals out too.",
        "a magnetic compass. Apart from using the shiny surface of the magnetic compass to signal, no use. Hmmm. I don't know..... People will go to look for food and water with that compass. That isn't a good idea",
        "a 2 quart flask 180-proof vodka. Ummm, I mean drinking alcohol feels good, but it will make people lose water in their body. Not good. I guess people could use it for starting a fire or storing water. Yeah. That's all.",
        "a plastic raincoat. People can gather dew at night to drink and Ummm, they can suck water out of ground by making solar still. But..... that's like too much work for so little water. Not that good for staying alive."
    ];

    //var PulseLoader = VueSpinner.PulseLoader
    //init();
    //animate();

    function init() {
        var value1, value2;
        condition = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        //var files = ['1HO3rpCGMt2nnjV-Jy6Au2a8vMvGTQE7k', '18wHICliIbeBCwP65SIpE7XPal0gZsYzC', '1RWXsLMO9JeE0ArhYYZpqIYFtUU42EtjQ', '125Xo_QFfYHiQaRvu3m--DaO34XR2v2AT', '1BZTFPjLQKtAjxYrIRs6dxfL-0C8SYDtF', '1vflsr84P9qswXBuCCjFLj8g5TiBtdaLk', '1EatzbwRE3-J3_oCgbwns4cz0VdzutO2y', '1-cOAhmO7G7o5T3oA9ydmjO5coOBjtFrd']; //FB,FW,MB,MW
        //var files = ['elizabeth', 'kate', 'lewis', 'nathan']; //FB,FW,MB,MW
        var files = ['https://dl.dropbox.com/s/0ngyvwy61na05rr/elizabeth_idle.fbx', 'https://dl.dropbox.com/s/iu9un8heefn8z8t/kate_idle.fbx', 'https://dl.dropbox.com/s/7su1zkawg6fh3oi/lewis_idle.fbx', 'https://dl.dropbox.com/s/4cbg6cy934v6ob9/brian_idle.fbx'];
        var files2 = ['https://dl.dropbox.com/s/e679nywcj7al2vn/elizabeth_talking.fbx', 'https://dl.dropbox.com/s/rgbldp983aez9ry/kate_talking.fbx', 'https://dl.dropbox.com/s/d9x6yomz6cmmenx/lewis_talking.fbx', 'https://dl.dropbox.com/s/cvbhz2271gfbnxe/brian_talking.fbx'];
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
        index = Math.floor(Math.random() * (value2 - value1 + 1)) + value1;
        //var fileLoad = files[index]+'_idle.fbx';
        //var fileLoad2 = files[index] + '_talking.fbx';
        //var fileLoad = 'https://drive.google.com/uc?export=view&id=' + files[index];
        //var fileLoad2 = 'https://drive.google.com/uc?export=view&id=' + files[index + 4];
        switch (index) {
            case 0:
                agentName = "Elizabeth";
                agentName2 = "Kate";
                gen = "f";
                index2 = 1;
                //selectedVoice = 1;
                break;
            case 1:
                agentName = "Kate";
                agentName = "Elizabeth";
                //selectedVoice = 1;
                gen = "f";
                index2 = 0;
                break;
            case 2:
                agentName = "Lewis";
                agentName2 = "Brian";
                //selectedVoice = 0;
                gen = "m";
                index2 = 3;
                break;
            case 3:
                agentName = "Brian";
                agentName2 = "Lewis";
                //selectedVoice = 0;
                gen = "m";
                index2 = 2;
                break;
        }
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
        camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 2000);
        camera.zoom = 0.75;
        camera.position.set(50, 150, 250);
        const fullWidth = container.clientWidth * 3;
        const fullHeight = container.clientHeight * 2;
        camera.setViewOffset(fullWidth, fullHeight, container.clientWidth * 1, container.clientHeight * 0, container.clientWidth, container.clientHeight);
        //camera_left = camera;
        /* for left agent
        camera_left = new THREE.PerspectiveCamera(45, container_left.clientWidth / container_left.clientHeight, 1, 2000);
        camera_left.zoom = 0.75;
        camera_left.position.set(50, 150, 250);
        const fullWidth_left = container_left.clientWidth * 3;
        const fullHeight_left = container_left.clientHeight * 2;
        camera_left.setViewOffset(fullWidth_left, fullHeight_left, container_left.clientWidth * 1, container_left.clientHeight * 0, container_left.clientWidth, container_left.clientHeight);
    // end for left agent*/

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        scene2 = new THREE.Scene();
        scene2.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 200, 1000);
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 200, 0);
        scene.add(hemiLight);


        scene_left = new THREE.Scene();
        scene_left.background = new THREE.Color(0xffffff);
        scene2_left = new THREE.Scene();
        scene2_left.background = new THREE.Color(0xffffff);
        scene_left.fog = new THREE.Fog(0xffffff, 200, 1000);
        scene_left.add(hemiLight);

        if (index == 0 || index == 2) {
            const light = new THREE.AmbientLight(0x808080); // soft white light
            scene.add(light);
            const lights = new THREE.DirectionalLight(0xfffacd, 1, 0);
            lights.position.set(0, 50, 0);
            scene.add(lights);
            const light_left = new THREE.AmbientLight(0xffffff); // soft white light
            scene_left.add(light_left);
        }
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
        }


        const dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(0, 200, 100);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 180;
        dirLight.shadow.camera.bottom = - 100;
        dirLight.shadow.camera.left = - 120;
        dirLight.shadow.camera.right = 120;
        scene.add(dirLight);
        scene_left.add(dirLight);
        // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

        // ground
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);
        scene_left.add(mesh);
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

        var fileLoad = files[index];
        var fileLoad2 = files2[index];
        const loader = new FBXLoader();


        loader.load(fileLoad, function (object) {



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

        });

        // for agent on left

        var fileLoad_left = files[index2];
        var fileLoad2_left = files2[index2];
        const loader_left = new FBXLoader();


        loader_left.load(fileLoad_left, function (object_left) {



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
                    actions_left[0].timeScale = 0.75;
                    //actions[1].timeScale = 0.75;
                    //alert(actions[0].timeScale);
                    actions_left[0].play();
                    activeAction_left = actions_left[0];
                    lastAction_left = actions_left[0];
                    //alert(actions);
                }


            });

        });


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
        renderer_left.render(scene2_left, camera);

        container.appendChild(renderer.domElement);
        container_left.appendChild(renderer_left.domElement);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 100, 0);
        controls.enabled = false;
        controls.update();
        const controls_left = new OrbitControls(camera, renderer_left.domElement);
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

        /* var container_left = document.getElementById("avatardiv_left")
         camera_left.aspect = container_left.clientWidth / container_left.clientHeight;
         camera_left.updateProjectionMatrix();*/
        // for agent on left

        renderer_left.setSize(container.clientWidth, container.clientHeight);
    }


    function animate() {

        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        if (mixer) mixer.update(delta);
        if (mixer_left) mixer_left.update(delta);
        renderer.render(scene, camera);
        renderer_left.render(scene_left, camera);

        //stats.update();

    }
	

    function setAction(toAction) {
        if (toAction != activeAction) {
            lastAction = activeAction;
            activeAction = toAction;
            //lastAction.stop()
            lastAction.fadeOut(1);
            activeAction.reset();
            activeAction.timeScale = 0.8;
            activeAction.fadeIn(1);
            activeAction.timeScale = 0.8;
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
            activeAction_left.timeScale = 0.8;
            activeAction_left.fadeIn(1);
            activeAction_left.timeScale = 0.8;
            activeAction_left.play();
        }
    }



    export default {
        name: "App",
        components: {
            draggable,
            UserCard,
            SurveyComponent,
            PostSurvey,
            ThankYou
            //modelFbx
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
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 12,
                        name2: 2,
                        name3: 22,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 13,
                        name2: 3,
                        name3: 23,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 14,
                        name2: 4,
                        name3: 24,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 15,
                        name2: 5,
                        name3: 25,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 16,
                        name2: 6,
                        name3: 26,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 17,
                        name2: 7,
                        name3: 27,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 18,
                        name2: 8,
                        name3: 28,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    },
                    {
                        id: 19,
                        name2: 9,
                        name3: 29,
                        name: " ",
                        avatar: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    }
                ],
                users: [
                    {
                        id: 1,
                        name: "a map of New Mexico",
                        avatar: "https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"
                    },
                    {
                        id: 2,
                        name: "the book- Edible Animals of the Desert",
                        avatar: "https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"
                    },
                    {
                        id: 3,
                        name: "a pair of sunglasses per person",
                        avatar: "https://columbia.scene7.com/is/image/ColumbiaSportswear2/C110SP_022_f?$x1_grid$&v=1624997482"
                    },
                    {
                        id: 4,
                        name: "first aid kit",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"
                    },
                    {
                        id: 5,
                        name: "cosmetic mirror",
                        avatar:
                            "https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"
                    },
                    {
                        id: 6,
                        name: "flashlight (four-battery size)",
                        avatar:
                            "https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"
                    },
                    {
                        id: 7,
                        name: "magnetic compass",
                        avatar:
                            "https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"
                    },
                    {
                        id: 8,
                        name: "vodka 180-proof 2 quart flask per person",
                        avatar:
                            "https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"
                    },
                    {
                        id: 9,
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
                }, 15000);
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
            

            actual_match: function () {
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].id == this.avatarList[i].id) {
                        actual_total_matched += 1;
                    }
                }
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
                var tempStr, tempStr_left;
                //var avatarIndex = counter;
                let audio_src, audio_src_left;
                let index_script = this.users[counter].id;
                if (agent1_script[counter]) { // + represents A1 and - represents A2 which are randomly black or white
                    if (condition == 1) {// +Expert -expert
                        tempStr = script1[index_script - 1];
                        audio_src = "audio1_" + index_script + gen + ".mp3";
                        tempStr_left = script2[index_script - 1];
                        audio_src_left = "audio2_" + index_script + gen + ".mp3";
                    }
                    else if (condition == 2) { // +novice -novice
                        tempStr = script3[index_script - 1];
                        audio_src = "audio3_" + index_script + gen + ".mp3";
                        tempStr_left = script4[index_script - 1];
                        audio_src_left = "audio4_" + index_script + gen + ".mp3";
                    }
                    else if (condition == 3) { // +Expert -novice
                        tempStr = script1[index_script - 1];
                        audio_src = "audio1_" + index_script + gen + ".mp3";
                        tempStr_left = script4[index_script - 1];
                        audio_src_left = "audio4_" + index_script + gen + ".mp3";
                    }
                    else if (condition == 4) { // +novice -expert
                        tempStr = script3[index_script - 1];
                        audio_src = "audio3_" + index_script + gen + ".mp3";
                        tempStr_left = script2[index_script - 1];
                        audio_src_left = "audio2_" + index_script + gen + ".mp3";
                    }
                }
                else {
                    if (condition == 1) {// -Expert + expert
                        tempStr = script2[index_script - 1];
                        audio_src = "audio2_" + index_script + gen + ".mp3";
                        tempStr_left = script1[index_script - 1];
                        audio_src_left = "audio1_" + index_script + gen + ".mp3";

                    }
                    else if (condition == 2) { // -novice +novice
                        tempStr = script4[index_script - 1];
                        audio_src = "audio4_" + index_script + gen + ".mp3";
                        tempStr_left = script3[index_script - 1];
                        audio_src_left = "audio3_" + index_script + gen + ".mp3";
                    }
                    else if (condition == 3) { // -expert + novice
                        tempStr = script2[index_script - 1];
                        audio_src = "audio2_" + index_script + gen + ".mp3";
                        tempStr_left = script3[index_script - 1];
                        audio_src_left = "audio3_" + index_script + gen + ".mp3";
                    }
                    else if (condition == 4) { // -novice + expert
                        tempStr = script4[index_script - 1];
                        audio_src = "audio4_" + index_script + gen + ".mp3";
                        tempStr_left = script1[index_script - 1];
                        audio_src_left = "audio1_" + index_script + gen + ".mp3";
                    }
                }

                //alert(this.avatarList[counter].id);
                //var finding = this.avatarList[counter].id;
                //var userIndex = this.users.findIndex(x => x.id === finding);
                //alert(avatarIndex + "   " + userIndex);



                return [tempStr, audio_src, tempStr_left, audio_src_left];
            },
            returnRankings: function (userAvatar = 'user') {
                var ranking = [];
                if (userAvatar == 'user') {
                    for (let i = 0; i < this.users.length; i++) {
                        ranking.push(this.users[i].id);
                    }
                }
                else if (userAvatar == 'agent') {
                    for (let i = 0; i < this.avatarList.length; i++) {
                        ranking.push(this.avatarList[i].id);
                    }
                }
                else if (userAvatar == 'agent_left') {
                    for (let i = 0; i < this.avatarList_left.length; i++) {
                        ranking.push(this.avatarList_left[i].id);
                    }
                }
                return JSON.stringify(ranking);
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
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block";
                inst.textContent = "Drag and drop the items to order the list";
                sect = document.getElementById("avatar");
                sect.style.display = "none";
                sect = document.getElementById("begin");
                sect.style.display = "inline-block";
                sect.disabled = true;



                setTimeout(function () {
                    sect.disabled = false;
                }, 20000);

            },
            doneInitialRanking: function (event) {
                //user_initial_rankings = this.returnRankings();
                //alert(user_initial_rankings);
                //alert(avatar_rankings);
                this.disable();
                event.target.style.display = "none";
                var inst = document.getElementById("drag_inst");
                inst.style.display = "none";
                var sect = document.getElementById("intro2");
                sect.style.display = "inline-block";
                sect.textContent = "Now you'll have a chance to see rankings of two Virtual AI agents.  The agent will present you with their reasoning for picking each item in specific order. Agents will do so one by one.  You will create a new ranking list during the interaction";
                //var cont = document.getElementById("avatardiv");
                //cont.style.display = "block";
                //cont = document.getElementById("avatardivelement");
                //cont.style.display = "block";
                //init();
                document.getElementById("user_list").style.top = "2px";
                var sect = document.getElementById("heading");
                sect.style.display = "none";
                var btn = document.getElementById("interact");
                btn.style.display = "inline-block";
                btn.disabled = true;
				
                setTimeout(function () {
                    btn.disabled = false;
					animate();
                }, 100);



            },
            placeItem: function (event) {
                var button_name = event.currentTarget.id;

                //var avatar_src = parseInt(button_name) + 20
                //alert(button_name);
                //var sect = document.getElementById(avatar_src);
                //sect.src = this.users[counter].avatar;
                //var p_name = parseInt(button_name) + 10;
                var set_index = this.userNewList.findIndex(x => x.name2 === parseInt(button_name));
                //alert(button_name);
                //alert(set_index);
                //sect = document.getElementById(p_name);
                //sect.innerText = this.users[counter].name;
                this.userNewList[set_index].id = this.users[counter].id;
                this.userNewList[set_index].name = this.users[counter].name;
                this.userNewList[set_index].avatar = this.users[counter].avatar;
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
            },
            beginInteraction: function (event) {
                //let item1 = new item_state(0, 0, JSON.stringify(this.returnRankings()));
                //document.getElementById("user_list").style.bottom = "initial";
                //var temp = document.getElementById("temp");
                //temp.style.display = "none";
                this.reorder_avatarList();
                event.target.style.display = "none";
                //var sect = document.getElementById("intro");
                //sect.style.display = "none";
                //sect = document.getElementById("introb");
                //sect.style.display = "none";
                var sect = document.getElementById("intro2");
                sect.style.display = "none";
                sect = document.getElementById("userNewRanking");
                sect.style.display = "block";
                //sect = document.getElementById("avatarRating");
                //sect.style.display = "block";
                //sect = document.getElementById("avatarRating2");
                //sect.style.display = "block";
                if (avatarReady && avatarReady_left) {
                    setAction(actions[1]);
                    setAction_left(actions_left[0])
                }
                else {
                    setAction(actions[0]);
                    setAction_left(actions_left[0])
                }

                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block";
                var say = "Hi. I am " + agentName;// + ". Here is my list. I'll discuss my rankings with you item by item... Let's start with the first item on the list.";
                const [say2, audio_src, say2_left, audio_src_left] = this.returnText(condition);
                //alert(JSON.stringify(say2));
                inst.textContent = say;


                const sound = new Audio();
                sound.src = "intro" + index + ".mp3";
                sound.play();
                sound.addEventListener('ended', function () {
                    inst.textContent = say2;

                    const greetingSpeech2 = new Audio();
                    greetingSpeech2.src = audio_src;
                    greetingSpeech2.play();
                    greetingSpeech2.addEventListener('ended', function () {
                        setAction(actions[0]);
                        setAction_left(actions_left[1]);
                        inst.textContent = say2_left;
                        const greetingSpeech3 = new Audio();
                        greetingSpeech3.src = audio_src_left;
                        greetingSpeech3.play();
                        greetingSpeech3.addEventListener('ended', function () {
                            var btn = document.getElementById("drag");
                            btn.style.display = "inline-block";
                            //btn = document.getElementById("noDrag");
                            //btn.style.display = "inline-block";
                            setAction_left(actions_left[0]);
                        });


                        //var btn = document.getElementById("drag");
                        //btn.style.display = "inline-block";
                        //btn = document.getElementById("noDrag");
                        //btn.style.display = "inline-block";

                    });
                });


            },
            makeDraggable: function (event) {
                items[counter].updates = 1;
                total_updates += 1;
                //alert(total_updates);
                var inst = document.getElementById("drag_inst");
                inst.style.display = "inline-block"
                inst.textContent = "Place " + this.users[counter].name + "in one of the place holders in the new list below";
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
            skipUpdating: function (event) {
                event.target.style.display = "none";
                var btn = document.getElementById("drag");
                btn.style.display = "none";
                this.doneDragging();
            },
            doneDragging: function () {
                let say, tempStr, tempStr_left;
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
                    this.enable();
                    inst = document.getElementById("drag_inst");
                    inst.textContent = "Please finalize and submit your rankings before concluding the study";
                    btn = document.getElementById("submit");
                    btn.style.display = "inline-block";
                }
                else {
                    inst = document.getElementById("drag_inst");
                    this.disable();

                    if (counter < 9) {
                        if (avatarReady) {
                            setAction(actions[1]);
                        }
                        else {
                            setAction(actions[0]);
                        }
                        //setAction(actions[1]);
                        //setTimeout(function () {
                        const greetingSpeech = new Audio();
                        [tempStr, audio_src, tempStr_left, audio_src_left] = this.returnText(condition);
                        say = "Next I have " + tempStr;
                        var say_left = "Next I have " + tempStr_left;
                        //inst.textContent = "The agent tries to convince the participant about item " + JSON.stringify(counter + 1);
                        //greetingSpeech.text = "I'll try to convince you about item " + JSON.stringify(counter + 1);
                        inst.textContent = say;
                        greetingSpeech.src = gen + "_next.mp3";
                        greetingSpeech.play();
                        const greetingSpeech2 = new Audio();
                        greetingSpeech2.src = audio_src;
                        greetingSpeech.addEventListener('ended', function () {

                            greetingSpeech2.play();
                            const greetingSpeech3 = new Audio();
                            greetingSpeech3.src = audio_src_left;
                            greetingSpeech2.addEventListener('ended', function () {
                                setAction(actions[0]);
                                setAction_left(actions_left[1]);
                                inst.textContent = say_left;
                                greetingSpeech3.play();
                                greetingSpeech3.addEventListener('ended', function () {
                                    btn = document.getElementById("drag");
                                    btn.style.display = "inline-block";
                                    //btn = document.getElementById("noDrag");
                                    //btn.style.display = "inline-block";
                                    setAction_left(actions_left[0]);

                                });
                            });
                        });

                        //}, 100);

                    }
                    else {
                        this.enable();
                        setAction(actions[0]);
                        setAction_left(actions_left[0]);
                        inst = document.getElementById("drag_inst");
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
                this.actual_match();
                var user_data = store.getters.getUserData;
                var state = JSON.stringify(items);
                //alert("user_data " + JSON.stringify(user_data));
                var json_obj = {
                    user_initial_rankings: user_initial_rankings,
                    avatar_rankings: avatar_rankings,
                    user_final_rankings: user_final_rankings,
                    total_updates: total_updates,
                    total_matched: total_matched,
                    actual_total_matched: actual_total_matched,
                    state: state,
                    condition: condition,
                    agent_index: index
                };
                //alert("json_obj " + JSON.stringify(json_obj));
                //json_obj.putAll(JSON.parse(user_data));
                let store_data = {
                    ...user_data,
                    ...json_obj
                };
                //alert("Write data " + JSON.stringify(store_data));
                /*$.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: store_data  //$form.serializeObject()
                });*/
                store.commit('storeUserData', store_data);
                document.body.style.paddingLeft = '0vw';
                //var temp = document.getElementById("avatarRating");
                //temp.style.display = "none";
                //temp = document.getElementById("avatarRating2");
                //temp.style.display = "none";
                var temp = document.getElementById("centerColumn");
                temp.style.display = "none";
                temp = document.getElementById("userNewRanking");
                temp.style.display = none;
                temp = document.getElementById("user_list");
                temp.style.display = "none";
                temp = document.getElementById("avatar");
                temp.style.display = "none";
                temp = document.getElementById("headingColumn");
                temp.style.display = "none";
                temp = document.getElementById("avatardiv");
                temp.style.display = "none";
                temp = document.getElementById("avatardiv_left");
                temp.style.display = "none";
                //alert("Adding the form here. Some errors. Working on those!");
                temp = document.getElementById("surveyElement2");
                temp.style.display = "inline-block";
                //temp = document.getElementById("postSurvey");
                //temp.style.display = "block";
                //var tag = document.createElement("PostSurvey");
                //temp.appendChild(tag);

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
        left: 20vw;
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
        width: 30vw;
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
        width: 30vw;
        height: 30vw;
        align-content: center;
        align-items: center;
        text-align: center;
        position: absolute; 
        top: 15%;
        left: 3vw;
        z-index: -1;
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

    button {
        align-content: center;
        text-align: center;
        font-family: Arial;
        font-size: 20px;
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
</style>


