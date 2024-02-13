<template>
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
</template>