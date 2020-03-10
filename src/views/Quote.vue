<template>
  <div class="quote-page container d-flex flex-center">
    <div class="iframe-container">
      <iframe
        src="https://web.rentalcarmanager.com/api32/AllRidey/Step1mini.aspx"
        frameborder="0"
        height="507px"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote'
}
</script>

<style>
.quote-page {
  min-height: calc(100vh - 80px);
  /* padding-top: 80px; */
}

.iframe-container {
  background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/v1583817235/straight-loader.gif');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100px;
}
</style>
