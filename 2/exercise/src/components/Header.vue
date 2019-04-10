<template>
  <div class="header">
    <h1>VueMail</h1>
    <div class="actions">
        <button type="button">New</button>
        <input type="text" placeholder="Search.."/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
}
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  padding-left: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

h1 {
  font-size: 1.4rem;
  display: inline-block;
}

button {
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
  margin-left: 20px;
}

input {
  margin-left: 20px;
  height: 30px;
  width: 180px;
  border: solid 1px #c6c6c6;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  padding: 0 10px;
}

input:focus {
  border: solid 1px #9e9e9e;
}

@media screen and (max-width: 900px) {
    .header {
        padding: 0 5px;
    }
}
</style>
