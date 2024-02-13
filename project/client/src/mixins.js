// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/jason;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
    methods: {
        async $api(url, data) {
            return (await axios ({
                method: 'post',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        $base64(file) {
            return new Promise(resolve => {
              var a = new FileReader();
              a.onload = e => resolve(e.target.result);
              a.readAsDataURL(file);
            });
          },
         $currencyFormat(value, format = '#,###') {
            if (value == 0 || value == null) return 0;
      
            var currency = format.substring(0, 1);
            if (currency === '$' || currency === '₩') {     //==는 Equal Operator이고,  ===는 Strict Equal Operator이다.  앞은 비교연산자이고 뒤는 엄격한 
              format = format.substring(1, format.length);   //비교연산자이다.  //앞에 $ 또는 \가 있으면 제거하라는 코드입니다. format 의 값은 0이된다.
            } else {
              currency = '';                                              //$, \기호가 없으면 currency 변수에 null이 저장된다. 
            }
      
            var groupingSeparator = ",";
            var maxFractionDigits = 0;
            var decimalSeparator = ".";
            if (format.indexOf(".") == -1) {
              groupingSeparator = ",";
            } else {
              if (format.indexOf(",") < format.indexOf(".")) {
                groupingSeparator = ",";
                decimalSeparator = ".";
                maxFractionDigits = format.length - format.indexOf(".") - 1;
              } else {
                groupingSeparator = ".";
                decimalSeparator = ",";
                maxFractionDigits = format.length - format.indexOf(",") - 1;
              }
            }
      
            var prefix = "";
            var d = "";
            // v = String(parseFloat(value).toFixed(maxFractionDigits));
      
            var dec = 1;
            for (var i = 0; i < maxFractionDigits; i++) {
              dec = dec * 10;
            }
      
            var v = String(Math.round(parseFloat(value) * dec) / dec);
      
            if (v.indexOf("-") > -1) {
              prefix = "-";
              v = v.substring(1);
            }
      
            if (maxFractionDigits > 0 && format.substring(format.length - 1, format.length) == '0') {
              v = String(parseFloat(v).toFixed(maxFractionDigits));
            }
      
            if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
              d = v.substring(v.indexOf("."));
              d = d.replace(".", decimalSeparator);
              v = v.substring(0, v.indexOf("."));
            }
            var regExp = /\D/g;
            v = v.replace(regExp, "");
            var r = /(\d+)(\d{3})/;
            while (r.test(v)) {
              v = v.replace(r, '$1' + groupingSeparator + '$2');
            }
      
            return prefix + currency + String(v) + String(d);
           }
        }
              }
        
    
    
    