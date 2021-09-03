<template>
  <div>
    <h1>爸爸</h1>
    <Child></Child>
    <Child2 />
  </div>
</template>

<script>
import Child from "./Child";
import Child2 from "./Child2";

export default {
  name: "Father",
  components: {
    Child,
    Child2,
  },
  props: {},
  methods: {},
  mounted() {
    this.$eventBus.$on("fatherTouch", (param) => {
      console.log(param);
    });
  },
};
</script>

<style scoped></style>
