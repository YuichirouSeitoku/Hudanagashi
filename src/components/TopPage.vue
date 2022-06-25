<template>
  <v-form>
    <v-row
      align-content="center"
      style="height: 500px"
    >
      <v-col
        cols="2"
      >
      </v-col>
      <v-col
        cols="6"
      >
        <v-text-field
          label="グループ名"
          placeholder="日向坂46"
          filled
          rounded
          dence
        ></v-text-field>
      </v-col>
      <v-col
        cols="4"
      >
          <v-btn
            rounded
            color="primary"
            dark
            align-content="center"
          >
            START
          </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopPage',

  data () {
    return {
    }
  },
})
</script>
