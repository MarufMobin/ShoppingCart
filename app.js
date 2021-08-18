function updateUi( product , productStatus ){
    // Global Catch Number of Product
    const inputProduct = document.getElementById(`${product}-number`);
    const inputProductText = inputProduct.value;
    const inputProductNumbe = parseInt(inputProductText);

    // Negative Number Validation
    if( productStatus == true ){
     inputProduct.value = inputProductNumbe + 1;
    }else{

        if( inputProduct.value > 0 ){
            inputProduct.value = inputProductNumbe - 1;
        }

    }

    totalProductPrice(inputProduct , product);
    totalParchesAmount()
}

function totalParchesAmount(){
    const phoneTotalAmount = parseInt(document.getElementById('phone-total').innerText);
    const caseTotalAmount = parseInt(document.getElementById('case-total').innerText);
   

    const totalAmount = phoneTotalAmount + caseTotalAmount;
    const tax = totalAmount / 10;
    const total = tax + totalAmount;
    document.getElementById('sub-total').innerText = totalAmount;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

function totalProductPrice(productQuentity , productName){
    
    const productTotal = document.getElementById(`${productName}-total`);
    // const productInputText = productTotal.innerText;
    // const productInputNumber = parseInt(productInputText);  

    if( productName === "phone" ){
        const totalProductPrice = parseInt(productQuentity.value) * 1219;
        productTotal.innerText = totalProductPrice;
    }else{
        const totalProductPrice = parseInt(productQuentity.value) * 59;
        productTotal.innerText = totalProductPrice;
    }

}

// Phone Parpuss Also phone increment
document.getElementById('phone-plus').addEventListener('click',function(){
   updateUi( 'phone' , true );
});

// Phone Parpuss Also phone decrement
document.getElementById('phone-minus').addEventListener('click',function(){
    updateUi( 'phone' , false );
});

// Phone case Parpuss Also phone increment
document.getElementById('case-plus').addEventListener('click',function(){
    updateUi( 'case' , true);
});

// Phone case Parpuss Also phone decrement
document.getElementById('case-minus').addEventListener('click',function(){
    updateUi( 'case' , false );
});