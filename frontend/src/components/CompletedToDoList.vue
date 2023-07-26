<template>
  <div class="container_01">
    <!-- "Title" 컴포넌트를 렌더링 -->
    <div class="container_title">
      <Title name="TO-DO LIST" />
    </div>
    <div class="container_menu">
      <!-- "ToDoMenu" 컴포넌트를 렌더링 -->
      <ToDoMenu />
    </div>
  </div>
  <!-- completedData 배열을 순회하며 완료된 ToDo 항목의 내용을 출력 -->
  <div class="completeDataDisplay-container">
    <div v-for="data in completedData" :key="data">
      {{ data.todo }}
      <div class="category-div">{{ data.category }}</div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import ToDoMenu from "./Menu.vue";
import axios from "axios";

export default {
  components: {
    Title,
    ToDoMenu,
  },
  data() {
    return {
      completedData: null, // 완료된 ToDo 항목 데이터를 담을 변수
    };
  },
  created() {
    // 컴포넌트가 생성되면 completedGetData() 메서드를 호출하여 서버로부터 완료된 데이터를 가져옴
    this.completedGetData();
  },
  methods: {
    // 서버로부터 완료된 ToDo 데이터를 가져와서 completedData에 저장하는 메서드
    completedGetData() {
      axios.get("http://localhost:3000/completedGetData").then((response) => {
        this.completedData = response.data; // 받아온 데이터를 completedData에 할당
      });
    },
  },
};
</script>

<style>
.completeDataDisplay-container {
  position: relative;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
