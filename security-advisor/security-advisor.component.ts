import { Component, OnInit } from '@angular/core';
import { VantageShellService } from 'src/app/services/vantage-shell.service';
import { SecurityAdvisor, PasswordManager, WindowsHello } from '@lenovo/tan-client-bridge';

@Component({
  selector: 'app-security-advisor',
  templateUrl: './security-advisor.component.html',
  styleUrls: ['./security-advisor.component.css']
})
export class SecurityAdvisorComponent implements OnInit {

  securityAdvisor: SecurityAdvisor;
  password: PasswordManager;
  windowsHello: WindowsHello;

  constructor(vantageShellService: VantageShellService) {
    this.securityAdvisor = vantageShellService.getSecurityAdvisor();
    if (this.securityAdvisor) {
      this.password = this.securityAdvisor.passwordManager;
      this.windowsHello = this.securityAdvisor.windowsHello;
    }
  }

  ngOnInit() {
    this.securityAdvisor.refresh();
  }
}
