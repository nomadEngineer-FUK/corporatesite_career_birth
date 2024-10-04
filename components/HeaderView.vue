
<template>
    <div>

    <!-- <header>
      
      <nav class="pc-nav">
          <ul>
              <li><NuxtLink to="/">ABOUT</NuxtLink></li>
              <li><NuxtLink to="/">SERVICE</NuxtLink></li>
              <li><NuxtLink to="/overview">COMPANY</NuxtLink></li>
              <li><NuxtLink to="/">CONTACT</NuxtLink></li>
          </ul>
      </nav>
    </header> -->


      <!-- トップに表示する画像 -->
      <span class="blur">
        <img src="../public/images/corporate_toppage_ver2.jpg" alt="top picture" class="top-picture">
      </span>
      

      

    </div>
  </template>
  
<style scoped>

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


/* .top-picture {
  opacity: 0.7;
  margin-top: 100px;
  position: relative;
}
.top-picture::after {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 0 15px 15px gray;
}
image {
  width: 100%;
  height: 100%;
} */


  
  </style>
  