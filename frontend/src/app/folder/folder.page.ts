import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  constructor(private activatedRoute: ActivatedRoute, private actionSheetController: ActionSheetController) { }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Planes',
        role: '/planes',
        icon: 'airplane',
        
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Business',
        icon: 'business',
        handler: () => {
          
        }
      },
       {
        text: 'History',
        icon: 'book',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Add Booking',
        icon: 'close',
        role: '',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}

  


