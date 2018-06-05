<template>
  <div>
    <Spin v-if="loading" size="large" fix></Spin>
    <div v-else class="seller-layout">
      <div class="seller-content">

        <div class="seller-profile">
          <Avatar :src="sellerProfile.iconUrl" class="seller-avatar"icon="person" size="large" shape="square"/>
          <h2 class="seller-store-name">{{sellerProfile.storeName}}</h2>
          <Rate class="seller-rating" v-model="overallRating" disabled allow-half></Rate>
          <p class="seller-description">{{sellerProfile.description}}</p>
        </div>

        <Tabs class="seller-tabs" value="reviews" type="card">
          <TabPane label="Reviews" name="reviews" icon="star" class="seller-grid">
            <review-card  v-for="(review, i) in sellerProfile.reviews" :key="i" :review="review"/>
          </TabPane>

          <TabPane label="Specialties" name="specialties" icon="ribbon-b" class="seller-grid">
            <specialty-card v-for="(specialty, i) in sellerProfile.specialties" :key="i" :specialty="specialty"/>
          </TabPane>

          <TabPane label="Products" name="products" icon="ios-pricetags" class="seller-grid">
            <product-card v-for="(product, i) in sellerProfile.products" :key="i" :product="product"/>
          </TabPane>
        </Tabs>

      </div>
    </div>
  </div>
</template>

<script>
import DataService from '../services/data.service.js'

import SpecialtyCard from '@/components/SpecialtyCard'
import ProductCard from '@/components/ProductCard'
import ReviewCard from '@/components/ReviewCard'

export default {
  name: 'SellerProfile',
  components: { SpecialtyCard, ProductCard, ReviewCard },
  computed: {
    overallRating() {
      let rating = 0;
      let reviews = this.sellerProfile['reviews'];
      if (reviews) {
        for (let review of reviews) rating += review.rating
        rating = rating / reviews.length;
      }
      return rating;
    }
  },
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

<style lang="scss">
.seller-{
  &layout{
    width: 90vw;
    margin: 50px auto;
  }

  &content{
    display: grid;
    grid-template-columns: 1.25fr 3fr;
    grid-gap: 50px;
  }

  &profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    padding: 30px;
    background: #76c06b;
  }

  &store-name{
    font-size: 26px;
    border-bottom: none;
  }

  &avatar{
    height: 150px;
    width: 150px;
  }

  &rating{
    margin-bottom: 25px;
  }

  &tabs{
    .ivu-tabs-tab:hover,
    .ivu-tabs-tab-active{
      color: #76c06b !important;
    }
  }

  &grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
}

@media screen and (max-width: 479px) {
  .seller-{
    &layout{
      width: 100vw;
      margin: 0;
    }

    &content{
      grid-template-columns: 1fr;
    }

    &grid{
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 25px;
    }
  }
}
</style>
