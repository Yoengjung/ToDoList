<template>
  <div id="title">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "ToDo-Title",
  props: {
    name: String,
  },
};
</script>
