import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';



import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGuard } from './guards/auth.guard';
import { GlobalGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderpubComponent } from './components/headerpub/headerpub.component';
import { HeaderpriComponent } from './components/headerpri/headerpri.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import {  RouterModule,
          Routes,
          Router
        
        } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { PersonalInfoComponent } from './components/profile/personal-info/personal-info.component';
import { ContactInfoComponent } from './components/profile/contact-info/contact-info.component';
import { QualificationComponent } from './components/profile/qualification/qualification.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { EditComponent } from './components/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  
  { path: '',
    redirectTo: '/home/home-main',
    pathMatch: 'full'
  },
  { path: 'home',
    component: HomeComponent,
    canActivate: [GlobalGuard],
    children: [
      { path: '',
        redirectTo: 'home-main',
        pathMatch: 'full'
      },
      { path: 'home-main',
        component: HomeMainComponent
      },
      { path: 'aboutus',
        component: AboutusComponent
      },
      { path: 'login',
        component: LoginComponent
      },
    ]
  },
  
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '',
        redirectTo: 'skills',
        pathMatch: 'full'
      },
      { path: 'skills',
        component: SkillsComponent,
      },
      { path:'technology',
        component:TechnologyComponent
      },
      { path:'edit',
        component:EditComponent
      },
      { path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path:'',
            redirectTo:'personal-info',
            pathMatch:'full'
          },
          { path:'personal-info',
            component:PersonalInfoComponent
          },
          { path:'contact-info',
            component:ContactInfoComponent
          },
          { path:'qualification',
            component:QualificationComponent
          }
        ]
      },
    ],
  },

 
  
  { path: '**',
      component: NotfoundComponent
  },   
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderpubComponent,
    HeaderpriComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SkillsComponent,
    
    ProfileComponent,
    AboutusComponent,
    NotfoundComponent,
    HomeMainComponent,
    PersonalInfoComponent,
    ContactInfoComponent,
    QualificationComponent,
    TechnologyComponent,
    EditComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   
  constructor(private router: Router) {}
}
