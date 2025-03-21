#importing sqrt from math so that I can use sqrt() instead of math.sqrt()
from math import sqrt

#-------------------------------------------------------------------------

#defining the funtion of finding hypotenuse as hypotenuse()
#giving hypotenuse() two parameters i.e. s1 and s2

def hypotenuse(s1,s2):
    #creating a variable named answer that calculate the hypotenuse
    answer=sqrt((s1**2)+(s2**2))
    #cheaking if the last alphabet of answer is 0 if yes it will run lins
    if str(answer)[-1]=="0":
        return(f"""
(c)²=(a)²+(b)² by Pythagorean Theorem
(c)²=({s1})²+({s2})²
(c)²={s1**2}+{s2**2}
 (c)²={(s1**2)+(s2**2)}
c=√{(s1**2)+(s2**2)}
c={int(answer)}

Thus, hypotenuse of {s1} and {s2} is {int(answer)} units.
""")
    
    else:
        #if no it will print the following line
        return("The input cannot form a triangle!")

#------------------------------------------------------------------------

#defining findSide to find the unknown side
def findSide(hyp,side):
    #calculating the unknown side and storing it into answer
    try:
        answer=sqrt((hyp**2)-(side**2))
    except ValueError:
        answer=None
        
    if answer!=None:
        if side<hyp and str(answer)[-1]=="0":
            return(f"""
(c)²=(a)²+(b)² by Pythagorean Theorem
({hyp})²=({side})²+(b)²
{hyp**2}={side**2}+(b)²
(b)²={hyp**2}-{side**2}
( 7b)²={(hyp**2)-(side**2)}
b=√{(hyp**2)-(side**2)}
b={int(answer)}

Thus, the third side is {int(answer)} units.
""")
        else:
            #if it don't verify the Pythagorean theorem it will run this line
            return("The input cannot form a triangle!")

    else:
        #if it don't verify the Pythagorean theorem it will run this line
        return("The input cannot form a triangle!")
  
#------------------------------------------------------------------------

#taking input from the user and storing it to variable choice
choice=input("""What do you want to find-
1. Hypotenuse
2. Side
Enter: """
).lower()

#if the user enter hypotenuse it will run these lines.
if choice=="1" or choice=="hypotenuse":
    #using try funtion to handle errors
    try:
        side1=int(input("Enter first side: "))
        side2=int(input("Enter second side: "))
    except ValueError: #if any error occors it will run these lines
        print("Enter a valid non decimal number.")
        side1=None
        side2=None
        
    if side1!=None and side2!=None:
        print(hypotenuse(side1,side2))

elif choice=="2" or choice=="side":


    try:
        hypotenuse=int(input("Enter the hypotenuse: ")) #type: ignore
        side=int(input("Enter the one side: "))
    except ValueError:
        print("Enter a valid non decimal number.")
        side=None
        hypotenuse=None # type: ignore
    
    if side!=None and hypotenuse!=None:
        print(findSide(hypotenuse,side))

else:
    print("Invalid input!")

#Made by Aryan Gupta