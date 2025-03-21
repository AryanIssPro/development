letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"


def encrypt():
    encrypted = ""
    message = input("Enter the message to encrypt: ")
    for i in message:
        if letters.find(i.upper()) == -1 and i != " ":
                encrypted += i+" "

        elif i==" ":
                encrypted += "!! "

        if i.isupper():
            if letters.find(i)<=9:
                if letters.find(i)%2 == 0:
                    encrypted += f"+.{int((letters.find(i)+2)/2)}"+ " "
                elif letters.find(i)%2 != 0:
                    encrypted += f"++.0{int((letters.find(i)+1)/2)}"+" "

            elif letters.find(i)>=10 and letters.find(i)<=19:
                if letters.find(i)%2 == 0:
                    encrypted += f"--.0{int((letters.find(i)-8)/2)}"+" "
                elif letters.find(i)%2 != 0:
                    encrypted += f"-.{int((letters.find(i)-9)/2)}"+" "

            elif letters.find(i)>=20 and letters.find(i)<=25:
                if letters.find(i)%2 == 0:
                    encrypted += f"+-.{letters.find(i)-19}"+" "
                elif letters.find(i)%2 != 0: 
                    encrypted += f"-+.0{letters.find(i)-19}"+" "


        elif i.islower():
            i=i.upper()
            if letters.find(i)<=9:
                if letters.find(i)%2 == 0:
                    encrypted += f"+.{int((letters.find(i)+2)/2)}"+ "* "
                elif letters.find(i)%2 != 0:
                    encrypted += f"++.0{int((letters.find(i)+1)/2)}"+"* "

            elif letters.find(i)>=10 and letters.find(i)<=19:
                if letters.find(i)%2 == 0:
                    encrypted += f"--.0{int((letters.find(i)-8)/2)}"+"* "
                elif letters.find(i)%2 != 0:
                    encrypted += f"-.{int((letters.find(i)-9)/2)}"+"* "

            elif letters.find(i)>=20 and letters.find(i)<=25:
                if letters.find(i)%2 == 0:
                    encrypted += f"+-.{letters.find(i)-19}"+"* "
                elif letters.find(i)%2 != 0: 
                    encrypted += f"-+.0{letters.find(i)-19}"+"* "

        print(f"encrypted:{i}")
    print(f"Encrypted message: {encrypted}")

        
encrypt()
            

            