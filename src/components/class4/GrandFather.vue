<template>
  <div>
    <h1>爷爷的资产4：{{ money }}</h1>
    <Father></Father>
  </div>
</template>

<script>
import Father from "./Father";
export default {
  name: "GrandFather",
  provide() {
    return {
      grandpa: this,
    };
  },
  components: {
    Father,
  },
  data() {
    return {
      money: 10000,
      name: "小谢",
      age: 18,
      hobby: "Travel",
      homeTown: "北京",
    };
  },
  methods: {
    useMoney(val) {
      this.money -= val;
      this.$eventBroadcast("notice");
    },
    look() {
      console.log("回家吃饭");
    },
  },
};
</script>

<style scoped></style>
