def main():
    import math
    pi = 3.141592653589793

    ip = input(
        """Hello, I can help you to do-
1. Area
2. Perimeter and Circumference
3. Volume
4. Cube root
5. Cube
6. Square root
7. Square
8. PowerRelationships
9. HCF
10. LCM
11. Percentage	
12. Mean
13. Temperature
Enter the Sr. number or the operation name-\n"""
    )

    ip = ip.lower()

    if ip == "1" or ip == "area":

        shape = input(
            """The shapes are-
1. Circle
2. Rectangle
3. Square
4. Triangle
Enter sr. number or shape name-\n"""
        )
        shape = shape.lower()

        if shape == "1" or shape == "circle":
            radius = float(input("Enter radius\n"))
            area = pi * radius ** 2
            area = round(area, 3)

            print(f"The area is {area}² units")

        elif shape == "2" or shape == "rectangle":
            length = float(input("Enter length.\n"))
            breadth = float(input("Enter breadth.\n"))
            area = (length * breadth)

            print(f"The area is {area}² units")

        elif shape == "3" or shape == "square":
            side = float(input("Enter side.\n"))
            area = side ** 2
            area = round(area, 3)

            print(f"The area is {area}² units.")

        elif shape == "4" or shape == "triangle":
            base = float(input("Enter base.\n"))
            height = float(input("Enter height.\n"))
            area = (base * height) / 2

            print(f"The area is {area}² units")

        else:
            print(f"\"{shape}\" is invalid. Try again.")
    elif ip == "2" or ip == "perimeter" or ip == "circumference" or ip == "perimeter and circumference":

        shape = input(
            """The shapes are-
1. Circle
2. Rectangle
3. Square
4. Triangle
Enter sr. number or shape name.\n"""
        )
        shape = shape.lower()

        if shape == "1" or shape == "circle":
            radius = float(input("Enter radius.\n"))
            perimeter = 2 * pi * radius
            perimeter = round(perimeter, 2)

            print(f"The perimeter is {perimeter}")

        elif shape == "2" or shape == "rectangle":
            length = float(input("Enter length.\n"))
            breadth = float(input("Enter width.\n"))
            perimeter = 2 * (length + breadth)

            print(f"The perimeter is {perimeter}.")

        elif shape == "3" or shape == "square":
            side = float(input("Enter side."))
            perimeter = side * 4

            print(f"The perimeter is {perimeter}.")

        elif shape == "4" or shape == "triangle":
            side1 = float(input("Enter length of side 1.\n"))
            side2 = float(input("Enter length of side 2.\n"))
            side3 = float(input("Enter length of side 3.\n"))
            perimeter = side1 + side2 + side3

            print(f"The perimeter is {perimeter}")

        else:
            print(f"\"{shape}\" is invalid. Try again.")
    elif ip == "3" or ip == "volume":

        shape = input(
            """The shapes are-
1. Cube
2. Rectangular Prism (Cuboid)
3. Cylinder
4. Sphere
5. Cone
Enter the Sr. number or the shape name.\n"""
        )
        shape = shape.lower()

        if shape == "1" or shape == "cube":

            option = input(
                """What did you have-
1. Area of side of cube
2. Side of one side
Enter the Sr. number or the shape name.\n"""
            )
            option = option.lower()

            if option == "1" or option == "area" or option == "area of side":
                side = float(input("Enter area of a side:\n"))
                volume = side ** 3
                volume = round(volume, 3)

                print(f"The volume is {volume}³ units.")

            elif option == "2" or option == "side" or option == "side of one side":
                side = float(input("Enter the side.\n"))
                area = side ** 2
                volume = area ** 3
                volume = round(volume, 3)
                print(f"The volume is {volume}³ units.")

            else:
                print(f"{shape} is invalid. Try again.")

        elif shape == "2" or shape == "rectangular prism" or shape == "cuboid":
            length = float(input("Enter the length.\n"))
            breadth = float(input("Enter the breadth.\n"))
            height = float(input("Enter the height.\n"))
            volume = length * breadth * height

            print(f"The volume is {volume}³ units.")

        elif shape == "3" or shape == "cylinder":
            radius = float(input("Enter the radius of base.\n"))
            height = float(input("Enter the height.\n"))
            volume = pi * radius ** 2 * height
            volume = round(volume, 3)

            print(f"The volume is {volume}³ units.")

        elif shape == "4" or shape == "sphere":
            radius = float(input("Enter radius.\n"))
            volume = (4 / 3) * pi * radius ** 3
            volume = round(volume, 3)

            print(f"The volume is {volume}³ units")

        elif shape == "5" or shape == "cone":
            radius = float(input("Enter the radius of base.\n"))
            height = float(input("Enter the height.\n"))
            volume = (1 / 3) * pi * radius ** 2 * height

            print(f"The volume is {volume}³ units")

        else:
            print(f"{shape} is invalid. Try again.")

    elif ip == "4" or ip == "cube root" or ip == "cube-root":
        num = float(input("Enter number to find root.\n"))
        root = num ** (1 / 3)
        root = round(root, 3)

        print(f"The cube root is {root}")

    elif ip == "5" or ip == "cube":
        cube = float(input("Enter the number to be cubed.\n"))
        cubed = cube ** 3
        cubed = round(cubed, 3)

        print(f"The cube of {cube} is {cubed}.")

    elif ip == "6" or ip == "square root" or ip == "squareroot":
        num = float(input("Enter number to find square root.\n"))
        root = num ** (1 / 2)
        root = round(root, 3)

        print(f"The cube root is {root}")

    elif ip == "7" or ip == "square":
        square = float(input("Enter the number to be squared.\n"))
        squared = square ** 2
        squared = round(squared, 3)

        print(f"The square of {square} is {squared}.")

    elif ip == "8" or ip == "power":
        num = float(input("Enter the base number.\n"))
        power = float(input("Enter the power.\n"))
        powered = num ** power

        print(f"{num} raised to the power of {power} is {powered} ")

    elif ip == "9" or ip == "hcf" or ip == "gcm" or ip == "hcd" or ip == "hcm":
        numbers = input("Enter a list of numbers separated by comma (example: 80, 40, 20 etc)\n").split(",")
        numbers = [int(num.strip()) for num in numbers]
        hcf = math.gcd(*numbers)
        num = str(numbers).replace("[", "")
        num = num.replace("]", "")

        print(f"The HCF of {num} is {hcf}.")

    elif ip == "10" or ip == "lcm":
        numbers = input("Enter a list of numbers separated by comma (example: 80, 40, 20 etc)\n").split(",")
        numbers = [int(num.strip()) for num in numbers]
        lcm = math.lcm(*numbers)
        num = str(numbers).replace("[", "")
        num = num.replace("]", "")

        print(f"The LCM of {num} is {lcm}.")

    elif ip == "11" or ip == "percentage" or ip == "percent":
        whole = float(input("Enter the whole.\n"))
        part = float(input("Enter the part.\n"))
        percent = (part / whole) * 100
        percent = round(percent, 3)

        print(f"The percent is {percent}%.")

    elif ip == "12" or ip == "mean":
        input_numbers = input("Enter numbers separated by commas:\n")
        numbers = [int(num) for num in input_numbers.split(",")]
        sumOfObservation = sum(numbers)
        numOfObservation = len(numbers)
        mean = sumOfObservation / numOfObservation
        numbers_str = ", ".join(str(num) for num in numbers)
        print(f"The mean of {numbers_str} is {mean}.")

    elif ip == "13" or ip == "temperature":
        option = input(
            """The values are-
1. Celsius (°C)
2. Fahrenheit (°F)
Enter the Sr. number or the operation name.\n"""
        )
        option = option.lower()

        value = float(input("Enter the value to be converted:\n"))

        c = 5 / 9 * (value - 32)
        f = (value * 9 / 5) + 32
        k = value + 273.15
        k = round(k, 2)
        fk = (5 / 9 * (value - 32)) + 273.15
        fk = round(fk, 2)
        c = round(c, 2)

        if option == "1" or option == "celsius" or option == "c" or option == "°c":
            print(f"{value} °C is equal to {f} °F.")
            print(f"{value} °C is equal to {k} K")

        elif option == "2" or option == "fahrenheit" or option == "f" or option == "°f":
            print(f"{value} °F is equal to {c} °C.")
            print(f"{value} °F is equal to {fk} K")

        else:
            print(f"{option} is invalid. Try again.")

    else:
        print(f"\"{ip}\" is invalid. Try again.")

main()