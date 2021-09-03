<template>
  <div>
    <h1>家庭资产：{{ fatherM }}</h1>
    <Father :fatherM="fatherM" @earnMoney="earnMoney" @invest="invest"></Father>
    <Child :childM="childM" @getMoney="getMoney"></Child>
  </div>
</template>

<script>
import Father from "./Father";
import Child from "./Child";
export default {
  name: "Mother",
  components: {
    Father,
    Child,
  },
  data() {
    return {
      fatherM: 3000,
      childM: 50,
    };
  },
  methods: {
    earnMoney(val) {
      this.fatherM += val;
    },
    invest(num) {
      this.fatherM = num;
    },
    getMoney(num) {
      this.fatherM -= num;
      this.childM += num;
    },
  },
};
</script>

<style scoped lang="scss"></style>
