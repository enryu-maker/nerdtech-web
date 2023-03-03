import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522


class deathnote:

    def __init__(self,data):
        self.ryuk = SimpleMFRC522()
        self.data = data

    def write(self):
        try:
            id , d = self.ryuk.read()
            data = {
                'id': id,
                "iprn": "123456789"
            }
            self.ryuk.write(data)
            print("Written")
        finally:
            GPIO.cleanup()

    def read(self):
        try:
            id, text = self.ryuk.read()
        finally:
            # GPIO.cleanup()
            print('Hi, my name is')

