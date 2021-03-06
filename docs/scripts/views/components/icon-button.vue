<template>
  <div :class="[$tt('body1'), 'demo--icon-button']">
    <section class="hero component">
      <div class="demo-wrapper">
        <ui-icon-button :toggle="icon1">
        </ui-icon-button>
      </div>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <div>
          <h5 :class="$tt('headline5')">1.1 Buttons</h5>
          <div class="toggle-examples-container">
            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Material Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button icon="favorite"></ui-icon-button>
                <ui-icon-button icon="airplanemode_active"></ui-icon-button>
                <ui-icon-link icon="directions_transit"></ui-icon-link>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">SVG Icon</h6>
              <div class="demo-wrapper">
                <ui-icon-button>
                  <svg-logo></svg-logo>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Disabled Buttons</h6>
              <div class="demo-wrapper">
                <ui-icon-button icon="airplanemode_active" disabled></ui-icon-button>
                <ui-icon-button disabled>
                  <svg-logo></svg-logo>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Larger Buttons</h6>
              <div class="demo-wrapper">
                <ui-icon-button class="demo-icon-button-large" icon="airplanemode_active"></ui-icon-button>
                <ui-icon-button class="demo-icon-button-large">
                  <svg-logo></svg-logo>
                </ui-icon-button>
              </div>
            </div>
          </div>
        </div>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <div>
          <div>
            <h5 :class="$tt('headline5')">1.2 Button Toggles</h5>
          </div>
          <div class="toggle-examples-container">
            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Using Material Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button v-model="value1" :toggle="icon1">
                </ui-icon-button>
              </div>
              <p>Favorited? <span id="favorited-status">{{ value1 }}</span></p>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Using Font Awesome</h6>
              <div class="demo-wrapper">
                <ui-icon-button v-model="value2">
                  <template slot-scope="{ onClass, offClass }">
                    <i :class="[onClass, icon2.on]"></i>
                    <i :class="[offClass, icon2.off]"></i>
                  </template>
                </ui-icon-button>
                <p>Result: {{ value2 }}</p>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Using SVG Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button>
                  <template slot-scope="{ onClass, offClass }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="onClass">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :class="offClass">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </template>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Using Image Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button>
                  <template slot-scope="{ onClass, offClass }">
                    <img :src="imageOn" :class="onClass">
                    <img :src="imageOff" :class="offClass">
                  </template>
                </ui-icon-button>
              </div>
            </div>

            <div class="toggle-example">
              <h6 :class="$tt('headline6')">Disabled Icons</h6>
              <div class="demo-wrapper">
                <ui-icon-button :toggle="icon1" disabled>
                </ui-icon-button>
              </div>
            </div>
          </div>
          <ui-accordion>
            <ui-markdown :code="code[2]"></ui-markdown>
          </ui-accordion>

          <div class="custom-toggle-example">
            <h6 :class="$tt('headline6')">Additional Color Combinations</h6>
            <div id="demo-color-combos">
              <div id="light-on-bg" class="demo-color-combo">
                <div>
                  <ui-icon-button :class="$themeColor('on-primary')" :toggle="icon1">
                  </ui-icon-button>
                </div>
                <div :class="$themeColor('on-primary')">Light icon on background</div>
              </div>
              <div id="dark-on-bg" class="demo-color-combo">
                <div :class="$themeColor('primary')">
                  <ui-icon-button :toggle="icon1">
                  </ui-icon-button>
                </div>
                <div>Dark icon on background</div>
              </div>
              <div id="custom-color-combo" class="demo-color-combo">
                <div>
                  <ui-icon-button :toggle="icon1">
                  </ui-icon-button>
                </div>
                <div>Custom color</div>
              </div>
            </div>
          </div>
          <ui-accordion>
            <ui-markdown :code="code[3]"></ui-markdown>
          </ui-accordion>
        </div>
      </section>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="icon-button"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import imageOn from '../../../images/icon/ic_button_24px.svg';
import imageOff from '../../../images/icon/ic_card_24px.svg';

export default {
  metaInfo: {
    titleTemplate: '%s - Icon Button'
  },
  mixins: [snippets],
  data() {
    return {
      value1: false,
      icon1: {
        on: 'favorite',
        off: 'favorite_border'
      },
      value2: true,
      icon2: {
        on: 'fa fa-star',
        off: 'fa fa-star-o'
      },
      imageOn,
      imageOff
    };
  },
  created() {
    this.showCode('icon-button', 3);
  }
};
</script>
