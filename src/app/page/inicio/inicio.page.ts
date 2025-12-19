import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonImg,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonCard, 
    IonCardContent, 
    IonAvatar, 
    IonImg, 
    IonMenu, 
    IonList, 
    IonItem, 
    IonLabel,
    IonButtons,
    IonMenuButton,
    RouterLink
  ],
})
export class InicioPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}