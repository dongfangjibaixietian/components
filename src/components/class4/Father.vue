<template>
  <div>
    <h1>爸爸继承爷爷的资产：{{ money }}</h1>
    <Child
      :money="money"
      @notice="notice"
      v-bind="this.$attrs"
      v-on="this.$listeners"
    ></Child>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "Father",
  components: {
    Child,
  },
  props: {
    money: {
      type: Number,
      default: null,
    },
  },
  methods: {
    notice() {
      console.log("father");
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped></style>
