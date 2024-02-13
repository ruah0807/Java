<script>
import ApiMixin from '@/api.js'
export default {
  mixins: [ApiMixin],
  data () {
    return {
      productList: []
    }
  },
  async mounted () {
    this.productList = await this.$callAPI ('https://eb6e76fe-d371-4bdc-a16c-d698ae7d85c2.mock.pstmn.io')
    console.log(this.productList)
  }
}
</script>
