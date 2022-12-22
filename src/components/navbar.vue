<template>
  <div id="navbar" :class="[scrollPosition > 50 ? 'after50' : 'before50']">
    <div class="logo-div" @click="$router.push({ name: 'Home' })">
      <img
        width="200px"
        :src="require('../assets/logo.png')"
        alt="KarlCare Enterprises"
      />
    </div>

    <div class="nav-links">
      <router-link tag="li" exact-active-class="active" to="/">
        Home
      </router-link>
      <!-- <router-link tag="li" active-class="active" to="/about">
        About
      </router-link>-->
      <router-link tag="li" active-class="active" to="/services">
        Services
      </router-link>
      <button class="call-btn"><i class="bx bx-phone"></i>0712359979</button>
      <button class="order-btn" @click="$router.push({ name: 'Order' })">
        ORDER ONLINE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.after50 {
  box-shadow: 0px 2px 3px grey;
  position: fixed;
  z-index: 1;
  padding: 0 10px;
  width: 100%;
}

.before50 {
  box-shadow: 0px 2px 3px grey;
  width: 70%;
  margin: 0 auto;
  padding: 0 10px;
}

#navbar {
  background: white;
  display: flex;
  justify-content: space-between;
  .logo-div {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin-left: 16px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      span {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        color: var(--secondary-color);
      }
    }
  }
  .nav-links {
    li {
      list-style: none;
      display: inline-block;
      padding: 2rem;
      font-size: 18px;
      cursor: pointer;
      &:hover,
      &.active {
        color: var(--select-color);
      }
    }

    button {
      background: var(--button-color);
      padding: 16px;
      color: black;
      border: 2px solid black;
      font-weight: bold;
    }

    .call-btn {
      margin: 0 1px 0 16px;
    }
    .order-btn {
      &:hover,
      &.active {
        background: black;
        color: white;
        transition: background 0.5s ease-out, color 0.5s ease-in-out;
      }
    }
  }
}
</style>
