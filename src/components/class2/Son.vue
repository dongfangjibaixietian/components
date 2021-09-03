<template>
  <div>
    <h2>孙子继承爸爸的资产:{{ money }}</h2>
    <button @click="useMoney">用钱</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: {
    money: {
      type: Number,
      default: null,
    },
  },
  methods: {
    useMoney() {
      // 用$parent可以跳过parent的一层emit，直接在grandfather里定义方法接收
      // 这里用的自定义的eventDispatch方法，本质上就是$emit.
      this.$eventDispatch("useMoney", 100);
    },
  },
};
</script>

<style scoped lang="scss"></style>
