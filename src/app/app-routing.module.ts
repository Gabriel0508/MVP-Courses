import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./features/landing-page/landing-page/landing-page.component";
import { AllCoursesComponent } from "./features/courses/all-courses/all-courses.component";
import { LoginComponent } from "./features/authentication/login/login.component";
import { RegisterComponent } from "./features/authentication/register/register.component";
import { CourseDetailsComponent } from "./features/courses/course-details/course-details.component";
import { CreateCourseComponent } from "./features/course-creation/create-course/create-course.component";
import { CommonModule } from "@angular/common";
import { LandingPageModule } from "./features/landing-page/landing-page.module";
import { CoursesModule } from "./features/courses/courses.module";
import { AuthenticationModule } from "./features/authentication/authentication.module";
import { CourseCreationModule } from './features/course-creation/course-creation.module';

const routes: Routes = [
    { path: '',  component: LandingPageComponent},
    { path: 'courses', component: AllCoursesComponent },
    { path: 'courses/:id', component: CourseDetailsComponent },
    { path: 'courses/:url', component: CourseDetailsComponent },
    { path: 'create-course', component: CreateCourseComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        LandingPageModule,
        CoursesModule,
        AuthenticationModule,
        CourseCreationModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }