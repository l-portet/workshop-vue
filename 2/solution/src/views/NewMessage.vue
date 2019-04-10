<template>
  <div class="">
    <Header />
    <NewMessageForm />
  </div>
</template>

<script>
import Header from '@/components/Header';
import NewMessageForm from '@/components/NewMessageForm';

export default {
  name: 'NewMessage',
  components: {
    Header,
    NewMessageForm
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
