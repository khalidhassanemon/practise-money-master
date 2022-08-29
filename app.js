




document.getElementById('btn').addEventListener('click',function(){

    const income=document.getElementById('income');
    const incomeString=income.value;
    const incomeInt=parseInt(incomeString);


    const foodPrize=document.getElementById('foody');
    const foodPrizeString=foodPrize.value;
    const foodPrizeInteger=parseInt(foodPrizeString);


    const rentPrize=document.getElementById('renty');
    const rentPrizeString=rentPrize.value;
    const rentInteger=parseInt(rentPrizeString);

    const clothesPrize=document.getElementById('clothsy');
    const clothsString=clothesPrize.value;
    const clothsPrizeInteger=parseInt(clothsString);

    const totalExpensesInteger=(foodPrizeInteger+rentInteger+clothsPrizeInteger);
    
    const displayResume=document.getElementById('expense');
    displayResume.value=totalExpensesInteger;

    const balance=incomeInt-totalExpensesInteger;
    const displayBalance=document.getElementById('balance');
    displayBalance.value=balance;
})