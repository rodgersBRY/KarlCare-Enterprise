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
@media (min-width: 1000px) {
  .parallax {
    background-image: url("../assets/delivery2.webp");
    height: 45vh;
    margin-top: 5rem;
    div {
      padding: 10rem;
    }
  }
}

@media (max-width: 1000px) {
  .parallax {
    background-image: url("../assets/delivery2-mobile.webp");
    margin-top: 3rem;
    div {
      padding: 2rem;
    }
  }
}

.parallax {
  background-size: cover;
  background-attachment: fixed;
  div {
    width: 100%;
    height: 100%;
    text-align: center;
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
