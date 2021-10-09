import { LightningElement, track } from 'lwc';

import {loadStyle,loadScript} from 'lightning/platformResourceLoader';

import vjs from '@salesforce/resourceUrl/vjs';

export default class SampleCalendar extends LightningElement {
    
    @track weekView;
    @track monthView;
    @track app;

    connectedCallback(){
        loadStyle(this,vjs + '/calendar/css/style.css');
        loadScript(this, vjs + '/engine/js/engine.js').then(()=>{
            loadScript(this,vjs + '/calendar/js/calendar.js').then(()=>{

                this.app = new JSContainer('app', 'div');     
                
                this.weekView = new calendar.WeekView("wv");
                this.weekView.reset();
                this.app.addChild(this.weekView);
                this.weekView.on('dblclickcell',function (s,e){
                    let shrs = prompt('Number of hours:');
                    if(shrs){
                        let ce = {};
                        ce.title = 'New Event';
                        ce.description = 'Arbitrary event added';
                        ce.startDate =e.startDate;
                        let ms = parseFloat(shrs) * 60 * 60 * 1000 ;
                        let endDate = new Date(e.startDate.getTime() + ms);
                        ce.endDate = endDate;
                       s.addCalEvent(ce);
                    }

                });

                this.weekView.on('beforedropcell', (source, evt)=>{
                    
                });

                this.weekView.cellDecorator = function(ui){
                    if(ui.col > 4){
                        ui.setDisabled(true);
                    }
                }
                this.app.render(this.template.querySelector('.mycalendar'));

                this.app.render();

            });
        });
    }

}