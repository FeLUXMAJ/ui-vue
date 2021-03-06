// NOTE: unused
import UiIcon from '../components/common/icon';

export default {
  components: {
    UiIcon
  },
  props: {
    // UI attributes
    iconSize: {
      type: [Number, String],
      default: 0
    },
    iconDark: {
      type: Boolean,
      default: false
    },
    iconLight: {
      type: Boolean,
      default: false
    },
    iconInactive: {
      type: Boolean,
      default: false
    }
  }
};
