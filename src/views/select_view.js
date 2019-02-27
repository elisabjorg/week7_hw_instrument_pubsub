const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (evt) => {
    const allInstruments = evt.detail;
    this.dropdownCreate(allInstruments);
  });

  this.element.addEventListener('change', (evt) => {
    const selectInstrument = evt.target.value;
    PubSub.publish('SelectView:change', selectInstrument);
  });
};

SelectView.prototype.dropdownCreate = function (instrumentData) {
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
