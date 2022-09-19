import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import DatePicker from 'react-datepicker';  
import "react-datepicker/dist/react-datepicker.css";  
import awsExports from './aws-exports';
import './App.css';
import React, { useState, useEffect } from 'react'; 
import { useForm } from "react-hook-form";
Amplify.configure(awsExports);

function App({ signOut, user }) {




  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [senderIban, setSenderIban] = useState('');
  const [receiverIban, setReceiverIban] = useState('');
  const [senderBankId, setSenderBankId] = useState('');
  const [receiverBankId, setReceiverBankId] = useState('');
  const [paymentAmt, setPaymentAmount] = useState('');
  const [valueDate, setValueDate] = useState('');


  function makeUpperAlphaId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function makeNumericId(length) {
  var result           = '';
  var characters       = '1234567890';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
  function generateRandomID(){
    return  Math.random().toString(36).substr(2, 9).toUpperCase();
  }
  function generateRandomIBAN(){
    var countryNames = [
      'AF',
      'AX',
      'AL',
      'DZ',
      'AS',
      'AD',
      'AO',
      'AI',
      'AQ',
'AG',
'AR',
'AM',
'AW',
'AU',
'AT',
'AZ',
'BS',
'BH',
'BD',
'BB',
'BY',
'BE',
'BZ',
'BJ',
'BM',
'BT',
'BO',
'BA',
'BW',
'BV',
'BR',
'IO',
'BN',
'BG',
'BF',
'BI',
'KH',
'CM',
'CA',
'CV',
'KY',
'CF',
'TD',
'CL',
'CN',
'CX',
'CC',
'CO',
'KM',
'CG',
'CD',
'CK',
'CR',
'CI',
'HR',
'CU',
'CY',
'CZ',
'DK',
'DJ',
'DM',
'DO',
'EC',
'EG',
'SV',
'GQ',
'ER',
'EE',
'ET',
'FK',
'FO',
'FJ',
'FI',
'FR',
'GF',
'PF',
'TF',
'GA',
'GM',
'GE',
'DE',
'GH',
'GI',
'GR',
'GL',
'GD',
'GP',
'GU',
'GT',
'GG',
'GN',
'GW',
'GY',
'HT',
'HM',
'VA',
'HN',
'HK',
'HU',
'IS',
'IN',
'ID',
'IR',
'IQ',
'IE',
'IM',
'IL',
'IT',
'JM',
'JP',
'JE',
'JO',
'KZ',
'KE',
'KI',
'KR',
'KW',
'KG',
'LA',
'LV',
'LB',
'LS',
'LR',
'LY',
'LI',
'LT',
'LU',
'MO',
'MK',
'MG',
'MW',
'MY',
'MV',
'ML',
'MT',
'MH',
'MQ',
'MR',
'MU',
'YT',
'MX',
'FM',
'MD',
'MC',
'MN',
'ME',
'MS',
'MA',
'MZ',
'MM',
'NA',
'NR',
'NP',
'NL',
'AN',
'NC',
'NZ',
'NI',
'NE',
'NG',
'NU',
'NF',
'MP',
'NO',
'OM',
'PK',
'PW',
'PS',
'PA',
'PG',
'PY',
'PE',
'PH',
'PN',
'PL',
'PT',
'PR',
'QA',
'RE',
'RO',
'RU',
'RW',
'BL',
'SH',
'KN',
'LC',
'MF',
'PM',
'VC',
'WS',
'SM',
'ST',
'SA',
'SN',
'RS',
'SC',
'SL',
'SG',
'SK',
'SI',
'SB',
'SO',
'ZA',
'GS',
'ES',
'LK',
'SD',
'SR',
'SJ',
'SZ',
'SE',
'CH',
'SY',
'TW',
'TJ',
'TZ',
'TH',
'TL',
'TG',
'TK',
'TO',
'TT',
'TN',
'TR',
'TM',
'TC',
'TV',
'UG',
'UA',
'AE',
'GB',
'US',
'UM',
'UY',
'UZ',
'VU',
'VE',
'VN',
'VG',
'VI',
'WF',
'EH',
'YE',
'ZM',
'ZW'
  ];

    return countryNames[Math.floor(Math.random() * countryNames.length)] + Math.floor(Math.random() * 90 + 10) + makeUpperAlphaId(4) + makeNumericId(6) + makeNumericId(8)
  }
  function getRandomBankName(){
    var bankNames = [
      "ABU DHABI COMMERCIAL BANK",
      "ALMORA URBAN CO-OPERATIVE BANK LTD.",
      "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED.",
      "AXIS BANK",
      "BANK INTERNASIONAL INDONESIA",
      "BANK OF AMERICA",
      "BANK OF BAHRAIN AND KUWAIT",
      "BANK OF BARODA",
      "BANK OF CEYLON",
      "BANK OF INDIA",
      "BANK OF MAHARASHTRA",
      "BANK OF TOKYO-MITSUBISHI UFJ LTD.",
      "BARCLAYS BANK PLC",
      "BASSEIN CATHOLIC CO-OP BANK LTD",
      "BHARATIYA MAHILA BANK LIMITED",
      "BNP PARIBAS",
      "CALYON BANK",
      "CANARA BANK",
      "CAPITAL LOCAL AREA BANK LTD.",
      "CATHOLIC SYRIAN BANK LTD.",
      "CENTRAL BANK OF INDIA",
      "CHASE UK BANK",
      "CHINATRUST COMMERCIAL BANK",
      "CITIBANK NA",
      "CITIZENCREDIT CO-OPERATIVE BANK LTD",
      "CITY UNION BANK LTD",
      "COMMONWEALTH BANK OF AUSTRALIA",
      "CORPORATION BANK",
      "CREDIT SUISSE AG",
      "DBS BANK LTD",
      "DEUTSCHE BANK",
      "DEUTSCHE SECURITIES INDIA PRIVATE LIMITED",
      "DEVELOPMENT CREDIT BANK LIMITED",
      "DICGC",
      "DUBAI INTERNATIONAL BANK",
      "FIRSTRAND BANK LIMITED",
      "HDFC BANK LTD",
      "HSBC",
      "ICICI BANK LTD",
      "IDBI BANK LTD",
      "IDRBT",
      "INDIAN BANK",
      "INDIAN OVERSEAS BANK",
      "INDUSIND BANK LTD",
      "INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED",
      "ING VYSYA BANK LTD",
      "JP MORGAN CHASE BANK",
      "MASHREQBANK PSC",
      "MIZUHO CORPORATE BANK LTD",
      "MONZO BANK",
      "NATIONAL AUSTRALIA BANK",
      "OMAN INTERNATIONAL BANK SAOG",
      "ORIENTAL BANK OF COMMERCE",
      "RABOBANK INTERNATIONAL (CCRB)",
      "RESERVE BANK OF INDIA",
      "SBERBANK",
      "SHINHAN BANK",
      "SOCIETE GENERALE",
      "STARLING BANK",
      "STANDARD CHARTERED BANK",
      "STATE BANK OF INDIA",
      "STATE BANK OF MAURITIUS LTD",
      "SUMITOMO MITSUI BANKING CORPORATION",
      "SYNDICATE BANK",
      "THE BANK OF NOVA SCOTIA",
      "THE COSMOS CO-OPERATIVE BANK LTD.",
      "THE DELHI STATE COOPERATIVE BANK LTD.",
      "THE FEDERAL BANK LTD",
      "THE ROYAL BANK OF SCOTLAND N.V",
      "THE TSB BANK LTD.",
      "TUMKUR GRAIN MERCHANTS COOPERATIVE BANK LTD.",
      "UBS AG",
      "UCO BANK",
      "WESTPAC BANKING CORPORATION",
      "METRO BANK",
      "YES BANK LTD",
      "IDFC First Bank"
  ];

  return  bankNames[Math.floor(Math.random() * bankNames.length)];
  }
  function generate1Payment(){

    var senderId = generateRandomID();
    //alert(senderId);
    var receiverId = generateRandomID();
    //alert(receiverId);
    var siban = generateRandomIBAN();
    var riban = generateRandomIBAN();
    var sbank = getRandomBankName();
    var rbank = getRandomBankName();
    //alert (siban + "|" + riban + "|" + sbank + "|" + rbank);
    setSenderId(senderId);
    setReceiverId(receiverId);
    setSenderIban(siban);
    setReceiverIban(riban);
    setSenderBankId(sbank);
    setReceiverBankId(rbank);
    setPaymentAmount("1000.00");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    setValueDate(today);

  }
   let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      generate1Payment();
      let res = await fetch("https://hayfvdlkql.execute-api.eu-west-2.amazonaws.com/v0/lambda", {
        headers: { "Access-Control-Allow-Origin": "*",
                 'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'},
        method: "POST",
        body: JSON.stringify({
          "senderId": senderId,
          "receiverId": receiverId,
          "senderIban": senderIban,
          "receiverIban": receiverIban,
          "senderBankId": senderBankId,
          "receiverBankId": receiverBankId,
          "paymentAmt": paymentAmt,
          "valueDate": valueDate,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
         alert("Payment generated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h2>Hi {user.username}</h2>
      <div>
      <form onSubmit={handleSubmit}>
  
    <label for="senderId" class="senderId">Sender ID: </label>
    <input type="text" className = "form-input" id="senderId" onChange={event => setSenderId(event.target.value)} value = {senderId} />
    <label for="receiverId" class="receiverId">Receiver ID: </label>
    <input type="text" className = "form-input" id="receiverId" onChange={event => setReceiverId(event.target.value)} value = {receiverId} />
    <label for="senderIban" class="senderIban">Sender IBAN: </label>
    <input type="text" className = "form-input" id="senderIban" onChange={event => setSenderIban(event.target.value)} value = {senderIban} />
    <label for="receiverIban" class="receiverIban">Receiver IBAN: </label>
    <input type="text" className = "form-input" id="receiverIban" onChange={event => setReceiverIban(event.target.value)} value = {receiverIban} />
    <label for="senderBankId" class="senderBankId">Sender Bank ID: </label>
    <input type="text" className = "form-input" id="senderBankId" onChange={event => setSenderBankId(event.target.value)} value = {senderBankId} />
    <label for="receiverBankId" class="receiverBankId">Receiver Bank ID: </label>
    <input type="text" className = "form-input" id="receiverBankId" onChange={event => setReceiverBankId(event.target.value)} value = {receiverBankId} />
    <label for="paymentAmt" class="paymentAmt">Payment Amount: </label>
    <input type="text" className = "form-input" id="paymentAmt"  step=".01" onChange={event => setPaymentAmount(event.target.value)} value = {paymentAmt}/>
    <label for="valueDate" class="valueDate">Value date: </label>
    <DatePicker  
              id="valueDate"  
              dateFormat="dd/MM/yyyy"  
              onChange={event => setValueDate(event.target.value)} value = {valueDate}
          />  
  <br></br>
  <button className = "genBtn" id="genBtn" type="submit">Generate Payment</button>
  <label for="chkGenPayments" class="chkGenPayments">Generate 50 random payments (for testing only) </label>
  <input type="checkbox" id="chkGenPayments" classname="genBtn"/>
        

</form>
</div>
<br></br>
<br></br>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
