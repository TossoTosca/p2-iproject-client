<script>
import { mapState, mapActions } from "pinia";
import { useIndexStore } from "../stores";
export default {
  data() {
    return {
      oneNews: {},
    };
  },
  computed: {
    ...mapState(useIndexStore, ["news"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchNews"]),
    splitNews() {
      try {
        this.oneNews = this.news.map((el) => {
          return el;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchNews();
    this.news;
  },
};
</script>
<template>
  <div
    class="card p-2 m-2 mb-1 mt-1"
    style="width: 18rem"
    v-for="oneNews in news"
    :key="oneNews.id"
  >
    <img :src="oneNews.urlToImage" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ oneNews.title }}</h5>
      <p class="card-text">
        {{ oneNews.content }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
