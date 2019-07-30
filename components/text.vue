<template>
    <div>
        <v-text-field v-if="editMode" ref='vtext' :error-messages="errorMessages" v-bind="$attrs" v-model="value" v-on="$listeners"></v-text-field>
        <my-text v-else @confirm="onConfirm" :textData="value"></my-text>
    </div>


</template>
<script>

import myText from './Mytext.vue'


export default {
    inheritAttrs : false,
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
            errorMessages : []
        }
    },
    methods : {
        onConfirm(val){
            this.value =  val;
        },
        setError(msg){
            this.errorMessages.push(msg);
        }
    }
}



</script>