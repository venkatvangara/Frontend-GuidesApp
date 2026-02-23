import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GuideService } from '../services/guide.service';
import { Observable } from 'rxjs';
import { Guide } from '../models/guide';

@Component({
  selector: 'app-guideslist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './guideslist.component.html',
  styleUrls: ['./guideslist.component.css']
})
export class GuideslistComponent {

  guides$: Observable<Guide[]>;

  constructor(
    private guideService: GuideService,
    private router: Router
  ) {
    const userId = 1;
    this.guides$ = this.guideService.getAll(userId);
  }

  goToGuide(id: number) {
    this.router.navigate(['/guides', id]);
  }

  editGuide(id: number, event: Event) {
    event.stopPropagation();
    this.router.navigate(['/guides/edit', id]);
  }

  deleteGuide(id: number, event: Event) {
    event.stopPropagation();

    if (confirm("Delete this guide?")) {
      this.guideService.delete(id, 1).subscribe(() => {
        this.guides$ = this.guideService.getAll(1);
      });
    }
  }
}
