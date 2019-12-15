import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZomatoService } from '../zomato.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  reviewList: any;
  list: any = [];
  cities: any;
  loading: boolean;
  selectedCityName: string ="";
  cityName: string ="";
  restoName: string = "";
  selectedRestoName;
  searchRestoList;

  constructor(
    private foodservice: ZomatoService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.cities = this.foodservice.cities;
    this.getRestoDetail();
  }

  goToDashboard(e, cityName) {
    this.router.navigate(['/dashboard', cityName]);
  }

  async getRestoDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    await this.foodservice.getRestaurantDetail(id).subscribe(
      data => {
        this.reviewList = data;
        this.spinner.hide();
      },
      error => {
        this.router.navigate(['**']);
        this.spinner.hide();
      }
    );
    this.foodservice.getReview(id).subscribe(
        data => {
          this.reviewList = Object.assign(data, this.reviewList);
          this.list.push(this.reviewList);
          this.spinner.hide();
        },
        error => {
          this.router.navigate(['**']);
          this.spinner.hide();
        }
      );
  }

}
