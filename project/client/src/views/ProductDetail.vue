<template>
  <main class="mt-3">
        <div class="container">
            <div class="row">
            <div class="col-md-5">
                <div id="carouselExampleIndicators" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div :class="`carousel-item ${i==0?'active':''}`" :key="i" v-for="(img, i) in productImage">
                        <img :src="img.path" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            <div class="col-md-7">
                <div class="card text-center">
                    <div class="card-body">
                      <h5 class="card-title">{{ productDetail.product_name }}</h5>
                      <h5 class="card-title pt-3 pb-3 border-top">{{getCurrencyFormat(productDetail.product_price)}}원</h5>
                      <p class="card-text pt-3 border-top">
                        <span class="badge bg-dark me-1">{{productDetail.category1}}</span>
                        <span class="badge bg-dark me-1">{{productDetail.category2}}</span>
                        <span class="badge bg-dark">{{productDetail.category3}}</span>
                      </p>
                      <div class="card-text">
                       <h5>배송비 {{ getCurrencyFormat(productDetail.delivery_price) }}원|도서산간(제주도)배송비추가 {{ getCurrencyFormat(productDetail.add_delivery_price) }}원|택배 배송|{{ productDetail.outbound_days }}일이내 출고(주말, 공휴일 제외)</h5>
                      </div>
                      <div class="card-text border-top pb-3 pt-3">
                        <div class="row">
                            <div class="col-auto">
                                <label class="col-from-label">구매수량</label>
                            </div>
                            <div class="col-auto">
                                <div class="input-group">
                                    <span class="input-group-text" style="cursor: pointer;" @click="minus()">-</span>
                                    <input type="text" class="form-control" style="width: 45px; text-align: center;" v-model="count">
                                    <span class="input-group-text" style="cursor: pointer;" @click="plus()">+</span>
                                  </div>
                            </div>
                            </div>
                      </div>
                      <div class="row pt-3 border-top">
                        <div class="col-4">
                            <h3>총 상품 금액</h3>
                        </div>
                        <div class="col-8" style="text-align: right;">
                        <h3>{{getCurrencyFormat(totalPrice)}}원</h3>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="col-6 d-grid p-1">
                        <button type="button" class="btn btn-lg btn-dark">장바구니 담기</button>
                      </div>
                      <div class="col-6 d-grid p-1">
                        <button type="button" class="btn btn-lg btn-danger">주문하기</button>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        </div>
        <div class="row mt-3">
                <img :src="productDetail.path" class="img-fluid">
          </div>
    </div>
      </main>
</template>
<script>
export default {
// eslint-disable-next-line
/* eslint-disable */
    data () {
        return {
            count: 0,
            productID: 0,
            totalPrice: 0,
            productDetail: {},
            productImage: []
        };
    },
    created () {
        this.productID = this.$route.query.product_id;
        alert(this.productID);
        this.getProductDetail();
        this.getProductImage();
    },
    methods: {
        getCurrencyFormat(value)  {
          return this.$currencyFormat(value);
        },
        async getProductDetail() {
            let productDetail = await this.$api('/api/productDetail',{param:[this.productID]});
            if(productDetail.length > 0) {
                this.productDetail = productDetail[0];
            }
            console.log(this.productDetail);
        },
        async getProductImage() {
            this.productImage = await this.$api('/api/productMainImages',{param:[this.productID]});
            console.log('this.productImage',this.productImage)
        },
        plus() {
          this.count = this.count + 1;
          this.totalPrice = this.productDetail.product_price * this.count;
        },
        minus() {
          if(this.count <= 1) {
            return;
          } else {
            this.count = this.count -1;
            this.totalPrice = this.productDetail.product_price * this.count;
          }
        }
        }
    }
</script>
