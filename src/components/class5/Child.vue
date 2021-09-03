<template>
  <div></div>
</template>

<script>
export default {
  name: "Child",

  components: {},
  props: {},
  methods: {},
  mounted() {
    this.$eventBus.$on("childTouch", (param) => {
      console.log(param);
    });
    this.$nextTick(() => {
      this.$eventBus.$emit("fatherTouch", "这是child2");
    });
  },
};
</script>

<style scoped lang="scss"></style>
