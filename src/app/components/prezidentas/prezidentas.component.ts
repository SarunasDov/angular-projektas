import {
  Component, EventEmitter,
  Input,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import {Prezidentas} from "../../models/prezidentas";

@Component({
  selector: 'app-prezidentas',
  templateUrl: './prezidentas.component.html',
  styleUrls: ['./prezidentas.component.scss']
})
export class PrezidentasComponent implements OnInit {
  // https://angular.io/api/core/Input
  @Input()
  public prezidentas?: Prezidentas;

  // https://angular.io/guide/inputs-outputs
  @Output()
  public onFavoriteSelected: EventEmitter<void>;

  constructor() {
    this.onFavoriteSelected = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

}
