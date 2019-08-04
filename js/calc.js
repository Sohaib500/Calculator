   var one;
   var two;
   var three;
   var four;
   var five;
   var six;
   var seven;
   var eight;
   var nine;
   var zero;

   per = document.getElementById('btn_percentage').value = 'percentage';
   
   
   
   function getNumber(num)
    {
        var input_var = document.getElementById('user_input');
        switch(num)
        {
            case 1:
                input_var.value += '1';
                break;

            case 2:
                input_var.value += '2';
                break;
                
            case 3:
                input_var.value += '3';
                break;
                
            case 4:
                input_var.value += '4';
                break;
                
            case 5:
                input_var.value += '5';
                break;
                
            case 6:
                input_var.value += '6';
                break;
                
            case 7:
                input_var.value += '7';
                break;
                  
            case 8:
                input_var.value += '8';
                break;   

            case 9:
                input_var.value += '9';
                break; 
                
            case 0:
                input_var.value += '0';
                break;

            case "point":
                input_var.value += '.';
                break;    
                   
        }
    }
    

    function getOperand(operand)
    {
        var input_var = document.getElementById('user_input');
        switch(operand)
        {
            case '+':
                input_var.value += '+';
                break;

            case '-':
                input_var.value += '-';
                break;
                
            case '*':
                input_var.value += '*';
                break;
                
            case '/':
                input_var.value += '/';
                break;
                
            case '%':
                input_var.value += '%';
                break;    
        }
    }


    function clearScreen()
    {
        document.getElementById('result').value = "";
        document.getElementById('user_input').value = "";
    }

    function backspace()
    {
        var input_var = document.getElementById('user_input');
        var x = input_var.value;

        if(x.length > 0)
        {
            x = x.substring(0, x.length-1);  // remove last character in input
            input_var.value = x;
        }
    }


    function compute()
    {
        var input_var = document.getElementById('user_input');

        ans = Math.fround(+eval(input_var.value));
        var n = ans.toFixed(2);
        document.getElementById('result').value = n;
    }