<template>
    <div class="py-14 my-10">
        <h4 class="text-center text-lg">Practice Advice</h4>
        <h2 class="mb-2 text-4xl font-bold text-center leading-tight text-neutral-800 dark:text-neutral-50">Featured Posts</h2>
        <p class="mb-4 text-center text-neutral-600 dark:text-neutral-200">Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics</p>
    </div>
</template>
<script>
export default {
  name: "Trending",
  data() {
    return {
      apiKey: process.env.VUE_APP_BLOG_API_KEY,
      search: "",
      movies: {},
      baseImgPath: process.env.VUE_APP_MOVIE_API_BASE_IMG_PATH,
    };
  },

  methods: {
    fetchMovies() {
      this.$http
        .get(`trending/movie/day${this.apiKey}`)
        .then((response) => {
          console.log(response.data.results);
          // setMovies(response.data.results);
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.fetchMovies();
    console.log(process.env, 333);
  },
};
</script>

