<template>
  <div :class="[$tt('body1'), 'demo--pagination']">
    <section class="hero component">
      <ui-pagination
        v-model="page"
        :recordCount="recordCount">
      </ui-pagination>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-pagination
          v-model="page1"
          :pageSize="pageSize"
          :recordCount="recordCount"
          showJumper>
        </ui-pagination>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.2 Custom Record</h6>
        <ui-pagination
          v-model="page2"
          :pageSize="pageSize"
          :recordCount="recordCount"
          showRecord
          showJumper
          jumperBefore="Goto"
          jumperAfter="page"
          jumperButton="Go">
          <template slot-scope="{ pageCount }">
            Showing {{ recordCount }} records,
            <ui-select v-model="pageSize" :options="pageSizeOptions"></ui-select>
            records / page, {{ pageCount }} total pages
          </template>
        </ui-pagination>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.3 Mini Mode</h6>
        <ui-pagination mini
          v-model="page3"
          :pageSize="pageSize"
          :recordCount="recordCount"
          prev="Prev"
          next="Next">
          <span>Page {{ page3 }}</span>
        </ui-pagination>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="pagination"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Pagination'
  },
  mixins: [snippets],
  data() {
    return {
      page: 1,
      page1: 1,
      page2: 1,
      page3: 1,
      pageSize: 5,
      recordCount: 100,
      pageSizeOptions: [
        {
          label: 5,
          value: 5
        },
        {
          label: 10,
          value: 10
        },
        {
          label: 15,
          value: 15
        },
        {
          label: 20,
          value: 20
        }
      ]
    };
  },
  created() {
    this.showCode('pagination', 3);
  }
};
</script>
