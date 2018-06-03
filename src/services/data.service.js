export default {
  async getSellerProfile(id) {
    let sellerProfile = {
      storeName: 'Store Name',
      iconUrl: 'https://media.giphy.com/media/10zSC3pUm2rZVS/giphy.gif',
      description: '',
      specialties: [
        {
          name: 'specialty name',
          description: 'specialty description'
        }
      ],
      products: [
        {
          name: 'product name',
          description: 'product description',
          imageUrl: 'https://media.giphy.com/media/10zSC3pUm2rZVS/giphy.gif'
        }
      ],
      reviews: [
        {
          name: 'reviwer name',
          rating: 4,
          desciption: 'review description'
        },
        {
          name: 'reviwer name',
          rating: 2,
          desciption: 'review description'
        }
      ]
    }

    return new Promise(resolve => setTimeout(() => resolve(sellerProfile), 1000))
  }
}