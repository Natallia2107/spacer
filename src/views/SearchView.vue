<template>
  <div class="wrapper">
    <Claim v-if="step === 0" > </Claim>
    <SearchInput v-model="searchValue" :dark="step === 1" > </SearchInput>
    <HeroImage v-if="step === 0" ></HeroImage>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import HeroImage from '@/components/HeroImage.vue';

const API = 'https://images-api.nasa.gov/search';
export default {
  // eslint-disable-next-line quotes
  name: "SearchView",
  components: { Claim, SearchInput, HeroImage },
  data() {
    return {
      loading: false,
      step: 0,
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
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 30px;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
}
</style>
