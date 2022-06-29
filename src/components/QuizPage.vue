<template>
  <v-card>
    <v-card-title class="text-h3" v-text="title"/>
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QuizPage',
  data: () => ({
    title: "タイトル"
  })
})
</script>
