import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZomatoService } from '../zomato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: any;
  latitude: any;
  longitude: any;
  locate: any;
  selectedCityName: string = "";
  cityName: string = "";

  constructor(
    private foodservice: ZomatoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cities = this.foodservice.cities;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.findPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  findPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.foodservice.getCoordinates(this.latitude, this.longitude).subscribe(
      data => {
        this.locate = data;
        this.goToDashboard('click', this.locate.location.city_name);
      },
      err => {
        this.router.navigate(['**']);
      }
    )
  }
 
  goToDashboard(e, cityName) {
    this.router.navigate(['/dashboard', cityName]);
  }

}
