<template>
  <h1 ref="focusTarget" tabindex="-1">Rocket Model Guide</h1>

  <h2>Alpha Rocket</h2>

  <img
    src=""
    alt="The Alpha rocket readying for launch on Saint Patrick's Day 2011"
  />

  <p>
    Where it all began. Not the most sleek or aerodynamic of machines, but was
    excellent for extorting small countries or blowing up small to medium sized cities. Replaced in 2013 after M I 6 found an exploitable flaw in the
    guidance system and gave us quite a scare when the rocket turned and targeted Evil HQ.
  </p>

  <h2>Beta Rocket</h2>

  <img
    src=""
    alt="The YMR under construction, casting a shadow on all of Greenland"
  />

  <p>
    Bigger is better! Unfortunately, while it would have certainly struck fear in the hearts of our enemies, the rocket's absolutely massive scale proved its own undoing when an unexpected spike in rocket fuel prices made it prohibitively expensive. The partially completed rocket was subsequently sold to a tech billionaire in 2020 who converted it into a very strange looking yacht. Sure hope Zuck removed all those explosives before setting sail!
  </p>

  <h2>Omega Rocket</h2>

  <img src="" alt="The Omega rocket on the launch pad January 13th, 2026" />

  <p>
    Sometimes, the best way to beat an enemy is to make sure they were never born. Equipped with an improbability drive stolen from Area 51, this rocket is
    capable of going back in time to strike a target anywhere in the past.
  </p>
  <p>
    Note: While it might be technically possible, blowing something up in the future is not recommended due to the tremendous difficulty of accurately hitting a target that may not exist yet.
  </p>

  <h2>Delta Rocket</h2>

  <img src="" alt="Concept sketch of the Delta Rocket" />

  <p>Currently in the design phase, the Delta Rocket is 110% AI powered and will decide for itself what to blow up, when to launch, and which governments to extort. Once our Evil Scientists perfect the prompt and solve the context window issues, this rocket should eliminate the need for white collar evil henchmen (and hench women) within BossEvil Enterprises.</p>

</template>

<script setup>
import { ref, onMounted } from "vue";
const focusTarget = ref(null);

onMounted(() => {
  focusTarget.value.focus();
});
</script>

<style></style>
