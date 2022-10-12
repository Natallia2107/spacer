<template>
  <div :class="[{ flexStart: step === 1 }, 'wrapper']">
    <transition name="slide">
      <img src="../assets/SpaceX-Logo.wine.png" class="logo" v-if="step === 1" alt="" />
    </transition>
    <transition name="fade">
      <HeroImage v-if="step === 0"></HeroImage>
    </transition>
    <Claim v-if="step === 0"></Claim>
    <SearchInput v-model="searchValue" @input="handleInput" :dark="step === 1"></SearchInput>
    <div class="results" v-if="results && !loading && step === 1">
      <Item
        v-for="item in results"
        :item="item"
        :key="item.data[0].nasa_id"
        @click.enter="handleModalOpen(item)"
      ></Item>
    </div>
    <div class="loader" v-if="step === 1 && loading"></div>
    <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false" />
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import HeroImage from '@/components/HeroImage.vue';
import Item from '@/components/Item.vue';
import Modal from '@/components/Modal.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Search',
  components: {
    Claim,
    SearchInput,
    HeroImage,
    Item,
    Modal,
  },
  data() {
    return {
      modalOpen: false,
      modalItem: null,
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
      console.log(item);
    },
    // eslint-disable-next-line
    handleInput: debounce(function () {
      this.loading = true;
      console.log(this.searchValue);
      axios
        .get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: margin-top 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  margin-top: -50px;
}

.wrapper {
  display: flex;
  position: relative;
  height: 100vh;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  justify-content: center;
  width: 100%;

  &.flexStart {
    justify-content: flex-start;
  }
}

.loader {
  margin-top: 100px;
  display: inline-block;
  width: 80px;
  height: 80px;

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
}
.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #1e3d4a;
  border-color: #1e3d4a transparent #1e3d4a transparent;
  animation: loading 1.2s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.logo {
  width: 120px;
  position: absolute;
  top: 40px;
}

.results {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
