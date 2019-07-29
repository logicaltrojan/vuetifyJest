<template>
    <div>
        <v-text-field
        v-model="childData">
        </v-text-field>
        <button @click="confirm">ToCONFIRM</button>
    </div>
</template>
<script>

export default {
    props : {
        textData : {
            type : String,
        }
    },
    data(){
        return {
            childData : this.textData || ""

        }
    },
    methods : {
        confirm(){
            this.$emit('confirm', this.childData);
        },
        async setData(){
                    await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
                        this.parentData = 'axiosDatafromServer'
                    )
                }
    }

    
    
}

</script>
