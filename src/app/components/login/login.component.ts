import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    
    usuario: string = ''; //string = texto
    senha: string = 'teste'; // string = texto


    ngOnInit() {
        console.log(' INICIALIZADO ')
    }


    logar() {
        console.log('password:')
    }

}