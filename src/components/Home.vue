<template>
  <h2>Home</h2>
  <h3>Total count: {{ totalCount }}</h3>
  <button @click="incTotalCount">test</button>
</template>

<script>

import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: 'Home',
  setup(){
    const store = useStore();

    let totalCount = computed(function () {
      return store.state.totalCount
    });

    function incTotalCount() {
      store.commit("incTotalCount");
    }

    return {
      totalCount,
      incTotalCount
    }
  }
}

</script>