import requests
from creds import API_KEY_1, API_KEY_2
# api ninja https://api-ninjas.com/api/cryptosymbols
symbol = 'BTCUSDT'
api_url = 'https://api.api-ninjas.com/v1/cryptoprice?symbol={}'.format(symbol)
response = requests.get(api_url, headers={'X-Api-Key': API_KEY_1})
if response.status_code == requests.codes.ok:
	print(response.text)
else:
	print("Error:", response.status_code, response.text)


# coinmarketcap.com

# parameters = {
#   # 'start':'1',
#   # 'limit':'5000',
#   'convert':'USD'
# }
# headers = {
#   'Accepts': 'application/json',
#   'X-CMC_PRO_API_KEY': API_KEY_2,
# }

# symbol = 'WRX'
# api_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol={}'.format(symbol)
# response = requests.get(api_url, params=parameters, headers=headers)
# if response.status_code == requests.codes.ok:
# 	print(response.text)
# else:
# 	print("Error:", response.status_code, response.text)
