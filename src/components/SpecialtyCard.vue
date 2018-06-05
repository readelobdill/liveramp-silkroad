<template>
  <Card class="specialty-card" shadow>
    <h2>{{specialty.name}}</h2>
    <p>{{specialty.description}}</p>
    <Icon :type="specialty.category" size="50" color="#76c06b" />
  </Card>
</template>

<script>
export default {
  name: 'specialty-card',
  props: ['specialty']
}
</script>

<style  lang="scss">
.specialty-{
  &card{
    .ivu-card-body{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>