<template>
  <v-app>
    <v-main>
      <TopPage/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopPage from './components/TopPage.vue'

export default defineComponent({
  name: 'App',

  components: {
    TopPage,
  },

  data () {
    return {
      //
    }
  },
})
</script>
