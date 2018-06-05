import defaultSellerProfile from './default-profile.service'

export default {
  sellerProfile: defaultSellerProfile,
  async getSellerProfile(id, length) {
    return new Promise(resolve => setTimeout(() => resolve(this.sellerProfile), 1500))
  }
}