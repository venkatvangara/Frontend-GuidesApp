import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuideService } from '../services/guide.service';
import { Guide } from '../models/guide';


@Component({
  selector: 'app-guide-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.css']
})
export class GuideFormComponent {

  guide: Guide = {
    id: 0,
    title: '',
    description: '',
    days: 1,
    season: '',
    activities: []
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guideService: GuideService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.isEdit = true;
      this.guideService.getById(id, 1).subscribe(g => this.guide = g);
    }
  }

  save() {
    if (this.isEdit) {
      this.guideService.update(this.guide.id, this.guide, 1).subscribe(() => {
        this.router.navigate(['/guides']);
      });
    } else {
      this.guideService.create(this.guide, 1).subscribe(() => {
        this.router.navigate(['/guides']);
      });
    }
  }
}
