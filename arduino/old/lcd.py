import serial
import struct
from binance.client import Client
import time

client = Client("XvhXJPcdazgvXTY7PbYlDhZtnL7zzX3yU6Xt5G8krcMa94SSTI8FFxO5s8NrS0Ip", "2Vwv0iDuryxJ4Nql065O8cVn1qUssZoWlv1pFMWugp7Wpjo3Ql4r7zBwRODqV5X2", tld='com')
symbolTicker = 'BTCUSDT'
precioAnterior = 0
quantityOrders = 400
compra = False
ganancia = 0
s = serial.Serial('COM3', baudrate=9600)
time.sleep(2)
i = 0

#Encontrar el valor de la moneda
list_of_tickers = client.get_all_tickers()
for tick_2 in list_of_tickers:
    if tick_2["symbol"] == symbolTicker:
        precioAnterior = float(tick_2["price"])

print("Precio: ", precioAnterior)
if s.isOpen():
    while 1:
        time.sleep(3)
        list_of_tickers = client.get_all_tickers()
        for tick_2 in list_of_tickers:
            if tick_2["symbol"] == symbolTicker:
                precioAnterior = float(tick_2["price"])

        print("Precio: ", precioAnterior)
        ba = bytearray(struct.pack("f", precioAnterior))          
        s.write(str("Precio BTC USDT $").encode('utf-8'))
        s.write(str(precioAnterior).encode('utf-8'))

