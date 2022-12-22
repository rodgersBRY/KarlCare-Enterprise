<template>
  <div id="footer">
    <div class="socials-phone">
      <div>
        <button class="twitter"><i class="bx bxl-twitter bx-md"></i></button>
        <button class="facebook"><i class="bx bxl-facebook bx-md"></i></button>
        <button class="instagram"><i class="bx bxl-instagram bx-md"></i></button>
      </div>
      <div>
        <p style="display: flex; align-items: center">
          CALL US TO ORDER DELIVERY <i class="bx bx-phone bx-md"></i>
          <span>0712359979 / 0799899579</span>
        </p>
      </div>
    </div>

    <div class="messenger">
      <div class="logo-div">
        <img width="300px" :src="require('../assets/logo.png')" alt="KarlCare Enterprises" />
      </div>

      <div class="services">
        <h3>OUR SERVICES</h3>
        <ul>
          <li>Door to door delivery</li>
          <li>Running of errands</li>
          <li>Pickup and dropoff of clients</li>
          <li>Free client consultation</li>
        </ul>
      </div>

      <div class="customer-care">
        <h3>CUSTOMER PROFILE</h3>
        <ul>
          <li>Call Center Networks</li>
          <li>Gladstar Pharmacie</li>
          <li>EKAJ General Trading</li>
        </ul>
      </div>
    </div>

    <div class="copyright">
      <p>
        <a class="link" href="https://mawira.cf">Mawira Corp</a> &copy;
        {{ date }}. All rights Reserved
      </p>
      <p><span>Terms of Use</span> and <span>Privacy Policy</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.facebook {
  background: rgba(210, 219, 229);
}
.twitter {
  background: rgba(219, 218, 220);
}
.instagram {
  background: rgba(229, 220, 220);
}
.facebook,
.twitter,
.instagram {
  &:hover {
    background: var(--secondary-color);
    color: white;
  }
}

button {
  width: 100px;
  height: 100px;
}

#footer {
  font-size: 14px;
  width: 70%;
  margin: 0 auto;
  .socials-phone {
    background: rgb(229, 229, 229);
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:not(:first-child) {
      color: white;
      font-size: 20px;
      background: var(--secondary-color);
      padding: 2rem 3rem;
      text-align: center;
      i {
        margin-left: 2rem;
      }
      span:hover {
        color: black;
      }
    }
  }
  .messenger {
    background: var(--accent-color);
    padding: 3rem 4rem;
    display: flex;
    justify-content: space-between;
    ul {
      margin-top: 1rem;
      list-style: none;
      li {
        margin: 10px 0;
      }
    }
    .logo-div {
      display: flex;
      align-items: center;
      p {
        font-size: 14px;
      }
    }
  }

  .copyright {
    background: var(--accent-color);
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    color: grey;
    .link {
      text-decoration: none;
      color: var(--secondary-color);
    }
    span {
      color: black;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>
