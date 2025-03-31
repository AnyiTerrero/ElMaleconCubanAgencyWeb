<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      validator: value => {
        return value.every(item => 
          typeof item === 'object' && 
          'image' in item && 
          'alt' in item
        )
      }
    },
    interval: {
      type: Number,
      default: 4000,
      validator: value => value >= 1000
    }
  }
}
</script>