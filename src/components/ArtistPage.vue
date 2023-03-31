<template>
  <div>
    <h2 class="page-title">About Heather</h2>

    <section>
      <p>My work revolves around reuse of materials- often plastic consumer commercial packaging. These items can be very intriguing and even beautiful…and often a mastery of engineering. Frequently, the packaging left behind is often more interesting and costly than the object it originally contained. Also costly in the sense that, for the most part, it is unnecessary and has contributed to an impending environmental reckoning.</p>

      <img
        alt="HMC example sculpture"
        src="/img/waste-dress.jpg"
        class="art-column"
      />

      <p>My art practice is informed by my education, a lifelong interest in textiles and a career in the retail supply chain. I use the particular media of discarded plastics as a reaction and response to the ubiquitous presence of plastics in modern life. With my work, I hope to create an intriguing piece of art but with a double identity as a reminder of what we leave behind.</p>
    </section>

    <section>
      <p><strong>All the plastic that has ever been created still exists in the environment.</strong></p>

      <p><strong>A study published by Science Advances estimates the total amount of plastic ever produced throughout the world to be 8,300 million metric tons which is equal to approximately 1 billion elephants.</strong></p>
    </section>

    <section>
      <h3>Other Work</h3>
      <div class="artist-card">
        <img class="hmc-example" alt="HMC example work" src="/img/hmc-1.jpg" />
      </div>
      <div class="artist-card">
        <img class="hmc-example" alt="HMC example work" src="/img/hmc-2.jpg" />
      </div>
      <div class="artist-card">
        <img class="hmc-example" alt="HMC example work" src="/img/hmc-3.jpg" />
      </div>
      <div class="artist-card">
        <img class="hmc-example" alt="HMC example work" src="/img/hmc-4.jpg" />
      </div>
      <div class="artist-card">
        <img class="hmc-example" alt="HMC example work" src="/img/hmc-5.jpg" />
      </div>
    </section>

  </div>
</template>

<style scoped>
section {
  margin: 0 1rem 120px;
}

h3 {
  margin-bottom: 20px;
}

div:last-child {
  padding-bottom: 20px;
}

.art-column {
  float: right;
  margin-left: 20px;
  margin-bottom: 20px;
  max-width: 23%;
}

p {
  text-align: justify;
}

ul li {
  display: inline-block;
}

.artist-card {
  width: 180px;
  margin: 10px;
  display: inline-block;
}

.hmc-example {
  max-width: 180px;
  max-height: 180px;
}
</style>
