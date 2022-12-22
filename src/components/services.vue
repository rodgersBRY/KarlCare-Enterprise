<template>
  <div class="services">
    <div class="title-section">
      <h2>WHAT WE DO</h2>
      <h3>OUR SERVICES</h3>
    </div>

    <div class="cards">
      <div class="card" v-for="(service, i) in services" :key="i">
        <h3>0{{ i + 1 }}</h3>
        <div class="divider"></div>
        <h2>{{ service.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: "Door to Door Delivery", desc: "" },
        { title: "Running of Errands", desc: "" },
        { title: "Client Pickup and Dropoff", desc: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1000px) {
  .title-section {
    h2 {
      font-size: 100px;
    }
    h3 {
      font-size: 26px;
      top: 40%;
      left: 45%;
    }
  }

  .cards {
    .card {
      width: 350px;
      margin: 2rem;
    }
  }
}

@media (max-width: 1000px) {
  .title-section {
    h2 {
      font-size: 60px;
    }
    h3 {
      font-size: 20px;
      top: 30%;
      left: 30%;
    }
  }

  .cards {
    flex-direction: column;
    .card {
      width: 80%;
      margin: 1rem auto;
    }
  }
}
.title-section {
  position: relative;
  text-align: center;
  h2 {
    color: var(--accent-color);
  }
  h3 {
    color: grey;
    position: absolute;
  }
}
.cards {
  display: flex;
  justify-content: space-between;
  .card {
    background: var(--faded-select-color);
    padding: 3rem 3rem;
    .divider {
      background: var(--secondary-color);
      height: 3px;
      width: 80px;
      margin: 20px 0;
    }
    h2 {
      font-size: 36px;
      margin-bottom: 2rem;
      color: grey;
    }
    h3 {
      color: grey;
      font-size: 20px;
      margin-bottom: 3rem;
    }
  }
}
</style>
