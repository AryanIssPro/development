import math

def division(x,y):
    try:
        if str(x/y)[-1]!="0":
            if  x//y!=0:
                print(f"{int(x//y)} {int((x%y)/int(math.gcd(int(x),int(y))))}/{int(y/math.gcd(int(x),int(y)))} or {round(x/y,3)}")
            else:   
                print(f"{int((x%y)/int(math.gcd(int(x),int(y))))}/{int(y/math.gcd(int(x),int(y)))} or {round(x/y,3)}")
        else:
            print(x/y)
    except ZeroDivisionError:
        print("Could not divide with zero.")
def multiplication(x,y):
    print(x*y)
def addition(x,y): 
    print(x+y)
def subtraction(x,y):
    print(x-y)

num1=float(input("\nEnter first number.\n"))
num2=float(input("Enter second number.\n"))
inp=input("Enter '+' or 'add', '-' or minus, '÷' or '/' or 'divide', '×' or '*' or 'multiply':\n")
if inp=="+" or inp=="add":
    addition(num1,num2)
elif inp=="-" or inp=="minus":
    subtraction(num1,num2)
elif inp=="/" or inp=="÷" or inp=="divide":
    division(num1,num2)
elif inp=="*" or inp=="×" or inp=="multiply":
    multiplication(num1,num2)
else:
    print("Invalid input.")