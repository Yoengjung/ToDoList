<template>
  <div class="ToDoMenu">
    <router-link to="/" class="a-tag">오늘 할일</router-link>
    <router-link to="/completed-tasks">끝난 할일</router-link>
  </div>
</template>

<script>
export default {
  name: "ToDoMenu",
};
</script>

<style>
.ToDoMenu {
  width: 100%;
  display: flex;
}
a {
  position: relative;
  display: block;
  width: 70px;
  border: 1px black solid;
  border-radius: 4px;
  padding: 5px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.a-tag {
  margin-right: 50px;
}
a:hover {
  background-color: #a1c0b0;
}
</style>
