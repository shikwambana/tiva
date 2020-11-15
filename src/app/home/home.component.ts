import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loader: boolean = false;
  history: Array<any>;
  career: Array<any> = [
    {
      title: "Stack",
      info : []
    },
    {
      title: "Experience",
      info : []
    },
    {
      title: "Volunteering",
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
      link: "http://www.azaniacanvas.co.za/",
      type: "",
      logo: "../../assets/azania-canvass.png",
      data: []
    },
    {
      title: "Software Engineering",
      link: "http://www.alphiecodes.xyz",
      type: "",
      logo: "../../assets/alphiecodes.png",
      data: []
    },
    {
      title: "Entrepreneurship",
      link: "http://unswerve.tech",
      type: "",
      logo: "../../assets/UNSWERVE.png",
      data: []
    },
    {
      title: "AlphieSpeaks",
      link: "http://alphiespeaks.co.za",
      type: "",
      logo: "../../assets/alphiespeaksblog.png",
      data: []
    }
  ];
  spotlight: Array<any> = [
    {
      title: 'Dear Black Son',
      type: 'Open Letter',
      company: 'AlphieSpeaks',
      link: 'http://alphiespeaks.co.za/open-letter/'
    },
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
  tech = [
    {
      icon: "../../assets/tech/angular.svg",
      name: "Angular",
      link: ""
    },
    {
      icon: "../../assets/tech/docker.svg",
      name: "Docker",
      link: ""
    },
    {
      icon: "../../assets/tech/sass.svg",
      name: "Sass",
      link: ""
    },
    {
      icon: "../../assets/tech/html5.svg",
      name: "HTML5",
      link: ""
    },
    {
      icon: "../../assets/tech/azure.svg",
      name: "Azure",
      link: ""
    },
    {
      icon: "../../assets/tech/firebase.svg",
      name: "Firebase",
      link: ""
    },
    {
      icon: "../../assets/tech/github-square.svg",
      name: "GitHub",
      link: ""
    },
    {
      icon: "../../assets/tech/wordpress.svg",
      name: "WordPress",
      link: ""
    },
    {
      icon: "../../assets/tech/bitbucket.svg",
      name: "Bitbucket",
      link: ""
    },
    {
      icon: "../../assets/tech/cpanel.svg",
      name: "CPanel",
      link: ""
    },
    {
      icon: "../../assets/tech/js-square.svg",
      name: "JavaScript",
      link: ""
    },
    {
      icon: "../../assets/tech/trello.svg",
      name: "Trello",
      link: ""
    },
    {
      icon: "../../assets/tech/linux.svg",
      name: "Linux",
      link: ""
    },
    {
      icon: "../../assets/tech/sourcetree.svg",
      name: "Source Tree",
      link: ""
    },

  ]
  
  constructor(private fbService : FirebaseService) { }

  ngOnInit() {
    this.fetchSkills()
    this.fetchExpertise();
    console.log(this.career)
  }

  fetchSkills(){
    this.loader = true;
    this.fbService.getSkills('skillsandhistory').subscribe((res: Array<any>) =>{
      this.loader = false;
      console.log(res)

      let list = res.map(item =>{
        item['startDate'] = item['startDate'].toDate(); 
        item['endDate'] = item['endDate'].toDate(); 
        return item
      })
      // console.log(list)

      for(var i = 0; i < this.career.length; i++){
        this.career[i]['info'] = list.filter(item =>{
          return this.career[i]['title'] == item['category']
        })
      }

      console.log(this.career)
    }, err =>{
      console.log(err)
      this.loader = false;
      alert("Network Error. Try Reloading...")
    })
  }

  fetchExpertise(){
    this.loader = true;
    this.fbService.getSkills('expertise').subscribe((res: Array<any>) =>{
      for(var i = 0; i < this.career.length; i++){
        this.expertise[i]['data'] = res.filter(item =>{
          return this.expertise[i]['title'] == item['expertise']
        })
      }
      this.loader = false;

      // console.log(this.expertise)
    }, err =>{
      console.log(err)
      this.loader = false;
      alert("Network Error. Try Reloading...")
    })
  }

}
