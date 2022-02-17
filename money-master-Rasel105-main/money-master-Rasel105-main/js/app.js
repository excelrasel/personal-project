function expenseCalculation() {
    const salaryInput = document.getElementById("salary-input");
    const salaryInputValue = parseFloat(salaryInput.value);
   if(salaryInputValue > 0){
    const foodCost = document.getElementById("food-cost");
    const foodCostValue = parseFloat(foodCost.value);
    
    const rentInput = document.getElementById("rent-cost");
    const rentInputValue = parseFloat(rentInput.value);
    
    const clothesInput = document.getElementById("clothes-cost");
    const clothesInputValue = parseFloat(clothesInput.value);
   
    // expense calculation 
    const totalExpense = foodCostValue + rentInputValue + clothesInputValue
    
    document.getElementById('total-expense').innerText = totalExpense
   const availableBalance = document.getElementById('balance').innerText = salaryInputValue - totalExpense; 
   return availableBalance;

   }
   else{
       document.getElementById('fail').style.display = 'block'
   }
  
}
// finding calculate button 
document.getElementById("calculate-btn").addEventListener("click", function () {
    expenseCalculation()
});

function savingsCalculation(){
    const totalAmount = expenseCalculation();
    const percentage = document.getElementById('savings-input');
    const percentageValue = parseFloat(percentage.value);
   if(percentageValue > 0){
    const savingsPercentage = (totalAmount * percentageValue) / 100;
    document.getElementById('savings-show').innerText = savingsPercentage.toFixed(2);

    document.getElementById('remaining-amount').innerText = totalAmount - savingsPercentage;
    percentage.value = '';
   }
   else{
    document.getElementById('fail').style.display = 'block'
   }
}

document.getElementById('savings-btn').addEventListener('click', function(){
    savingsCalculation()
})