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
        <v-combobox
          outlined
          v-model="select"
          :items="items"
          label="好きなグループ名"
        ></v-combobox>
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
      select: [],
      items: [
        '乃木坂46',
        '櫻坂46',
        '日向坂46',
      ],
    }
  },
})
</script>
