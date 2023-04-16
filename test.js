var buttons=document.getElementsByClassName("nums");
var display=document.getElementById("disp");
var op1=0;
var op2=null;
var o=null;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function()
    {
        var value=this.getAttribute('dvalue');
        if(value=="=")
        {   op2=parseFloat(display.textContent)
            if(op2=="0" && o =="/")
            display.innerText="ERROR"
            else{
            op1=eval(op1+" "+o+ " "+op2);
            display.innerText=op1;
            }
            op2=null;
            o=null;
        }
        else if(value=="+")
        {   op1=parseFloat(display.textContent);
            o=value;
            display.innerText="";
        }
        else if(value=="AC")
        {
            display.innerText="";
            op1=null;
            op2=null;
            o=null;
        }
        else if(value=="-")
        {
            op1=parseFloat(display.textContent);
            o=value;
            display.innerText="";
        }
        else if(value=="/")
        {
            op1=parseFloat(display.textContent);
            o=value;
            display.innerText="";
        }
        else if(value=="*")
        {
            op1=parseFloat(display.textContent);
            o=value;
            display.innerText="";
        }
        else if(value=="%")
        {
            op1=parseFloat(display.textContent);
            o=value;
            display.innerText="";
        }
        else if(value=="+/-")
        {
            op1=parseFloat(display.textContent);
            op1=-1*op1;
            display.innerText=op1;
        }
        else if(value==".")
        {
            display.textContent+=".";
        }
        else
        { 
            display.innerText+=value;
        }

    }
    )
}