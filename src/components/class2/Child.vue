<template>
  <div>
    <h2>孩子继承爸爸的资产:{{ money }}</h2>

    <Son :money="money" @notice="notice"></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: {
    Son,
  },
  props: {
    money: {
      type: Number,
      default: null,
    },
  },
  methods: {
    useMoney() {
      // 用$parent可以跳过parent的一层emit，直接在grandfather里定义方法接收
      this.$parent.$emit("useMoney", 100);
    },
    notice() {
      console.log("child");
    },
  },
};
</script>

<style scoped lang="scss"></style>
