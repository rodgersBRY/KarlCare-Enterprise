<template>
  <div class="contact-us">
    <div class="request-text">
      <h2>
        Request <br />
        a Callback
      </h2>
      <div class="divider"></div>
      <p>
        It only takes 30 seconds and then we'll call you back, Monday to Friday,
        9am-5pm. Easy.
      </p>
      <br />
      <p>Or Contact us at 0712359979/0799899579</p>
    </div>
    <div class="request-form">
      <form action="" method="POST">
        <div class="align-row">
          <input type="text" name="name" id="name" placeholder="Name*" />
          <input type="text" name="email" id="email" placeholder="E-Mail*" />
        </div>

        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number*"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Message*"
        ></textarea>

        <button>SEND MESSAGE</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
textarea {
  resize: none;
}

@media (min-width: 1000px) {
  .contact-us {
    background-image: url("../assets/delivery4.webp");
    flex-direction: column;
  }
}

@media (max-width: 1000px) {
  .contact-us {
    background-image: url("../assets/delivery4-mobile.webp");
    flex-direction: column;
  }
}

.contact-us {
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem;
  .request-text {
    color: white;
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 14px;
    }
    .divider {
      background: var(--secondary-color);
      width: 10%;
      height: 3px;
      margin: 16px 0;
    }
  }
  .request-form {
    input,
    textarea {
      width: 100%;
      padding: 16px;
      background: white;
      margin: 10px 0;
    }
    button {
      background: var(--button-color);
      color: white;
      padding: 15px;
    }
  }
}
</style>
