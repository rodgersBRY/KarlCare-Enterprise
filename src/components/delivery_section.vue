<template>
  <div class="delivery">
    <img width="50%" :src="require('../assets/delivery1.jpg')" alt="" />
    <div class="delivery-text">
      <h1>Highly Professional Staff</h1>
      <div class="divider"></div>
      <p>
        KarlCare Agencies is privately owned company that provides top notch,
        safe and secure courirer services . Based in Nairobi, Kenya, we have
        substantial operating capacity, powered by a team of 20 highly
        professional staff with a combined experience of over 5 years in the
        industry. At KarlCare Agencies we value our clients and partners need to
        move their packages safely and as fast as possible
      </p>

      <button style="display: flex; align-items: center">
        ORDER NOW <span><i class="bx bx-right-arrow-alt bx-sm"></i></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delivery {
  display: flex;
  align-items: center;
  img {
    position: relative;
    left: 5%;
    height: 500px;
  }
  .delivery-text {
    padding: 5rem 5rem 2rem 7rem;
    margin-right: 5%;
    width: 50%;
    height: 100%;
    background: var(--faded-select-color);
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 18px;
    }
    .divider {
      background: var(--secondary-color);
      height: 3px;
      width: 80px;
      margin: 20px 0;
    }
    button {
      background: var(--button-color);
      padding: 10px;
      color: white;
      margin-top: 2rem;
      &:hover {
        background: white;
        color: black;
      }
    }
  }
}
</style>
