import {Component, Input, OnInit, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import { EhrService} from '../../ehr.service';

export interface Message {
  date: Date;
  user: string;
  info: string;
}
@Component({
  selector: 'app-visitselector',
  templateUrl: './visit-selector.component.html',
  styleUrls: ['./visit-selector.component.css']
})
export class VisitSelectorComponent implements OnInit, OnChanges {
  @Input() visit: any = '';
  @Output() closeVisitorSelector = new EventEmitter<boolean>();
  priority: string;
  name: string;
  age: number;
  personalId: string;
  team: string;
  sex: string;
  actions: Message[] = [
    {date: new Date(Date.now()), user: 'LäkBeatrice', info: 'Ny ordination Voltaren 75mg'}
  ];

  spo2: number;
  af: number;
  puls: number;
  bt: number;
  temp: number;
  pain: number;
  vikt: number;

  constructor(private ehrService : EhrService) {}

  closeSideNav() {
    this.closeVisitorSelector.emit(true);
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.visit !== undefined) {
      this.name = this.visit.name;
      this.age = this.visit.age;
      this.personalId = this.visit.social;
      this.priority = this.visit.prio;
      this.team = this.visit.team;
    }
  }
  updateSpo2(spo2: any){
      this.spo2 = spo2.target.value;
      console.log('spo2: ' + spo2.target.value);
  }

  updateAF(af: any){
      this.af = af.target.value;
      console.log('AF: ' +  af.target.value);
  }

  updatePuls(puls: any){
      this.puls = puls.target.value;
      console.log('Puls: ' +  puls.target.value);
  }

  updateBT(bt: any){
      this.bt = bt.target.value;
      console.log('BT: ' +  bt.target.value);
  }

  updateTemp(temp: any){
      this.temp = temp.target.value;
      console.log('Temperatur: ' +  temp.target.value);
  }

  updatePain(pain: any){
      this.pain = pain.target.value;
      console.log('Temperatur: ' +  pain.target.value);
  }

  updateVikt(vikt: any){
      this.vikt = vikt.target.value;
      console.log('Vikt: ' +  vikt.target.value);
  }
  updateCompositionData(){
    const compositionData = {
        'ctx/language': 'sv',
        'ctx/territory': 'SI',
        //SpO2
        'journal_vera2020/pulsoximetri/ospecificerad_händelse/spo|numerator': this.spo2,

        //Andning
        'journal_vera2020/andning/ospecificerad_händelse/frekvens|magnitude': this.af,

        //Puls
        'journal_vera2020/puls_hjärtfrekvens/ospecificerad_händelse/frekvens|magnitude': this.puls,

        //Blodtryck
        'journal_vera2020/blodtryck/ospecificerad_händelse/medelartärtryck|magnitude': this.bt,
        'journal_vera2020/blodtryck/ospecificerad_händelse/medelartärtryck|unit': "mm[Hg]",

        //Temperatur
        'journal_vera2020/kroppstemperatur/ospecificerad_händelse/temperatur|magnitude': this.temp,
        'journal_vera2020/kroppstemperatur/ospecificerad_händelse/temperatur|unit': "Cel",

        //Smärta
        'journal_vera2020/abbey_smärtskala/alla_fall/totala_smärtpoäng': this.pain,

        //Vikt
        'journal_vera2020/kroppsvikt/ospecificerad_händelse/vikt|magnitude': this.vikt,
        'journal_vera2020/kroppsvikt/ospecificerad_händelse/vikt|unit': "kg"
    }
    let ehrId = this.ehrService.getPnr("19970530").subscribe((answer: any) => {
        console.log('EhrId: ' + answer.parties[0].additionalInfo.ehrId)
    });

    console.log(this.ehrService.postCompositionData(compositionData, ehrId));
  }


}
