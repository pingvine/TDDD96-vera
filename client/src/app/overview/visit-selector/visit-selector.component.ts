import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,} from '@angular/core';
import {EhrService} from '../../ehr.service';

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
  pulse: number;
  bt: number;
  temp: number;
  pain: number;
  weight: number;

  constructor(private ehrService: EhrService) {
  }

  closeSideNav() {
    this.closeVisitorSelector.emit(true);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.visit !== undefined) {
      this.name = this.visit.name;
      this.age = this.visit.age;
      this.personalId = this.visit.socialId;
      this.priority = this.visit.prio;
      this.team = this.visit.team;
    }
  }

  updateCompositionData() {
    const compositionData = {
      'ctx/language': 'sv',
      'ctx/territory': 'SI',

      //SpO2
      'journal_vera2020/pulsoximetri/ospecificerad_händelse/spo|numerator': this.spo2,

      //Andning
      'journal_vera2020/andning/ospecificerad_händelse/frekvens|magnitude': this.af,

      //Puls
      'journal_vera2020/puls_hjärtfrekvens/ospecificerad_händelse/frekvens|magnitude': this.pulse,

      //Blodtryck
      'journal_vera2020/blodtryck/ospecificerad_händelse/medelartärtryck|magnitude': this.bt,
      'journal_vera2020/blodtryck/ospecificerad_händelse/medelartärtryck|unit': "mm[Hg]",

      //Temperatur
      'journal_vera2020/kroppstemperatur/ospecificerad_händelse/temperatur|magnitude': this.temp,
      'journal_vera2020/kroppstemperatur/ospecificerad_händelse/temperatur|unit': "Cel",

      //Smärta
      'journal_vera2020/abbey_smärtskala/alla_fall/totala_smärtpoäng': this.pain,

      //Vikt
      'journal_vera2020/kroppsvikt/ospecificerad_händelse/vikt|magnitude': this.weight,
      'journal_vera2020/kroppsvikt/ospecificerad_händelse/vikt|unit': "kg"
    }
    console.log(this.visit.socialId);

    this.ehrService.getPnr(this.visit.socialId).subscribe((answer: any) => {
      this.ehrService.postCompositionData(compositionData, answer.parties[0].additionalInfo.ehrId)
    });


  }


}
