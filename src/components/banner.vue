<template>
  <div id="banner">
    <div class="banner-contents">
      <i class="bx bxs-package bx-lg"></i><br />
      <li>- INNOVATION</li>
      <li>- SAFETY</li>
      <li>- CUSTOMER CARE</li>
      <h1>TOP NOTCH, SAFE AND SECURE <br> COURIER SERVICES</h1>
    </div>

    <div class="track-product">
      <h2>Track Your Product</h2>
      <div>
        <input type="text" name="orderId" id="orderId" placeholder="Order Id" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <button>TRACK YOUR PRODUCT</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#banner {
  position: relative;
  height: 70vh;
  background-image: url("../assets/delivery3.jpg");
  background-size: cover;
  background-attachment: fixed;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  .banner-contents {
    position: relative;
    top: 20%;
    width: 100%;
    text-align: center;
    padding: 0 1rem;
    li {
      list-style: none;
      display: inline-block;
      margin: 2rem 10px;
      font-size: 30px;
    }
    h1 {
      font-size: 50px;
    }
  }
  .track-product {
    text-align: center;
    padding: 2rem 1rem;
    width: 70%;
    height: 35%;
    background: white;
    color: black;
    position: absolute;
    bottom: -15%;
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
