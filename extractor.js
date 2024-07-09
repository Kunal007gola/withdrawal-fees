
const API_KEY = "YOUR_API_KEY"
async function getCoinValue(coin){

    const addr = 'https://api.api-ninjas.com/v1/cryptoprice?symbol=';

    let symbol = coin + "USDT"

    const requestOptions = {
      headers: {
        'X-Api-Key': API_KEY,
      },
    };

    let response = 0;
    await fetch("https://api.api-ninjas.com/v1/cryptoprice?symbol="+symbol, requestOptions).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('API request failed');
        }}).then(data => {
            console.log(data);
            response = data['price'];
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
            return 0;
        });

    return response;
}

function getName(data){
    return data.substring(
        data.indexOf("(") + 1, 
        data.lastIndexOf(")")
    );
}

function findFees(fees, coinValue){

    return fees*coinValue;

}

async function extractTable(){
    let table = $('.table');

    let head = table.childNodes[0].childNodes[0];
    let data = table.childNodes[1].childNodes;
    let csv = "data:text/csv;charset=utf-8,";

    csv += head.childNodes[0].textContent + "," + head.childNodes[1].textContent + "," + head.childNodes[2].textContent + "," + head.childNodes[3].textContent + "," + head.childNodes[4].textContent + "," + head.childNodes[5].textContent + "," + "Market Price(USDT),Withdraw Fees(USDT)" + "\n";

    for(let i of data){
        let len = i.childNodes.length;
        if (len<8)
        continue;

        
        let txt = i.childNodes[7].textContent
        if ('Enabled' === txt){
        	// console.log(i.childNodes[0].textContent);
            let name = getName(i.childNodes[0].textContent);

            let price = await getCoinValue(name);
            // console.log(price);

            let fees = i.childNodes[3].textContent.split(" ")[0];

            let charges = findFees(fees, price);
            // console.log(name, fees, price, charges);
            csv += i.childNodes[0].textContent + "," + i.childNodes[1].textContent + "," + i.childNodes[2].textContent + "," + i.childNodes[3].textContent + "," + i.childNodes[4].textContent + "," + i.childNodes[5].textContent + "," + price + "," + charges + "\n";
        }
        
    }

    let encodedUri = encodeURI(csv);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Withdraw_fees.csv");
    document.body.appendChild(link);

    link.click();

}