<script>
  let { width } = $props()
</script>

<div class="flex" style="width: {width}px;">
  <div>
    <div class="small accent mr-4" style="max-width: {width / 2 - 8}px;">% of episode appeared in</div>
  </div>
  <div>
    <div class="small accent" style="max-width: {width / 2 - 8}px;">% of episode laughs</div>
  </div>
</div>