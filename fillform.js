chrome.storage.sync.get([
        'name',
        'email',
        'tel',
        'address',
        'zip',
        'city',
        'state',
        'card',
        'number',
        'cvv',
        'exp_month',
        'exp_year'
    ], 
    function(data) {
        function fillForm() {
          document.getElementById("order_billing_name").value = data.name;
          document.getElementById("order_email").value = data.email;
          document.getElementById("order_tl").value = data.tel;
          document.getElementById("bo").value = data.address;
          document.getElementById("order_billing_city").value = data.city;
          document.getElementById("order_billing_state").value = data.state;
          document.getElementById("order_billing_zip").value = data.zip;
          document.getElementById("credit_card_type").value = data.card;
          document.getElementById("cnb").value = data.number;
          document.getElementById("credit_card_year").value = data.exp_year;
          document.getElementById("credit_card_month").value = data.exp_month;
          document.getElementsByClassName("iCheck-helper")[1].click();
          document.getElementById("vval").value = data.cvv;
          document.getElementsByName("commit")[0].click();
        }

        fillForm();
        chrome.storage.sync.remove(['img_code', 'size']);
        setTimeout(function(){
          fillForm();
        }, 30000)
        return;
    }
);
