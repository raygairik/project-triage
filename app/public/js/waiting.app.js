/*jshint esversion: 6 */
var waitingApp = new Vue({

  el: '#patientWaitingApp',
data: {

  patients: [
  {
   "patientGuid":"123",
    "firstName":"John",
    "lastName":"Doe",
    "dob":"2012-09-01",
    "sexAtBirth":"M",
    "Priority":"High"
  },
  {
   "patientGuid":"124",
    "firstName":"Johnny",
    "lastName":"Doey",
    "dob":"2012-09-04",
    "sexAtBirth":"M",
    "Priority":"Low"
  },
  {
   "patientGuid":"125",
    "firstName":"hanny",
    "lastName":"Demy",
    "dob":"2012-09-05",
    "sexAtBirth":"F",
    "Priority":"High"
  }
  ]
},
methods:{
  fetchPatients(){
   fetch('https://randomuser.me/api')
    .then( response => response.json())
    .then( json => {waitingApp.patients=json()});


  }
},
created:function(){
    fetchPatients();



}
});
