import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carotest',
  templateUrl: './carotest.component.html',
  styleUrl: './carotest.component.css',
 
})
export class CarotestComponent implements OnInit {
  images: string[] = [];

  ngOnInit(): void {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }}
