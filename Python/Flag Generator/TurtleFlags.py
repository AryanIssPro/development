from turtle import *

def hide():
    speed(100)
    penup()
    hideturtle()


def show():
    width(2)
    pendown()
    showturtle()
    speed(3)


def moveToCorner():
    hide()
    left(90)
    forward(233.5)
    left(90)
    forward(350)
    left(90)
    show()


def edge():
    forward(467)
    left(90)
    forward(700)
    left(90)
    forward(467)
    left(90)
    forward(700)


def India():
    hide()
    home()
    clear()
    color("black")
    show()
    
    moveToCorner()
    edge()

    hide()
    back(700)
    fillcolor("#FF671F")  # HEX code for saffron
    begin_fill()
    forward(700)
    show()

    hide()
    left(90)
    forward(155.6)
    left(90)
    show()

    color("#FF671F")  # HEX code for saffron
    forward(700)
    end_fill()

    hide()
    back(700)
    right(90)
    forward(155.6)
    fillcolor("green")
    begin_fill()
    left(90)
    show()

    color("green")
    forward(700)

    hide()
    right(90)
    forward(155.6)
    right(90)
    forward(700)
    right(90)
    forward(155.6)
    end_fill()
    right(90)
    forward(350)
    show()

    speed(3)

    color("navy blue")
    width(5)
    circle(77.8)
    width(2)

    angle = 15.21

    left(90)

    hide()
    forward(77.8)
    back(15)
    right(90)
    show()

    fillcolor("navy blue")
    begin_fill()
    circle(15)
    end_fill()

    hide()
    left(90)
    forward(15)
    show()

    for turm in range(12):
        left(angle)
        backward(77.8)
        if turm != 12:
            forward(155.6)
            backward(77.8)

    color("black")

    hide()
    right(2.5)
    back(232)
    right(90)
    forward(350)
    left(90)
    show()

    speed(100)
    edge()

    hideturtle()
    mainloop()

def France():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    back(233)
    fillcolor("#002654")
    begin_fill()
    forward(233)
    left(90)
    forward(467)
    left(90)
    forward(233)
    left(90)
    forward(467)
    left(180)
    show()

    color("#002654")
    forward(467)
    end_fill()

    hide()
    back(467)
    left(90)
    forward(233)
    fillcolor("#ED2939")
    begin_fill()
    forward(233)
    right(90)
    forward(467)
    right(90)
    forward(233)
    right(90)
    forward(467)
    right(180)
    show()

    color("#ED2939")
    forward(467)
    end_fill()

    hideturtle()
    mainloop()

def Japan():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    left(90)
    forward(467)
    left(90)
    forward(350)
    left(90)
    forward(93.5)
    right(90)
    show()

    color("#BC002D")
    fillcolor("#BC002D")
    begin_fill()
    circle(140)
    end_fill()

    hideturtle()
    mainloop()

def Germany():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    back(700)
    fillcolor("black")
    begin_fill()
    forward(700)
    left(90)
    forward(156)
    left(90)
    show()

    color("black")
    forward(700)
    end_fill()

    hide()
    fillcolor("#DD0000")
    begin_fill()
    back(700)
    right(90)
    forward(156)
    left(90)
    show()

    color("#DD0000")
    forward(699)
    end_fill()

    hide()
    fillcolor("#FFCC00")
    begin_fill()
    back(699)
    right(90)
    forward(156)
    left(90)
    show()

    color("#FFCC00")
    forward(700)
    end_fill()

    hide()
    left(90)
    forward(467)
    left(90)
    forward(700)
    left(90)
    show()

    speed(100)
    color("black")
    edge()

    hideturtle()
    mainloop()

def Ukraine():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    back(700)
    fillcolor("#0057B7")
    begin_fill()
    forward(700)
    left(90)
    forward(233.5)
    left(90)
    show()

    color("#0057B7")
    forward(700)
    end_fill()

    hide()
    fillcolor("#FFDD00")
    begin_fill()
    left(180)
    forward(700)
    left(90)
    forward(233.5)
    left(90)
    show()

    color("black")
    forward(700)
    color("#FFDD00")
    end_fill()

    hide()
    left(90)
    forward(467)
    left(90)
    forward(700)
    left(90)
    show()

    speed(100)
    color("black")
    hideturtle()
    edge()

    hideturtle()
    mainloop()

def Italy():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    back(233)
    fillcolor("#008C45")
    begin_fill()
    forward(233)
    left(90)
    forward(467)
    left(90)
    forward(233)
    left(90)
    forward(467)
    left(180)
    show()

    color("#008C45")
    forward(467)
    end_fill()

    hide()
    back(467)
    left(90)
    forward(233)
    fillcolor("#CD212A")
    begin_fill()
    forward(233)
    right(90)
    forward(467)
    right(90)
    forward(233)
    right(90)
    forward(467)
    right(180)
    show()

    color("#CD212A")
    forward(467)
    end_fill()

    hideturtle()
    mainloop()

def Indonesia():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    back(700)
    fillcolor("#ff0000")
    begin_fill()
    forward(700)
    left(90)
    forward(233.5)
    left(90)
    show()

    color("#ff0000")
    forward(700)
    end_fill()

    hide()
    fillcolor("white")
    begin_fill()
    left(180)
    forward(700)
    left(90)
    forward(233.5)
    left(90)
    show()

    color("black")
    forward(700)
    color("white")
    end_fill()

    hide()
    left(90)
    forward(467)
    left(90)
    forward(700)
    left(90)
    show()

    speed(100)
    color("black")
    hideturtle()
    edge()

    hideturtle()
    mainloop()

def Russia():
    hide()
    home()
    clear()
    color("black")
    show()

    moveToCorner()
    edge()

    hide()
    back(700)
    fillcolor("white")
    begin_fill()
    forward(700)
    left(90)
    forward(156)
    left(90)
    show()

    color("white")
    forward(700)
    end_fill()

    hide()
    fillcolor("#1C3578")
    begin_fill()
    back(700)
    right(90)
    forward(156)
    left(90)
    show()

    color("#1C3578")
    forward(699)
    end_fill()

    hide()
    fillcolor("#E4181C")
    begin_fill()
    back(699)
    right(90)
    forward(156)
    left(90)
    show()

    color("#E4181C")
    forward(700)
    end_fill()

    hide()
    left(90)
    forward(467)
    left(90)
    forward(700)
    left(90)
    show()

    speed(100)
    color("black")
    edge()

    hideturtle()
    mainloop()