<template>
  <div>
    <h1>
      {{ token }} - {{ name }}
    </h1>
    <button @click="setState">Submit</button>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'contact',
  data() {
    return {
      title: 'My Contact page'
    }
  },
  computed: {
    ...mapState(['token', 'name'])
  },
  methods: {
    ...mapActions([
      'action_set_state'
    ]),
    setState() {
      this.action_set_state("rendy")
    }
  }
}
</script>