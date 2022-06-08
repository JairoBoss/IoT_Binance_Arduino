#include <SPI.h>
#include <LoRa.h>
#define CONFIG_MOSI 27
#define CONFIG_MISO 19
#define CONFIG_CLK  5
#define CONFIG_NSS  18
#define CONFIG_RST  23
#define CONFIG_DIO0 26
#define LORA_PERIOD 433
#define BAND 433910000
#include <Wire.h>
#include "SSD1306Wire.h"
#define OLED_CLASS_OBJ  SSD1306Wire
#define OLED_ADDRESS    0x3C
#define OLED_SDA    21
#define OLED_SCL    22
#define OLED_RST    -1
#define LED1    25
#define SDCARD_MOSI -1
#define SDCARD_MISO -1
#define SDCARD_SCLK -1
#define SDCARD_CS   -1
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiMulti.h>
#include <HTTPClient.h>
#define USE_SERIAL Serial
WiFiMulti wifiMulti;
//array of frequencies valid for the application to change
long int frequencies[3] = {433910000, 315000000, 868000000};
//controls the current frequency index in the array
int indexFreq = 0;
volatile int incomingPacketSize;
int rssi = 0;
OLED_CLASS_OBJ tft(OLED_ADDRESS, OLED_SDA, OLED_SCL);
int cpo = 0;
int t = 0;
String tmp2;
void setup() {
  USE_SERIAL.begin(115200);
  pinMode(LED1, OUTPUT);

  // Serial.begin(9600);
  //  while (!Serial);
  LoRa.setGain(20);
  SPI.begin(CONFIG_CLK, CONFIG_MISO, CONFIG_MOSI, CONFIG_NSS);
  LoRa.setPins(CONFIG_NSS, CONFIG_RST, CONFIG_DIO0);
  LoRa.begin(frequencies[indexFreq]);
  LoRa.receive();
  tft.init();
  tft.setTextAlignment(TEXT_ALIGN_CENTER);
  tft.flipScreenVertically();
  tft.clear();    
  digitalWrite(LED1, HIGH);
  tft.drawString(57, 3, "! Binance x Arduino !");
  tft.drawString(60, 19, "V1.01");  
  tft.drawLine(5, 32, 128, 30);
  tft.drawString(57, 34, "Jairo x Daniel");
  tft.drawLine(5, 50, 130, 50);
  tft.display();      
  delay(2000);     
  delay(2000);
  tft.clear();
  digitalWrite(LED1, LOW);
  wifiMulti.addAP("Ponciano", "ladesiemprecrack1");
}

void loop() {
 if ((wifiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    USE_SERIAL.print("[HTTP] begin...\n");
    http.begin("https://microapisoftware.herokuapp.com/api/movimiento/ultimo-movimiento");    
    int httpCode = http.GET();
    String payload = http.getString();
    char buf[1000];
    payload.toCharArray(buf, 1000);
    tmp2 = buf ;
    tmp2.trim();
    tft.clear();
    USE_SERIAL.println(tmp2);
    http.end();
  } 
  for (int i = 500; i >= 0; i--) {
    tft.clear();
    tft.drawString(60, 3, "Ultimo movimiento");
    tft.drawString(-200 + i, 32, tmp2);
    tft.drawLine(5, 30, 128, 30);
    tft.drawLine(5, 50, 128, 50);
    tft.display();
    delay(10);
  }
  tft.setTextAlignment(TEXT_ALIGN_CENTER);
   if ((wifiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    USE_SERIAL.print("[HTTP] begin...\n");
    http.begin("https://microapisoftware.herokuapp.com/api/movimiento/ultimo-movimiento");
    int httpCode = http.GET();
    String payload = http.getString();
    char buf[1000];
    payload.toCharArray(buf, 1000);
    tmp2 = buf ;
    tmp2.trim();
    tft.clear();
    USE_SERIAL.println(tmp2);
    http.end();
  }  
  tft.setTextAlignment(TEXT_ALIGN_CENTER);


if ((wifiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    USE_SERIAL.print("[HTTP] begin...\n");
    http.begin("https://microapisoftware.herokuapp.com/api/binance/btc-usdt");    
    int httpCode = http.GET();
    String payload = http.getString();
    char buf[1000];
    payload.toCharArray(buf, 1000);
    tmp2 = buf ;
    tmp2.trim();
    tft.clear();
    USE_SERIAL.println(tmp2);
    http.end();
  } 
  for (int i = 500; i >= 0; i--) {
    tft.clear();
    tft.drawString(60, 3, "Precio Bitcoin");
    tft.drawString(-200 + i, 32, tmp2);
    tft.drawLine(5, 30, 128, 30);
    tft.drawLine(5, 50, 128, 50);
    tft.display();
    delay(10);
  }
  tft.setTextAlignment(TEXT_ALIGN_CENTER);
   if ((wifiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    USE_SERIAL.print("[HTTP] begin...\n");
    http.begin("https://microapisoftware.herokuapp.com/api/binance/btc-usdt");
    int httpCode = http.GET();
    String payload = http.getString();
    char buf[1000];
    payload.toCharArray(buf, 1000);
    tmp2 = buf ;
    tmp2.trim();
    tft.clear();
    USE_SERIAL.println(tmp2);
    http.end();
  }  
  tft.setTextAlignment(TEXT_ALIGN_CENTER);


  if ((wifiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    USE_SERIAL.print("[HTTP] begin...\n");
    http.begin("https://microapisoftware.herokuapp.com/api/binance/eth-usdt");    
    int httpCode = http.GET();
    String payload = http.getString();
    char buf[1000];
    payload.toCharArray(buf, 1000);
    tmp2 = buf ;
    tmp2.trim();
    tft.clear();
    USE_SERIAL.println(tmp2);
    http.end();
  } 
  for (int i = 500; i >= 0; i--) {
    tft.clear();
    tft.drawString(60, 3, "Precio Ethereum");
    tft.drawString(-200 + i, 32, tmp2);
    tft.drawLine(5, 30, 128, 30);
    tft.drawLine(5, 50, 128, 50);
    tft.display();
    delay(10);
  }
  tft.setTextAlignment(TEXT_ALIGN_CENTER);
   if ((wifiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    USE_SERIAL.print("[HTTP] begin...\n");
    http.begin("https://microapisoftware.herokuapp.com/api/binance/eth-usdt");
    int httpCode = http.GET();
    String payload = http.getString();
    char buf[1000];
    payload.toCharArray(buf, 1000);
    tmp2 = buf ;
    tmp2.trim();
    tft.clear();
    USE_SERIAL.println(tmp2);
    http.end();
  }  
  tft.setTextAlignment(TEXT_ALIGN_CENTER);
}