<template>
  <div class="home">
    <header>
      <navbar />
    </header>

    <main>
      <section class="banner-div">
        <banner-div />
      </section>

      <section class="delivery-section">
        <delivery-section />
      </section>

      <section class="parallax-section">
        <parallax-section />
      </section>

      <section class="services-section">
        <services-section />
      </section>

      <section class="contact-section">
        <contact-section />
      </section>
    </main>

    <footer>
      <main-footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    "banner-div": require("../components/banner.vue").default,
    "delivery-section": require("../components/delivery_section.vue").default,
    "parallax-section": require("../components/parallax.vue").default,
    "services-section": require("../components/services.vue").default,
    "contact-section": require('../components/contact-us.vue').default
  },
};
</script>

<style lang="scss" scoped>
main {
  border: 1px solid var(--border-color);
  width: 70%;
  margin: 0 auto;
  .delivery-section {
    margin-top: 10rem;
  }
  .parallax-section {
    margin-top: 7rem;
  }
  .services-section {
    margin-top: 7rem;
  }
  .contact-section {
    margin-top: 7rem;
  }
}

footer {
  margin-top: 2rem;
}
</style>
