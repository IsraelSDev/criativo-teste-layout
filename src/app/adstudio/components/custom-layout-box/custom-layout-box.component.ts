import { Component } from '@angular/core'
import { BillboardComponent } from '../templates/billboard/billboard.component'
import { FormsModule } from '@angular/forms';

export type BillboardModel = {
  imageUrl: string;
  logoUrl: string;
  textoCriativo: string;
  cta: string;
  corP: string;
  corS: string;
}

@Component({
  selector: 'app-custom-layout-box',
  templateUrl: './custom-layout-box.component.html',
  styleUrls: ['./custom-layout-box.component.scss'],
  imports: [BillboardComponent, FormsModule],
  standalone: true
})


export class CustomLayoutBoxComponent {


  billboardObj: BillboardModel = {
    imageUrl: '',
    logoUrl: '',
    textoCriativo: 'Texto do criativo aqui, dentro deste espaço, com até 68 caracteres.',
    cta: 'Acesse agora',
    corP: '#fc560c',
    corS: '#50201A'
  };

  constructor() {}

  onSelectFile(event: any, id: number) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        if (id === 1) {
          this.billboardObj.imageUrl = event.target.result
        } else {
          this.billboardObj.logoUrl = event.target.result
        }
      }
    }
  }
}
