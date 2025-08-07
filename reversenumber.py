function reverse(num)
{
  result=0;
  while(num>0)
{
  let r=num%10;
  result=result*10;
  num=num/10;
}
  return result;
}
console.log(reverse(1234));
