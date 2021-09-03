<template>
  <div>
    <h2>子女资产： {{ childM }}</h2>
    <button @click="getMoney">获得资产</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    childM: {
      type: Number,
      default: null,
    },
  },
  methods: {
    getMoney() {
      this.$emit("getMoney", 10);
    },
  },
};
</script>

<style scoped lang="scss"></style>
