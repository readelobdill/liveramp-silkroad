<template>
  <div>
    <div v-if="loading">LOADING</div>
    <div v-else>
      <div class="sr-store-name">{{sellerProfile.storeName}}</div>
      <img :src="sellerProfile.iconUrl" width="100" height="100"/>
      <p class="sr-description">{{sellerProfile.description}}</p>
      <ul>
        <li v-for="speciality in sellerProfile.specialties">
          <p>{{speciality.name}}</p>
          <p>{{speciality.description}}</p>
        </li>
      </ul>
      <ul>
        <li v-for="product in sellerProfile.products">
          <p>{{product.name}}</p>
          <p>{{product.description}}</p>
          <img :src="product.imageUrl" width="100" height="100"/>
        </li>
      </ul>
      <ul>
        <li v-for="review in sellerProfile.reviews">
          <p>{{review.name}}</p>
          <span v-for="i in review.rating">⭐️</span>
          <p>{{review.description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DataService from '../services/data.service.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: true,
      sellerProfile: null
    }
  },
  async created() {
    let sellerId = this.$route.params.slug;
    this.sellerProfile = await DataService.getSellerProfile(sellerId)
    this.loading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
