export function currencyFormat(num:number, currency?:string, noCurrency?:boolean) {
    return (noCurrency?'':'₦') + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

 export function textCurrencyFormat(num:number, currency?:string, noCurrency?:boolean) {
   return (noCurrency?'':'₦ ') +Number(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

 export function noSymbolCurrency(num:number, currency?:string, noCurrency?:boolean) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

 export function capitalizeFirstLetter(string:string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}