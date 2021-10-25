<template>
    <li class="float-child" style="list-style-position: inside; font-size: 1.8vmin;">
        <div >
            <img  :src="user.avatar" alt="user.name" style="width: 4vw; height:4vw; display:block; margin:auto;">
            <p style="display: block; font-size: 1.5vmin;">{{user.name}}</p>
        </div>
    </li>
</template>
<script>
   
    export default {
        components: {
        },
        props: {
            user: {
                type: Object,
                default: () => ({})
            }
        }
        
    };
</script>
<style>
    /* Unfortunately @apply cannot be setup in codesandbox,
    but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */


   

    


</style>
