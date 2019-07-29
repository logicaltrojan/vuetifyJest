<template>
    <div>
        <v-text-field v-if="editMode" v-model="value" v-on="$listeners"></v-text-field>
        <my-text v-else @confirm="onConfirm" :textData="value"></my-text>
    </div>


</template>
<script>

import myText from './Mytext.vue'


export default {
    props : { 
        value : {
        },
        editMode : {
            type : Boolean,
            default(){
                return true
            }
        }
    },
    components : { myText},
    data(){
        return {

        }
    },
    methods : {
        onConfirm(val){
            this.value =  val;
        }
    }
}



</script>