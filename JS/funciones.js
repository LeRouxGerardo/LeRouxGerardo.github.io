
document.getElementById('nav_DP').addEventListener('click', function () {
    document.getElementById('carta-present').style.display = 'none'
    document.getElementById('form-aca').style.display = 'none'
    document.getElementById('dat-per').style.display = 'block'
    document.getElementById('exp-lab').style.display = 'none'
 });
   
 document.getElementById('nav_FA').addEventListener('click', function () {
    document.getElementById('carta-present').style.display = 'none'
    document.getElementById('dat-per').style.display = 'none'
    document.getElementById('form-aca').style.display = 'block'
    document.getElementById('exp-lab').style.display = 'none'
 });

 document.getElementById('nav_EL').addEventListener('click', function () {
    document.getElementById('carta-present').style.display = 'none'
    document.getElementById('dat-per').style.display = 'none'
    document.getElementById('form-aca').style.display = 'none'
    document.getElementById('exp-lab').style.display = 'block'
 });

 document.getElementById('nav_VI').addEventListener('click', function () {
    document.getElementById('carta-present').style.display = 'block'
    document.getElementById('dat-per').style.display = 'none'
    document.getElementById('form-aca').style.display = 'none'
    document.getElementById('exp-lab').style.display = 'none'
 });


