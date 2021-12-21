import { Component, OnInit } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const checkCanOpenUrl = async () => {
      const { value } = await AppLauncher.canOpenUrl({ url: 'asdfdsfdsafdsafdsafadsfdsa' });

      alert('App installed? ' + value);
    };

    const openPortfolioPage = async () => {
      await AppLauncher.openUrl({ url: 'pomona://startpage' });
    };

    checkCanOpenUrl()
    openPortfolioPage()
  }

  title = 'canopenurl';
}
