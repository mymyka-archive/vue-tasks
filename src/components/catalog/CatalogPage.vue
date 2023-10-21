<template>
  <div>
    <select class="form-select mb-5" v-model="type" :disabled="activeTypeSwitch">
      <option value="card">Card</option>
      <option value="list">List</option>
    </select>

    <v-btn @click="activeTypeSwitch = !activeTypeSwitch" class="mb-5">
      {{ activeTypeSwitch ? 'Active' : 'Block' }}
    </v-btn>

    <div v-if="type === 'card'">
      <v-row>
        <v-col v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" />
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <MovieList :movie="movies" />
    </div>
  </div>
</template>

<script>
import axiosInstance from '../../services/axios'
import MovieCard from './MovieCard.vue'
import MovieList from './MovieList.vue'

export default {
  name: 'CatalogPage',
  components: {
    MovieCard,
    MovieList
  },
  data() {
    return {
      movies: [],
      showDescription: false,
      type: 'card',
      activeTypeSwitch: false
    }
  },
  methods: {
    getMovies() {
      axiosInstance
        .get('/titles')
        .then((response) => {
          this.movies = this.cleanData(response.data.results)
          console.log(response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    cleanData(movies) {
      let result = []
      movies.forEach((element) => {
        if (element.primaryImage != null) {
          result.push(element)
        }
      })
      return result
    },
    switchType() {
      this.type = this.type === 'card' ? 'list' : 'card'
    }
  },
  mounted() {
    this.getMovies()
  }
}
</script>
