from pynput.mouse import Button, Controller
from pynput.keyboard import Key, Listener
from time import sleep

mouse = Controller()

def click():
    print("performed!")
    mouse.click(Button.left, 1560)

sleep(5)
click()