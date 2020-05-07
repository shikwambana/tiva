import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../firebase.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  history: Array<any>;
  career: Array<any> = [
    {
      title: "Experience",
      info : []
    },
    {
      title: "Volunteering",
      info : []
    },
    {
      title: "Stack",
      info : []
    },
    {
      title: "Education",
      info : []
    }    
  ];
  expertise: Array<any> = [
    {
      title: "Azania Canvass",
      type: "",
      logo: "../../assets/azania-canvass.png",
      data: []
    },
    {
      title: "Software Engineering",
      type: "",
      logo: "../../assets/alphiecodes.png",
      data: []
    },
    {
      title: "Entrepreneurship",
      type: "",
      logo: "../../assets/UNSWERVE.png",
      data: []
    },
    {
      title: "AlphieSpeaks",
      type: "",
      logo: "../../assets/alphiespeaksblog.png",
      data: []
    }
  ];
  spotlight: Array<any> = [
    {
      title: 'Covid19Cases | Track the Pandemic',
      type: 'Web App',
      company: 'Unswerve',
      link: 'https://covid19cases.today'
    },
    {
      title: 'The History of Queen Modjadji',
      type: 'Article',
      company: 'Azania Canvass',
      link: 'http://www.azaniacanvass.co.za/'
    },
    {
      title: '2019 in 5 Minutes',
      type: 'Video',
      company: 'Azania Canvass',
      link: 'https://youtu.be/d4m6j_ziiBg'
    }
  ]
  socialNetworks = [
    {
      name: "GitHub",
      link: "https://github.com/shikwambana",
      icon: "../../assets/social/github.svg"
    },
    {
      name: "Unswerve",
      link: "http://unswerve.tech",
      icon: "../../assets/social/website.png"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alphie-shikwambana",
      icon: "../../assets/social/linkedin.svg"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/AlphieSpeaks",
      icon: "../../assets/social/twitter.svg"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/alphiespeaks",
      icon: "../../assets/social/instagram.svg"
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/alphiespeaks",
      icon: "../../assets/social/facebook.svg"
    }

  ]
  
  constructor(private fbService : FirebaseService) { }

  ngOnInit() {
    this.fetchSkills()
    this.fetchExpertise();
    console.log(this.career)
  }

  fetchSkills(){
    this.fbService.getSkills('skillsandhistory').subscribe((res: Array<any>) =>{
      console.log(res)

      let list = res.map(item =>{
        item['startDate'] = item['startDate'].toDate(); 
        item['endDate'] = item['endDate'].toDate(); 
        return item
      })
      console.log(list)

      for(var i = 0; i < this.career.length; i++){
        this.career[i]['info'] = list.filter(item =>{
          return this.career[i]['title'] == item['category']
        })
      }

      console.log(this.career)
    })
  }

  fetchExpertise(){
    this.fbService.getSkills('expertise').subscribe((res: Array<any>) =>{
      for(var i = 0; i < this.career.length; i++){
        this.expertise[i]['data'] = res.filter(item =>{
          return this.expertise[i]['title'] == item['expertise']
        })
      }

      console.log(this.expertise)
    })
  }

}
