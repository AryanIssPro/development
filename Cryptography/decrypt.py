letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def decrypt():
    decrypted = ""
    message = input("Enter the message to decrypt: ")
    for i in message.split():

        if i == "!!":
            decrypted += " "

        

        elif i[-1] == "*":
            i=i.lower()
            if i[0] == "+":
                if i[1] == ".":
                    decrypted += letters[(int(i[2])*2)-2].lower()
                elif i[1] == "+":
                    decrypted += letters[(int(i[4])*2)-1].lower()
                elif i[1] == "-":
                    decrypted += letters[int(i[3])+19].lower()
            elif i[0] == "-":
                if i[1] == ".":
                    decrypted += letters[(int(i[2])*2)+9].lower()
                elif i[1] == "-":
                    decrypted += letters[(int(i[4])*2)+8].lower()
                elif i[1] == "+":
                    decrypted += letters[int(i[4])+19].lower()
                    print("")
            

        elif i[-1] !="*":
            
            if i[0] == "+":
                if i[1] == ".":
                    decrypted += letters[(int(i[2])*2)-2]
                elif i[1] == "+":
                    decrypted += letters[(int(i[4])*2)-1]
                    
                elif i[1] == "-":
                    decrypted += letters[int(i[3])+19]
            elif i[0] == "-":
                if i[1] == ".":
                    decrypted += letters[(int(i[2])*2)+9]
                elif i[1] == "-":
                    decrypted += letters[(int(i[4])*2)+8]
                elif i[1] == "+":
                    decrypted += letters[int(i[4])+19]


        else:
            decrypted += i


        print(f"decrypted:{i}")
    print(f"Decrypted message: {decrypted}")


decrypt()