/*jshint esversion: 6 */
var recordApp = new Vue({
  el: '#patientRecordsApp',
data: {
  patients: [],
  formpatient:{}
},
methods:{
  fetchPatients(){
    fetch('dummy.php')
    .then(response => response.json())
    .then(json => { recordApp.patients = json })
  },
  handleCreateRecord(event){
    this.patients.push(this.formPatient);
    this.formpatient = {
      firstName:'',
      lastName:'',
      dob:'',
      sexAtBirth:''
  }
}
},
handleSubmit(event){
  //fetch(url,{
  //method :'post',
  //data: this.formpatient
  //event.preventDefault();
  this.patients.push(this.formpatient);
  this.handleReset();
},

handleReset(){
  this.recordPatient={
 firstName:'',
 lastName:'',
 dob:'',
 sexAtBirth:''
  }
}
,
created(){
    this.handleReset();
    this.fetchPatients()
},

});
