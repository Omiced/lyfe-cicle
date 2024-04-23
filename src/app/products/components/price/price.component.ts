import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  // se agrega el $ al final para saber que es un observable
  public interval$?: Subscription;

  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
  //cuando el componente es destruido se reinicia el ciclo de cambios
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent: ngOnChanges');
    console.log({ changes });
  }
  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit');
    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );
  }
}
