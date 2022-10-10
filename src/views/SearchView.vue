<template>
  <div class="wrapper">
    <Clain> </Clain>
    <div class="search">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Clain from '@/components/Clain.vue';
// import { response } from 'express';

const API = 'https://images-api.nasa.gov/search';
export default {
  // eslint-disable-next-line quotes
  name: "SearchView",
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line func-names
    handleInput: debounce(function () {
      // eslint-disable-next-line no-undef
      axios
        .get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
  components: { Clain },
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 0;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 100%;
}
.search {
  // display: flex;
  // flex-direction: column;
  width: 300px;

  label {
    font-family: "Montserrat", sans-serif;
  }

  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
  }
}
</style>
