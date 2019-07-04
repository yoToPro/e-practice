import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFeaturedComponent } from './course-featured/course-featured.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseCotegoriesComponent } from './course-cotegories/course-cotegories.component';

@NgModule({
  declarations: [
    CourseFeaturedComponent, 
    CourseListComponent, 
    CourseDetailComponent, 
    CourseRecentComponent, 
    CourseCotegoriesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [
    CourseFeaturedComponent
  ]
})
export class CoursesModule { }
