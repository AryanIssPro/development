import PySimpleGUI as sg

# Define the layout
layout = [
    [sg.Text('Press any key to test it!', size=(30, 1), font=('Helvetica', 14))],
    [sg.Text('', size=(30, 2), font=('Helvetica', 24), key='-KEY-')],
    [sg.Button('Exit', size=(10, 1))]
    ]

# Create the window with keyboard event listening enabled
window = sg.Window('Keyboard Tester', layout, return_keyboard_events=True)

# Event loop
while True:
    event, values = window.read()
    
    # Exit if the window is closed or the Exit button is pressed
    if event in (sg.WIN_CLOSED, 'Exit'):
        break
    
    # Update the display text with the key that was pressed
    if isinstance(event, str):
        window['-KEY-'].update(f'Key Pressed: {event}')

# Close the window
window.close()
