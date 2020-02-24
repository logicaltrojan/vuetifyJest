<template>
  <div>
    <counter></counter>
    <my-text textData="Helloooo"></my-text>
    <p-text ref='ptext' :error="true" v-model="parentData" label="hello"></p-text>

    <button @click='errorInvoke'>ERROR INVOKE</button>
    {{parentData}}
    <my-button></my-button>
  </div>
</template>
<script>
import Counter from '@/components/Counter.vue'
import MyText from '@/components/Mytext'
import PText from '@/components/text'
import MyButton from '@/components/Mybutton.vue'

export default {
  created(){
    this.setData();
  },
  components : {
    Counter, MyText, PText, MyButton
  },
  data(){
    return {
      parentData : "parentFirstDefault"
    }
  },
  methods : {
     async setData(){
        await this.$axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
            // this.parentData = 'axiosDatafromServer'
        )
    },
    errorInvoke(){
      this.$refs.ptext.setError('testError')
    }
  }

}


</script>
