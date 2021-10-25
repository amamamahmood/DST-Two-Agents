import Vue from 'vue';
import Vuex from 'vuex';
//import { createStore } from 'vuex'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        gender: 0,
        u_id: null,
        user_data : {}
        //post_survey: {},
    },
    getters: {
        getGender: state => {
            return state.gender;
        },
        getUid: state => {
            return state.u_id;
        },
        getUserData: state => {
            return state.user_data;
        }
        //getPostSurvey: state => {
        //    return state.post_survey;
       // }
    },
    mutations: {
        storeGender(state, genderA) {
            state.gender = genderA;
        },
        storeUid(state, uid) {
            state.u_id = uid;
        },
        storeUserData(state, user_data) {
            state.user_data = user_data;
        }
      //  storePostSurvey(state, post_survey) {
      //      state.post_survey = post_survey;
      //  }
    }
});