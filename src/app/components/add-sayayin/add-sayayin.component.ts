import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SayayinService } from '../../services/sayayin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-sayayin',
  templateUrl: './add-sayayin.component.html',
  styles: []
})
export class AddSayayinComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: SayayinService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
  }


  onSubmit() {
    console.log(this.addForm.value);
    this.service.createSayayin(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-sayayin']);
        swal({
          position: 'top',
          type: 'success',
          title: `Sayayin creado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
