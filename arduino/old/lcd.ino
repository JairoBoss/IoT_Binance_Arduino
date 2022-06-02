 #include <LiquidCrystal.h>    // importa libreria

LiquidCrystal lcd(13, 12, 11, 10, 9, 8);  // pines RS, E, D4, D5, D6, D7 de modulo 1602A


void setup() {
  // set up the LCD's number of columns and rows:
  Serial.begin(9600);
  
  lcd.begin(16, 2);
  // initialize the serial communications:
  
}

void loop()
{
  int charcount;
  boolean secondline;
  if (Serial.available()) {
    delay(200);
    lcd.clear();
    charcount = 0;
    secondline = false;
    while (Serial.available() > 0) {
      if (charcount > 15 && secondline == false ) {
        lcd.setCursor(0,1);
        secondline = true;
      }
      lcd.write(Serial.read());
      charcount++;
    }
  }
}