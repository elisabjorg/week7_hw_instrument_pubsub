const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  console.log(this.data);
  PubSub.publish('InstrumentFamilies:all-families-ready', this.data);


  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedInstr = evt.detail;
    this.publishInstrument(selectedInstr);
    console.log(selectedInstr);
  });
};

InstrumentFamilies.prototype.publishInstrument = function (index) {
  const selectedFamily = this.data[index];
  PubSub.publish('Instruments:select-instrument-ready', selectedFamily)
};

module.exports = InstrumentFamilies;
