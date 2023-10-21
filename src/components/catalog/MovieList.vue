<template>
  <div>
    <v-list lines="one">
      <v-list-item
        v-for="item in movie"
        :key="item.id"
        :title="item.originalTitleText.text"
        :subtitle="item.primaryImage.caption.plainText"
      ></v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movie: {
      type: Array,
      required: true
    }
  }
}
</script>
