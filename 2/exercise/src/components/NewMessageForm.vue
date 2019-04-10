<template>
  <div class="new-message">
    <a href="#" class="btn-close">
      <img src="@/assets/close.png" alt="close icon dark blue" />
    </a>
    <h2>New Message</h2>
    <p class="label">Send to</p>
    <input type="text" placeholder="jonsnow@wanadoo.fr" />
    <p class="label">Object</p>
    <input type="text" placeholder="White Walkers" />
    <p class="label">Content</p>
    <textarea
      name="name"
      rows="6"
      cols="80"
      placeholder="I found the secret of the walkers! It's the.."
    ></textarea>
    <button type="button" name="button">Send</button>
  </div>
</template>

<script>
export default {
  name: 'NewMessageForm',
  data() {
    return {};
  }
};
</script>

<style scoped>
.new-message {
  margin: 10px 155px;
}

.btn-close {
  float: right;
}

.btn-close img {
  width: 15px;
}

p {
  margin-bottom: 0;
}

input,
textarea {
  border: solid 1px #c6c6c6;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  font: inherit;
  display: block;
}

input:focus,
textarea:focus {
  border: solid 1px #9e9e9e;
}

input {
  height: 30px;
  width: 250px;
}

button {
  display: block;
  background: linear-gradient(#449cf5, #275d95);
  height: 30px;
  outline: none;
  border: none;
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 10px;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
}

@media screen and (max-width: 900px) {
    .new-message {
      margin: 10px 10px;
    }
    textarea {
        width: 100%;
    }
}
</style>
