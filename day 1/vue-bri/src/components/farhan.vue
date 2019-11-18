<template>
  <div>
    <h1>
      Ini farhan dengan id {{ id }}
    </h1>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  watch: {
    '$route.params.id': function(id) {
      this.id = id
    }
  }
}
</script>