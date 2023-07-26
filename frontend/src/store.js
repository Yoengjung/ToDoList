import { createStore } from "vuex";

const store = createStore({
  state() {
    // store 변수 설정
    return {
      todos: [],
      completeIdArray: [],
    };
  },
  mutations: {
    addTodo(state, payload) {
      //ToDoInput.vue에서 commit으로 보내줬기 때문에 payload로 받아야 함. 개인 인자로 넘겨줄 때는 state.()를 사용
      state.todos.push(payload); // todos 배열에 payload {type: 'addTodo', id: '', content: ''} 저장
    },
    completeId(state, payload) {
      state.completeIdArray.push(payload);
    },
  },
});

export default store;
