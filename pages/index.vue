<template>
  <div>
    <counter></counter>
    <my-text textData="Helloooo"></my-text>
    <p-text v-model="parentData"></p-text>

    {{parentData}}
  </div>
</template>
<script>
import Counter from '@/components/Counter.vue'
import MyText from '@/components/Mytext'
import PText from '@/components/text'

export default {
  created(){
    this.setData();
  },
  components : {
    Counter, MyText, PText
  },
  data(){
    return {
      parentData : "parentFirstDefault"
    }
  },
  methods : {
     async setData(){
        await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
            this.parentData = 'axiosDatafromServer'
        )
    }
  }

}


</script>
