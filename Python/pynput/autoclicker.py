from pynput.mouse import Button, Controller as MouseController
from pynput.keyboard import Controller as KeyboardController
from pynput.keyboard import Key
from pynput.keyboard import Listener as KeyboardListener
from time import sleep

# Instantiate the keyboard and mouse controllers
keyboard = KeyboardController()
mouse = MouseController()

# Define the function to perform repeated actions
def click():
    for null in range(100):
        """
        keyboard.press(Key.cmd)
        keyboard.press("r")
        keyboard.release("r")
        keyboard.release(Key.cmd)
        keyboard.press(Key.enter)
        """
        mouse.click(Button.left, 1)  # Performs a left-click with the mouse
        sleep(0.00001)
    print("Performed!")

# Define what happens on each key press
def on_press(key):
    try:
        if key.char == ';':
            click()
    except AttributeError:
        pass

# Start listening to keyboard events
with KeyboardListener(on_press=on_press) as listener:
    listener.join()