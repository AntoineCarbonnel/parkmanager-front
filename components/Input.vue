<template>
  <label for="">
    <label :for="id" :class="{focus: labelizor}">
      <input @focusin="isFocus = true" @focusout="isFocus = false" v-model="value" type="text"
             :id="id" @input="$emit('input', value)">
      <span class="label">
        {{ name }}
      </span>
    </label>
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocus: false,
      value: ''
    }
  },
  computed: {
    labelizor: function () {
      return this.isFocus || this.parkingRequest.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  position: relative;
  width: 80%;

  .label {
    position: absolute;
    transition: .2s;
    font-size: 1.2rem;
    top: 15px;
    left: 15px;

    &:hover {
      cursor: text;
    }
  }

  input {
    border-radius: 5px;
    height: 60px;
    border: none;
    width: 100%;
    text-indent: 15px;
  }

  &.focus {
    span.label {
      font-size: .9rem;
      top: 5px;
      color: $blue;
    }
  }
}
</style>
