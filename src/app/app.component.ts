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
