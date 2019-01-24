import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'

import AdminLayout from '../components/Admin/Layout/AdminLayout.vue'

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import AdminDashboard from 'src/components/Admin/Views/Dashboard.vue'
import Computers from 'src/components/Admin/Views/Computers.vue'
import Actions from 'src/components/Admin/Views/Actions.vue'

// Examples pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: AdminDashboard
      },
      {
        path: 'computers',
        name: 'Computers',
        component: Computers
      },
      {
        path: 'actions',
        name: 'Actions',
        component: Actions
      }
    ]
  },
  {
    path: '/examples',
    component: DashboardLayout,
    redirect: '/examples/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
