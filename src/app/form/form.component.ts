import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  selectedGender: string|undefined;
  name: string | undefined;
  gender: boolean | undefined;
  experience: number | undefined;
  experienceOptions = [...Array(20).keys()].map(i => i + 1);
  dob: Date | undefined;
  profession = {
    automationTester: false,
    manualTester: false
  }
  notes: string | undefined;
  resume: File | undefined;


  clearForm() {
    this.name = '';
    this.gender = false;
    this.experience = undefined;
    this.dob = undefined;
    this.profession = {automationTester: false, manualTester: false};
    this.notes = '';
    this.resume = undefined;
  }

  onGenderChange() {
    if (this.selectedGender === "male") {
      this.selectedGender = "male";
    } else if (this.selectedGender === "female") {
      this.selectedGender = "female";
    }
  }
  

  onFileChange(event:any) {
    this.resume = event.target.files[0];
  }

  

  onSubmit() {
    // do something with the form data
    console.log(this.name, this.gender, this.experience, this.dob, this.profession, this.notes, this.resume);
  }
}
