import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/accounts/patients.service';
import { AppError } from 'src/common/app-error';
import { BadInput } from 'src/common/bad-input';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: any[];

  constructor(private service: PatientsService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(patients => this.patients = patients);
  }

  createPatient(input: HTMLInputElement) {
    let patient = { name: input.value };
    this.patients.splice(0, 0, patient);

    input.value = '';

    this.service.create(patient)
      .subscribe(
        newPatient => {
          patient['id'] = newPatient.id;
        },
        (error: AppError) => {
          this.patients.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePatient(patient) {
    this.service.update(patient)
      .subscribe(
        updatedPatient => {
          console.log(updatedPatient);
        });
  }

  deletePatient(patient) {
    this.service.delete(patient.id);
  }
}