<template>
  <div id="app">
  <Header></Header>
    <Layout id="app-layout">
        <router-view/>
    </Layout>
    <Footer>&copy; LobstrDesigns</Footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  font-family: 'Noto Sans', sans-serif;
}

#app-layout{
  min-height: 100vh;
}

h2{
  margin: 15px 0;
  text-transform: uppercase;
  border-bottom: 1px solid grey;
  font-weight: 700;
}

p{
  font-size: 16px;
}
</style>
