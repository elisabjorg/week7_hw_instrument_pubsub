const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:select-instrument-ready', (evt) => {
    const instrumentDetails = evt.detail;
    this.output(instrumentDetails);
  });
};

InfoView.prototype.output = function (instrument) {
  const detail = document.createElement('div');
  detail.textContent = instrument.name;
  // detail.textContent = instrument.description;
  const detail2 = document.createElement('ul');
  detail2.textContent = instrument.description;

  const detail3 = document.createElement('li');
  detail3.textContent = instrument.instruments;
  this.container.appendChild(detail);
  this.container.appendChild(detail2);
  this.container.appendChild(detail3);
};




module.exports = InfoView;
