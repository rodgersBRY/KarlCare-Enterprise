<template>
  <div class="order-page">
    <header>
      <navbar />
    </header>

    <main>
      <div class="top-div">
        <h1>Order Now</h1>
        <p>
          <span><a href="/">Home</a></span> / Order
        </p>
      </div>

      <section class="addresses">
        <div class="pickup-address">
          <h3><span>01 |</span> Pickup Address</h3>
          <input type="text" name="pickup-name" placeholder="NAME*" />
          <input
            type="text"
            name="pickup-phone"
            placeholder="PICKUP CONTACT*"
          />
          <input
            type="text"
            name="pickup-address"
            placeholder="PICKUP ADDRESS*"
          />
          <input
            type="text"
            name="pickup-location"
            placeholder="PICKUP ADDRESS*"
          />
        </div>

        <div class="dropoff-address">
          <h3><span>02 |</span> Dropoff Address</h3>
          <input type="text" name="dropoff-name" placeholder="NAME*" />
          <input
            type="text"
            name="dropoff-phone"
            placeholder="DROPOFF CONTACT*"
          />
          <input
            type="text"
            name="dropoff-address"
            placeholder="DROPOFF ADDRESS*"
          />
          <input
            type="text"
            name="dropoff-location"
            placeholder="DROPOFF ADDRESS*"
          />
        </div>
      </section>

      <section class="more-info">
        <div class="delivery-info">
          <h3><span>03 | </span>Delivery Information</h3>
          <label for="date">Date</label><br />
          <input type="date" name="date" id="date" placeholder="2022-12-21" />
          <p>Package Size</p>
          <br />
          <label class="container">
            Envelope
            <input
              type="radio"
              checked="checked"
              name="size"
              value="Envelope"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Small Box
            <input type="radio" name="size" value="Small Box" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Box
            <input type="radio" name="size" value="Box" />
            <span class="checkmark"></span>
          </label>
          <br /><br />
          <p>Please describe any other information that might be helpful</p>
          <textarea
            name="other-info"
            id="other-info"
            cols="30"
            rows="10"
            placeholder="Any Other Information"
          ></textarea>
        </div>

        <div class="basic-info">
          <h3><span>04 | </span>Basic Information</h3>
          <input type="text" name="name" placeholder="YOUR NAME*" />
          <input type="text" name="phone" placeholder="YOUR PHONE*" />
          <input type="email" name="email" placeholder="YOUR EMAIL*" />
          <textarea
            type="text"
            name="other-info"
            placeholder="Any Other Information"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </section>
      <section class="submit-btn">
        <button>SUBMIT</button>
      </section>
    </main>

    <footer>
      <main-footer />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}

main {
  width: 70%;
  margin: 0 auto;
  border: 1px solid var(--border-color);
  padding: 20px;
  h3 > span {
    color: var(--secondary-color);
  }
  .top-div {
    background: var(--faded-select-color);
    text-align: center;
    padding: 3rem 0;
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    a {
      text-decoration: none;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  .pickup-address,
  .dropoff-address,
  .basic-info {
    background: var(--faded-select-color);
    text-align: center;
    padding: 1rem;
    margin: 0 16px;
    h3 {
      margin: 20px 0;
    }
  }

  .delivery-info {
    background: var(--faded-select-color);
    padding: 2rem;
    margin: 0 16px;
    label:first-child {
      display: block;
    }
    input,
    textarea {
      width: 100%;
    }
    h3 {
      text-align: center;
      margin: 15px 0;
    }
    .container {
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: var(--secondary-color);
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
      top: 6px;
      left: 6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }

  .addresses,
  .more-info {
    margin: 3rem;
    display: flex;
    input,
    textarea {
      width: 90%;
      padding: 16px;
      background: white;
      margin: 10px 0;
    }
  }

  .more-info > .delivery-info,
  .basic-info {
    width: 50%;
  }

  .submit-btn {
    width: 80%;
    margin: 4rem auto;
    button {
      background: var(--button-color);
      padding: 15px;
      width: 100%;
      margin: 0 auto;
      border: 2px solid black;
      transition: background 1s ease-out, color 1s ease-in-out;
      &:hover {
        color: white;
        background: black;
      }
    }
  }
}
</style>
