<template>
  <a-space direction="vertical">
    <a-card title="Card" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
    <a-card title="Card" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </a-space>
  <a-button type="primary" @click="test()">测试</a-button>
</template>

<script>
import * as api from './service'

export default {
  methods: {
    test() {
      console.log('测试')
      const res = api.test()
      console.log('res', res)
    }
  }
}
</script>

<style>
</style>
