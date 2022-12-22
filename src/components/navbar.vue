<template>
  <div id="navbar" :class="[scrollPosition > 60 ? 'after60' : 'before60']">
    <div class="logo-div" @click="$router.push({ name: 'Home' })">
      <img
        width="200px"
        :src="require('../assets/logo.png')"
        alt="KarlCare Enterprises"
      />
    </div>

    <div class="mobile-items">
      <button class="order-btn" @click="$router.push({ name: 'Order' })">
        ORDER ONLINE
      </button>
      <v-btn icon class="mobile-menu-icon" @click="openNav">
        <i class="bx bx-menu bx-md"></i>
      </v-btn>
    </div>

    <div class="mobile-nav-items">
      <v-btn icon dark class="close-nav-btn" @click="closeNav"
        ><i class="bx bx-x bx-md"></i
      ></v-btn>
      <br />
      <br />
      <router-link tag="li" exact-active-class="active" to="/">
        Home
      </router-link>
      <button class="call-btn"><i class="bx bx-phone"></i>0712359979</button>
      <button class="order-btn" @click="$router.push({ name: 'Order' })">
        ORDER ONLINE
      </button>
    </div>

    <div class="nav-links">
      <router-link tag="li" exact-active-class="active" to="/">
        Home
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
    openNav() {
      let mobileNav = document.getElementsByClassName("mobile-nav-items")[0];
      mobileNav.style.height = "35vh";
    },
    closeNav() {
      let mobileNav = document.getElementsByClassName("mobile-nav-items")[0];
      mobileNav.style.height = "0";
    },
  },
};
</script>

<style lang="scss" scoped>
.after60 {
  box-shadow: 0px 2px 3px grey;
  position: fixed;
  z-index: 1;
  // padding: 0 10px;
  width: 100%;
}

// mobile device
@media (max-width: 1000px) {
  .before60 {
    width: 100%;
  }
  .mobile-items {
    display: inline-block;
    .order-btn {
      background: var(--button-color);
      padding: 10px;
      color: white;
      margin-right: 10px;
    }
  }
  .nav-links {
    display: none;
  }
}

// desktop device
@media (min-width: 1000px) {
  .before60 {
    width: 70%;
    margin: 0 auto;
  }
  .mobile-items {
    display: none;
  }
}

#navbar {
  background: white;
  display: flex;
  align-items: center;
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
  .mobile-nav-items {
    transition: height 1s ease;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100vw;
    background: var(--secondary-color);
    color: white;
    li {
      padding: 1rem;
      list-style: none;
      margin: 2rem 0;
      &:hover {
        background: var(--accent-color);
        color: black;
      }
    }

    .call-btn,
    .order-btn {
      margin-left: 20px;
      background: var(--button-color);
      padding: 20px;
    }
    .call-btn {
      margin-right: 10px;
    }

    .close-nav-btn {
      position: absolute;
      right: 5%;
      top: 10px;
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
