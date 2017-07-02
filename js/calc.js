// CALCULATOR HTML
var calculatorHTML = '<div id="calculatorBackground"></div><div id="calculatorMain"><div id="number"></div><div class="row"> <button class="percent" value=".05">5%</button> <button class="percent" value=".10">10%</button> <button class="percent" value=".15">15%</button> <button class="percent" value=".20">20%</button></div><div class="row keypad"> <button class="digit" value="1">1</button> <button class="digit" value="2">2</button> <button class="digit" value="3">3</button></div><div class="row keypad"> <button class="digit" value="4">4</button> <button class="digit" value="5">5</button> <button class="digit" value="6">6</button></div><div class="row keypad"> <button class="digit" value="7">7</button> <button class="digit" value="8">8</button> <button class="digit" value="9">9</button></div><div class="row keypad"> <button id="closeCalcApp" class="digit">close</button> <button class="digit" value="0">0</button> <button id="clear" class="digit">C</button></div></div>';
// DISPLAY CALCULATOR
function openCalculator() {
  document.getElementById('calculatorApp').innerHTML = calculatorHTML;
  // DISPLAY DIGIT IN NUMBER SECTION
  var number;
  var digitButtons = document.querySelectorAll('.digit');
  function displayNumber() {
    var digit = this.value;
    number = document.getElementById('number').innerHTML += digit;  
  }
  // CLICK EVENT LISTENERS FOR ALL DIGIT BUTTONS
  for(var x = 0; x < digitButtons.length; x++) {
    digitButtons[x].addEventListener('click', displayNumber);
  }
  // CLEAR BUTTON
  document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('number').innerHTML = '';
  });
  // CALCULATE PERCENTAGE
  function calculatePercent() {
    if(document.getElementById('number').innerHTML === '') {
      return;
    } else {
      var percent = this.value;
      document.getElementById('number').innerHTML = Math.round(number * percent * 100) / 100;  
    }
  }
  // CLICK EVENT LISTENERS FOR ALL PERCENT BUTTONS
  var percentButtons = document.querySelectorAll('.percent');
  for(var i = 0; i < percentButtons.length; i++) {
    percentButtons[i].addEventListener('click', calculatePercent);
  }
  // CLOSE CALCULATOR
  function closeCalculator() {
    document.getElementById('calculatorApp').innerHTML = '';
  }
  document.getElementById('closeCalcApp').addEventListener('click', closeCalculator);
}
document.getElementById('calculator').addEventListener('click', openCalculator);

