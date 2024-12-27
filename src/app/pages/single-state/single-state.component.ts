import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single-state',
  imports: [],
  templateUrl: './single-state.component.html',
  styleUrl: './single-state.component.scss'
})
export class SingleStateComponent {
  constructor(private activated:ActivatedRoute,public api:ApiService){}



  data:any;
    ngOnInit()
    {
        let id= this.activated.snapshot.paramMap.get('id');
        this.data= this.api.getstate(Number(id));
    }
  }

