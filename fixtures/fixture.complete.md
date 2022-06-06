I have a question with three code blocks

Code block #1:

```typescript
function go()
let fibonacci: number[] = [0, 1];

function listFibonacci(num: number) {
  for (let i: number = 2; i < num; i++) {
  

      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      }
      return fibonacci;
}
console.log(listFibonacci(10));
```


Code block #2
```python

def fib(n, a=[0, 1]):
    while n > len(a):
  a.append(a[-1] + a[-2])
  return a[n-1]

print("Fibonacci of 50 - {}".format(fib(50))
```



Code block #3:
```java
class FibonacciExample2{  
 static int n1=0,n2=1,n3=0;    
 static void printFibonacci(int count){    
    if(count>0){    
 n3 = n1 + n2;    
 n1 = n2;    
 n2 = n3;    
 System.out.print(" "+n3);   
 printFibonacci(count-1);    
     }    
 }    
 public static void main(String args[]){    
  int count=10;    
  System.out.print(n1+" "+n2);//printing 0 and 1    
  printFibonacci(count-2);//n-2 because 2 numbers are already printed   
 }  
}  
```