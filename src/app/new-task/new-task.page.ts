import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  selectedDays: string[] = [];
  locationRange: number = 0;
  taskTitle: string = '';
  specificDateTime: Date | null = null;
  repeatWeekly: boolean = false;
  locationBased: boolean = false;
  selectedColor: string = '';
  selectedIcon: string = '';
  repeatTime: number = 0;
  icons: string[] = [
    'checkmark-circle',
    'alarm',
    'star',
    'heart',
    'rocket',
    'home',
    'settings',
    'person',
    'trash',
    'folder',
    'search',
    'checkmark',
    'happy',
    'sad',
    'camera',
    'chatbubbles',
    'information-circle',
    'arrow-back',
    'arrow-forward',
    'fitness',
    'barbell',
    'bicycle',
    'walk',
    'body',
    'water',
    'medkit',
    'heart',
    'medal',
    'flame',
    'football'
  ];

  constructor(private storage: Storage) { 
  }

  async ngOnInit() {
    await this.storage.create();
  }

  repeatSelect() {
    this.repeatWeekly = this.selectedDays.length > 0;
    this.locationBased = this.selectedDays.includes('location');
  }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
    console.log("Icono seleccionado:", this.selectedIcon);
  }

  saveTaskTitle() {
    console.log("Título guardado:", this.taskTitle); 
    this.storage.set("Title", this.taskTitle);
  }

}
