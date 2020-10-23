import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../firebase.service";


export interface skillandHistory {
  category: string;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  website: string;
  company: string;
}

export interface expertise {
  title: string;
  logo: string;
  description: string;
  website: string;
  type: string;
  expertise: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  data: skillandHistory = {
    category: '',
    title: '',
    startDate: new Date,
    endDate: new Date,
    description: '',
    website: '',
    company: ''
  };

  info: expertise = {
    title: '',
    logo: '',
    description: '',
    website: '',
    type: '',
    expertise: ''
  }

  categories = ['Experience', 'Volunteering', 'Education', 'Stack'];
  expertise = ['Software Engineering', 'Entrepreneurship', 'AlphieSpeaks', 'Azania Canvass']
  constructor(private fbService: FirebaseService) { }

  ngOnInit() {
    console.log(this.data)
  }

  addData(collection?) {
    
    let dataToSave = {}

    if(collection){
      dataToSave = this.info
    }else{
      dataToSave = this.data
    }
    this.fbService.saveSkill(dataToSave, collection).then(res => {
      console.log(res);

      this.data = {
        category: '',
        title: '',
        startDate: new Date,
        endDate: new Date,
        description: '',
        website: '',
        company: ''
      };

      this.info = {
        title: '',
        logo: '',
        description: '',
        website: '',
        type: '',
        expertise: ''
      }

    }, err => {
      console.log(err)
    })
  }

}
