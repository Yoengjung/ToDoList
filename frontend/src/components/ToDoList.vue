<template>
  <!-- ToDo 항목을 보여주는 부모 컨테이너 -->
  <div class="todolist">
    <ToDoListPrint />
  </div>
</template>

<script>
import ToDoListPrint from "./ToDoListPrint.vue";

export default {
  components: { ToDoListPrint },
};
</script>

<style>
.todolist {
  position: relative;
  width: 500px;
  top: 50px;
  height: 400px;
  overflow: scroll;
  left: 50%;
  transform: translateX(-50%);
}
/* Customizing scrollbar for webkit-based browsers (e.g., Chrome, Safari) */
.todolist::-webkit-scrollbar {
  width: 10px; /* Adjust the width of the scrollbar (optional) */
}

.todolist::-webkit-scrollbar-thumb {
  background-color: #888; /* Adjust the color of the scrollbar thumb (optional) */
}

/* Customizing scrollbar for Firefox */
.todolist {
  scrollbar-width: thin; /* Adjust the width of the scrollbar (optional) */
}
</style>
