import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() is_full?: boolean = false;

  notifications: Notification[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  isActive: boolean = false;
  routerObserver: Subscription;
  username: string;

  @HostListener('document:keydown.f10', ['$event'])
  navigateToUpl(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.router.navigateByUrl('/upl');
  }

  @HostListener('document:keydown.f1', ['$event'])
  navigateToPos(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.router.navigateByUrl('/pos');
  }

  ngOnInit() {
    
  }

}
