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
    this.$nextTick(() => {
      this.$eventBus.$emit("childTouch", "这是child");
    });
  },
};
</script>

<style scoped lang="scss"></style>
