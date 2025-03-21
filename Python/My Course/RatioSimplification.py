import math

inp=input("Enter the ratio or fraction to convert it into its simplest form: ")

index=inp.find(":")
symbol=":"
if index==-1:
    index=inp.find("/")
    symbol="/"


length=len(inp)
try:
    ratio1=int(inp[0:index])
    ratio2=int(inp[index+1:length])
    hcf=math.gcd(ratio1, ratio2)
except:
    #print("Invalid input!")
    ratio1=None
    ratio2=None


if index!=-1 and ratio1!=None or ratio2!=None and index!=-1:
    ratio1=int(ratio1/hcf)
    ratio2=int(ratio2/hcf)
    if hcf!=1 and symbol==":" and ratio1!=0 and ratio2!=0:
        print(f"The ratio in its simplest form is: {ratio1}:{ratio2}")
    elif hcf!=1 and symbol=="/" and ratio1!=0 and ratio2!=0:
        print(f"The fraction in its simplest form is: {ratio1}/{ratio2}")
    elif hcf==1 and symbol==":" and ratio1!=0 and ratio2!=0:
        print(f"The ratio is already in its simplest form: {ratio1}:{ratio2}")
    elif hcf==1 and symbol=="/" and ratio1!=0 and ratio2!=0:
        print(f"The fraction is already in its simplest form: {ratio1}/{ratio2}")
    elif ratio1==0 or ratio2==0 and symbol==":":
        print("If one side of the ratio equals 0 then the other side is any value.")
    elif ratio2==0 and symbol=="/":
        print("Zero as denominator is against the law")
else:
    print("Invalid input!")