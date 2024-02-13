<template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable -->
        <main class="mt-3">
            <div class="container">
                <div class="col-12">	
                <h2 class="text-center">제품 사진 등록</h2>
                <div class="mb-3 row">
                        <label class="col-md-3 col-form-label">제품 ID</label>
                    <div class="col-md-9">
                            {{ productId }}
                    </div>
                </div>
                <div class="mb-3 row">
                        <label class="col-md-3 col-form-label">제품명</label>
                    <div class="col-md-9">
                            {{ productDetail2.product_name }}
                    </div>
                </div>

                <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">썸내일이미지</label>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-cm-2" :key="i" v-for="(m,i) in productImage.filter(c=>c.type==1)">
                                <div class="position-relative">
                                    <img :src="`/download/${productId}/${m.path}`" class="img-fluid" />
                                    <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(m.id)">X</div>							
                                </div>	
                            </div>
                        </div>
                        <input class="form-control" type="file" accept="image/png,image/jpeg" @change="uploadFile($event.target.files, 1)">
                        <div class="alert alert-secondary" role="alert">
                            <ul>
                                <li>이미지 사이즈 : 350*350</li>
                                <li>파일 사이즈 : 1M 이하</li>
                                <li>파일 확장자 : png, jpg만 가능</li>
                            </ul>
                            </div>
    
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">제품이미지</label>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-cm-2" :key="i" v-for="(m,i) in productImage.filter(c=>c.type==2)">
                                <div class="position-relative">
                                    <img :src="`/download/${productId}/${m.path}`" class="img-fluid" />
                                    <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(m.id)">X</div>	
                                </div>	
                            </div>
                        </div>
                        <input class="form-control" type="file" accept="image/png,image/jpeg" @change="uploadFile($event.target.files, 2)">
                        <div class="alert alert-secondary" role="alert">
                            <ul>
                                <li>최대 5개 가능</li>
                                <li>이미지 사이즈 : 700*700</li>
                                <li>파일 사이즈 : 1M 이하</li>
                                <li>파일 확장자 : png, jpg만 가능</li>
                            </ul>
                            </div>
    
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">제품설명이미지</label>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-cm-2" :key="i" v-for="(m,i) in productImage.filter(c=>c.type==3)">
                                <div class="position-relative">
                                    <img :src="`/download/${productId}/${m.path}`" class="img-fluid pt-5" />										
                                    <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(m.id)">X</div>
                                </div>	
                            </div>
                        </div>
                        <input class="form-control" type="file" accept="image/png,image/jpeg" @change="uploadFile($event.target.files, 3)">
                        <div class="alert alert-secondary" role="alert">
                            <ul>
                                <li>파일 사이즈 : 5M 이하</li>
                                <li>파일 확장자 : png, jpg만 가능</li>
                            </ul>
                            </div>
                    </div>
                </div>
                <div class="mb-3 row m-auto">
                    
                        <button type="button" class="btn btn-lg btn-dark" @click="goToList">확인</button>
                    
                    
                </div>
            </div>
            </div>	
        </main>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
    data() {
        return {
            productId: 0,
            productName: "",
            productDetail2: {},
            productImage: []	
        }
    },
    created () {
    this.productId = this.$route.query.product_id
    this.getProductDetail()
    this.getProductImage()
    },
    methods: {
        goToList() {
    this.$router.push({path:'/sales'}); 
    },
        async getProductDetail () {
        let productDetail2 = await this.$api('/api/productDetail2', { param: [this.productId] })
        if(productDetail2.length > 0 ) {
        this.productDetail2 = productDetail2[0];
        }
        console.log('this.productDetail2',this.productDetail2)
    },
    async getProductImage () {
        this.productImage = await this.$api('/api/imageList', { param: [this.productId] })
        console.log('this.productImage',this.productImage)
    },
    deleteImage(id) {
        this.$swal.fire({
        title: '정말 삭제 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `삭제`,
        cancelButtonText: `취소`
        }).then(async (result) => {
        if (result.isConfirmed) {    
            await this.$api("/api/imageDelete",{param:[id]});
            this.getProductImage();
            this.$swal.fire('저장되었습니다!', '', 'success');		 
        } 
        });
    },
    async uploadFile(files, type) {
        let name = "";
        let data = null;
        if (files) {
            name = files[0].name;
            data = await this.$base64(files[0]);			
        }
        const { error } = await this.$api(`/upload/${this.productId}/${type}/${name}`, {data});
        if (error) {
            return this.$swal("이미지 업로드 실패 했습니다. 다시 시도하세요.");
        }
        this.$swal("이미지가 업로드 되었습니다.");
        setTimeout(() =>  {
            this.getProductImage();
        },1000);
    }
    }
}
</script>