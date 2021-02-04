<template>
  <div class="hello">
    
    <div class="container-fluid">
        <header>
            <div class="limiter">
                
            </div>
        </header>
        <div class="creditCardForm">
            <div class="heading text-center">
                <h1>Confirm Card</h1>
            </div>
            <div class="container formDiv m-6">
                <form v-on:submit.prevent="submitAll" class="mx-6  form-group">
                    <div class="owner form-group">
                        <div>
                            <label for="owner">Owner</label>
                            <input type="text" v-model="Owner" class="form-control" id="owner">
                        </div>
                        <div class="CVV">
                            <label for="cvv">CVV</label>
                            <input type="text" v-model="cvv" class="form-control" id="cvv">
                        </div>
                    </div>
                   
                    <div class="form-group" id="card-number-field">
                        <label for="cardNumber">Card Number</label>
                        <input type="number" v-model="cardNumbers" class="form-control" id="cardNumber">
                        <!-- <div v-if="!$v.cardNumbers.required" class="invalid-input">Input the card correctly</div> -->
                    </div>
                            <div>
                                    <label>Expiration Date</label>
                                    <!-- <input type="date"> -->
                            </div>
                        <div class="expireForm">
                            <div class="form-group">
                                
                                <select v-model="ExpMonth">
                                    <option value="01">January</option>
                                    <option value="02">February </option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select v-model.trim="ExpYear">
                                    <option value="16"> 2020</option>
                                    <option value="17"> 2023</option>
                                    <option value="18"> 2024</option>
                                    <option value="19"> 2025</option>
                                    <option value="20"> 2026</option>
                                    <option value="21"> 2027</option>
                                    <option value="21"> 2028</option>
                                    <option value="21"> 2029</option>
                                    <option value="21"> 2030</option>
                                </select>
                            </div>
                            <div class="image">
                                <img src="../assets/VISA.jpg" id="visa">
                                <img src="../assets/master.png" id="mastercard">
                                <img src="../assets/AME.jpg" id="amex">
                            </div>
                        </div>
                    <div class=" buttonForm form-group">
                        <button type="submit" class="btn btn-success">Confirm</button>
                    </div>
                </form>
            </div>
        </div>

 
    </div>
  </div>
</template>

<script>
import swtal from 'sweetalert'
// import {required} from 'vuelidate/lib/validators'
export default {
  name: 'cardValid',
    data: function(){
        return{

            myData:'incorrect number',
            cardNumbers: '',
            cvv: '',
            Owner:'',
            ExpMonth:'',
            ExpYear:'',
            atmCardName:{
                masterCard:['5'],
                VISA:['4'],
                AMEX:['3'],
                image:{visa:'../assets/VISA.jpg',
                        masterCard:'../assets/master.png',
                        amex:'../assets/AME.jpg'
                    }
            }


        }
    },
    // // validations:{
    // //     cardNumbers:{required}
    // },
    methods:{
        submitAll(){

            for(let atmCardNam in this.atmCardName){
                this.atmCardName[atmCardNam].forEach(element => {
                   if(element == this.cardNumbers.substring(0,1) && this.cardNumbers.length == 16){
                       //alert show
                       swtal({
                           title:"Congrats",
                           text:`This is Valid ${atmCardNam} Card.`,
                           icon: "success",
                           button: "Dismiss"
                       });
                   }else if(element == this.cardNumbers.substring(0,1) && this.cardNumbers.length == 15 ){
                       
                         swtal({
                           title:"Congrats",
                           text:`This is Valid ${atmCardNam} Card.`,
                           icon: "success",
                           button: "Dismiss"
                       });

                   }else if(element == this.cardNumbers.substring(0,1) && this.cardNumbers.length == 19 ){

                         swtal({
                           title:"Congrats",
                           text:`This is Valid ${atmCardNam} Card.`,
                           icon: "success",
                           button: "Dismiss"
                       });
                   }
                   
                });
            }
            //  alert('Data Submit')

            // this.$v.$touch();
            // if (this.$v.pendding || this.$v.$error) return;

            // alert('Data Submit')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.heading {
    color: rgb(226, 228, 226);
    }
.heading h1{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', Arial, sans-serif;
    font-weight: bold;
}
.image{
    display: flex;
}
.image img{
 height: 40px;
 border-radius: 3px;
}
.formDiv{
width: 50%;
background: rgb(160, 159, 159);
margin: auto;
border: 1px solid rgb(160, 160, 160);
border-radius: 4px;
 box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
}
.formDiv form{
    width: 90%;
    margin: auto;
    color: rgb(2, 0, 7);
    font-size: bolder;
}
.formDiv form label{
    font-size: 17px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
.owner{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
#owner {
    width: 140%;
}
#cvv{
    width: 100%;
}
#card-number-field{
    width: 100%;
}
.expireForm{
    justify-content: space-between;
    display: flex;
    
} 
.expireForm select{
    height: 40px;
    border-radius: 4px;
    background: rgb(106, 107, 107);
    color: rgb(231, 228, 228);
} 
.buttonForm button{
 width: 100%;
} 
.creditCardForm{
    margin: 80px;
}
@media screen and (max-width:913px) {
    .image{
        display: inline;
    }
    .expireForm{
        display: inline;
    }
}








/*masterCard:['^5[1-5][0-9]{14}$'],
                 VISA:['^4[0-9]{12}(?:[0-9]{3})?$'],
                 AMEX:['^3[47][0-9]{13}$'],
                 image:{visa:'../assets/VISA.jpg',
                         masterCard:'../assets/master.png',
                         amex:'../assets/AME.jpg'
                     }*/
</style>





