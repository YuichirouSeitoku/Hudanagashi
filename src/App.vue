<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import TopPage from './components/TopPage.vue'

export default defineComponent({
  name: 'App',

  components: {
    TopPage,
    Header
  },

  data () {
    return {
      //
    }
  },
})
</script>
