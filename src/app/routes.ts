import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ApplicationConfirmationComponent } from './application-confirmation/application-confirmation.component';  // import the new component
import { AboutComponent } from './about/about.component';  // Import AboutComponent
import { ContactComponent } from './contact/contact.component';  // Import AboutComponent
import { TermsComponent } from './terms/terms.component';  // Import AboutComponent
import { ConditionsComponent } from './conditions/conditions.component';  // Import AboutComponent

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
        title: 'Detail page'
    },
    {
        path: 'application-confirmation', // add route for the confirmation page
        component: ApplicationConfirmationComponent,
        title: 'Application Confirmation'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Us'
    },
    {
        path: 'terms',
        component: TermsComponent,
        title: 'Terms of Service'
    },
    {
        path: 'conditions',
        component: ConditionsComponent,
        title: 'Privacy Policy'
    },
];

export default routeConfig;
