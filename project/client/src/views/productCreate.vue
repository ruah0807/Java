<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="product.product_name">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품가격</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="product.product_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="product.delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="product.add_delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품카테고리</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-3">
                            <select class="form-select">
                                <option>전자제품</option>
                            </select>
                        </div>
                        <div class="col-3">
                            <select class="form-select">
                                <option>컴퓨터</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-select">
                                <option>악세사리</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">태그</label>
                <div class="col-md-9">
                    <input type="text" class="form-control"  v-model="product.tags">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="product.outbound_days">
                        <span class="input-group-text">일 이내 출고</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-secondary">취소하기</button>
                </div>
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-danger" @click="productInsert">저장하기</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  data () {
    return {
      product: {
        product_name:"",
        product_price: 0,
        delivery_price: 0,
        add_delivery_price: 0,
        tags: "",
        outbound_days: 0,
        category_id: 1,
        seller_id: 1
      }    
    }
  },
  methods: {
    productInsert() {
        if (this.product.product_name=="") {
            return this.$swal("제품명은 필수 입력값입니다.");
        }
        this.$swal.fire({
            title: '정말 등록하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: '생성',
            cancelButtonText: '취소'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await this.$api("/api/productInsert", {param:[this.product]});
                this.$swal.fire('저장되었습니다!','', 'success');
                this.$router.push({path:'/sales'});
            }
        });
    }
  }
} 
</script>
