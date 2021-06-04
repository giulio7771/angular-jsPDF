import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-proto';

  funcionario:any = {
    "nome": "gatuno",
    "profissao": "Arquiteto de Software"
  }
  pdf = new jsPDF();
  

  imprimirCracha() {
    console.log("imprimir cracha");
    const scale = 2.2;
    console.log("imprimindo");
    var img = new Image()
    img.src = "../assets/cracha.png";
    const pdf = new jsPDF();
    pdf.addImage(img, 'png', 0, 0, (54 * scale), (85.6 * scale));
    pdf.setFontSize(10);
    pdf.text("Gatuno da Silva", 18, 103);
    pdf.text("Nr-18", 68, 75);
    pdf.setFontSize(9);
    pdf.text("12/02/2022", 82, 75);
    pdf.save("cracha.pdf");
  }

  imprimirCracha7() {
    var img = new Image()
    img.src = "../assets/card-paint2.png";
    this.pdf.addImage(img, 'png', 20, 20, 200, 130);
    this.pdf.text("gatuno", 22, 120);
    this.pdf.save();

  }


  imprimirCracha3() {
    const pdf = new jsPDF();
    var img = new Image()
    img.src = "../assets/card-paint.png";
    pdf.addImage(img, 'png', 10, 78, 12, 15)
    pdf.save();

  }

  imprimirCracha2() {
    console.log("gatuno imprime cracha");
    
    const element: HTMLElement | null = document.getElementById("cracha");
    html2canvas(element as HTMLElement).then(canvas => {
      const html = canvas.toDataURL("image/png");
      
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.height;
      const position = 0;
      //this.pdf.addImage(html, 'PNG', 0, position, imgWidth, imgHeight);
      const pdf2 = new jsPDF();
      pdf2.addImage(html, 'PNG', 0, position, 100, 100);

      pdf2.save("a.pdf");
    });
    //this.pdf.save("cracha.pdf");

    /*
    doc.text("Hello world!", 20, 10);
    doc.save("a4.pdf");
    */
  }

}
