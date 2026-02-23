import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../services/activity.service';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-activity-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  activity: Activity = {
    id: 0,
    title: '',
    description: '',
    daynumber: 1,
    category: '',
    address: '',
    openingHours: '',
    visitorder: 1
  };

  guideId!: number;
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService
  ) {
    // Always read guideId directly
    this.guideId = Number(this.route.snapshot.paramMap.get('guideId'));

    // Check if editing
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEdit = true;
      this.activityService.getById(id).subscribe((a: Activity) => this.activity = a);
    }
  }

  save() {
    if (this.isEdit) {
      this.activityService.update(this.activity.id, this.activity, 1).subscribe(() => {
        this.router.navigate(['/guides', this.guideId]);
      });
    } else {
      this.activityService.create(this.guideId, this.activity, 1).subscribe(() => {
        this.router.navigate(['/guides', this.guideId]);
      });
    }
  }
}
