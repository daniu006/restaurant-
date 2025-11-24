import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
  IonImg,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonAvatar, IonImg, IonItem, IonLabel, IonIcon, IonButton, IonBackButton, IonButtons  ],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
