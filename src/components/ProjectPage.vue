<template>
  <div>
    <section>
      <h2 class="page-title">About the Project</h2>

      <p>March 2020, as many of us experienced stay-at-home orders being imposed in the US, I was visiting my parents out of town.</p>

      <img
        src="/img/coffee.png"
        alt="Latte"
        class="coffee"
      />

      <p>As the pandemic unfolded before our eyes on national, international and local news, it was truly a comfort to be isolated with my family and not stuck home completely alone.</p>

      <p>As months progressed, I started working remotely but that was short-lived as my company put us all on furlough...nice to get the extra unemployment and an extension of medical coverage but still so many unknown unknowns.</p>

      <p>Then, a limited call back. Working for a retail store considered essential industry selling beds and office furniture, a small group of employees were asked to return to work. I did.</p>

      <div class="iframe-wrapper">
      <iframe class="motion" src="https://www.youtube.com/embed/n3PO430XDiQ?frameborder=0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      </div>

      <p>Returning home to a cold empty apartment, I made my morning coffee and suddenly felt very, very alone. I snapped my mug and sent it to my friend to at least share a cup and an Hello. Thus was born...Coffee for One.</p>

      <p>I continued this morning ritual through returning to work and the following months until May 14, 2021 when the mask mandate was removed in Minnesota.</p>

      <p>These photos are my daily snaps and a few of the messages received back.</p>

      <p>Once I could join my friends and family again for coffee, I captured some of those photos as well.</p>
    </section>
  
    <section>
      <ul>
        <li>
          <img
            alt="Clean Water Fund Logo"
            src="/img/clean-water-logo.png"
            style="height: 120px"
          />
        </li>
        <li>
          <img
            alt="Minnesota State Arts Board Logo"
            src="/img/msab-logo.png"
            style="height: 120px"
          />
        </li>
      </ul>
    </section>

    <section>
      
    <p>Heather M. Cole is a fiscal year 2022 recipient of a Creative Support for Individuals grant from the Minnesota State Arts Board. This activity is made possible by the voters of Minnesota through a grant from the Minnesota State Arts Board, thanks to a legislative appropriation from the arts and cultural heritage fund.</p>

    </section>
  </div>
</template>

<style scoped>
.coffee {
  float: right;
  margin: 0 0 20px 20px;
  max-width: 50%;
}

.motion {
  float: left;
  margin: 0 20px 0 0;
  max-width: 50%;
}

.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  /* aspect ration for 16:9 */
  height: 0;
  overflow: hidden;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul li {
  display: inline-block;
  margin: 0 20px;
}
</style>