<template>
  <Card shadow>
    <h2>{{review.name}}</h2>
    <Rate class="rating" v-model="review.rating" disabled></Rate>
    <p>{{review.description}}</p>
  </Card>
</template>

<script>
export default {
  name: 'review-card',
  props: ['review']
}
</script>

<style scoped>
.rating{
  margin-bottom: 25px;
}
</style>