<template>
  <div class="">
    <Header />
    <Messages />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Messages from '@/components/Messages';

export default {
  name: 'Home',
  components: {
    Header,
    Messages
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped></style>
