# WazirX withdrawl list extractor

This repo deals with providing withdrawl charges for every listed crypto on wazirX platform in USDT.
Made for knowledge purpose only.

## Description

calculate withdrawl fees of wazirx coins with single command.

## Getting Started

### Dependencies

* Obtain API key to convert each coin value - https://api-ninjas.com/api/

### Executing program

* Paste your generated API_KEY into the extractor.js file.
* Open this https://wazirx.com/fees and click on "Deposit and Withdrawal Fees" section
* Open browser console and paste extractor.js code in it and run the extractTable function
```
extractTable();
```

## Help

Check your API_KEY working or not using helper.py file.
create a creds.py file in same directory put your api key inside then run
```
python helper.py
```

## Authors

Kunal Gola

## Version History

* 0.1
    * Initial Release

## Disclaimer

Any issues regarding internet regulations should be addressed directly to the source website. The developer assumes no legal responsibility.
