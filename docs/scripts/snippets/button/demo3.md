```html
<ui-button unelevated>Baseline</ui-button>
<ui-button unelevated dense>Dense</ui-button>
<ui-button unelevated class="secondary-filled-button">Secondary</ui-button>
<ui-button unelevated icon="favorite">Icon</ui-button>
<ui-button unelevated>
  <template slot-scope="{ iconClass }">
    <!-- Custom SVG -->
    <svg-logo :class="iconCLass"></svg-logo>
    SVG Icon
  </template>
</ui-button>
<ui-link unelevated>Link</ui-link>
```

```css
/* Sass code */
.mdc-button.secondary-filled-button {
  @include mdc-button-filled-accessible($mdc-theme-secondary);
}
```
