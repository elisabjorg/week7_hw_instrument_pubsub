const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectFamily = document.querySelector('select#instrument-families');
  console.log('hi',selectFamily);
  const instrumentDropdown = new SelectView(selectFamily);
  instrumentDropdown.bindEvents();


  const familyDetails = new InstrumentFamilies(instrumentFamilyData);
  familyDetails.bindEvents();
  console.log(instrumentFamilyData)

  const viewInstrument = document.querySelector('#instrument-family-info');
  const familyInfo = new InfoView(viewInstrument);
  familyInfo.bindEvents();
  console.log('hallo', viewInstrument);


});
