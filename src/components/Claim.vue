<template>
  <div class="claimWrapper">
    <h1 class="claim">SPACEX</h1>
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
  color: white;
}
.claim {
  font-size: 50px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 100px;
  }
}
.subclaim {
  margin-top: 20px 0 0 0;
  font-size: 13px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1;
    letter-spacing: 1px;
    width: 500px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
}
</style>
