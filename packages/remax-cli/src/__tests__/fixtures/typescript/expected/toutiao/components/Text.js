'use strict';

require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
var Platform = require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createHostComponent.js');
require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var index$1 = require('../npm/remax/esm/adapters/alipay/components/index.js');
var index$2 = require('../npm/remax/esm/adapters/wechat/components/index.js');
require('../npm/remax/esm/adapters/toutiao/components/View.js');
require('../npm/remax/esm/adapters/toutiao/components/Input.js');
require('../npm/remax/esm/adapters/toutiao/components/Textarea.js');
require('../npm/remax/esm/adapters/toutiao/components/Video.js');
require('../npm/remax/esm/adapters/toutiao/components/Swiper.js');
require('../npm/remax/esm/adapters/toutiao/components/ScrollView.js');
require('../npm/remax/esm/adapters/toutiao/components/SwiperItem.js');
require('../npm/remax/esm/adapters/toutiao/components/Icon.js');
var Text$1 = require('../npm/remax/esm/adapters/toutiao/components/Text.js');
require('../npm/remax/esm/adapters/toutiao/components/RichText.js');
require('../npm/remax/esm/adapters/toutiao/components/Progress.js');
require('../npm/remax/esm/adapters/toutiao/components/Button.js');
require('../npm/remax/esm/adapters/toutiao/components/CheckboxGroup.js');
require('../npm/remax/esm/adapters/toutiao/components/Checkbox.js');
require('../npm/remax/esm/adapters/toutiao/components/Form.js');
require('../npm/remax/esm/adapters/toutiao/components/Label.js');
require('../npm/remax/esm/adapters/toutiao/components/Picker.js');
require('../npm/remax/esm/adapters/toutiao/components/PickerView.js');
require('../npm/remax/esm/adapters/toutiao/components/PickerViewColumn.js');
require('../npm/remax/esm/adapters/toutiao/components/RadioGroup.js');
require('../npm/remax/esm/adapters/toutiao/components/Radio.js');
require('../npm/remax/esm/adapters/toutiao/components/Slider.js');
require('../npm/remax/esm/adapters/toutiao/components/Switch.js');
require('../npm/remax/esm/adapters/toutiao/components/Navigator.js');
require('../npm/remax/esm/adapters/toutiao/components/Image.js');
require('../npm/remax/esm/adapters/toutiao/components/Canvas.js');
require('../npm/remax/esm/adapters/toutiao/components/WebView.js');
require('../npm/remax/esm/adapters/toutiao/api.js');

function Text() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (Platform.default.current) {
    case 'alipay':
      return React.createElement(index$1.Text, props);

    case 'toutiao':
      return React.createElement(Text$1.default, props);

    case 'wechat':
    default:
      return React.createElement(index$2.Text, props);
  }
}

exports.default = Text;
