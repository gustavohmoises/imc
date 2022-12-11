import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)
    this.showIMC()
  }

  async showIMC() {
    let classificacao: string = "";

    if (this.imc < 18.5) {
      classificacao = "MAGREZA";
    } else if (this.imc >= 18.5 && this.imc <= 24.9) {
      classificacao = "NORMAL";
    } else if (this.imc >= 25 && this.imc <= 29.9) {
      classificacao = "SOBREPESO";
    } else if (this.imc >= 30 && this.imc <= 39.9) {
      classificacao = "OBESIDADE";
    } else if (this.imc > 40) {
      classificacao = "OBESIDADE GRAVE";
    }

    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - ${classificacao}`,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }


}
