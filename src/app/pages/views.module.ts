// import { IMPORT_PREFIX } from '@angular/compiler-cli/src/ngcc/src/constants';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../material.module';
import { MatButtonModule,      
  MatMenuModule,
  MatCheckboxModule, 
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,           
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,
  MatTreeModule
 } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,      
    MatMenuModule,
    MatCheckboxModule, 
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,
    MatNativeDateModule,      
    MatRadioModule,         
    MatOptionModule,
    MaterialModule,
    MatTreeModule
  ],
  declarations: [
  SignupComponent,
  HomeComponent,
  StudentProfileComponent
  ],
  exports: [
  
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }