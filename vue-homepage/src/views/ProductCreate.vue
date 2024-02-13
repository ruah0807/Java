<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품가격</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" value="0">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" value="0">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" value="0">
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
                <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" value="0">
                        <span class="input-group-text">일 이내 출고</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">썸네일이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png, image/jpeg">
                    <div class="alert alert-secondary" role="alert">
                       <ul>
                        <li>이미지사이즈 : 350*350</li>
                        <li>파일 사이즈 : 1M 이하</li>                  <!--파일선택 경고-->
                        <li>파일 확장자 : png, jpg만 가능</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png, image/jpeg" multiple> <!--파일 여러개 가능 -->
                    <div class="alert alert-secondary" role="alert">
                       <ul>
                        <li>최대 5개 가능</li>
                        <li>이미지사이즈 : 700*700</li>
                        <li>파일 사이즈 : 1M 이하</li>                  <!--파일선택 경고-->
                        <li>파일 확장자 : png, jpg만 가능</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품설명이미지</label>
                <div class="col-md-9">
                    <input class="form-control" type="file" accept="image/png, image/jpeg"> <!--파일 여러개 가능 -->
                    <div class="alert alert-secondary" role="alert">
                       <ul>
                        <li>파일 사이즈 : 5M 이하</li>                  <!--파일선택 경고-->
                        <li>파일 확장자 : png, jpg만 가능</li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-primary">취소하기</button>
                </div>
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-secondary">저장하기</button>
                </div>
            </div>
        </div>
    </main>    

</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {}, 
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>
