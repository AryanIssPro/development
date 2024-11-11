from pynput.mouse import Button, Controller as MouseController
from pynput.keyboard import Controller as KeyboardController
from pynput.keyboard import Listener as KeyboardListener
from time import sleep

# Instantiate the keyboard and mouse controllers
keyboard = KeyboardController()
mouse = MouseController()

# Define the function to perform repeated actions
def click():
    print("Performed!")
    mouse.click(Button.left, 100)  # Performs a left-click with the mouse
    sleep(0.09)

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
