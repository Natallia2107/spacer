<template>
  <div class="searchWrapper">
    <input id="search" name="search" @input="handleChange" :value="value" :class="{ dark }" />
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.searchWrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 250px;

  input {
    height: 30px;
    border: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    border-bottom: 1px solid white;
    background: none;
    color: white;
    transition: box-shadow .3s ease-out;
  }

  input:focus {
    outline: none;
    box-shadow: 0 10px 20px -8px rgba(255, 255, 255, .5);
  }
}
</style>
