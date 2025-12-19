import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
  IonImg,
  IonBackButton,
  IonButtons,
  IonInput
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  schoolOutline, 
  calendarOutline, 
  bookOutline, 
  sendOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonAvatar,
    IonImg,
    IonBackButton,
    IonButtons,
    IonInput
  ],
})
export class ContactosPage implements OnInit {
  constructor() { 
    addIcons({
      'school-outline': schoolOutline,
      'calendar-outline': calendarOutline,
      'book-outline': bookOutline,
      'send-outline': sendOutline
    });
  }

  ngOnInit() {
  }
}