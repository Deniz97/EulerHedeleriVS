﻿app.factory("Solutions", function () {

    var SolutionList = ["place holder because 0-based-indexing"];
    var maxLength = 11;

    //class
    function Solution() {
        this.compute = function () { };
        this.answer = "";
        this.description = "";
        this.code = "";
    };

    //template for solution objects
    //SolutionList[2].compute =
    //SolutionList[2].answer = SolutionList[2].compute();
    //SolutionList[2].description =
    //SolutionList[2].code =

    for (var i = 1; i <= maxLength; i++) {
        SolutionList[i] = new Solution;
    }

    //SolutionList[1] = new Solution;
    
    
    SolutionList[1].compute = function () {
        var toplam = 0;
        for (var i = 1; i < 1000; i++) {
            if (i % 3 == 0 || i % 5 == 0)
                toplam += i;
        }
            
        return toplam;
    };
    SolutionList[1].answer = SolutionList[1].compute();
    SolutionList[1].description = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\nFind the sum of all the multiples of 3 or 5 below 1000.";
    SolutionList[1].code="var toplam = 0;\nfor (var n = 1; i < 1000; i++) {\n if (i % 3 == 0 || i % 5 == 0)\ntoplam += i;\n}\nreturn toplam;";   
    

    SolutionList[2].compute = function() {
        var f1 = 1;
        var f2 = 2;
        var bos; var toplam = 0;
        while (f2<4000000) {
            if (f2 % 2 == 0)
                toplam += f2;
            bos = f2;
            f2 = f1+f2;
            f1=bos;
            
        }
        return toplam;
        
    };
    SolutionList[2].answer = SolutionList[2].compute();
    SolutionList[2].description ="Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:"
    +
    "\n1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..."
    +
    "\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."
    SolutionList[2].code = "function () {"
       + "var f1 = 1;"
        +"var f2 = 2;"
        +"var bos; var toplam = 1;"
        +"while (f2 < 4000000) {"
        +    "bos = f2;"
        +    "f2 = f1 + f2;"
        +    "f1 = bos;"
        +    "if (f2 % 2 != 0)"
        + "toplam += f2;"
        +"}"

    +"};"

    SolutionList[3].compute = function () {
        
        
        var bigNumber = 600851475143;  //600851475143L
        var n = 3;
        var maxPrime = 1;
        while (bigNumber>1) {
            if(bigNumber%n==0 && checkPrime(n)) {
                maxPrime=n;
                while(bigNumber%n==0) {
                    bigNumber /= n;
                }
            }
            n++;
        }
       return maxPrime;
    

       function checkPrime(sayi){
		for(var i=3;i*i<=sayi;i+=2){
		    if(sayi%i==0)
		        return false;
		}
    return true;
}




    };
    SolutionList[3].answer = SolutionList[3].compute();
    SolutionList[3].description = "The prime factors of 13195 are 5, 7, 13 and 29."+
    "\nWhat is the largest prime factor of the number 600851475143 ?"
    SolutionList[3].code = "var maxPrime;"
    +"for (var i = 1; i < 600851475143 / 2; i++) {"
      +  "if (600851475143 %i == 0)"
     +    "   maxPrime = i;"
    +"}"
    +"return maxPrime;";
    
    SolutionList[4].compute = function () { };
//       function CheckIfPalindrome(num) {
//		var n = num; //stores the original number safely.
//        var rev = 0; //stores the reverse number
//        var dig;

//        while (num > 0)
//        {
//            dig = num % 10;
//            rev = rev * 10 + dig;
//            num = num / 10;
//        } //number is reversed
		 
//        if (rev==n) return true;
//        else return false;
//        }
    
    
//    var sayilar = [];
//    for(var i =999;i>=100;i--) {
//        for(var j=999;j>=100;j--){
//            if ( i*j>900000 && CheckIfPalindrome(i*j) ) {
//                sayilar.push(i*j);
               
//            }
//        }
//    }
//    alert(sayilar);
//    sayilar.sort(function (a, b) { return b - a });
//    return sayilar[0];
    


    
//};
    SolutionList[4].answer=SolutionList[4].compute();
    SolutionList[4].description = "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99."
    +
    "\nFind the largest palindrome made from the product of two 3-digit numbers.";
    SolutionList[4].code = "";

    return SolutionList;

});