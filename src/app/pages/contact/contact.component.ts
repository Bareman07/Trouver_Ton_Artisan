import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  artisan: any;
  messageSent = false;

  form = {
    nom: '',
    email: '',
    message: ''
  };

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getData().subscribe(data => {
      this.artisan = data.find((item: any) => item.type === 'artisan' && item.id === id);
    });
  }

  envoyerMessage() {
    const templateParams = {
      nom: this.form.nom,
      email: this.form.email,
      message: this.form.message,
      artisan: this.artisan?.nom
    };

    emailjs.send(
      'service_y8fd51m',     // À remplacer par ton Service ID (EmailJS Dashboard > Email Services)
      'template_bj92w4p',    // À remplacer par ton Template ID (EmailJS Dashboard > Email Templates)
      templateParams,    // Données dynamiques envoyées au template
      '3-qjWMi3tnVEP8CiI'    // À remplacer par ta clé publique (EmailJS Dashboard > Account/Integration)
    )
    .then((response: EmailJSResponseStatus) => {
      console.log('SUCCESS!', response.status, response.text);
      this.messageSent = true;
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });
  }
}
