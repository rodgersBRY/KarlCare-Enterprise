<template>
  <div id="banner">
    <div class="banner-contents">
      <i class="bx bxs-package bx-lg"></i><br />
      <li>- INNOVATION</li>
      <li>- SAFETY</li>
      <li>- CUSTOMER CARE</li>
      <h1>
        TOP NOTCH <br />
        SAFE <br />
        SECURE <br />
      </h1>
    </div>
<!-- 
    <div class="track-product">
      <h2>Track Your Product</h2>
      <div>
        <input type="text" name="orderId" id="orderId" placeholder="Order Id" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <button>TRACK YOUR PRODUCT</button>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1000px) {
  #banner {
    background-image: url("../assets/delivery3.webp");
    position: relative;
    height: 70vh;
    .banner-contents {
      position: relative;
      top: 20%;
      padding: 0 1rem;
      li {
        display: inline-block;
        margin: 2rem 10px;
        font-size: 30px;
      }
    }
    .track-product {
      position: absolute;
      bottom: -15%;
      width: 70%;
      height: 35%;
    }
  }
}

@media (max-width: 1000px) {
  #banner {
    background-image: url("../assets/delivery3-mobile.webp");
    padding: 1rem 0;
    li {
      margin: 1rem 0;
    }
    .track-product {
      margin-top: 1rem;
      width: 90%;
    }
  }
}

#banner {
 
  background-size: cover;
  background-attachment: fixed;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  .banner-contents {
    width: 100%;
    text-align: center;
    li {
      list-style: none;
    }
    h1 {
      font-size: 50px;
    }
  }
  .track-product {
    text-align: center;
    padding: 2rem 1rem;
    background: white;
    color: black;
    border-radius: 5px;
    box-shadow: 2px 2px 5px grey;
    div {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
    input {
      width: 30%;
      padding: 16px;
      margin: 0 16px 0 0;
      box-shadow: 1px 1px 5px grey;
    }

    button {
      background: var(--button-color);
      padding: 0 10px;
      color: white;
    }
  }
}
</style>
