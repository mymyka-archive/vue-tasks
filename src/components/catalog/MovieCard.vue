<template>
  <div>
    <v-card>
      <v-img :src="movie.primaryImage.url" height="200px" />
      <v-card-title>{{ movie.originalTitleText.text }}</v-card-title>
      <v-card-subtitle>{{ movie.releaseYear.year }}</v-card-subtitle>
      <v-card-text v-if="showDescription">{{
        movie.primaryImage.caption.plainText + ' With v-if'
      }}</v-card-text>
      <v-card-text v-show="showDescription">{{
        movie.primaryImage.caption.plainText + ' With v-show'
      }}</v-card-text>
      <v-card-actions>
        <v-btn text @click="showDescription = !showDescription">
          {{ showDescription ? 'Hide' : 'Show' }} Description
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    },
    showDescription: {
      type: Boolean
    }
  }
}
</script>
