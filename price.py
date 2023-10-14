import requests
from bs4 import BeautifulSoup

# TOM
tomURL = "https://www.tgju.org/profile/price_dollar_rl"
tomPage = requests.get(tomURL)

tomSoup = BeautifulSoup(tomPage.content, "html.parser")
tom_element = tomSoup.find("span", {"data-col": "info.last_trade.PDrCotVal"})

# Extract the text content
tomPrice = tom_element.text[:-1].replace(",", "")

# AMD
amdURL = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=AMD"
amdPage = requests.get(amdURL)

amdSoup = BeautifulSoup(amdPage.content, "html.parser")
amd_element = amdSoup.find("p", class_="result__BigRate-sc-1bsijpp-1 iGrAod")

amdPrice = amd_element.text.split()[0][:-2]

# USD
usdPrice = 1

# GEL
gelURL = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=GEL"
gelPage = requests.get(gelURL)

gelSoup = BeautifulSoup(gelPage.content, "html.parser")
gel_element = gelSoup.find("p", class_="result__BigRate-sc-1bsijpp-1 iGrAod")

gelPrice = gel_element.text.split()[0][:-5]

# GBP
gbpURL = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=GBP"
gbpPage = requests.get(gbpURL)

gbpSoup = BeautifulSoup(gbpPage.content, "html.parser")
gbp_element = gbpSoup.find("p", class_="result__BigRate-sc-1bsijpp-1 iGrAod")

gbpPrice = gbp_element.text.split()[0][:-6]

# EUR
eurURL = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=EUR"
eurPage = requests.get(eurURL)

eurSoup = BeautifulSoup(eurPage.content, "html.parser")
eur_element = eurSoup.find("p", class_="result__BigRate-sc-1bsijpp-1 iGrAod")

eurPrice = eur_element.text.split()[0][:-5]

# price.js
js_variable = f"export const currencyData = [\n"
js_variable += f"    {{ name: 'amd', rate: {amdPrice}, symbol: '֏' }},\n"
js_variable += f"    {{ name: 'usd', rate: {usdPrice}, symbol: '$' }},\n"
js_variable += f"    {{ name: 'tom', rate: {tomPrice}, symbol: 'T' }},\n"
js_variable += f"    {{ name: 'gel', rate: {gelPrice}, symbol: '₾' }},\n"
js_variable += f"    {{ name: 'gbp', rate: {gbpPrice}, symbol: '£' }},\n"
js_variable += f"    {{ name: 'eur', rate: {eurPrice}, symbol: '€' }},\n"
js_variable += f"    // Add more currencies here\n"
js_variable += f"];"

# Save the JavaScript code to a file in the current directory
with open('price.js', 'w', encoding='utf-8') as file:
    file.write(js_variable)