from sympy import isprime

start=1

while start<100000:
    if isprime(start) and isprime(start+2) and isprime(start+2+4):
        print(f"{start}, {start+2}, {start+2+4}")
        start+=1
    else:
        start+=1