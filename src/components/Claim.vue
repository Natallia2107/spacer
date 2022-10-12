<template>
  <div class="ClaimWrapper">
    <h1 class="claim">spacex</h1>
    <p class="subclaim">
      Search what do you want from space! <br />
      Have fun!
    </p>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Claim',
};
</script>
<style lang="scss" scoped>
.ClaimWrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.claim {
  font-size: 50px;
  margin: 0;
  text-transform: uppercase;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 100px;
  }
}

.subclaim {
  margin: 20px 0 0 0;
  font-size: 13px;
  font-weight: 400;
  color: #fff;

  @media (min-width: 768px) {
    width: 500px;
    font-size: 17px;
    line-height: 1;
    letter-spacing: 1px;
  }
}
</style>
