import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from './routercomponent/category/category.component';
import { HomeComponent } from './routercomponent/home/home.component';
import { UserrouterComponent } from './routercomponent/user/user.component';
import { UsersrouterComponent } from './routercomponent/users/users.component';

import { EditUserComponent } from './routercomponent/edit-user/edit-user.component';
import { PageNotFoundComponent } from './routercomponent/page-not-found/page-not-found.component';
import { AuthGuardServices } from "./services/guards/auth-guard.services";
import { DeactivateGuardServicer } from "./services/guards/deactivate-guard.services";
import { UserResolver } from "./services/resolver/user-resolver.services";
import { TemplateFormComponent } from "./form/template-form/template-form.component";
import { ReactiveFormComponent } from "./form/reactive-form/reactive-form.component";
import { FillterPipesComponent } from "./pipe/fillter-pipes/fillter-pipes.component";
import { PostComponent } from "./http/post/post.component";
import { AuthComponent } from "./auth/auth.component";



const appRoutes:Routes=[
    {path:'',component:HomeComponent,data:{page:1,search:'kushal'}},//localhost:4200   //data pass static data in angular
    {path:'users',component:UsersrouterComponent,
  
    canActivateChild:[AuthGuardServices],   // allow parent but not child
    // canActivate:[AuthGuardServices],  //parent guard 
    children:[
      {path:':id/:name',component:UserrouterComponent},
      {path:':id/:name/edit',component:EditUserComponent,
       canDeactivate:[DeactivateGuardServicer],
       resolve:{user:UserResolver},   //implement resolve service name here so you get dynamic data
      },
    ]},
    {path:'category',component:CategoryComponent},
    {path:'form',component:TemplateFormComponent},
    {path:'reactive-form',component:ReactiveFormComponent},
    {path:'pipe',component:FillterPipesComponent},
    {path:'post',component:PostComponent},
    {path:'auth',component:AuthComponent},
    {path:'not-found',component:PageNotFoundComponent},           
    {path:'**',redirectTo:'not-found'},//does not matach anything and add this line at the end
  ]

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{                

}



