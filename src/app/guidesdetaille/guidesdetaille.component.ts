import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GuideService } from '../services/guide.service';
import { Guide } from '../models/guide';

@Component({
  selector: 'app-guidesdetaille',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './guidesdetaille.component.html',
  styleUrls: ['./guidesdetaille.component.css']
})
export class GuidesdetailleComponent {

  guide!: Guide;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guideService: GuideService,
    private cdr: ChangeDetectorRef
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.guideService.getById(id, 2).subscribe({
      next: g => {
        console.log("Guide received from backend:", g);
        this.guide = g;
        this.cdr.detectChanges();   // ⭐ FORCE Angular to update DOM
      },
      error: err => {
        console.error("Error loading guide:", err);
      }
    });
  }

  editActivity(id: number) {
    this.router.navigate(['/activities/edit', id]);
  }

  deleteActivity(id: number) {
    if (confirm("Delete this activity?")) {
      // implement delete later
    }
  }
}
