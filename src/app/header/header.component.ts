import { FormComponent } from '../form/form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header.service'
import { Header } from '../header';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(private obj: NgbModal, private HeaderService: HeaderService){
}
openModal(){
  const modalRef=this.obj.open(FormComponent,{ centered: true});
}

  headers: Header[] = [];
ngOnInit(): void {
  this.HeaderService.getUsers().subscribe((data: Header[]) => {
    console.log(data);
    this.headers = data;
  });
}
}




