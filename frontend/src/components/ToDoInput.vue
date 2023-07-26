<template>
  <!-- ToDo 항목을 입력하는 입력 폼 -->
  <div id="todoinput" class="todoinput">
    <select name="categories" v-model="category">
      <option selected disabled>카테고리</option>
      <option value="개인">개인</option>
      <option value="업무">업무</option>
      <option value="가정">가정</option>
      <option value="가족">가족</option>
      <option value="건강">건강</option>
      <option value="재정">재정</option>
      <option value="교육">교육</option>
      <option value="소셜">소셜</option>
      <option value="여행">여행</option>
      <option value="프로젝트">프로젝트</option>
      <option value="쇼핑">쇼핑</option>
      <option value="목표">목표</option>
      <option value="할 일 대기">할 일 대기</option>
    </select>
    <!-- v-model 디렉티브를 사용하여 content 변수와 입력 필드를 양방향 바인딩 -->
    <input
      type="text"
      v-model="content"
      @keyup.enter="addTodo"
      class="input-box"
    />
    <!-- 버튼을 클릭하면 addTodo 메서드가 호출되도록 설정 -->
    <button type="button" @click="addTodo" class="submit-btn">제출</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      content: "", // ToDo 항목의 내용을 담을 변수
      id: "", // ToDo 항목의 고유한 ID를 담을 변수
      category: "카테고리",
      data: {}, // 서버로 전송할 ToDo 항목 데이터를 담을 객체
    };
  },

  methods: {
    addTodo() {
      // 입력 필드가 비어있을 경우 경고 메시지를 출력하고 함수 종료
      if (this.content == "") {
        alert("리스트를 작성해주세요.");
        return;
      }

      if (this.category == "카테고리") {
        alert("카테고리를 선택해주세요.");
        return;
      }

      // 현재 시간을 ToDo 항목의 고유한 ID로 사용하여 ToDo 항목을 저장
      this.id = Date.now();
      this.$store.commit({
        type: "addTodo", // commit store.js의 addToDo 함수 호출
        id: Date.now(), // ToDo 항목의 ID를 현재 시간으로 설정
        category: this.category,
        content: this.content, // ToDo 항목의 내용을 content 변수에서 가져옴
      });

      // 서버로 전송할 ToDo 항목 데이터를 설정
      this.data = {
        id: this.id, // ToDo 항목의 ID를 설정
        category: this.category,
        todo: this.content, // ToDo 항목의 내용을 설정
      };

      // 서버에 ToDo 항목 데이터를 전송 (axios 라이브러리 사용)
      axios
        .post("http://localhost:3000/postData", this.data)
        .then((response) => response)
        .catch((error) => {
          console.log(error);
        });

      this.content = ""; // ToDo 항목 추가 후 입력 필드를 빈 값으로 초기화
      window.location.reload();
    },
  },
};
</script>

<style>
.input-box {
  width: 400px;
  height: 40px;
  font-size: 20px;
}
.submit-btn {
  width: 100px;
  height: 45px;
  margin-left: 10px;
}
</style>
