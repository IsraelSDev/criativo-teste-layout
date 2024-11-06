import { Component, Input } from '@angular/core'
import { BillboardModel } from '../../custom-layout-box/custom-layout-box.component';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
  standalone: true
})
export class BillboardComponent {

  @Input() obj: BillboardModel = {    
    imageUrl: '',
    logoUrl: '',
    textoCriativo: 'Texto do criativo aqui, dentro deste espaço, com até 68 caracteres.',
    cta: 'Acesse agora',
    corP: '#fc560c',
    corS: '#50201A'
  };
}
