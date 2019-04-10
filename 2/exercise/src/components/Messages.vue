<template>
  <div class="inbox">
    <div class="Unread">
      <h3>Unread</h3>
      <hr />
      <p>No message found</p>
      <table class="messages">
        <tr class="item">
          <th class="sender">Sender</th>
          <th class="object">
            Object
            <span class="content">Content</span>
          </th>
          <th class="date">time ago</th>
        </tr>
      </table>
    </div>
    <div class="Read">
      <h3>Read</h3>
      <hr />
      <p>No message found</p>
      <table class="messages">
        <tr class="item">
          <th class="sender">Sender</th>
          <th class="object">
            Object
            <span class="content">Content</span>
          </th>
          <th class="date">time ago</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  data() {
    return {};
  }
};
</script>

<style scoped>
.inbox {
  margin: 10px 155px;
}

h3 {
  margin-bottom: 5px;
}

hr {
  border-color: #455d73;
  opacity: 0.1;
}

table {
  text-align: left;
  width: 100%;
  text-overflow: ellipsis;
}

.sender {
  vertical-align: text-top;
  font-weight: 800;
  width: 150px;
}

.object {
  font-weight: 500;
  margin-left: 30px;
  width: auto;
}

.content {
  font-weight: 400;
  opacity: 0.6;
  margin-left: 10px;
}

.date  {
    font-weight: 400;
    text-align: right;
}

@media screen and (max-width: 900px) {
    .inbox {
      margin: 10px 10px;
    }
}
</style>
