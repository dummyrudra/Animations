import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ZippyComponent } from './zippy/zippy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-course', component: NewCourseFormComponent },
  { path: 'zippy', component: ZippyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
