function expenseCalculation() {
    const salaryInput = document.getElementById("salary-input");
    const salaryInputValue = parseFloat(salaryInput.value);
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
// finding calculate button 
document.getElementById("calculate-btn").addEventListener("click", function () {
    expenseCalculation()
});

document.getElementById('savings-btn').addEventListener('click', function(){
    const totalAmount = expenseCalculation();
    const percentage = document.getElementById('savings-input')
    const percentageValue = parseFloat(percentage.value);

    const savingsPercentage = (totalAmount * percentageValue) / 100;
    document.getElementById('savings-show').innerText = savingsPercentage;

    document.getElementById('remaining-amount').innerText = totalAmount - savingsPercentage;
})