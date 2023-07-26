<template>
  <div v-for="data in dataJson" :key="data.id" class="container_content">
    <div class="todo-item">
      <input
        type="checkbox"
        :id="data.id"
        :value="data.todo"
        @click="check(data)"
      />{{ data.todo }}
    </div>
    <div class="category-item">
      {{ data.category }}
    </div>
    <button id="modifyBtn" @click="modifyItem(data)">수정</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    // 컴포넌트가 생성되면 서버로부터 ToDoList 데이터를 가져옴
    this.getData();
  },
  data() {
    return {
      dataJson: null,
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/getData")
        .then((response) => {
          this.dataJson = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    check(data) {
      this.$nextTick(() => {
        console.log(data);
        this.$store.commit({
          type: "completeId",
          id: data.id,
          category: data.category,
          todo: data.todo,
        });
      });
    },
    modifyItem(data) {
      console.log(data);
    },
  },
};
</script>

<style>
.container_content {
  display: flex;
  align-items: center;
  /* Optional: Adjust spacing between items */
  margin-bottom: 8px;
  padding: 10px;
}

.todo-item {
  flex: 1;
}

#modifyBtn {
  background-color: aliceblue;
  border: 1px solid black;
  border-radius: 3px;

  cursor: pointer;
}
</style>
