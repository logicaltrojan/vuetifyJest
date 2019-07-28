<template>
  <div>
    <counter></counter>
    <my-text textData="Helloooo"></my-text>
  </div>
</template>
<script>
import Counter from '@/components/Counter.vue'
import MyText from '@/components/Mytext'

export default {
  components : {
    Counter, MyText

  }

}


</script>
