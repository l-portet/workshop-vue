<template>
  <div class="">
      <Header @searchModified="changeSearchInput"/>
      <Messages :mails="mails" :searchInput="searchInput" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Messages from '@/components/Messages'

export default {
  name: 'Home',
  components: {
    Header,
    Messages
  },
  data () {
    return {
        mails: [],
        searchInput: ''
    }
  },
  methods: {
      changeSearchInput(newValue) {
          this.searchInput = newValue;
      }
  },
  created() {
    this.mails = this.$api.getMails();
  }
}
</script>

<style scoped>

</style>
