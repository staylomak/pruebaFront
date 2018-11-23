import { Component, OnInit } from '@angular/core';
import { Sayayin } from '../../model/sayayin';
import { SayayinService } from '../../services/sayayin.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-sayayin',
  templateUrl: './list-sayayin.component.html',
  styles: []
})
export class ListSayayinComponent implements OnInit {
  sayayins: Sayayin[];

  constructor(private router: Router, private service: SayayinService) {}

  ngOnInit() {
    this.service.getSayayins().subscribe(data => (this.sayayins = data));
  }

  deleteSayayin(sayayin: Sayayin): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al sayayin ${sayayin.name}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteSayayin(sayayin.id).subscribe(data => {
          this.sayayins = this.sayayins.filter(c => c !== sayayin);
        });

        swal('Eliminado!', 'Se ha eliminado el cliente.', 'success');
        
      }
    });
  }

  editSayayin(sayayin: Sayayin): void {
   
    localStorage.removeItem('editSayayinId');
    localStorage.setItem('editSayayinId', sayayin.id.toString());
    this.router.navigate(['edit-sayayin']);
  }

  addSayayin(): void {
    this.router.navigate(['add-sayayin']);
  }
}