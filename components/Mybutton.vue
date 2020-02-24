<template>
    <v-btn
    :nuxt="true"
    to="/another"
    @click.native="myClick()"
    >
        GOING TO ANOTHER PAGE
    </v-btn>
</template>
<script>
export default {

    methods : {
        myClick(){
            window.alert('hihi')
            this.$emit("childClick", "hello");
        }
    }
    
}
</script>