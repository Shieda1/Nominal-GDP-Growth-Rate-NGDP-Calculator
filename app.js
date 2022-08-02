// https://calculator.swiftutors.com/nominal-gdp-growth-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const nominalGDPGrowthRateRadio = document.getElementById('nominalGDPGrowthRateRadio');
const NGDPforearlieryearRadio = document.getElementById('NGDPforearlieryearRadio');
const NGDPforlateryearRadio = document.getElementById('NGDPforlateryearRadio');

let nominalGDPGrowthRate;
let NGDPforearlieryear = v1;
let NGDPforlateryear = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

nominalGDPGrowthRateRadio.addEventListener('click', function() {
  variable1.textContent = 'NGDP for earlier year ($)';
  variable2.textContent = 'NGDP for later year ($)';
  NGDPforearlieryear = v1;
  NGDPforlateryear = v2;
  result.textContent = '';
});

NGDPforearlieryearRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal GDP Growth Rate (NGDP)';
  variable2.textContent = 'NGDP for later year ($)';
  nominalGDPGrowthRate = v1;
  NGDPforlateryear = v2;
  result.textContent = '';
});

NGDPforlateryearRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal GDP Growth Rate (NGDP)';
  variable2.textContent = 'NGDP for earlier year ($)';
  nominalGDPGrowthRate = v1;
  NGDPforearlieryear = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(nominalGDPGrowthRateRadio.checked)
    result.textContent = `Nominal GDP Growth Rate = ${computeNominalGDPGrowthRate().toFixed(2)} %`;

  else if(NGDPforearlieryearRadio.checked)
    result.textContent = `NGDP for earlier year = ${computeNGDPforearlieryear().toFixed(2)} $`;

  else if(NGDPforlateryearRadio.checked)
    result.textContent = `NGDP for later year = ${computeNGDPforlateryear().toFixed(2)} $`;
})

// calculation

function computeNominalGDPGrowthRate() {
  return ((Number(NGDPforlateryear.value) - Number(NGDPforearlieryear.value)) / Number(NGDPforearlieryear.value)) * 100;
}

function computeNGDPforearlieryear() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeNGDPforlateryear() {
  return ((Number(nominalGDPGrowthRate.value) / 100) * Number(NGDPforearlieryear.value)) + Number(NGDPforearlieryear.value);
}