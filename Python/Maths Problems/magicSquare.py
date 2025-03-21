from random import randint #importing randint to generate random numbers.

def generate(formationRangeStart, formationRangeEnd): #this function requires range.
    formationNum=randint(formationRangeStart, formationRangeEnd) #random number in range
    formationNumX2=formationNum*2
    formationNumX3=formationNum*3 #is important for formation

    def genA1():
        a1=randint(int(formationNum-formationNum//1.5), int(formationNum*1.5)) #getting random number according to rule  
        return(a1)

    def genC1():
        c1=randint(int(formationNum-formationNum//1.5), int(formationNum*1.5)) #getting random number according to rule
        return(c1)

    a1=genA1()
    c1=genC1()
    c3=formationNumX2-a1
    a3=formationNumX2-c1
    b2=formationNum
    
    while ((a1!=c1)and(c1!=c3)and(c3!=a3)and(a3!=a1)and(a1!=c3)and(c1!=a3))==False: #checking if there is no similer numbers
        a1=genA1()
        c1=genC1()
        c3=formationNumX2-a1
        a3=formationNumX2-c1

    b1=formationNumX3-(a1+c1) #finding other numbers
    c2=formationNumX3-(c1+c3)
    b3=formationNumX3-(c3+a3)
    a2=formationNumX3-(a3+a1)
    

    print( #printing the final result with short note
f"""
This is a magic square. If you add the numbers vertically, horizontally, or diagonally, the sum will always be {formationNumX3}
{a3}|{b3}|{c3}
--------
{a2}|{b2}|{c2}
--------
{a1}|{b1}|{c1}
"""
    )

generate(794, 794) #calling the function with given range


"""
RULES AND STEPS FOR FORMATION

Naming Positions:
a3|b3|c3
a2|b2|c2
a1|b1|c1

1. Imagin a random number. For example: 5
2. Place it at the center (b2).
2. Multiply it with 2. As example: 10
3. Think two random number and place them at the position of a1 and c1. For example: a1=6, c1=9
4. Subtract the value of a1 from the randon number you have doubled and place it at a3. As example: a3=10-6=4
5. Subtract the value of c1 from the randon number you have doubled and place it at c3. As example: c3=10-9=1
6. Now find the remaining places by subtracting the sum of numbers neighbouring it from 3 times that random number.
   As example b3=(5x3)-(a3+c3)=15-(4+1)=10
7. Using step 6, find all the numbers.
""" 