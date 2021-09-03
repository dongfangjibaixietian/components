<template>
  <div>
    <h1>爷爷的资产4：{{ money }}</h1>
    <Father
      :money="money"
      :name="name"
      :age="age"
      :hobby="hobby"
      :homeTown="homeTown"
      @useMoney="useMoney"
      @look="look"
    ></Father>
  </div>
</template>

<script>
import Father from "./Father";
export default {
  name: "GrandFather",

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
