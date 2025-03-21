#odd=*3+1
#even=/2

inpNumber=int(input("Enter any number: "))

while inpNumber!=1:
    if inpNumber%2!=0:
        print(f"{inpNumber} is odd [({inpNumber}×3)+1={inpNumber*3+1}]")
        inpNumber=inpNumber*3+1
    elif inpNumber%2==0:
        print(f"{inpNumber} is even [{inpNumber}÷2={inpNumber//2}]")
        inpNumber=inpNumber//2
    