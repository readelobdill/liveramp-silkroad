<template>
  <Card class="product-card" shadow>
    <h2>{{product.name}}</h2>
    <img :src="product.imageUrl" width="100" height="100"/>
    <p>{{product.description}}</p>
  </Card>
</template>

<script>
export default {
  name: 'product-card',
  props: ['product']
}
</script>

<style lang="scss">
.product-{
  &card{
    .ivu-card-body{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img{
      margin: 20px 0;
    }
  }
}
</style>