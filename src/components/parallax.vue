<template>
  <div class="parallax">
    <div>
      <h2>OUR VISION</h2>
      <h1>
        To be the go to courier for fast, safe and reliable services in Kenya
        and East Africa Region.
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parallax {
  background-image: url("../assets/delivery2.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 45vh;
  margin-top: 5rem;
  div {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10rem;
    color: white;
    background: rgba(21, 21, 76, 0.3);
    h1 {
      font-size: 40px;
      margin-top: 2rem;
    }
    h2 {
      font-size: 30px;
      color: var(--secondary-color);
    }
  }
}
</style>
