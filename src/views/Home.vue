<template>
  <div class="home">
    <!-- <Mother></Mother> -->
    <Father></Father>
  </div>
</template>

<script>
// @ is an alias to /src
// import Mother from "@/components/Mother.vue";
import Father from "../components/class5/Father.vue";

export default {
  name: "Home",
  components: {
    // Mother,
    Father,
  },
};
</script>
