<template>
    <div class="main-services">
        <span class="blur">
            <img src="../public/images/coming_soon.jpg" alt="pic_Coming Soon">
        </span>
        
    </div>
</template>

<style scoped>
/* .main-services {
    margin-top: 100px;
    height: 500px;

} */

.blur, .blur > img {
  margin-top: 45px;
  padding: 0;
  border: 0;
  width: 100%;
  height: 80%;
  opacity: 0.8;
  /* background-color: aquamarine; */
}
.blur > img {
  height: 900px;
}

.blur {
    position: relative;
    display: inline-block;
    font-size: 0;
    line-height: 0;
}
.blur:after {
    position: absolute;
    left: 0; 
    top: 45px; 
    right: 0; 
    bottom: 0;
    -moz-box-shadow: inset 0px 0px 15px 15px #fff;
    -webkit-box-shadow: inset 0px 0px 15px 15px #fff;
    box-shadow: inset 0px 0px 15px 15px #fff;
    content: "";
}
</style>