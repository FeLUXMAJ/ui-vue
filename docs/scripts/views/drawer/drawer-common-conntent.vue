<template>
  <ui-drawer-content>
    <ui-list-nav>
      <slot></slot>
      <template v-for="(item, index) in menu">
        <ui-list-divider v-if="item === '-'" :key="`divider-${index}`"></ui-list-divider>
        <template v-else>
          <ui-list-group-subheader v-if="item.subheader" :key="`subheader-${index}`">
            {{ item.subheader }}
          </ui-list-group-subheader>
          <ui-item-link v-for="(subItem, subIndex) in item.items"
            :key="`item-${index}-${subIndex}`"
            :firstIcon="subItem.icon">
            {{ subItem.name }}
          </ui-item-link>
        </template>
      </template>
    </ui-list-nav>
  </ui-drawer-content>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          items: [
            {
              icon: 'inbox',
              name: 'Inbox'
            },
            {
              icon: 'star',
              name: 'Star'
            },
            {
              icon: 'send',
              name: 'Sent Mail'
            },
            {
              icon: 'drafts',
              name: 'Drafts'
            }
          ]
        },
        '-',
        {
          subheader: 'Labels',
          items: [
            {
              icon: 'email',
              name: 'All Mail'
            },
            {
              icon: 'delete',
              name: 'Trash'
            },
            {
              icon: 'report',
              name: 'Spam'
            }
          ]
        },
        '-',
        {
          items: [
            {
              icon: 'settings',
              name: 'Settings'
            },
            {
              icon: 'announcement',
              name: 'Help & feedback'
            }
          ]
        }
      ]
    };
  }
};
</script>
