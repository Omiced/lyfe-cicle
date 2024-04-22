import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy');
  }
  //cuando el componente es destruido se reinicia el ciclo de cambios
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent: ngOnChanges');
    console.log({ changes });
  }
  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit');
  }
}
