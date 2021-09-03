<template>
  <div>
    <h1>爷爷的资产：{{ money }}</h1>
    <Father :money="money" @useMoney="useMoney"></Father>
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
    };
  },
  methods: {
    useMoney(val) {
      this.money -= val;
      this.$eventBroadcast("notice");
    },
  },
};
</script>

<style scoped></style>
