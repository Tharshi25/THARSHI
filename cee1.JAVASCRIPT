let a=5;
let b=3;
let c=a+b;

console.log("The sum of 5 and 3 is: "+c);







a=parseInt(data);
console.log(a+5);



if(number%2===0)

console.log("The number is even.");
else

console.log("The number is odd.");





a=parseInt(marks);
if(a<40)
console.log("You fail the exam.");
else 
console.log("You pass the exam.");






sum=0
for(i=1;i<=number;i++)
{
    sum=sum+i;
    
}
console.log("The sum of natural numbers: "+sum);


number=parseInt(number);
temp=number;
temp1=number;
c=0;
while(temp>0)
{
    temp=parseInt(temp/10);
    c++;
}
sum=0
while(temp1>0)
{
    rem=temp1%10;
    sum=sum+Math.pow(rem,c);
    temp1=parseInt(temp1/10);
}
if(sum===number)
   console.log(number+" is an Armstrong number");
else
   console.log(number+" is not an Armstrong number.");



   Fibonacci Series

n1=0;
n2=1;
for(i=1;i<=number;i++)
{
    console.log(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
}
 
