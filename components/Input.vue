<template>
  <label :for="id" :class="{focus: labelizor}">
    <input @focusin="isFocus = true" @focusout="isFocus = false" v-model="value" :type="type"
           :id="id" @input="$emit('input', value)">
    <span class="label">
        {{ name }}
      </span>
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
    },
    type: {
      type: String,
      default: 'text'
    },
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocus: false,
      value: this.defaultValue
    }
  },
  computed: {
    labelizor: function () {
      return this.isFocus || this.value.length > 0
    }
  },
  watch: {
    value: function () {
      this.$emit('input', this.value)
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
    top: 16px;
    left: 15px;

    &:hover {
      cursor: text;
    }
  }

  input {
    border: 1px solid $offwhite;
    border-radius: 5px;
    text-indent: 15px;
    font-size: 1.1rem;
    height: 60px;
    width: 100%;
  }

  &.focus {
    span.label {
      font-size: .9rem;
      top: 5px;
      color: $blue;
    }

    input {
      border: 1px solid $blue;
    }
  }
}
</style>
