import serial, time

connected = False
ser = serial.Serial("COM3", baudrate=9600)

venta = False
caracter = -1
cantidad = 0

while True:
    if ser.isOpen():        
        if ser.isOpen():
            caracter = str(ser.read())[2]
            print(caracter)
            if caracter == '*':
                venta = True
                print('Venta en proceso')

        while venta:            
            caracter = (str(ser.read())[2])
            cantidad = str(cantidad) + (str(ser.read())[2])
            print(cantidad)
            if caracter == '*':
                venta = False
                print('Venta finalizada se venderan', cantidad)
                cantidad = 0

