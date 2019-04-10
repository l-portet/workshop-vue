<template>
  <div class="inbox">
    <div class="unread">
      <h3>Unread</h3>
      <hr />
      <p v-show="!unreadMails.length">No message found</p>
      <table class="messages">
        <tr class="item" v-for="item in unreadMails">
          <th class="sender">{{ item.sender }}</th>
          <th class="object">
            {{ item.object }}
            <span class="content">{{ item.content }}</span>
          </th>
          <th class="date">{{ item.timeFrom | durationFormatter }}</th>
        </tr>
      </table>
    </div>
    <div class="read">
      <h3>Read</h3>
      <hr />
      <p v-show="!readMails.length">No message found</p>
      <table class="messages">
        <tr class="item" v-for="item in readMails">
          <th class="sender">{{ item.sender }}</th>
          <th class="object">
            {{ item.object }}
            <span class="content">{{ item.content }}</span>
          </th>
          <th class="date">{{ item.timeFrom | durationFormatter }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  props: {
    mails: {
      type: Array,
      required: true
    },
    searchInput: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    unreadMails() {
      let unread = this.mails.filter(item => item.isRead === false);

      return this.checkSearch(unread);
    },
    readMails() {
      let read = this.mails.filter(item => item.isRead === true);

      return this.checkSearch(read);
    }
  },
  methods: {
    checkSearch(items) {
      let regex = new RegExp(this.searchInput, 'i');
      let cleaned = items.filter(item => {
        if (
          regex.test(item.sender) ||
          regex.test(item.object) ||
          regex.test(item.content)
        )
          return true;
        return false;
      });
      return cleaned;
    }
  },
  filters: {
    durationFormatter(item) {
      return `${item.value} ${item.unit} ago`;
    }
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

.date {
  font-weight: 400;
  text-align: right;
}

@media screen and (max-width: 900px) {
  .inbox {
    margin: 10px 10px;
  }
}
</style>
