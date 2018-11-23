import { Component, OnInit } from '@angular/core';
import { Sayayin } from '../../model/sayayin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SayayinService } from '../../services//sayayin.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-sayayin',
  templateUrl: './edit-sayayin.component.html',
  styles: []
})
export class EditSayayinComponent implements OnInit {

  sayayin: Sayayin;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: SayayinService) { }

  ngOnInit() {

    const sayayinId = localStorage.getItem('editSayayinId');

    if ( !sayayinId ) {
      alert('Acción invalida');
      this.router.navigate(['list-sayayin']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

    this.service.getSayayin(+sayayinId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateSayayin(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-sayayin']);
        swal({
          position: 'top',
          type: 'success',
          title: `Sayayin modificado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}