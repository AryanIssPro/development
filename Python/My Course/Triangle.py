import math

def hypotenuse(s1,s2):
	#creating a variable named answer that calculate the hypotenuse
	answer=math.sqrt((s1**2)+(s2**2))
	#cheaking if the last alphabet of answer is 0 if yes it will run lines
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
		return "The input cannot form a triangle!"



def side(hyp, side):
	#calculating the unknown side and storing it into answer
	try:
		answer=math.sqrt((hyp**2)-(side**2))
	except ValueError:
		answer=False
		
	if answer:
		if side<hyp and str(answer)[-1]=="0":
			return f"""
(c)²=(a)²+(b)² by Pythagorean Theorem
({hyp})²=({side})²+(b)²
{hyp**2}={side**2}+(b)²
(b)²={hyp**2}-{side**2}
(b)²={(hyp**2)-(side**2)}
b=√{(hyp**2)-(side**2)}
b={int(answer)}

Thus, the third side is {int(answer)} units.
"""
		else:
			#if the function don't verify the Pythagorean theorem it will run this line
			return "The input cannot form a triangle!"

	else:
		#ifndon't verify the Pythagorean theorem it will run this line
		return "The input cannot form a triangle!"
  
def heightWithArea(base, area):
	height=round((2*(area/base)),3)
	return(
f"""
Height=2*(Area/Base)
Height=2×({area}/{base})
Height=2×{round((area/base), 3)}
Height={height}
"""
	)


def angle(angle1, angle2):
	unknownAngle=180-angle1+angle2
	return(
f"""
First Angle + Second Angle + Unknown Angle = 180° by angle sum property of triangle
{angle1}°+{angle2}°+Unknown Angle=180°
Unknown Angle=(180-{angle1+angle2})°
Unknown Angle={unknownAngle}°
"""
	)


def pythagoreanTripletVerifier(side1, side2, side3):
	lists=[side1, side2, side3]
	lists.sort()
	if hypotenuse==side1**2+side2**2:
		return f"{side1}, {side2} and {side3} are pythagorean triplet."
	else:
		return f"{side1}, {side2} and {side3} are not a pythagorean triplet."


def areaWithHeight(height, base):
	area=float(round(1 / 2 * height * base))
	return(
f"""
Area=1/2×base×height
Area=base/2×height
Area={base}/2×{height}
Area={round(base/2, 3)}×{height}
Area={area}
"""
	)


def perimeterOfTriangle(side1, side2, side3):
	perimeter=side1+side2+side3
	return(
f"""
Perimeter=First Side + Second Side + Third Side 
Perimeter={side1}+{side2}+{side3}
Perimeter={perimeter}
"""
	)



choice=input("""
The operations on Triangle are-
1. Area
2. Perimeter
3. Angle
4. Height
""")
choice=choice.lower()
if choice=="1" or choice=="area":
	try:
		enteredHeight=float(input("Enter the height of the Triangle: "))
		enteredBase=float(input("Enter the base of the Triangle: "))
		print(areaWithHeight(height=enteredHeight, base=enteredHeight))
	except ValueError:
		print("Please enter a valid number!")

elif choice=="2" or choice=="perimeter":
	try:
		firstSide=float(input("Enter first side of the triangle: "))
		secondSide=float(input("Enter second side of the triangle: "))
		thirdSide=float(input("Enter third side of the triangle: "))
		print(perimeterOfTriangle(side1=firstSide, side2=secondSide, side3=thirdSide))
	except ValueError:
		print("Please enter a valid number!")

elif choice=="3" or choice=="angle":
	try:
		angle1=int(input("Enter first angle: "))
		angle2=int(input("Enter second angle: "))
		angle(angle1, angle2)
	except ValueError:
		print("Please enter a valid number!")
elif choice=="4" or choice=="hight":
	try:
		base=float(input("Enter the base: "))
		area=float(input("Enter the area: "))
		heightWithArea(base, area)
	except:
		print("Please enter a valid number")
else:
	print("Please enter a valid option")