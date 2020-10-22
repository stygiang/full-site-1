document.querySelector('.select-ocean-2').addEventListener('click', function(){
    document.querySelector('.card-nature').style.display= 'none';
    document.querySelector('.ocean').style.display='grid';

});
document.querySelector('.select-nature').addEventListener('click', function(){
    document.querySelector('.ocean').style.display='none';
    document.querySelector('.card-nature').style.display='grid';
});
