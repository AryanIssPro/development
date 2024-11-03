question="23+78"

def IndexAdd(value):
    if value.find("+")!=-1:
        return value.find("+")
    
def IndexSubtract(value):
    if value.find("-")!=-1:
        return value.find("-")
    
def IndexDivide(value):
    if value.find("÷")!=-1:
        return value.find("÷")
    elif value.find("/")!=-1:
        return value.find("/")

def IndexMultiply(value):
    if value.find("×")!=-1:
        return value.find("×")
    elif value.find("x")!=-1:
        return value.find("x")
    elif value.find("*")!=-1:
        return value.find("*")
    

if IndexAdd(question)!=None:
    term1=question[0:IndexAdd(question)]
    term2=question[IndexAdd(question)+1:]
    result=int(term1)+int(term2)
    print(f"{term1}+{term2}=999")


elif IndexSubtract(question)!=None:
    term1=question[0:IndexSubtract(question)]
    term2=question[IndexSubtract(question)+1:]
    operation="-"

elif IndexDivide(question)!=None:
    term1=question[0:IndexDivide(question)]
    term2=question[IndexDivide(question)+1:]
    operation="/"

elif IndexMultiply(question)!=None:
    term1=question[0:IndexMultiply(question)]
    term2=question[IndexMultiply(question)+1:]
    operation="*"
else:
    ExecuteNext=False
    print("No valid operation found!")


if term1.isdigit() and term2.isdigit():
    print(f"{term1}{operation}{term2}")