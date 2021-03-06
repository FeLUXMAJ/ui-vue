```html
<ui-list><!-- the item components --></ui-list>
<ui-list-nav><!-- the item components --></ui-list-nav>
```

#### Props

| Name            | Type      | Default | Description                                                                                                                                  |
| --------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| nonInteractive  | `Boolean` | `false` | Optional, disables interactivity affordances.                                                                                                |
| dense           | `Boolean` | `false` | Optional, styles the density of the list, making it appear more compact.                                                                     |
| avatar          | `Boolean` | `false` | Optional, configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. |
| twoLine         | `Boolean` | `false` | Optional, modifier to style list with two lines (primary and secondary lines).                                                               |
| singleSelection | `Boolean` | `false` | The list can handle selecting/deselecting list elements based on click or keyboard action.                                                   |
| withCheckbox    | `Boolean` | `false` | The list includes the checkbox.                                                                                                              |

#### Slots

| Name      | Description                                                      | `slot-scope`                                |
| --------- | ---------------------------------------------------------------- | ------------------------------------------- |
| (default) | The default slot holds the item components and can contain HTML. | `{ itemClass, selectedClass, activeClass }` |

```html
<template slot-scope="{ itemClass, selectedClass, activeClass }">
  <ui-item :class="itemClass">Item</ui-item>

  <div :class="selectedClass"></div>

  <a :class="activeClass"></a>
</template>
```

> Optional, styles the row in a selected or activated state.
