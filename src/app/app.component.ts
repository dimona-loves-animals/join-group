import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  minAge = 18;
  showForm: boolean = false;
  form_completed: boolean = false;
  birthDate: string | number | Date | null = null;
  agreeTerms: any;
  age_is_wrong: boolean = false;

  license: string = 'ההצטרפות לקבוצת הוואטסאפ מוגבלת לגיל ' +
    this.minAge +
    ' ומעלה';

  showLicense() {
    alert(this.license);
  }

  join() {
    if (this.showForm) {
      if (!this.birthDate) {
        return;
      }
      const ageDifMs = Date.now() - new Date(this.birthDate).getTime();
      const ageDate = new Date(ageDifMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age < this.minAge) {
        this.age_is_wrong = true;
      }
      this.form_completed = true;
    }
    this.showForm = true;
  }

  disabled() {
    if (!this.showForm) {
      return false;
    }

    return !(this.birthDate && this.agreeTerms);

  }

}
