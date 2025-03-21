import TurtleFlags as t
import PySimpleGUI as sg

layout = [
    [sg.Text("Choose a country-", 
        text_color="#0056ff", 
        background_color="#dbecf4")
    ],
    
    [sg.Image("C:/Users/aryan/Python/Flag Generator/India.png", size=(150, 100)),
        sg.Text(" "*10, background_color="#dbecf4"),
        sg.Image("/Users/aryan/Python/Flag Generator/France.png", size=(150, 100)),
        sg.Text(" "*10, background_color="#dbecf4"),
        sg.Image("/Users/aryan/Python/Flag Generator/Japan.png", size=(150, 100))
    ],

    [sg.Text(" "*9, background_color="#dbecf4"),
        sg.Button(" India ", button_color="#4680f4"),
        sg.Text(" "*36, background_color="#dbecf4"),
        sg.Button("France", button_color="#4681f4"),
        sg.Text(" "*36, background_color="#dbecf4"),
        sg.Button("Japan", button_color="#4681f4")
    ],

    [sg.Text
("""

""", background_color="#dbecf4")    
    ],

    [sg.Image("/Users/aryan/Python/Flag Generator/Germany.png", size=(150, 100)),
        sg.Text(" "*10, background_color="#dbecf4"),
        sg.Image("/Users/aryan/Python/Flag Generator/Ukraine.png", size=(150, 100)),
        sg.Text(" "*10, background_color="#dbecf4"),
        sg.Image("/Users/aryan/Python/Flag Generator/Italy.png", size=(150, 100))
    ],

    [sg.Text(" "*6, background_color="#dbecf4"),
        sg.Button("Germany", button_color="#4681f4"),
        sg.Text(" "*34, background_color="#dbecf4"),
        sg.Button("Ukraine", button_color="#4681f4"),
        sg.Text(" "*37, background_color="#dbecf4"),
        sg.Button("Italy", button_color="#4681f4")
    ],

    [sg.Text("""

""", background_color="#dbecf4")    
    ],

    [sg.Image("Indonesia.png", size=(150, 100)),
        sg.Text(" "*10, background_color="#dbecf4"),
        sg.Image("/Users/aryan/Python/Flag Generator/Russia.png", size=(150, 100)),
    ],

    [sg.Text(" "*6, background_color="#dbecf4"),
        sg.Button("Indonesia", button_color="#4681f4"),
        sg.Text(" "*34, background_color="#dbecf4"),
        sg.Button("Russia", button_color="#4681f4"),
        sg.Text(" "*36, background_color="#dbecf4"), 
        sg.Button("Cancel", button_color="#e81123")
    ]
]

window = sg.Window('Flag Generator',
                   layout,
                   background_color="#dbecf4",
                   grab_anywhere=True,
                   )

while True:
    event, values = window.read()
    if event == " India ":
        t.India()
    elif event == "France":
        t.France()
    elif event == "Japan":
        t.Japan()
    elif event == "Germany":
        t.Germany()
    elif event == "Ukraine":
        t.Ukraine()
    elif event == "Italy":
        t.Italy()
    elif event == "Indonesia":
        t.Indonesia()
    elif event == "Russia":
        t.Russia()
    elif event == sg.WINDOW_CLOSED or event == 'Cancel':
        break