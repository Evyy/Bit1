//new
var bitCoinData;

window.onload = function(){
	closeLightBox();
	fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then(response => response.json())
    .then(data => bitCoinData = data );
}
function showLightBox(POP){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.eth.name + ": " + bitCoinData.rates.eth.unit + " " + bitCoinData.rates.eth.value + "<br>" + bitCoinData.rates.ltc.name + ": " + bitCoinData.rates.ltc.unit + " " + bitCoinData.rates.ltc.value + "<br>" +bitCoinData.rates.usd.name + ": " + bitCoinData.rates.usd.unit + " " + bitCoinData.rates.usd.value + "<br>" + bitCoinData.rates.cad.name + ": " + bitCoinData.rates.cad.unit + " " + bitCoinData.rates.cad.value + "<br>" + bitCoinData.rates.dot.name + ": " + bitCoinData.rates.dot.unit + " " + bitCoinData.rates.dot.value + "<br>" +  bitCoinData.rates.bnb.name + ": " + bitCoinData.rates.bnb.unit + " " + bitCoinData.rates.bnb.value + "<br>" + bitCoinData.rates.bch.name + ": " + bitCoinData.rates.bch.unit + " " + bitCoinData.rates.bch.value + "<br>" + bitCoinData.rates.eur.name + ": " + bitCoinData.rates.eur.unit + " " + bitCoinData.rates.eur.value + "<br>" + bitCoinData.rates.jpy.name + ": " + bitCoinData.rates.jpy.unit + " " + bitCoinData.rates.jpy.value + "<br>" +bitCoinData.rates.gbp.name + ": " + bitCoinData.rates.gbp.unit + " " + bitCoinData.rates.gbp.value;
}

function showLightBox1(BTC){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.btc.name + ": " + bitCoinData.rates.btc.unit + " " + bitCoinData.rates.btc.value;
}

function showLightBox2(ETH){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.eth.name + ": " + bitCoinData.rates.eth.unit + " " + bitCoinData.rates.eth.value;
}

function showLightBox3(LTC){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.ltc.name + ": " + bitCoinData.rates.ltc.unit + " " + bitCoinData.rates.ltc.value;
}

function showLightBox4(BCH){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.bch.name + ": " + bitCoinData.rates.bch.unit + " " + bitCoinData.rates.bch.value;
}

function showLightBox5(BNB){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.bnb.name + ": " + bitCoinData.rates.bnb.unit + " " + bitCoinData.rates.bnb.value;
}

function showLightBox6(EOS){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.eos.name + ": " + bitCoinData.rates.eos.unit + " " + bitCoinData.rates.eos.value;
}

function showLightBox7(XRP){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.xrp.name + ": " + bitCoinData.rates.xrp.unit + " " + bitCoinData.rates.xrp.value;
}

function showLightBox8(XLM){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.xlm.name + ": " + bitCoinData.rates.xlm.unit + " " + bitCoinData.rates.xlm.value;
}

function showLightBox9(LINK){
    document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.link.name + ": " + bitCoinData.rates.link.unit + " " + bitCoinData.rates.link.value;
}

function showLightBox10(DOT){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.dot.name + ": " +bitCoinData.rates.dot.unit + " " + bitCoinData.rates.dot.value;
}
function showLightBox11(YFI){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.yfi.name + ": " +bitCoinData.rates.yfi.unit + " " + bitCoinData.rates.yfi.value;
}
function showLightBox12(USD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.usd.name + ": " +bitCoinData.rates.usd.unit + " " + bitCoinData.rates.usd.value;
}
function showLightBox13(AED){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.aed.name + ": " +bitCoinData.rates.aed.unit + " " + bitCoinData.rates.aed.value;
}
function showLightBox14(ARS){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.ars.name + ": " +bitCoinData.rates.ars.unit + " " + bitCoinData.rates.ars.value;
}
function showLightBox15(AUD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.aud.name + ": " +bitCoinData.rates.aud.unit + " " + bitCoinData.rates.aud.value;
}
function showLightBox16(BDT){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.bdt.name + ": " +bitCoinData.rates.bdt.unit + " " + bitCoinData.rates.bdt.value;
}
function showLightBox17(BHD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.bhd.name + ": " +bitCoinData.rates.bhd.unit + " " + bitCoinData.rates.bhd.value;
}
function showLightBox18(BMD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.bmd.name + ": " +bitCoinData.rates.bmd.unit + " " + bitCoinData.rates.bmd.value;
}
function showLightBox19(BRL){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.brl.name + ": " +bitCoinData.rates.brl.unit + " " + bitCoinData.rates.brl.value;
}
function showLightBox20(CAD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.cad.name + ": " +bitCoinData.rates.cad.unit + " " + bitCoinData.rates.cad.value;
}
function showLightBox21(CHF){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.chf.name + ": " +bitCoinData.rates.chf.unit + " " + bitCoinData.rates.chf.value;
}
function showLightBox22(CLP){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.clp.name + ": " +bitCoinData.rates.clp.unit + " " + bitCoinData.rates.clp.value;
}
function showLightBox23(CNY){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.cny.name + ": " +bitCoinData.rates.cny.unit + " " + bitCoinData.rates.cny.value;
}
function showLightBox24(CZK){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.czk.name + ": " +bitCoinData.rates.czk.unit + " " + bitCoinData.rates.czk.value;
}
function showLightBox25(DKK){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.dkk.name + ": " + bitCoinData.rates.dkk.unit + " " + bitCoinData.rates.dkk.value;
}
function showLightBox26(EUR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.eur.name + ": " + bitCoinData.rates.eur.unit + " " + bitCoinData.rates.eur.value;
}
function showLightBox27(GBP){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.gbp.name + ": " + bitCoinData.rates.gbp.unit + " " + bitCoinData.rates.gbp.value;
}
function showLightBox28(HKD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.hkd.name + ": " +bitCoinData.rates.hkd.unit + " " + bitCoinData.rates.hkd.value;
}
function showLightBox29(HUF){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.huf.name + ": " +bitCoinData.rates.huf.unit + " " + bitCoinData.rates.huf.value;
}
function showLightBox30(IDR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.idr.name + ": " +bitCoinData.rates.idr.unit + " " + bitCoinData.rates.idr.value;
}
function showLightBox31(ILS){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.ils.name + ": " +bitCoinData.rates.ils.unit + " " + bitCoinData.rates.ils.value;
}
function showLightBox32(INR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.inr.name + ": " +bitCoinData.rates.inr.unit + " " + bitCoinData.rates.inr.value;
}
function showLightBox33(JPY){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.jpy.name + ": " +bitCoinData.rates.jpy.unit + " " + bitCoinData.rates.jpy.value;
}
function showLightBox34(KRW){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.krw.name + ": " +bitCoinData.rates.krw.unit + " " + bitCoinData.rates.krw.value;
}
function showLightBox35(KWD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.kwd.name + ": " +bitCoinData.rates.kwd.unit + " " + bitCoinData.rates.kwd.value;
}
function showLightBox36(LKR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.lkr.name + ": " +bitCoinData.rates.lkr.unit + " " + bitCoinData.rates.lkr.value;
}
function showLightBox37(MMK){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.mmk.name + ": " +bitCoinData.rates.mmk.unit + " " + bitCoinData.rates.mmk.value;
}
function showLightBox38(MXN){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.mxn.name + ": " +bitCoinData.rates.mxn.unit + " " + bitCoinData.rates.mxn.value;
}
function showLightBox39(MYR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.myr.name + ": " +bitCoinData.rates.myr.unit + " " + bitCoinData.rates.myr.value;
}
function showLightBox40(NGN){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.ngn.name + ": " +bitCoinData.rates.ngn.unit + " " + bitCoinData.rates.ngn.value;
}
function showLightBox41(NOK){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.nok.name + ": " +bitCoinData.rates.nok.unit + " " + bitCoinData.rates.nok.value;
}
function showLightBox42(NZD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.nzd.name + ": " +bitCoinData.rates.nzd.unit + " " + bitCoinData.rates.nzd.value;
}
function showLightBox43(PHP){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.php.name + ": " +bitCoinData.rates.php.unit + " " + bitCoinData.rates.php.value;
}
function showLightBox44(PKR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.pkr.name + ": " +bitCoinData.rates.pkr.unit + " " + bitCoinData.rates.pkr.value;
}
function showLightBox45(PLN){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.pln.name + ": " +bitCoinData.rates.pln.unit + " " + bitCoinData.rates.pln.value;
}
function showLightBox46(RUB){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.rub.name + ": " +bitCoinData.rates.rub.unit + " " + bitCoinData.rates.rub.value;
}
function showLightBox47(SAR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.sar.name + ": " +bitCoinData.rates.sar.unit + " " + bitCoinData.rates.sar.value;
}
function showLightBox48(SEK){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.sek.name + ": " +bitCoinData.rates.sek.unit + " " + bitCoinData.rates.sek.value;
}
function showLightBox49(SGD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.sgd.name + ": " +bitCoinData.rates.sgd.unit + " " + bitCoinData.rates.sgd.value;
}
function showLightBox50(THB){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.thb.name + ": " +bitCoinData.rates.thb.unit + " " + bitCoinData.rates.thb.value;
}
function showLightBox51(TRY){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.try.name + ": " +bitCoinData.rates.try.unit + " " + bitCoinData.rates.try.value;
}
function showLightBox52(TWD){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.twd.name + ": " +bitCoinData.rates.twd.unit + " " + bitCoinData.rates.twd.value;
}
function showLightBox53(UAH){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.uah.name + ": " +bitCoinData.rates.uah.unit + " " + bitCoinData.rates.uah.value;
}
function showLightBox54(VEF){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.vef.name + ": " +bitCoinData.rates.vef.unit + " " + bitCoinData.rates.vef.value;
}
function showLightBox55(VND){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.vnd.name + ": " +bitCoinData.rates.vnd.unit + " " + bitCoinData.rates.vnd.value;
}
function showLightBox56(ZAR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.zar.name + ": " +bitCoinData.rates.zar.unit + " " + bitCoinData.rates.zar.value;
}
function showLightBox57(XDR){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.xdr.name + ": " +bitCoinData.rates.xdr.unit + " " + bitCoinData.rates.xdr.value;
}
function showLightBox58(XAG){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.xag.name + ": " +bitCoinData.rates.xag.unit + " " + bitCoinData.rates.xag.value;
}
function showLightBox59(XAU){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.xau.name + ": " +bitCoinData.rates.xau.unit + " " + bitCoinData.rates.xau.value;
}
function showLightBox60(BITS){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.bits.name + ": " +bitCoinData.rates.bits.unit + " " + bitCoinData.rates.bits.value;
}
function showLightBox61(SATS){
      document.getElementById('lightBox').style.display="block";
	  document.getElementById('message').innerHTML = bitCoinData.rates.sats.name + ": " +bitCoinData.rates.sats.unit + " " + bitCoinData.rates.sats.value;
}
function closeLightBox(){
    document.getElementById("lightBox").style.display = "none";
 }

 //load the servies worker
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}



