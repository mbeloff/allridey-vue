<template>
  <header class="header">
    <!-- Intro Section -->
    <div id="home" class="d-flex flex-center position-relative">
      <div class="mask">
        <div
          class="container h-100 d-flex justify-content-center align-items-center"
        >
          <div class="row smooth-scroll">
            <div class="col-md-12 text-center dark-text" style="z-index: 200;">
              <div class="wow fadeInDown rounded p-3" data-wow-delay="0.2s">
                <h1 class="dark-text display-3 mt-5 mt-xl-2 title-text">
                  Allridey
                </h1>
                <!--Rating-->
                <ul class="rating mt-3">
                  <li>
                    <i class="fas fa-star"></i>
                  </li>
                  <li>
                    <i class="fas fa-star"></i>
                  </li>
                  <li>
                    <i class="fas fa-star"></i>
                  </li>
                  <li>
                    <i class="fas fa-star"></i>
                  </li>
                  <li>
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
                <h3>
                  Cheap car and camper rentals across Australia and New Zealand
                </h3>
              </div>
            </div>
          </div>
        </div>
        <img
          class="header-img img-fluid w-50"
          src="https://res.cloudinary.com/dg5ybbkbh/image/upload/v1582171676/allridey/header2.png"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
<style>
header {
  top: 0;
  width: 100%;
  z-index: 1000;
  position: relative;
}

#home {
  background-image: radial-gradient(white, white, rgba(0, 0, 0, 0.164));
  background-size: 300%;
  background-position-x: 50%;
  top: 0;
  position: absolute;
  /* z-index: 0; */
  height: calc(100vh - 130px);
  /* max-height: 800px; */
  padding-top: 100px;
}

.header-img {
  left: 50%;
  bottom: 100%;
  margin-bottom: 0%;
  /* z-index: 100; */
}

.rating {
  color: #ffa000;
  list-style-type: none;
  padding: 0;
}
.rating li {
  display: inline-block;
}
</style>
