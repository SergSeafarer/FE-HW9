document.write('Task 1: ');
for(let i = 20; i <= 30; i += 0.5) {
  document.write(i + ' ');
}

document.write('<br>' + '<br>' + 'Task 2: ' + '<br>');
const dollarPrice = 27;
for(let i = 10; i <= 100; i +=10) {
  let dollarConv = dollarPrice * i;
  document.write(i + ' dollars' + ' = ' + dollarConv + ' hryvnas' + '<br>');
}

document.write('<br>' + '<br>' + 'Task 3: ');
const numberN = 10;
for(let i = 1; i <= 100; i++) {
  if(i ** 2 > numberN) {
    break;
  }
  document.write(i + ' ');
}

document.write('<br>' + '<br>' + 'Task 4: ');
const numTest = 100;
let DivCount = 0;
let result = false; 
for(let i = numTest; i >= 1; i--) {
  if(numTest % i === 0) {
   DivCount++;
  }
  if(DivCount > 2) {
    result = true;
  }
}
if(result === true) {
  document.write(numTest + ' - Число є складовим');
} else {
  document.write(numTest + ' - Число є простим');
}

document.write('<br>' + '<br>' + 'Task 5: ');
const testNum = 13;
let degreeTest;
let degreeCount = 0;
for(let i = 1; i > 0; i++) {
  degreeTest = 3 ** i;
  degreeCount++;
  if(degreeTest === testNum) {
    document.write('Число: ' + testNum + ' Можливо! 3 у степені ' + degreeCount + ' дорівнює ' + testNum);
    break;
  } else if (degreeTest > testNum) {
    document.write('Неможливо отримати число ' + testNum + ' за допомогою 3 у степені n');
    break;
  }
}