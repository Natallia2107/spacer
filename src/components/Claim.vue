<template>
  <div class="claimWrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">
      <!-- eslint-disable-next-line max-len -->
      Begin your journey through our amazing galaxy and discover places you never even heard of.
    </p>
    <p class="subclaim">Typeanything space-related to start.</p>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line quotes, vue/multi-word-component-names
  name: "Clain",
};
</script>

<style lang="scss" scoped>
.claimWrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.claim {
  font-size: 50px;
  margin: 0;
}
.subclaim {
  font-size: 13px;
  margin-top: 20px 0 0 0;
}
</style>
