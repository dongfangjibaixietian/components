<template>
  <div>
    <h2>孩子继承爸爸的资产:{{ money }}</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  inject: ["grandpa"],
  components: {},
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
  mounted() {
    console.log(this.grandpa.name);
  },
};
</script>

<style scoped lang="scss"></style>
