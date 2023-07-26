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
    <div class="container_input">
      <!-- "ToDoInput" 컴포넌트를 렌더링 -->
      <ToDoInput />
    </div>
  </div>

  <!-- dataJson 배열을 순회하며 ToDo 항목을 출력 -->

  <!-- "ToDoList" 컴포넌트를 렌더링 -->
  <ToDoList />

  <!-- "완료" 버튼을 누르면 completeButton 메서드 실행 -->
  <div class="completeBtnContainer">
    <button @click="completeButton" id="completeBtn">완료</button>
  </div>
  <!-- Router-View를 통해 동적 라우팅 처리를 위한 컴포넌트 출력 -->
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Title from "./Title.vue";
import ToDoInput from "./ToDoInput.vue";
import ToDoList from "./ToDoList.vue";
import ToDoMenu from "./Menu.vue";

export default {
  name: "App",
  components: {
    Title,
    ToDoInput,
    ToDoList,
    ToDoMenu,
  },
  data() {
    return {
      // json 파일에 저장되어있는 데이터를 dataJson으로 저장
      checkedCategories: [], // 체크한 ToDo 항목을 저장하는 배열
      data: {}, // 클릭한 ToDo 항목의 데이터를 임시로 저장하는 객체
    };
  },
  computed: {
    ...mapState(["comleteIdArray"]),
  },

  methods: {
    completeButton() {
      this.checkedCategories = this.$store.state.completeIdArray;
      axios
        .post("http://localhost:3000/completeToDoList", this.checkedCategories)
        .then((response) => {
          // 서버로부터 응답을 받았을 때, 상태 코드가 200이면 페이지를 새로고침하여 화면을 갱신
          if (response.status == 200) {
            window.location.reload();
          }
        });
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
h1 {
  margin: 0px;
  display: block;
}

.container_01 {
  position: relative;
  text-align: center;
  width: 100%;
  height: 200px;
  top: 30px;
}
.container_menu {
  position: absolute;
  display: block;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}
.container_input {
  position: absolute;
  width: 100%;
  top: 150px;
}
.container_content {
  position: relative;
  width: 400px;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  border: 1px black solid;
}
.completeBtnContainer {
  width: 100%;
  text-align: center;
  position: relative;
  top: 60px;
}
#completeBtn {
  width: 90px;
  height: 30px;
}
</style>
