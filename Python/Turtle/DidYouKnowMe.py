from turtle import *


def aryan(colour):
    color(colour)
    width(5)

    speed(100)
    penup()
    hideturtle()
    right(90)
    forward(180)
    left(270)
    forward(300)
    right(180)
    pendown()
    showturtle()
    speed(2)

    # writing the letter "A"
    right(285)
    forward(250)
    right(150)
    forward(250)
    right(180)
    forward(120)
    left(75)
    forward(68)

    speed(100)
    penup()
    hideturtle()
    left(135)
    forward(163)
    right(225)
    pendown()
    showturtle()
    speed(2)

    # writing the letter "R"
    forward(240)
    right(90)
    for null in range(3):
        forward(90)
        right(90)
    right(150)
    forward(174)

    speed(100)
    penup()
    hideturtle()
    right(300)
    forward(20)
    pendown()
    showturtle()
    speed(2)

    # writing the letter "Y"
    left(63)
    forward(270)
    back(120)
    left(60)
    forward(130)

    speed(100)
    penup()
    back(130)
    left(300)
    back(150)
    right(63)
    hideturtle()
    forward(90)
    pendown()
    showturtle()
    speed(2)

    # writing the letter "A" again
    right(285)
    forward(250)
    right(150)
    forward(250)
    right(180)
    forward(120)
    left(75)
    forward(68)

    speed(100)
    penup()
    hideturtle()
    left(135)
    forward(163)
    pendown()
    showturtle()
    speed(2)

    # last but not the least "N"
    right(225)
    forward(240)
    right(150)
    forward(270)
    right(210)
    forward(240)
    hideturtle()


inp = input("Did you know the creator of this program?\n").lower()
if inp == "no":
    print("Ok, his name is:\n \"Aryan Gupta\"")
    isBoring = input("Is it boring to read it in this way?\n").lower()
    if isBoring == "yes":
        favoriteColor = input("Enter your favorite colour: ")
        print("Then ok see this:")
        aryan(colour=favoriteColor)
    elif isBoring == "no":
        print("Like really? You should try \"yes\" next time")
    else:
        print("Please input the answer in yes or no!")
elif inp == "yes":
    print("Ok, no problem forget it for once and enter no next time>")
elif inp == "":
    aryan(colour="black")
else:
    print("Please input the answer in yes or no!")
