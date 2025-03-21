import random

iFailed=False

with open('piValue_1,00,00,00,000.txt', 'r') as file:
    pi_digits = file.read()

quary=1
#print(len(pi_digits))

while iFailed==False:
    num="01062010"#random.randint(10000, 99999)
 
    if pi_digits.find(str(num)) != -1:
        print(f"Found {num} at position {pi_digits.find(str(num))}")
        print(f"Quary: {quary}, Successful...")
        iFailed=True#False
    else:
        print(f"Failed to find {num}")
        print(f"Quary: {quary}, Failed!")
        iFailed=True
    quary+=1

    