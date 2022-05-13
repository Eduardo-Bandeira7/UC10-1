import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new User()
  mensagem = ""

  onSubmit(){
    this.loginService.login(this.loginModel).subscribe((Response)=>{
      this.router.navigateByUrl('')
    }, (respostaErro) =>{
      this.mensagem = respostaErro.error
      console.log(this.mensagem)
      
    })
  }
}

let email = document.getElementById("campo-email")

let password = document.getElementById("campo-senha")

function enviarLogin() {
    let emailDigitado = email
    let senhaDigitada = password;
    console.log('emailDigitado' + 'senhaDigitada')
}